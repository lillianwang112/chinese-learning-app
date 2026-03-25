const CACHE_NAME = 'chinese-learning-v5';

// Core shell assets to precache (manifest + icons)
const PRECACHE_ASSETS = [
  './manifest.json',
];

// External CDN scripts fetched with no-cors (opaque responses).
// Precaching these during install means subsequent visits serve them from
// SW cache rather than going to the network at all.
// Failures are silently ignored so a slow/unreachable CDN can't break install.
const CDN_PRECACHE_ASSETS = [
  'https://cdn.jsdelivr.net/npm/hanzi-writer@3.5/dist/hanzi-writer.min.js',
  'https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js',
  'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth-compat.js',
  'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore-compat.js',
  'https://www.gstatic.com/firebasejs/10.12.2/firebase-app-check-compat.js',
];

// Install: precache core shell assets, then best-effort cache CDN scripts
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Caching core assets');
        return cache.addAll(PRECACHE_ASSETS);
      })
      .then(async () => {
        // Best-effort: precache CDN scripts as opaque no-cors responses.
        // Opaque responses have status 0 but are executable as scripts.
        // This means second+ visits serve these from SW cache instantly.
        const cache = await caches.open(CACHE_NAME);
        await Promise.allSettled(
          CDN_PRECACHE_ASSETS.map(url =>
            fetch(new Request(url, { mode: 'no-cors' }))
              .then(res => cache.put(url, res))
              .catch(() => {})
          )
        );
      })
      .then(() => self.skipWaiting())
  );
});

// Activate: clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch: network-first for HTML navigation, cache-first for everything else.
//
// Why network-first for navigation?
//   Stale-while-revalidate serves cached HTML immediately then updates the cache
//   in the background — but GitHub Pages returns 304 Not Modified when the
//   browser sends conditional (ETag/If-None-Match) headers. A 304 is not a full
//   response and cannot be stored with cache.put(), so the cache silently stays
//   stale across every reload. Users on Safari get permanently stuck on an old
//   version of the app. Network-first ensures the latest index.html is always
//   served when online, with the cache as an offline-only fallback.
self.addEventListener('fetch', event => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;

  // Skip chrome-extension and non-http(s) requests
  const url = new URL(event.request.url);
  if (!url.protocol.startsWith('http')) return;

  // Network-first for HTML navigation requests
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then(networkResponse => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME)
              .then(cache => cache.put(event.request, responseClone));
          }
          return networkResponse;
        })
        .catch(() => {
          // Offline fallback: serve cached index.html
          return caches.match('./index.html');
        })
    );
    return;
  }

  // Cache-first with background revalidation for all other assets (JS, CSS, images, CDN).
  // For non-navigation requests the browser does NOT send conditional headers, so
  // the background fetch reliably returns a full 200 response that can be cached.
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        if (cachedResponse) {
          // Return cached version immediately, then update cache in background.
          // Intentionally NOT using event.waitUntil() here: waitUntil() on a fetch
          // event extends the SW event lifetime, and in Safari on macOS this causes
          // the browser's loading indicator to stay active while background fetches
          // are in flight. Fire-and-forget is correct here — the update is
          // best-effort and doesn't need to block anything.
          fetch(event.request)
            .then(networkResponse => {
              if (networkResponse && (networkResponse.status === 200 || networkResponse.type === 'opaque')) {
                caches.open(CACHE_NAME)
                  .then(cache => cache.put(event.request, networkResponse));
              }
            })
            .catch(() => {});
          return cachedResponse;
        }

        // Not in cache — fetch from network and cache it
        return fetch(event.request)
          .then(networkResponse => {
            if (!networkResponse) return networkResponse;

            // Cache both normal (status 200) and opaque CDN responses
            if (networkResponse.status === 200 || networkResponse.type === 'opaque') {
              const responseClone = networkResponse.clone();
              caches.open(CACHE_NAME)
                .then(cache => cache.put(event.request, responseClone));
            }

            return networkResponse;
          })
          .catch(() => {});
      })
  );
});
