import React from 'react';
import ReactDOM from 'react-dom/client';
import { createPortal } from 'react-dom';
import './index.css';

        // Lucide React Icon Components (inline)
        const BookOpen = ({size = 24, className = ''}) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
        );
        
        const Plus = ({size = 24, className = ''}) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
        );
        
        const Play = ({size = 24, className = ''}) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
        );
        
        const Edit2 = ({size = 24, className = ''}) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
            </svg>
        );
        
        const Trash2 = ({size = 24, className = ''}) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
        );
        
        const Download = ({size = 24, className = ''}) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
        );
        
        const Upload = ({size = 24, className = ''}) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="17 8 12 3 7 8"></polyline>
                <line x1="12" y1="3" x2="12" y2="15"></line>
            </svg>
        );
        
        const Volume2 = ({size = 24, className = ''}) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
            </svg>
        );
        
        const Check = ({size = 24, className = ''}) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
        );
        
        const X = ({size = 24, className = ''}) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        );
        
        const Brain = ({size = 24, className = ''}) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
                <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"></path>
                <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"></path>
            </svg>
        );
        
        const TrendingUp = ({size = 24, className = ''}) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                <polyline points="17 6 23 6 23 12"></polyline>
            </svg>
        );
        
        // User/Account icon components
        const UserIcon = ({size = 24, className = ''}) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
            </svg>
        );

        const LogOut = ({size = 24, className = ''}) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
        );

        const CloudIcon = ({size = 24, className = ''}) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
                <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
            </svg>
        );

        const RefreshCw = ({size = 24, className = ''}) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
                <polyline points="23 4 23 10 17 10"></polyline>
                <polyline points="1 20 1 14 7 14"></polyline>
                <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
            </svg>
        );

        const Mail = ({size = 24, className = ''}) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
        );

        const RotateCcw = ({size = 24, className = ''}) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
                <polyline points="1 4 1 10 7 10"></polyline>
                <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
            </svg>
        );

        const ChevronRight = ({size = 24, className = ''}) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
                <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
        );

        const MessageCircle = ({size = 24, className = ''}) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
        );

        const SendIcon = ({size = 24, className = ''}) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
        );

        // ==========================================
        // Firebase Configuration
        // ==========================================
        // To enable user accounts and cloud sync:
        // 1. Go to https://console.firebase.google.com
        // 2. Create a new project (or use existing)
        // 3. Enable Authentication > Email/Password and Google sign-in
        // 4. Create a Firestore Database (start in test mode, then add security rules)
        // 5. Go to Project Settings > General > Your apps > Web app
        // 6. Copy your config values below
        // ==========================================
        const FIREBASE_CONFIG = {
            apiKey: "AIzaSyB2iu-gzYJ7VHNZ9kMQxtF2GxJ5KeICyNA",
            authDomain: "chinese-learning-app-112.firebaseapp.com",
            projectId: "chinese-learning-app-112",
            storageBucket: "chinese-learning-app-112.firebasestorage.app",
            messagingSenderId: "385770707965",
            appId: "1:385770707965:web:6ffb8c2874e337ee2b9794"
        };

        // Initialize Firebase only if configured
        let firebaseApp = null;
        let firebaseAuth = null;
        let firebaseDb = null;
        const FIREBASE_ENABLED = FIREBASE_CONFIG.apiKey !== "YOUR_API_KEY";

        if (FIREBASE_ENABLED) {
            try {
                firebaseApp = firebase.initializeApp(FIREBASE_CONFIG);
                // App Check disabled - unenforced on server side
                // const appCheck = firebase.appCheck();
                // appCheck.activate('6LfeKIMsAAAAAKGpXiBISwSmkEiwmK3uLB55hsjo', true);
                firebaseAuth = firebase.auth();
                firebaseDb = firebase.firestore();
                // Enable offline persistence
                firebaseDb.enablePersistence({ synchronizeTabs: true }).catch(() => {});
                console.log('Firebase initialized successfully');
            } catch (e) {
                console.error('Firebase initialization failed:', e);
            }
        }

        // Cloud sync helpers
        const CloudSync = {
            async saveDecks(userId, decks) {
                if (!firebaseDb) return;
                const userDecksRef = firebaseDb.collection('users').doc(userId).collection('decks');

                // Get existing cloud deck IDs to detect deletions, and to preserve
                // kewen that exists in cloud but is absent locally (e.g. on a device
                // that never had kewen loaded into localStorage).
                const existingSnapshot = await userDecksRef.get();
                const localDeckIds = new Set(decks.map(d => d.id));

                // Build a map of cloud kewen by deck id
                const cloudKewenMap = {};
                for (const doc of existingSnapshot.docs) {
                    const data = doc.data();
                    if (data.kewen) cloudKewenMap[data.id] = data.kewen;
                }

                const batch = firebaseDb.batch();

                // Delete cloud decks that no longer exist locally
                for (const doc of existingSnapshot.docs) {
                    if (!localDeckIds.has(doc.id)) {
                        batch.delete(doc.ref);
                    }
                }

                // Save each deck as its own document.
                // If the local deck has no kewen but the cloud copy does, preserve
                // the cloud kewen — this prevents a kewen-less device from clobbering
                // kewen that was saved from another device.
                for (const deck of decks) {
                    const deckRef = userDecksRef.doc(deck.id);
                    const deckToSave = (!deck.kewen && cloudKewenMap[deck.id])
                        ? { ...deck, kewen: cloudKewenMap[deck.id] }
                        : deck;
                    batch.set(deckRef, {
                        ...deckToSave,
                        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
                    });
                }

                // Save deck order as an array of IDs in the user document
                const userRef = firebaseDb.collection('users').doc(userId);
                batch.set(userRef, { deckOrder: decks.map(d => d.id) }, { merge: true });

                await batch.commit();
            },

            async loadDecks(userId) {
                if (!firebaseDb) return null;
                const snapshot = await firebaseDb
                    .collection('users').doc(userId)
                    .collection('decks')
                    .get();

                if (snapshot.empty) return null;

                // Load deck order from user document
                const userDoc = await firebaseDb.collection('users').doc(userId).get();
                const deckOrder = userDoc.exists && userDoc.data().deckOrder ? userDoc.data().deckOrder : [];

                const decksMap = {};
                snapshot.docs.forEach(doc => {
                    const data = doc.data();
                    delete data.updatedAt;
                    decksMap[data.id] = data;
                });

                // Return decks in saved order, appending any new ones at the end
                const orderedDecks = [];
                for (const id of deckOrder) {
                    if (decksMap[id]) {
                        orderedDecks.push(decksMap[id]);
                        delete decksMap[id];
                    }
                }
                // Append any decks not in the order array
                for (const deck of Object.values(decksMap)) {
                    orderedDecks.push(deck);
                }
                return orderedDecks;
            },

            async deleteDeckFromCloud(userId, deckId) {
                if (!firebaseDb) return;
                await firebaseDb
                    .collection('users').doc(userId)
                    .collection('decks').doc(deckId)
                    .delete();
            },

            async saveProgress(userId, progressData) {
                if (!firebaseDb) return;
                await firebaseDb.collection('users').doc(userId).set({
                    learnProgress: progressData.learnProgress || {},
                    studyStreak: progressData.studyStreak || {},
                    bestMatchTimes: progressData.bestMatchTimes || {},
                    folders: progressData.folders || [],
                    lastStudied: progressData.lastStudied || {},
                    userSettings: progressData.userSettings || {},
                    studyGuides: progressData.studyGuides || [],
                    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
                });
            },

            async loadProgress(userId) {
                if (!firebaseDb) return null;
                const doc = await firebaseDb.collection('users').doc(userId).get();
                if (!doc.exists) return null;
                const data = doc.data();
                return {
                    learnProgress: data.learnProgress || {},
                    studyStreak: data.studyStreak || {},
                    bestMatchTimes: data.bestMatchTimes || {},
                    folders: data.folders || [],
                    lastStudied: data.lastStudied || {},
                    userSettings: data.userSettings || null,
                    studyGuides: data.studyGuides || [],
                };
            }
        };

        const { useState, useEffect, useRef } = React;


const ChineseLearningApp = () => {
  console.log('=== COMPONENT RENDERING ===');
  
  // Touch/swipe tracking (using ref to avoid re-renders that swallow click events on mobile)
  const touchRef = useRef(null);
  const [swipeDirection, setSwipeDirection] = useState(null);
  const cardRef = useRef(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;
  // Sample HSK 1 deck
  const sampleDeck = {
    id: 'hsk1-sample',
    name: 'HSK 1 Sample Vocabulary',
    cards: [
      { id: 1, chinese: '你好', pinyin: 'nǐ hǎo', english: 'hello', known: false, lastReviewed: null, difficulty: 0, easeFactor: 2.5, interval: 0, repetitions: 0 },
      { id: 2, chinese: '谢谢', pinyin: 'xièxie', english: 'thank you', known: false, lastReviewed: null, difficulty: 0, easeFactor: 2.5, interval: 0, repetitions: 0 },
      { id: 3, chinese: '再见', pinyin: 'zàijiàn', english: 'goodbye', known: false, lastReviewed: null, difficulty: 0, easeFactor: 2.5, interval: 0, repetitions: 0 },
      { id: 4, chinese: '对不起', pinyin: 'duìbuqǐ', english: 'sorry', known: false, lastReviewed: null, difficulty: 0, easeFactor: 2.5, interval: 0, repetitions: 0 },
      { id: 5, chinese: '我', pinyin: 'wǒ', english: 'I, me', known: false, lastReviewed: null, difficulty: 0, easeFactor: 2.5, interval: 0, repetitions: 0 },
      { id: 6, chinese: '你', pinyin: 'nǐ', english: 'you', known: false, lastReviewed: null, difficulty: 0, easeFactor: 2.5, interval: 0, repetitions: 0 },
      { id: 7, chinese: '他', pinyin: 'tā', english: 'he, him', known: false, lastReviewed: null, difficulty: 0, easeFactor: 2.5, interval: 0, repetitions: 0 },
      { id: 8, chinese: '是', pinyin: 'shì', english: 'to be', known: false, lastReviewed: null, difficulty: 0, easeFactor: 2.5, interval: 0, repetitions: 0 },
      { id: 9, chinese: '的', pinyin: 'de', english: 'possessive particle', known: false, lastReviewed: null, difficulty: 0, easeFactor: 2.5, interval: 0, repetitions: 0 },
      { id: 10, chinese: '吗', pinyin: 'ma', english: 'question particle', known: false, lastReviewed: null, difficulty: 0, easeFactor: 2.5, interval: 0, repetitions: 0 },
      { id: 11, chinese: '什么', pinyin: 'shénme', english: 'what', known: false, lastReviewed: null, difficulty: 0, easeFactor: 2.5, interval: 0, repetitions: 0 },
      { id: 12, chinese: '中国', pinyin: 'zhōngguó', english: 'China', known: false, lastReviewed: null, difficulty: 0, easeFactor: 2.5, interval: 0, repetitions: 0 },
      { id: 13, chinese: '爱', pinyin: 'ài', english: 'to love', known: false, lastReviewed: null, difficulty: 0, easeFactor: 2.5, interval: 0, repetitions: 0 },
      { id: 14, chinese: '吃', pinyin: 'chī', english: 'to eat', known: false, lastReviewed: null, difficulty: 0, easeFactor: 2.5, interval: 0, repetitions: 0 },
      { id: 15, chinese: '喝', pinyin: 'hē', english: 'to drink', known: false, lastReviewed: null, difficulty: 0, easeFactor: 2.5, interval: 0, repetitions: 0 },
    ]
  };

  // Load decks from localStorage or use sample deck
  const [decks, setDecks] = useState(() => {
    const saved = localStorage.getItem('chineseDecks');
    return saved ? JSON.parse(saved) : [sampleDeck];
  });

  const [currentView, setCurrentView] = useState('home'); // home, study, learn, create, edit, stats, match, test
  // Keep a ref so async cloud-sync callbacks can read the current view without stale closure issues
  const [selectedDeck, setSelectedDeck] = useState(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [swipeHistory, setSwipeHistory] = useState([]); // undo history for flashcard study
  const [newCard, setNewCard] = useState({ chinese: '', pinyin: '', english: '' });
  const [aiAutofillLoading, setAiAutofillLoading] = useState(false);
  const [bulkInput, setBulkInput] = useState('');
  const [bulkAutofillLoading, setBulkAutofillLoading] = useState(false);
  const [newDeckName, setNewDeckName] = useState('');
  // Text-to-deck (paste Chinese text, select words, auto-lookup)
  const [showTextImport, setShowTextImport] = useState(false);
  const [textImportInput, setTextImportInput] = useState('');
  const [textImportSubmitted, setTextImportSubmitted] = useState(false);
  const [selectedWords, setSelectedWords] = useState(new Map()); // word -> {pinyin, english, loading, error}
  const [textImportDeckName, setTextImportDeckName] = useState('');
  const [editingDeck, setEditingDeck] = useState(null);
  const [editingCardId, setEditingCardId] = useState(null); // Card currently being edited inline
  const [editCardValues, setEditCardValues] = useState({ chinese: '', pinyin: '', english: '' });
  const [bulkSelectedCards, setBulkSelectedCards] = useState(new Set()); // Set of card IDs for bulk delete
  const [bulkSelectMode, setBulkSelectMode] = useState(false);
  const [shuffledCards, setShuffledCards] = useState([]);

  // Learn Mode state
  const [learnMode, setLearnMode] = useState('multiple-choice'); // multiple-choice, fill-blank
  const [learnCards, setLearnCards] = useState([]);
  const [allLearnCards, setAllLearnCards] = useState([]); // All cards to learn
  const [currentLearnIndex, setCurrentLearnIndex] = useState(0);
  const [currentRound, setCurrentRound] = useState(1); // Current round (sets of 10)
  const [roundComplete, setRoundComplete] = useState(false); // Show round completion screen
  const [userAnswer, setUserAnswer] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);
  const [multipleChoiceOptions, setMultipleChoiceOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answerResult, setAnswerResult] = useState(null); // 'correct' or 'incorrect'
  const [cardProgress, setCardProgress] = useState({}); // Track which phase each card is in: {cardId: 'mc' or 'typing' or 'done'}

  // Persistent learn progress per deck
  const [learnProgress, setLearnProgress] = useState(() => {
    const saved = localStorage.getItem('learnProgress');
    return saved ? JSON.parse(saved) : {};
  });

  // Study streak tracking
  const [studyStreak, setStudyStreak] = useState(() => {
    const saved = localStorage.getItem('studyStreak');
    const parsed = saved ? JSON.parse(saved) : { currentStreak: 0, lastStudyDate: null, longestStreak: 0, studyDates: [] };
    // Ensure studyDates exists for older data
    if (!parsed.studyDates) parsed.studyDates = [];
    return parsed;
  });

  // Match game state
  const [matchCards, setMatchCards] = useState([]);
  const [selectedMatchCards, setSelectedMatchCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [matchStartTime, setMatchStartTime] = useState(null);
  const [matchEndTime, setMatchEndTime] = useState(null);
  const [matchLiveTime, setMatchLiveTime] = useState(0); // Live timer in tenths of seconds
  const [bestMatchTimes, setBestMatchTimes] = useState(() => {
    const saved = localStorage.getItem('bestMatchTimes');
    return saved ? JSON.parse(saved) : {};
  });

  // Practice test state
  const [testQuestions, setTestQuestions] = useState([]);
  const [currentTestIndex, setCurrentTestIndex] = useState(0);
  const [testAnswers, setTestAnswers] = useState([]);
  const [showTestResults, setShowTestResults] = useState(false);
  const [testConfig, setTestConfig] = useState({
    numQuestions: 20,
    trueFalse: false,
    multipleChoice: true,
    matching: false,
    written: false,
    typePinyin: false,
    answerWith: 'english' // 'english', 'chinese', 'both'
  });
  const [testSetupDeck, setTestSetupDeck] = useState(null); // Deck for test setup screen
  const [matchingPairs, setMatchingPairs] = useState([]); // For matching questions
  const [matchingSelected, setMatchingSelected] = useState(null); // Currently selected item in matching
  const [matchingMatched, setMatchingMatched] = useState(new Set()); // Matched pair IDs
  const [matchingWrong, setMatchingWrong] = useState(null); // Flash wrong animation

  // Character writing practice state
  const [writingCards, setWritingCards] = useState([]);
  const [currentWritingIndex, setCurrentWritingIndex] = useState(0);
  const canvasRef = useRef(null);

  // AI Chat state
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState('');
  const [chatLoading, setChatLoading] = useState(false);
  const [chatModel, setChatModel] = useState('google/gemini-2.5-flash');
  const [chatShowSettings, setChatShowSettings] = useState(false);
  const [puterReady, setPuterReady] = useState(false);
  const eduroamToastTimer = React.useRef(null);
  const showEduroamToast = () => {
    if (typeof window.__showEduroamToast === 'function') window.__showEduroamToast();
  };
  const [chatReturnView, setChatReturnView] = useState('home');
  const chatMessagesEndRef = useRef(null);
  const chatInputRef = useRef(null);

  // Inline example sentences panel
  const [examplePanelOpen, setExamplePanelOpen] = useState(false);
  const [exampleContent, setExampleContent] = useState('');
  const [exampleLoading, setExampleLoading] = useState(false);
  const [exampleWord, setExampleWord] = useState('');

  // AI deck generation state
  const [aiDeckTopic, setAiDeckTopic] = useState('');
  const [aiDeckLevel, setAiDeckLevel] = useState('intermediate');
  const [aiDeckCount, setAiDeckCount] = useState(20);
  const [aiDeckLoading, setAiDeckLoading] = useState(false);
  const [aiDeckPreview, setAiDeckPreview] = useState(null); // { name, cards: [{chinese, pinyin, english}] }
  const [aiDeckError, setAiDeckError] = useState('');
  const [aiAutoSelectLoading, setAiAutoSelectLoading] = useState(false);

  // Study Guides state
  const [studyGuides, setStudyGuides] = useState(() => {
    const saved = localStorage.getItem('studyGuides');
    return saved ? JSON.parse(saved) : [];
  });
  const [studyGuideLoading, setStudyGuideLoading] = useState(false);
  const [studyGuidePreview, setStudyGuidePreview] = useState(null);
  const [kewenEditDeck, setKewenEditDeck] = useState(null); // deck being edited for kewen
  const [kewenEditText, setKewenEditText] = useState('');
  const [kewenViewMode, setKewenViewMode] = useState('read'); // 'read' or 'edit'
  const [kewenSpeaking, setKewenSpeaking] = useState(false);
  const [kewenHighlights, setKewenHighlights] = useState({}); // { deckId: [{ start, end }] }
  const [kewenPopup, setKewenPopup] = useState(null); // { text, x, y, pinyin, english, loading, start, end, deckId }
  const [kewenPinyinOverlay, setKewenPinyinOverlay] = useState(() => {
    try { return JSON.parse(localStorage.getItem('kewenPinyinOverlay') || 'false'); } catch(e) { return false; }
  });
  const [kewenPinyinLoading, setKewenPinyinLoading] = useState(false);
  // Cache: char → pinyin string, built from CEDICT on first overlay toggle
  const kewenPinyinCacheRef = React.useRef({}); // { char: 'pīnyīn' }

  // Handwrite-Recognize modal state
  const [showHandwriteRecognize, setShowHandwriteRecognize] = useState(false);
  const [hwrResult, setHwrResult] = useState(null); // { chinese, pinyin, english }
  const [hwrLoading, setHwrLoading] = useState(false);
  const [hwrEraserOn, setHwrEraserOn] = useState(false);
  const [hwrTargetDeckId, setHwrTargetDeckId] = useState(''); // deck to add recognized word to
  const [hwrAddedToDeck, setHwrAddedToDeck] = useState(false); // flash confirmation
  const hwrCanvasRef = useRef(null);
  const hwrDrawCtrl = useRef({ isDrawing: false, isErasing: false, ctx: null, lastX: 0, lastY: 0, hasMoved: false, scaleX: 1, scaleY: 1, rect: null });
  const hwrTouchCleanupRef = useRef(null);

  // Post-create deck prompt state
  const [newDeckCreated, setNewDeckCreated] = useState(null); // holds the just-created deck object

  // AI Test Practice state
  const [aiTestMode, setAiTestMode] = useState(null); // 'xiaokao', 'quiz', 'essay'
  const [aiTestDecks, setAiTestDecks] = useState([]); // selected deck IDs
  const [aiTestQuestion, setAiTestQuestion] = useState(null);
  const [aiTestAnswer, setAiTestAnswer] = useState('');
  const [aiTestFeedback, setAiTestFeedback] = useState(null);
  const [aiTestLoading, setAiTestLoading] = useState(false);
  const [aiTestScore, setAiTestScore] = useState([]);
  const [aiTestQuestionNum, setAiTestQuestionNum] = useState(0);
  const [aiTestSetupStep, setAiTestSetupStep] = useState('selectMode');
  const [aiQuizType, setAiQuizType] = useState('mixed');
  const [aiTestInputMode, setAiTestInputMode] = useState('type'); // 'type' or 'handwrite'
  const [aiTestEraserOn, setAiTestEraserOn] = useState(false);

  // ── Sentence Writing Practice state ───────────────────────────────────────
  const [sentencePracticeDeck, setSentencePracticeDeck] = useState(null);
  const [sentenceQueue, setSentenceQueue] = useState([]); // current ordered queue
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [sentenceTranslations, setSentenceTranslations] = useState({}); // { sentence: englishTranslation }
  const [sentenceTransLoading, setSentenceTransLoading] = useState(false);
  const [sentenceRevealed, setSentenceRevealed] = useState(false);
  const [sentenceResumeModal, setSentenceResumeModal] = useState(null); // { deck } | null
  const [sentenceAnswer, setSentenceAnswer] = useState('');
  const [sentenceInputMode, setSentenceInputMode] = useState('type'); // 'type' | 'handwrite'
  const [sentenceEraserOn, setSentenceEraserOn] = useState(false);
  const sentenceCanvasRef = useRef(null);
  const sentenceBgCanvasRef = useRef(null);
  const sentenceDrawCtrl = useRef({ isDrawing: false, isErasing: false, ctx: null, lastX: 0, lastY: 0, hasMoved: false });
  const sentenceTouchCleanupRef = useRef(null);
  const aiTestCanvasRef = useRef(null);
  const aiTestBgCanvasRef = useRef(null);
  const aiTestDrawCtrl = useRef({ isDrawing: false, isErasing: false, ctx: null, lastX: 0, lastY: 0 });
  // strokeCount state removed — it was never rendered but triggered expensive
  // full-component re-renders after every completed stroke, causing lag.
  // Single stable controller — created once, never recreated on re-render.
  // All hot-path drawing state lives here, completely outside React.
  const drawCtrl = useRef(null);
  if (!drawCtrl.current) {
    drawCtrl.current = {
      isDrawing: false,
      isPalm: false,
      activePointerId: null, // tracks which pointer is drawing to avoid cross-contamination
      strokeCount: 0,       // number of completed strokes (only count is needed, not point data)
      currentStroke: null,   // last point of the stroke being drawn (single point, not an array)
      ctx: null,
      rect: null,
      MIN_DIST_SQ: 9,       // minimum squared distance (3px) between points to reduce jitter
      MAX_DIST_SQ: 2500,    // maximum squared distance (50px) — jumps larger than this are corrupt coalesced points (iOS bug) and must be dropped

      init(canvas) {
        // Scale canvas buffer to match device pixel ratio for crisp rendering
        // and to avoid the browser having to upscale every frame (major lag source on HiDPI iPads)
        const dpr = window.devicePixelRatio || 1;
        const cssWidth = 500;
        canvas.width = cssWidth * dpr;
        canvas.height = cssWidth * dpr;
        this.ctx = canvas.getContext('2d');
        this.ctx.scale(dpr, dpr);
        this.ctx.strokeStyle = '#000';
        this.ctx.lineWidth = 4;
        this.ctx.lineCap = 'round';
        this.ctx.lineJoin = 'round';
        this.rect = canvas.getBoundingClientRect();
      },

      reset() {
        this.isDrawing = false;
        this.isPalm = false;
        this.activePointerId = null;
        this.strokeCount = 0;
        this.currentStroke = null;
      },

      clearCanvas(canvas) {
        if (this.ctx) this.ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.strokeCount = 0;
        this.currentStroke = null;
        this.isDrawing = false;
        this.isPalm = false;
        this.activePointerId = null;
      },

      coords(clientX, clientY) {
        // Convert client coordinates to canvas CSS-pixel space.
        // ctx.scale(dpr) handles the DPR mapping, so we map to the 500x500 CSS coordinate space.
        const r = this.rect;
        const cssWidth = 500;
        return {
          x: (clientX - r.left) * (cssWidth / r.width),
          y: (clientY - r.top) * (cssWidth / r.height),
        };
      },

      // Smooth rendering using quadratic bezier curves through midpoints.
      //
      // Cross-flush C1 continuity fix:
      //   We store TWO points between flushes: `lastPt` (the previous raw point,
      //   used as the bezier control) and `prevMid` (the last midpoint drawn,
      //   which was the endpoint of the last bezier segment). Each new flush
      //   starts its path at prevMid, so the join is always smooth — no kink
      //   even on tight curves. Only 2 points stored = O(1), no GC pressure.
      flushPts(pts) {
        if (!pts.length || !this.isDrawing) return;
        const ctx = this.ctx;
        let { lastPt } = this.currentStroke;

        // Each flush is a fresh path starting at lastPt (the previous raw finger tip).
        // We draw forward-only: lineTo the first midpoint, then beziers through the rest.
        // Because we always start at lastPt and only move forward, nothing is ever retraced.
        ctx.beginPath();
        ctx.moveTo(lastPt.x, lastPt.y);

        for (const p of pts) {
          const mx = (lastPt.x + p.x) / 2;
          const my = (lastPt.y + p.y) / 2;
          ctx.quadraticCurveTo(lastPt.x, lastPt.y, mx, my);
          lastPt = p;
        }
        // End at the raw finger tip so the next flush starts exactly here.
        ctx.lineTo(lastPt.x, lastPt.y);
        ctx.stroke();

        this.currentStroke = { lastPt };
      },

      // Pointer Events — used for both touch and mouse input.
      // PointerEvents support getCoalescedEvents() which gives us all intermediate
      // points the OS collected between frames, eliminating jagged gaps during fast drawing.
      onPointerDown(e) {
        // Do NOT call e.preventDefault() here — on iOS Safari it causes the browser
        // to fire pointercancel and drop subsequent pointer events for this touch.
        // Scrolling/selection is prevented via touch-action:none CSS + touch event listeners.
        if (e.pointerType === 'touch') {
          // Palm rejection: e.width/height are in CSS pixels.
          // Real palms are 100px+ wide; fingers are typically 20–70px.
          // Threshold of 80 catches palms while allowing all normal finger sizes.
          // (On some devices these values are 0 — fall through and allow drawing.)
          if ((e.width > 80 || e.height > 80) && e.width > 0 && e.height > 0) {
            this.isPalm = true; return;
          }
        }
        this.isPalm = false;
        this.isDrawing = true;
        this.activePointerId = e.pointerId; // track which pointer started drawing
        this.rect = this.ctx.canvas.getBoundingClientRect();
        const startPt = this.coords(e.clientX, e.clientY);
        this.currentStroke = { lastPt: startPt };


      },

      onPointerMove(e) {
        if (!this.isDrawing || this.isPalm) return;
        if (e.pointerId !== this.activePointerId) return; // ignore other pointers
        // Re-check palm mid-stroke
        if (e.pointerType === 'touch' && (e.width > 80 || e.height > 80) && e.width > 0 && e.height > 0) {
          this.isPalm = true; this.isDrawing = false;
          this.currentStroke = null;
          return;
        }
        if (!this.currentStroke) return;

        // Collect coalesced points for smooth, high-resolution strokes.
        // getCoalescedEvents() gives us all intermediate OS-level points between frames.
        const coalesced = e.getCoalescedEvents ? e.getCoalescedEvents() : null;
        const hasCoalesced = coalesced && coalesced.length > 0;
        const n = hasCoalesced ? coalesced.length : 1;
        // Reuse a small buffer to reduce GC pressure in this hot path
        const pts = this._ptsBuf || (this._ptsBuf = []);
        pts.length = 0;
        for (let i = 0; i < n; i++) {
          const ce = hasCoalesced ? coalesced[i] : e;
          const pt = this.coords(ce.clientX, ce.clientY);
          const lastPt = pts.length > 0
            ? pts[pts.length - 1]
            : this.currentStroke.lastPt;
          if (!lastPt) { pts.push(pt); continue; }
          const dx = pt.x - lastPt.x, dy = pt.y - lastPt.y;
          const distSq = dx * dx + dy * dy;
          // Drop points that are impossibly far — these are corrupt coalesced events
          // fired by iOS when the system is under load, and are the root cause of
          // sudden straight-line glitches mid-curve.
          if (distSq >= this.MIN_DIST_SQ && distSq <= this.MAX_DIST_SQ) pts.push(pt);
        }
        // Draw immediately — no RAF batching — for lowest possible latency
        if (pts.length > 0) this.flushPts(pts);
      },

      onPointerUp(e) {
        if (e.pointerId !== this.activePointerId) return; // ignore other pointers
        if (this.isDrawing && this.currentStroke) {
          this.strokeCount++;
          this.currentStroke = null;
        }
        this.isDrawing = false;
        this.isPalm = false;
        this.activePointerId = null;
      },

      onPointerCancel(e) {
        // Treat cancel the same as end (e.g. palm rejection by the OS)
        this.onPointerUp(e);
      },
    };
  }
  const [writingFeedback, setWritingFeedback] = useState(null);
  const [practicedCardIds, setPracticedCardIds] = useState([]); // Track which cards we've practiced
  const [writingSessionComplete, setWritingSessionComplete] = useState(false);
  const [writingMode, setWritingMode] = useState(null); // 'practice10' or 'practiceAll' or 'test'
  const [testRevealed, setTestRevealed] = useState(false); // For writing test mode - whether character is revealed
  const [writingUndoHistory, setWritingUndoHistory] = useState([]); // undo history for writing practice
  const [showStrokePanel, setShowStrokePanel] = useState(false); // Hanzi Writer stroke order panel
  const [canvasHanziChar, setCanvasHanziChar] = useState(null); // char being drawn on canvas by HanziWriter
  const [showCanvasCharPicker, setShowCanvasCharPicker] = useState(false); // show char picker for canvas draw
  const canvasHanziWriterRef = React.useRef(null); // active HanziWriter on canvas

  // User account & sync state
  const [currentUser, setCurrentUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(FIREBASE_ENABLED);
  const [authError, setAuthError] = useState('');
  const [authEmail, setAuthEmail] = useState('');
  const [authPassword, setAuthPassword] = useState('');
  const [authConfirmPassword, setAuthConfirmPassword] = useState('');
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'signup'
  const [syncStatus, setSyncStatus] = useState('idle'); // 'idle', 'syncing', 'synced', 'error'
  const [lastSyncTime, setLastSyncTime] = useState(null);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const syncTimeoutRef = useRef(null);
  const currentViewRef = useRef('home'); // always-current view, readable from async sync functions
  const cloudLoadedRef = useRef(false); // Prevents auto-sync before initial cloud load completes
  const isLoadingFromCloudRef = useRef(false); // Blocks auto-save while a cloud pull is in progress
  const latestDecksRef = useRef(null); // Always holds current decks value for saveToCloud
  const latestFoldersRef = useRef(null); // Always holds current folders value for saveToCloud

  // User settings (synced to cloud)
  const [userSettings, setUserSettings] = useState(() => {
    const saved = localStorage.getItem('userSettings');
    return saved ? JSON.parse(saved) : {
      // Flashcard (study) mode settings
      flashcard: {
        autoPlayAudio: false,
        srOffset: 0, // spaced repetition offset: -2 to +2 (earlier ↔ later)
      },
      // Handwriting (writing) mode settings
      writing: {
        autoPlayAudio: false,
        srOffset: 0,
        showPinyin: true,
        showEnglish: true,
        traceSpeed: 1, // 0.4=slow, 1=normal, 2=fast; also controls fade
      },
      // Trouble words
      troubleWords: {
        topN: 20, // how many top trouble words to show cross-deck
      },
    };
  });
  const latestSettingsRef = useRef(null); // always-current copy for saveToCloud

  // Delete confirmation modal
  const [deleteConfirmation, setDeleteConfirmation] = useState(null); // { deckId, deckName }
  
  // Export modal — shown when deck has kewen so user can choose to include it or not
  const [exportModal, setExportModal] = useState(null); // { deck } | null
  
  // Combine decks state
  const [combineSelectedDecks, setCombineSelectedDecks] = useState([]); // array of deck ids
  
  // Deck reorder mode
  const [reorderMode, setReorderMode] = useState(false);
  const [bulkReorderFolderId, setBulkReorderFolderId] = useState(null);
  // Bulk deck selection — set of deck ids selected in reorder mode for moving to a folder
  const [bulkMoveSelectedDecks, setBulkMoveSelectedDecks] = useState(new Set());
  const [showBulkMoveModal, setShowBulkMoveModal] = useState(false);

  // Multi-import state
  const [importedDecks, setImportedDecks] = useState([]); // parsed deck objects from files
  const [showImportModal, setShowImportModal] = useState(false);
  const [importCombineTitle, setImportCombineTitle] = useState('');
  const [importTargetFolder, setImportTargetFolder] = useState(null); // folder id to import directly into

  // Import/Export entry modal + bulk export state
  const [showImportExportModal, setShowImportExportModal] = useState(false);

  // Trouble words modal: { cards: [...], deckId: id|null, deckName: str|null }
  // deckId null = cross-deck mode
  const [troubleModal, setTroubleModal] = useState(null);
  const [showBulkExportModal, setShowBulkExportModal] = useState(false);
  const [bulkExportSelected, setBulkExportSelected] = useState({}); // { [deckId]: true }
  const [bulkExportIncludeKewen, setBulkExportIncludeKewen] = useState(true);
  
  // Browse built-in decks
  const [showBrowseDecks, setShowBrowseDecks] = useState(false);
  const [browseLoading, setBrowseLoading] = useState(null); // deck filename being fetched

  // All available built-in vocab decks hosted on GitHub Pages alongside the app
  const BUILT_IN_DECKS = [
    { filename: '108vocab/Privacy.json',                    name: 'Privacy 隐私',                       cards: 43,  topic: 'Lesson 11' },
    { filename: '108vocab/走后门.json',                      name: '走后门',                              cards: 35,  topic: 'Lesson 12' },
    { filename: '108vocab/到时候再说吧.json',                 name: '到时候再说吧',                         cards: 44,  topic: 'ANC Lesson 18' },
    { filename: '108vocab/饭桌上的客套.json',                 name: '饭桌上的客套',                         cards: 48,  topic: 'Oh China Lesson 18' },
    { filename: '108vocab/北京的早晨.json',                   name: '北京的早晨',                           cards: 41,  topic: 'Lesson 14' },
    { filename: '108vocab/北京的夜市.json',                   name: '北京的夜市',                           cards: 32,  topic: 'ANC Lesson 15' },
    { filename: '108vocab/北京的交通.json',                   name: '北京的交通',                           cards: 29,  topic: 'Lesson 16' },
    { filename: '108vocab/麦当劳.json',                      name: '麦当劳',                              cards: 25,  topic: 'Lesson 20' },
    { filename: '108vocab/体育和爱国.json',                   name: '体育和爱国',                           cards: 33,  topic: 'Lesson 22' },
    { filename: '108vocab/中国制造.json',                     name: '中国制造',                             cards: 31,  topic: 'ANC Lesson 24' },
    { filename: '108vocab/铁饭碗打破了.json',                 name: '铁饭碗打破了',                          cards: 23,  topic: 'ANC Lesson 27' },
    { filename: '108vocab/高考.json',                        name: '高考',                               cards: 36,  topic: 'ANC Lesson 29' },
    { filename: '108vocab/开放留学政策.json',                  name: '开放留学政策',                          cards: 28,  topic: 'ANC Lesson 38' },
    { filename: '108vocab/家里的小皇帝.json',                  name: '家里的小皇帝',                          cards: 42,  topic: 'Lesson 27' },
    { filename: '108vocab/读书和考试.json',                    name: '读书和考试',                           cards: 41,  topic: 'Lesson 28' },
    { filename: '108vocab/现在好还是从前好.json',               name: '现在好还是从前好',                       cards: 27,  topic: 'Lesson 33' },
    { filename: '108vocab/双语教育.json',                     name: '双语教育',                             cards: 31,  topic: 'Oh China Lesson 22' },
    { filename: '108vocab/美国的华侨.json',                    name: '美国的华侨',                           cards: 48,  topic: 'Oh China Lesson 19' },
    { filename: '108vocab/华裔需要不需要政治代表.json',           name: '华裔需要不需要政治代表',                   cards: 47,  topic: 'Oh China Lesson 20' },
    { filename: '108vocab/中国的妇女.json',                    name: '中国的妇女',                           cards: 48,  topic: 'Lesson 25' },
    { filename: '108vocab/离婚.json',                        name: '离婚',                               cards: 52,  topic: 'Lesson 26' },
    { filename: '108vocab/人权和贸易.json',                    name: '人权和贸易',                           cards: 27,  topic: 'Oh China Lesson 23' },
    { filename: '108vocab/中国人的衣食住行.json',               name: '中国人的衣食住行',                       cards: 56,  topic: 'Oh China Lesson 31' },
    { filename: '103vocab/CHI103-CHAR LIST.json',           name: 'CHI 103 Character List',             cards: 522, topic: 'CHI 103 Review' },
    { filename: '103vocab/CHI103-VOCAB LIST.json',          name: 'CHI 103 Vocab List',                 cards: 483, topic: 'CHI 103 Review' },
  ];

  const importBuiltInDeck = async (deckInfo) => {
    setBrowseLoading(deckInfo.filename);
    try {
      const base = window.location.origin + window.location.pathname.replace(/\/[^/]*$/, '/');
      const url = base + deckInfo.filename;
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const imported = await res.json();
      // Assign a fresh ID
      const deck = Array.isArray(imported) ? imported[0] : imported;
      deck.id = 'deck-' + Date.now() + '-' + Math.random().toString(36).slice(2, 7);
      setDecks(prev => [...prev, deck]);
      // Brief success flash then close
      setBrowseLoading('done-' + deckInfo.filename);
      setTimeout(() => setBrowseLoading(null), 1200);
    } catch (e) {
      console.error('Failed to fetch deck:', e);
      alert('Could not load "' + deckInfo.name + '". Make sure you are online.');
      setBrowseLoading(null);
    }
  };

  // Search
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedDecks, setExpandedDecks] = useState(new Set());

  // Calendar heatmap tooltip
  const [hoveredDay, setHoveredDay] = useState(null);

  // Folder system
  const [folders, setFolders] = useState(() => {
    const saved = localStorage.getItem('chineseFolders');
    return saved ? JSON.parse(saved) : [];
  });
  const [currentFolderId, setCurrentFolderId] = useState(null);
  const [showCreateFolder, setShowCreateFolder] = useState(false);
  const [newFolderName, setNewFolderName] = useState('');
  const [editingFolderId, setEditingFolderId] = useState(null);
  const [editFolderName, setEditFolderName] = useState('');
  const [movingDeckId, setMovingDeckId] = useState(null);

  // Last studied tracking
  const [lastStudied, setLastStudied] = useState(() => {
    const saved = localStorage.getItem('lastStudied');
    return saved ? JSON.parse(saved) : {};
  });

  // Keep currentViewRef in sync so async callbacks (cloud sync) can read it without stale closures
  useEffect(() => {
    currentViewRef.current = currentView;
  }, [currentView]);

  // Save decks to localStorage whenever they change.
  // During writing mode: debounce via a timeout so synchronous JSON.stringify+setItem
  // never blocks the main thread mid-stroke. Outside writing mode: write immediately.
  const decksLocalSaveTimer = useRef(null);
  // Call this before leaving writing mode to flush any pending deferred write immediately.
  const flushDecksToStorage = () => {
    if (decksLocalSaveTimer.current) {
      clearTimeout(decksLocalSaveTimer.current);
      decksLocalSaveTimer.current = null;
    }
    localStorage.setItem('chineseDecks', JSON.stringify(latestDecksRef.current));
  };
  // IMPORTANT: Keep latestDecksRef in sync via useMemo-style assignment so it is always
  // current *before* any useEffect depending on [decks] reads it. React runs ref assignments
  // during render, guaranteeing they precede all effects fired in the same commit.
  latestDecksRef.current = decks;
  useEffect(() => {
    if (currentViewRef.current === 'writing') {
      // Defer the heavy synchronous write until after drawing is done
      if (decksLocalSaveTimer.current) clearTimeout(decksLocalSaveTimer.current);
      decksLocalSaveTimer.current = setTimeout(() => {
        localStorage.setItem('chineseDecks', JSON.stringify(latestDecksRef.current));
      }, 1000);
    } else {
      if (decksLocalSaveTimer.current) { clearTimeout(decksLocalSaveTimer.current); decksLocalSaveTimer.current = null; }
      localStorage.setItem('chineseDecks', JSON.stringify(decks));
    }
  }, [decks]);

  // Save study streak to localStorage
  useEffect(() => {
    localStorage.setItem('studyStreak', JSON.stringify(studyStreak));
  }, [studyStreak]);

  // Save best match times to localStorage
  useEffect(() => {
    localStorage.setItem('bestMatchTimes', JSON.stringify(bestMatchTimes));
  }, [bestMatchTimes]);

  // Save study guides to localStorage
  useEffect(() => {
    localStorage.setItem('studyGuides', JSON.stringify(studyGuides));
  }, [studyGuides]);

  // Save learn progress to localStorage
  useEffect(() => {
    localStorage.setItem('learnProgress', JSON.stringify(learnProgress));
  }, [learnProgress]);

  // Save folders to localStorage
  useEffect(() => {
    localStorage.setItem('chineseFolders', JSON.stringify(folders));
    latestFoldersRef.current = folders;
  }, [folders]);

  // Save userSettings to localStorage
  useEffect(() => {
    localStorage.setItem('userSettings', JSON.stringify(userSettings));
    latestSettingsRef.current = userSettings;
  }, [userSettings]);

  // Save lastStudied to localStorage
  useEffect(() => {
    localStorage.setItem('lastStudied', JSON.stringify(lastStudied));
  }, [lastStudied]);

  // Attach canvas pointer listeners for drawing.
  // Pointer Events support getCoalescedEvents() for smooth, low-latency strokes.
  // IMPORTANT: We do NOT call e.preventDefault() on pointer events because iOS Safari
  // interprets that as a signal to fire pointercancel and drop the touch sequence.
  // Instead, separate touch event listeners handle preventDefault for scroll/selection blocking.
  // canvasReadyRef: tracks whether canvas has been initialized for the current card/mode.
  // Set to false on card change so init runs fresh, but stays true during re-renders
  // (e.g. from cloud sync) so drawing is never interrupted mid-stroke.
  const canvasReadyRef = useRef(false);

  // Attach canvas listeners when entering writing mode.
  // init/reset only run when canvasReadyRef is false (new card or mode change),
  // NOT on every re-render — so cloud sync re-renders never reset the canvas mid-stroke.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || currentView !== 'writing' || !writingMode) return;

    const ctrl = drawCtrl.current;
    // Only initialize when we actually need to (new card/mode), not on every re-render
    if (!canvasReadyRef.current) {
      ctrl.init(canvas);
      ctrl.reset();
      canvasReadyRef.current = true;
    }

    const onPointerDown   = (e) => ctrl.onPointerDown(e);
    const onPointerMove   = (e) => ctrl.onPointerMove(e);
    const onPointerUp     = (e) => ctrl.onPointerUp(e);
    const onPointerCancel = (e) => ctrl.onPointerCancel(e);
    const preventTouch    = (e) => e.preventDefault();
    const preventSelect   = (e) => e.preventDefault();
    const passiveNo = { passive: false };

    canvas.addEventListener('pointerdown',   onPointerDown);
    canvas.addEventListener('pointermove',   onPointerMove);
    canvas.addEventListener('pointerup',     onPointerUp);
    canvas.addEventListener('pointercancel', onPointerCancel);
    canvas.addEventListener('touchstart',    preventTouch, passiveNo);
    canvas.addEventListener('touchmove',     preventTouch, passiveNo);
    canvas.addEventListener('selectstart',   preventSelect);
    canvas.addEventListener('contextmenu',   preventSelect);
    document.addEventListener('pointerup',     onPointerUp);
    document.addEventListener('pointercancel', onPointerCancel);
    return () => {
      canvas.removeEventListener('pointerdown',   onPointerDown);
      canvas.removeEventListener('pointermove',   onPointerMove);
      canvas.removeEventListener('pointerup',     onPointerUp);
      canvas.removeEventListener('pointercancel', onPointerCancel);
      canvas.removeEventListener('touchstart',    preventTouch, passiveNo);
      canvas.removeEventListener('touchmove',     preventTouch, passiveNo);
      canvas.removeEventListener('selectstart',   preventSelect);
      canvas.removeEventListener('contextmenu',   preventSelect);
      document.removeEventListener('pointerup',     onPointerUp);
      document.removeEventListener('pointercancel', onPointerCancel);
    };
  }, [currentView, writingMode]);

  // Save writing session state to localStorage — fires on card navigation AND queue changes.
  // writingCards is included so Forgot re-insertions are always captured.
  useEffect(() => {
    if (currentView === 'writing' && selectedDeck && writingMode && writingCards.length > 0 && !writingSessionComplete) {
      localStorage.setItem('writingSession', JSON.stringify({
        deckId: selectedDeck.id,
        writingMode,
        cardIds: writingCards.map(c => c.id),
        currentIndex: currentWritingIndex,
        practicedCardIds,
      }));
    }
  }, [currentView, selectedDeck, writingMode, currentWritingIndex, writingCards, practicedCardIds, writingSessionComplete]);

  // Clear saved writing session when session completes
  useEffect(() => {
    if (writingSessionComplete) {
      localStorage.removeItem('writingSession');
    }
  }, [writingSessionComplete]);

  // Save sentence session to localStorage on every navigation
  useEffect(() => {
    if (currentView === 'sentencePractice' && sentencePracticeDeck && !sentencePracticeDeck.noKewen && sentenceQueue.length > 0) {
      localStorage.setItem('sentenceSession', JSON.stringify({
        deckId: sentencePracticeDeck.deck.id,
        queue: sentenceQueue,
        currentIndex: sentenceIndex,
      }));
    }
  }, [currentView, sentencePracticeDeck, sentenceQueue, sentenceIndex]);

  // Firebase auth state listener
  useEffect(() => {
    if (!FIREBASE_ENABLED || !firebaseAuth) {
      setAuthLoading(false);
      cloudLoadedRef.current = true; // No cloud to load from, allow local usage
      return;
    }
    const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setAuthLoading(false);
      if (user) {
        // Load cloud data on login
        loadFromCloud(user.uid);
      } else {
        // Not logged in, allow local usage without blocking auto-sync
        cloudLoadedRef.current = true;
      }
    });
    return () => unsubscribe();
  }, []);

  // Debounced cloud sync when data changes (only if logged in and initial load complete)
  // Skip auto-sync during reorder mode and writing mode — writing triggers explicit sync on card navigation.
  useEffect(() => {
    if (!currentUser || !FIREBASE_ENABLED) return;
    if (!cloudLoadedRef.current) return;
    if (isLoadingFromCloudRef.current) return;
    if (reorderMode || bulkReorderFolderId) return;
    if (currentView === 'writing') return; // never auto-sync mid-stroke; card nav triggers explicit sync instead
    if (syncTimeoutRef.current) clearTimeout(syncTimeoutRef.current);
    syncTimeoutRef.current = setTimeout(() => {
      saveToCloud(currentUser.uid);
    }, 3000);
    return () => { if (syncTimeoutRef.current) clearTimeout(syncTimeoutRef.current); };
  }, [decks, learnProgress, studyStreak, bestMatchTimes, folders, lastStudied, userSettings, currentUser, reorderMode, bulkReorderFolderId, currentView, studyGuides]);

  // Skips sync-related state updates when drawing — prevents re-renders mid-stroke.
  const safeSetSyncStatus = (status) => {
    if (currentViewRef.current === 'writing') return;
    setSyncStatus(status);
  };
  const safeSetLastSyncTime = (t) => {
    if (currentViewRef.current === 'writing') return;
    setLastSyncTime(t);
  };

  // Cloud sync functions
  const saveToCloud = async (userId, overrideDecks, overrideFolders) => {
    if (!FIREBASE_ENABLED) return;
    try {
      safeSetSyncStatus('syncing');
      const decksToSave = overrideDecks !== undefined ? overrideDecks : (latestDecksRef.current || decks);
      const foldersToSave = overrideFolders !== undefined ? overrideFolders : (latestFoldersRef.current || folders);
      const settingsToSave = latestSettingsRef.current || userSettings;
      await CloudSync.saveDecks(userId, decksToSave);
      await CloudSync.saveProgress(userId, { learnProgress, studyStreak, bestMatchTimes, folders: foldersToSave, lastStudied, userSettings: settingsToSave, studyGuides });
      safeSetSyncStatus('synced');
      safeSetLastSyncTime(new Date());
      setTimeout(() => safeSetSyncStatus('idle'), 3000);
    } catch (e) {
      console.error('Cloud sync save error:', e);
      safeSetSyncStatus('error');
      setTimeout(() => safeSetSyncStatus('idle'), 5000);
    }
  };

  const loadFromCloud = async (userId) => {
    if (!FIREBASE_ENABLED) return;
    try {
      isLoadingFromCloudRef.current = true; // Block auto-save while pulling from cloud
      cloudLoadedRef.current = false; // Also block the cloudLoaded guard during load
      safeSetSyncStatus('syncing');
      const cloudDecks = await CloudSync.loadDecks(userId);
      const cloudProgress = await CloudSync.loadProgress(userId);

      // Full replace: cloud data completely replaces local data
      if (cloudDecks) {
        setDecks(cloudDecks);
      }

      if (cloudProgress) {
        if (cloudProgress.learnProgress) {
          setLearnProgress(cloudProgress.learnProgress);
        }
        if (cloudProgress.studyStreak) {
          setStudyStreak(cloudProgress.studyStreak);
        }
        if (cloudProgress.bestMatchTimes) {
          setBestMatchTimes(cloudProgress.bestMatchTimes);
        }
        if (cloudProgress.folders) {
          setFolders(cloudProgress.folders);
        }
        if (cloudProgress.lastStudied) {
          setLastStudied(cloudProgress.lastStudied);
        }
        if (cloudProgress.userSettings) {
          // Deep-merge cloud settings with local defaults so new settings keys are never lost
          setUserSettings(prev => ({
            flashcard: { ...prev.flashcard, ...cloudProgress.userSettings.flashcard },
            writing: { ...prev.writing, ...cloudProgress.userSettings.writing },
            troubleWords: { ...{ topN: 20 }, ...(prev.troubleWords || {}), ...(cloudProgress.userSettings.troubleWords || {}) },
          }));
        }
        if (cloudProgress.studyGuides && cloudProgress.studyGuides.length > 0) {
          setStudyGuides(cloudProgress.studyGuides);
        }
      }

      // Mark initial cloud load as complete - now auto-sync can proceed.
      // Delay must exceed the auto-sync debounce (3000ms) so the state changes
      // from setDecks/setFolders/etc. above cannot trigger a re-upload of the
      // just-downloaded cloud data before React has committed the new state.
      // Previously 500ms was too short: the auto-sync effect could fire within
      // the debounce window and push stale local (kewen-less) decks back to cloud.
      setTimeout(() => {
        isLoadingFromCloudRef.current = false;
        cloudLoadedRef.current = true;
      }, 4000);

      safeSetSyncStatus('synced');
      safeSetLastSyncTime(new Date());
      setTimeout(() => safeSetSyncStatus('idle'), 3000);
    } catch (e) {
      console.error('Cloud sync load error:', e);
      // Still allow syncing even if load fails, to not permanently block the user
      isLoadingFromCloudRef.current = false;
      cloudLoadedRef.current = true;
      safeSetSyncStatus('error');
      setTimeout(() => safeSetSyncStatus('idle'), 5000);
    }
  };

  const forceSync = () => {
    if (currentUser && FIREBASE_ENABLED) {
      saveToCloud(currentUser.uid);
    }
  };

  const forcePullFromCloud = () => {
    if (currentUser && FIREBASE_ENABLED) {
      if (window.confirm('Replace all local data with cloud data? Any local-only changes will be lost.')) {
        loadFromCloud(currentUser.uid);
      }
    }
  };

  // Auth functions
  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!FIREBASE_ENABLED) {
      setAuthError('Firebase is not configured. See setup instructions in the source code.');
      return;
    }
    if (authPassword !== authConfirmPassword) {
      setAuthError('Passwords do not match.');
      return;
    }
    if (authPassword.length < 6) {
      setAuthError('Password must be at least 6 characters.');
      return;
    }
    try {
      setAuthError('');
      await firebaseAuth.createUserWithEmailAndPassword(authEmail, authPassword);
      setCurrentView('home');
      setAuthEmail('');
      setAuthPassword('');
      setAuthConfirmPassword('');
    } catch (e) {
      setAuthError(e.message.replace('Firebase: ', '').replace(/\(auth\/.*\)\.?/, '').trim());
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!FIREBASE_ENABLED) {
      setAuthError('Firebase is not configured. See setup instructions in the source code.');
      return;
    }
    try {
      setAuthError('');
      await firebaseAuth.signInWithEmailAndPassword(authEmail, authPassword);
      setCurrentView('home');
      setAuthEmail('');
      setAuthPassword('');
    } catch (e) {
      setAuthError(e.message.replace('Firebase: ', '').replace(/\(auth\/.*\)\.?/, '').trim());
    }
  };

  const handleGoogleSignIn = async () => {
    if (!FIREBASE_ENABLED) {
      setAuthError('Firebase is not configured. See setup instructions in the source code.');
      return;
    }
    try {
      setAuthError('');
      const provider = new firebase.auth.GoogleAuthProvider();
      await firebaseAuth.signInWithPopup(provider);
      setCurrentView('home');
    } catch (e) {
      setAuthError(e.message.replace('Firebase: ', '').replace(/\(auth\/.*\)\.?/, '').trim());
    }
  };

  const handleSignOut = async () => {
    if (!firebaseAuth) return;
    try {
      // No pre-signout save needed — card navigation already saves to cloud,
      // and the debounced sync covers everything else. Just sign out immediately.
      await firebaseAuth.signOut();
      setShowAccountMenu(false);
      setSyncStatus('idle');
      setLastSyncTime(null);
    } catch (e) {
      console.error('Sign out error:', e);
    }
  };

  const handleDeleteAccount = async () => {
    if (!firebaseAuth || !currentUser) return;
    if (!window.confirm('Are you sure you want to delete your account? This will remove all cloud-synced data. Your local data will be kept.')) return;
    try {
      // Delete user data from Firestore
      const userRef = firebaseDb.collection('users').doc(currentUser.uid);
      const decksSnapshot = await userRef.collection('decks').get();
      const batch = firebaseDb.batch();
      decksSnapshot.docs.forEach(doc => batch.delete(doc.ref));
      batch.delete(userRef);
      await batch.commit();
      // Delete the auth account
      await currentUser.delete();
      setShowAccountMenu(false);
    } catch (e) {
      if (e.code === 'auth/requires-recent-login') {
        setAuthError('Please sign out and sign back in before deleting your account (security requirement).');
      } else {
        console.error('Delete account error:', e);
      }
    }
  };

  // Auto-play audio for flashcard mode when card changes (front face shown)
  useEffect(() => {
    if (currentView === 'study' && userSettings.flashcard.autoPlayAudio && shuffledCards.length > 0) {
      const card = shuffledCards[currentCardIndex];
      if (card) speakChinese(card.chinese);
    }
  }, [currentCardIndex, currentView]);

  // Auto-play audio for writing mode when card changes
  useEffect(() => {
    if (currentView === 'writing' && writingMode && userSettings.writing.autoPlayAudio && writingCards.length > 0) {
      const card = writingCards[currentWritingIndex];
      if (card) speakChinese(card.chinese);
    }
  }, [currentWritingIndex, currentView, writingMode]);

  // Live match timer - updates every 100ms
  useEffect(() => {
    let interval = null;
    if (matchStartTime && !matchEndTime && currentView === 'match') {
      interval = setInterval(() => {
        setMatchLiveTime(Math.floor((Date.now() - matchStartTime) / 100));
      }, 100);
    }
    return () => { if (interval) clearInterval(interval); };
  }, [matchStartTime, matchEndTime, currentView]);

  // Keyboard shortcuts for MC options (1-4) in learn mode
  useEffect(() => {
    if (currentView !== 'learn' || learnMode !== 'multiple-choice' || showAnswer) return;
    
    const handleKeyDown = (e) => {
      const num = parseInt(e.key);
      if (num >= 1 && num <= 4 && num <= multipleChoiceOptions.length) {
        e.preventDefault();
        setSelectedOption(multipleChoiceOptions[num - 1]);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentView, learnMode, showAnswer, multipleChoiceOptions]);

  // Keyboard shortcuts for test mode MC (1-4 keys) + Enter/arrow navigation
  useEffect(() => {
    if (currentView !== 'test' || showTestResults) return;
    const q = testQuestions[currentTestIndex];
    if (!q) return;
    
    const handleKeyDown = (e) => {
      // Don't intercept Enter/arrows when typing in an input field
      const inInput = e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA';
      
      if (q.type === 'mc' && q.options) {
        const num = parseInt(e.key);
        if (num >= 1 && num <= 4 && num <= q.options.length) {
          e.preventDefault();
          const a = [...testAnswers];
          a[currentTestIndex] = q.options[num - 1];
          setTestAnswers(a);
        }
      }
      if (q.type === 'trueFalse') {
        if (e.key === '1' || e.key.toLowerCase() === 't') {
          e.preventDefault();
          const a = [...testAnswers]; a[currentTestIndex] = 'True'; setTestAnswers(a);
        } else if (e.key === '2' || e.key.toLowerCase() === 'f') {
          e.preventDefault();
          const a = [...testAnswers]; a[currentTestIndex] = 'False'; setTestAnswers(a);
        }
      }
      
      // Enter = next question (or finish on last), but not when in input fields unless it's a typing question
      if (e.key === 'Enter') {
        if (inInput && (q.type === 'typePinyin' || q.type === 'written')) {
          // Enter in typing fields moves to next
          e.preventDefault();
          if (currentTestIndex < testQuestions.length - 1) {
            setMatchingSelected(null);
            setCurrentTestIndex(currentTestIndex + 1);
          } else {
            setShowTestResults(true);
          }
        } else if (!inInput) {
          e.preventDefault();
          if (currentTestIndex < testQuestions.length - 1) {
            setMatchingSelected(null);
            setCurrentTestIndex(currentTestIndex + 1);
          } else {
            setShowTestResults(true);
          }
        }
      }
      
      // Arrow keys for navigation (not in inputs)
      if (!inInput) {
        if (e.key === 'ArrowRight') {
          e.preventDefault();
          if (currentTestIndex < testQuestions.length - 1) {
            setMatchingSelected(null);
            setCurrentTestIndex(currentTestIndex + 1);
          }
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          if (currentTestIndex > 0) {
            setMatchingSelected(null);
            setCurrentTestIndex(currentTestIndex - 1);
          }
        }
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentView, showTestResults, currentTestIndex, testQuestions, testAnswers]);

  // Keyboard shortcuts for study mode (space = flip, left/right arrows = swipe)
  useEffect(() => {
    if (currentView !== 'study') return;
    
    const handleKeyDown = (e) => {
      if (e.key === ' ' || e.key === 'Spacebar') {
        e.preventDefault();
        setIsFlipped(prev => !prev);
      } else if (e.key === 'ArrowLeft' || e.key === 'd' || e.key === 'D') {
        e.preventDefault();
        handleSwipe('left');
      } else if (e.key === 'ArrowRight' || e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        handleSwipe('right');
      } else if (e.key === 'Backspace' || e.key === 's' || e.key === 'S') {
        e.preventDefault();
        undoLastSwipe();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentView, shuffledCards, currentCardIndex, isFlipped]);

  // Update study streak
  const updateStudyStreak = () => {
    const today = new Date().toDateString();
    const todayISO = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
    const lastDate = studyStreak.lastStudyDate ? new Date(studyStreak.lastStudyDate).toDateString() : null;

    // Add today to studyDates if not already there
    const studyDates = [...(studyStreak.studyDates || [])];
    if (!studyDates.includes(todayISO)) {
      studyDates.push(todayISO);
    }

    if (lastDate === today) {
      // Already studied today - just ensure date is recorded
      if (!(studyStreak.studyDates || []).includes(todayISO)) {
        setStudyStreak({ ...studyStreak, studyDates });
      }
      return;
    }

    const yesterday = new Date(Date.now() - 86400000).toDateString();
    
    if (lastDate === yesterday) {
      // Studied yesterday, continue streak
      setStudyStreak({
        currentStreak: studyStreak.currentStreak + 1,
        lastStudyDate: Date.now(),
        longestStreak: Math.max(studyStreak.longestStreak, studyStreak.currentStreak + 1),
        studyDates
      });
    } else if (!lastDate) {
      // First time studying
      setStudyStreak({
        currentStreak: 1,
        lastStudyDate: Date.now(),
        longestStreak: 1,
        studyDates
      });
    } else {
      // Broke streak, start over
      setStudyStreak({
        currentStreak: 1,
        lastStudyDate: Date.now(),
        longestStreak: studyStreak.longestStreak,
        studyDates
      });
    }
  };

  // Swipe handlers
  const onTouchStart = (e) => {
    touchRef.current = { start: e.targetTouches[0].clientX, end: null };
  };

  const onTouchMove = (e) => {
    if (touchRef.current) {
      touchRef.current.end = e.targetTouches[0].clientX;
    }
  };

  const onTouchEnd = () => {
    if (!touchRef.current || touchRef.current.end === null) {
      touchRef.current = null;
      return; // No movement = just a tap, let onClick handle it
    }
    
    const distance = touchRef.current.start - touchRef.current.end;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    touchRef.current = null;

    if (isLeftSwipe) {
      handleSwipe('left');
    } else if (isRightSwipe) {
      handleSwipe('right');
    }
  };

  const handleSwipe = (direction) => {
    if (!selectedDeck || currentView !== 'study') return;

    const currentCard = shuffledCards[currentCardIndex];
    setSwipeDirection(direction);

    // Save state for undo before making changes
    const snapshot = { direction, cardIndex: currentCardIndex, cards: [...shuffledCards], card: currentCard };

    setTimeout(() => {
      if (direction === 'right') {
        // I Know This - move on normally
        updateCardWithSpacedRepetition(selectedDeck.id, currentCard.id, 5, userSettings.flashcard.srOffset);
        setSwipeHistory(prev => [...prev, snapshot]);

        if (currentCardIndex < shuffledCards.length - 1) {
          setCurrentCardIndex(currentCardIndex + 1);
          setIsFlipped(false);
        } else {
          alert('Great job! You\'ve finished studying this deck!');
          setCurrentView('home');
        }
      } else {
        // Still Learning - re-insert the card proportionally later in the deck
        updateCardWithSpacedRepetition(selectedDeck.id, currentCard.id, 2, userSettings.flashcard.srOffset);
        setSwipeHistory(prev => [...prev, snapshot]);

        const newCards = [...shuffledCards];
        // Remove from current position
        newCards.splice(currentCardIndex, 1);
        // Re-insert proportionally: ~15-20% of remaining cards ahead, minimum 4
        const remaining = newCards.length - currentCardIndex;
        const proportionalOffset = Math.max(4, Math.floor(remaining * 0.15) + Math.floor(Math.random() * Math.max(1, Math.floor(remaining * 0.05))));
        const reinsertPosition = Math.min(
          currentCardIndex + proportionalOffset,
          newCards.length
        );
        newCards.splice(reinsertPosition, 0, currentCard);
        setShuffledCards(newCards);
        // Keep the same index (since we removed current card, the next card slides into this index)
        setIsFlipped(false);
      }

      setSwipeDirection(null);
    }, 300);
  };

  const undoLastSwipe = () => {
    if (swipeHistory.length === 0) return;
    const last = swipeHistory[swipeHistory.length - 1];
    setSwipeHistory(prev => prev.slice(0, -1));
    setShuffledCards(last.cards);
    setCurrentCardIndex(last.cardIndex);
    setIsFlipped(false);
  };

  // ── Trouble Words ──────────────────────────────────────────────────────────
  // Each wrong answer appends a timestamp to card.struggleLog[].
  // Score uses exponential decay with 7-day half-life so recent struggles
  // outweigh old ones. A card needs score >= 0.5 to appear in trouble list.
  const TROUBLE_HALF_LIFE_MS = 7 * 24 * 60 * 60 * 1000; // 7 days
  const TROUBLE_THRESHOLD = 0.5;
  const getTroubleScore = (card) => {
    if (!card.struggleLog || card.struggleLog.length === 0) return 0;
    const now = Date.now();
    return card.struggleLog.reduce((sum, t) => {
      return sum + Math.pow(0.5, (now - t) / TROUBLE_HALF_LIFE_MS);
    }, 0);
  };
  // Get trouble cards for a single deck, sorted by score desc
  const getTroubleCardsForDeck = (deck) =>
    deck.cards
      .map(c => ({ ...c, _deckId: deck.id, _deckName: deck.name, _score: getTroubleScore(c) }))
      .filter(c => c._score >= TROUBLE_THRESHOLD)
      .sort((a, b) => b._score - a._score);
  // Get top-N trouble cards across all decks
  const getTopTroubleCards = (n) =>
    decks.flatMap(deck => getTroubleCardsForDeck(deck))
      .sort((a, b) => b._score - a._score)
      .slice(0, n);

  // SM-2 Spaced Repetition Algorithm
  const updateCardWithSpacedRepetition = (deckId, cardId, quality, srOffset = 0) => {
    // quality: 0-5 (0 = total blackout, 5 = perfect response)
    // srOffset: -2 to +2, shifts how far out the next interval lands
    //   negative = card comes back sooner, positive = card comes back later
    const updatedDecks = decks.map(deck => {
      if (deck.id === deckId) {
        return {
          ...deck,
          cards: deck.cards.map(card => {
            if (card.id === cardId) {
              let { easeFactor, interval, repetitions, masteryScore } = card;
              masteryScore = masteryScore || 0; // Initialize if missing
              
              // Update ease factor
              easeFactor = Math.max(1.3, easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)));
              
              // Update repetitions and interval
              if (quality < 3) {
                repetitions = 0;
                interval = 1;
              } else {
                repetitions += 1;
                if (repetitions === 1) {
                  interval = 1;
                } else if (repetitions === 2) {
                  interval = 6;
                } else {
                  interval = Math.round(interval * easeFactor);
                }
              }

              // Apply SR offset: scale interval by a multiplier derived from offset
              // offset -2 → ×0.5, -1 → ×0.75, 0 → ×1, +1 → ×1.5, +2 → ×2
              if (srOffset !== 0 && interval > 1) {
                const multiplier = srOffset < 0
                  ? 1 + (srOffset * 0.25)   // -2→0.5, -1→0.75
                  : 1 + (srOffset * 0.5);    // +1→1.5, +2→2.0
                interval = Math.max(1, Math.round(interval * multiplier));
              }

              // Calculate next review date
              const nextReview = Date.now() + (interval * 24 * 60 * 60 * 1000);
              
              // Update mastery score: +2 for quality >= 4, +1 for quality 3, -1 for quality < 3
              if (quality >= 4) {
                masteryScore = Math.min(5, masteryScore + 2);
              } else if (quality >= 3) {
                masteryScore = Math.min(5, masteryScore + 1);
              } else {
                masteryScore = Math.max(0, masteryScore - 1);
              }
              
              const masteryStatus = masteryScore === 0 ? 'not_started' : masteryScore < 3 ? 'learning' : 'mastered';

              // Track struggle history for Trouble Words feature
              // Append timestamp on wrong answers; trim log to last 50 entries to cap storage
              const now = Date.now();
              let struggleLog = card.struggleLog ? [...card.struggleLog] : [];
              if (quality < 3) {
                struggleLog = [...struggleLog, now].slice(-50);
              }

              return {
                ...card,
                known: masteryStatus === 'mastered',
                masteryScore,
                masteryStatus,
                lastReviewed: now,
                difficulty: 5 - quality,
                easeFactor,
                interval,
                repetitions,
                nextReview,
                struggleLog,
              };
            }
            return card;
          })
        };
      }
      return deck;
    });
    // Always update immediately so latestDecksRef stays current for cloud sync on exit.
    // The localStorage write is debounced separately during writing mode.
    setDecks(updatedDecks);
  };
  useEffect(() => {
    // Puter.js loads dynamically — poll until the global is available
    console.log('Starting Puter.js readiness check...');
    const check = setInterval(() => {
      if (window.puter) {
        console.log('window.puter found!', Object.keys(window.puter));
        if (window.puter.ai) {
          console.log('window.puter.ai found! Marking ready.');
          setPuterReady(true);
          clearInterval(check);
        }
      }
    }, 500);
    const timeout = setTimeout(() => {
      clearInterval(check);
      console.log('Puter.js readiness check timed out. window.puter:', !!window.puter);
      // Mark ready anyway if puter object exists — auth will happen on first call
      if (window.puter) {
        setPuterReady(true);
      }
    }, 30000);
    return () => { clearInterval(check); clearTimeout(timeout); };
  }, []);

  useEffect(() => {
    chatMessagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages, chatLoading]);

  // Close the inline example panel when navigating to a different card
  useEffect(() => {
    setExamplePanelOpen(false);
    setExampleContent('');
    setExampleWord('');
  }, [currentCardIndex, currentWritingIndex, currentLearnIndex]);

  const CHAT_SYSTEM_PROMPT = `You are a Chinese language learning assistant embedded in a vocabulary study app. Your role is to help the user practice and deepen their understanding of Mandarin Chinese.

Core behaviors:
- When given a Chinese word or phrase, provide: pinyin, English meaning, 2-3 example sentences (with pinyin and translation), and usage notes
- When asked for example sentences on a topic, provide natural Chinese sentences at an intermediate level with pinyin and English translations
- Explain grammar patterns clearly with examples
- Compare similar words/characters and explain nuances
- If the user writes in Chinese, gently correct any errors and explain the correction
- Keep explanations concise but thorough
- Use simplified Chinese characters by default
- When showing example sentences, format them clearly:
  Chinese: 我喜欢学习中文。
  Pinyin: Wǒ xǐhuān xuéxí zhōngwén.
  English: I like studying Chinese.

You can also help with: chengyu (成语) explanations, character decomposition, tone practice, HSK vocabulary, contextual usage differences, and cultural context. Be encouraging and supportive.`;

  const CHAT_MODELS = [
    { id: 'google/gemini-2.5-flash', label: 'Gemini 2.5 Flash', desc: 'Fast, recommended' },
    { id: 'gpt-5-nano', label: 'GPT-5 Nano', desc: 'Fast, lightweight' },
    { id: 'z-ai/glm-5', label: 'GLM-5', desc: 'Great Chinese support' },
    { id: 'meta-llama/llama-4-maverick', label: 'Llama 4 Maverick', desc: 'Strong all-around' },
    { id: 'deepseek/deepseek-r1', label: 'DeepSeek R1', desc: 'Great reasoning' },
  ];

  const CHAT_SUGGESTED = [
    "Give me 3 example sentences using 虽然...但是...",
    "What's the difference between 会, 能, and 可以?",
    "Explain the chengyu 画蛇添足",
    "How do I use 把 sentences?",
  ];

  // Simple markdown renderer for AI responses
  const renderMarkdown = (text) => {
    if (!text) return null;
    const lines = text.split('\n');
    return lines.map((line, i) => {
      const processInline = (str) => {
        const parts = [];
        let remaining = str;
        let key = 0;
        while (remaining.length > 0) {
          const boldMatch = remaining.match(/\*\*(.+?)\*\*/);
          const codeMatch = remaining.match(/`([^`]+)`/);
          let earliest = null;
          let type = null;
          if (boldMatch && (!earliest || boldMatch.index < earliest.index)) { earliest = boldMatch; type = 'bold'; }
          if (codeMatch && (!earliest || codeMatch.index < earliest.index)) { earliest = codeMatch; type = 'code'; }
          if (!earliest) { parts.push(remaining); break; }
          if (earliest.index > 0) parts.push(remaining.substring(0, earliest.index));
          const content = earliest[1] || earliest[2];
          if (type === 'bold') parts.push(<strong key={key++} style={{ fontWeight: 600 }}>{content}</strong>);
          else if (type === 'code') parts.push(<code key={key++} style={{ background: 'rgba(0,0,0,0.08)', padding: '1px 5px', borderRadius: 3, fontSize: '0.85em', fontFamily: 'monospace' }}>{content}</code>);
          remaining = remaining.substring(earliest.index + earliest[0].length);
        }
        return parts;
      };
      if (line.startsWith('### ')) return <div key={i} style={{ fontWeight: 700, marginTop: 8, marginBottom: 4, fontSize: '0.9em' }}>{processInline(line.slice(4))}</div>;
      if (line.startsWith('## ')) return <div key={i} style={{ fontWeight: 700, marginTop: 8, marginBottom: 4 }}>{processInline(line.slice(3))}</div>;
      if (line.startsWith('# ')) return <div key={i} style={{ fontWeight: 700, marginTop: 8, marginBottom: 4 }}>{processInline(line.slice(2))}</div>;
      if (line.trim() === '') return <div key={i} style={{ height: 6 }} />;
      if (/^\d+[\.\)]\s/.test(line)) return <div key={i} style={{ marginLeft: 8 }}>{processInline(line)}</div>;
      if (/^[-•]\s/.test(line)) return <div key={i} style={{ marginLeft: 8 }}>{processInline(line)}</div>;
      return <div key={i}>{processInline(line)}</div>;
    });
  };

  const [chatSidebarOpen, setChatSidebarOpen] = useState(false);

  const openChat = () => {
    setChatSidebarOpen(true);
  };

  const ChatFAB = () => chatSidebarOpen ? null : (
    <button
      onClick={openChat}
      className="fixed bottom-6 right-6 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 active:scale-95 transition-all z-50"
      style={{ background: 'linear-gradient(135deg, #e11d48, #be123c)', boxShadow: '0 4px 20px rgba(225,29,72,0.4)' }}
      title="AI Chinese Tutor"
    >
      <MessageCircle size={24} />
    </button>
  );

  // Chat sidebar overlay component — always rendered in the DOM when open to prevent flicker on state updates
  const ChatSidebar = () => {
    // Keep in DOM once opened; hide with pointer-events:none + opacity when closed
    // This prevents the sidebar from unmounting/remounting on every state update
    // (e.g. puterReady flip, sync status changes) which caused the open/close flicker
    return (
      <React.Fragment>
        {/* Backdrop — only shown when open */}
        <div
          onClick={() => setChatSidebarOpen(false)}
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', zIndex: 998,
            transition: 'opacity 0.25s',
            opacity: chatSidebarOpen ? 1 : 0,
            pointerEvents: chatSidebarOpen ? 'auto' : 'none',
          }}
        />
        {/* Sidebar panel */}
        <div style={{
          position: 'fixed', top: 0, right: 0, bottom: 0,
          width: '100%', maxWidth: 420,
          background: '#0d0d1a',
          zIndex: 999,
          display: 'flex', flexDirection: 'column',
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          boxShadow: '-8px 0 30px rgba(0,0,0,0.5)',
          transform: chatSidebarOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.25s ease-out',
          pointerEvents: chatSidebarOpen ? 'auto' : 'none',
        }}>
          <style>{`
            @keyframes chatBounce { 0%, 60%, 100% { transform: translateY(0); opacity: 0.4; } 30% { transform: translateY(-6px); opacity: 1; } }
            .chat-scroll::-webkit-scrollbar { width: 4px; }
            .chat-scroll::-webkit-scrollbar-track { background: transparent; }
            .chat-scroll::-webkit-scrollbar-thumb { background: rgba(225,29,72,0.3); border-radius: 4px; }
          `}</style>

          {/* Header */}
          <div style={{ padding: '12px 16px', borderBottom: '1px solid rgba(225,29,72,0.15)', background: 'rgba(225,29,72,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 34, height: 34, borderRadius: 10, background: 'linear-gradient(135deg, #e11d48, #be123c)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 17 }}>中</div>
              <div>
                <div style={{ color: '#fff', fontWeight: 600, fontSize: 14 }}>Chinese Tutor</div>
                <div style={{ fontSize: 11, color: puterReady ? '#4ade80' : (window.puter ? '#fbbf24' : '#888') }}>
                  {puterReady ? '● Online' : (window.puter ? '● Ready' : '● Loading...')}
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 4 }}>
              <button onClick={() => setChatShowSettings(!chatShowSettings)} style={{ background: 'transparent', border: 'none', color: '#aaa', cursor: 'pointer', padding: '6px 8px', borderRadius: 8, fontSize: 16 }} title="Settings">⚙️</button>
              <button onClick={() => { setChatMessages([]); chatInputRef.current?.focus(); }} style={{ background: 'transparent', border: 'none', color: '#aaa', cursor: 'pointer', padding: '6px 8px', borderRadius: 8, fontSize: 16 }} title="Clear">🗑️</button>
              <button onClick={() => setChatSidebarOpen(false)} style={{ background: 'transparent', border: 'none', color: '#aaa', cursor: 'pointer', padding: '6px 8px', borderRadius: 8, fontSize: 18 }} title="Close">✕</button>
            </div>
          </div>

          {/* Settings */}
          {chatShowSettings && (
            <div style={{ padding: '10px 16px', borderBottom: '1px solid rgba(225,29,72,0.15)', background: 'rgba(26,26,46,0.95)' }}>
              <div style={{ fontSize: 10, fontWeight: 600, color: '#888', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.08em' }}>AI Model</div>
              {CHAT_MODELS.map(m => (
                <button key={m.id} onClick={() => { setChatModel(m.id); setChatShowSettings(false); }}
                  style={{ display: 'block', width: '100%', textAlign: 'left', padding: '6px 10px', marginBottom: 3, border: chatModel === m.id ? '1px solid rgba(225,29,72,0.5)' : '1px solid transparent', borderRadius: 8, background: chatModel === m.id ? 'rgba(225,29,72,0.15)' : 'transparent', color: '#e8e8f0', cursor: 'pointer' }}>
                  <div style={{ fontSize: 13, fontWeight: 500 }}>{m.label}</div>
                  <div style={{ fontSize: 11, color: '#777', marginTop: 1 }}>{m.desc}</div>
                </button>
              ))}
            </div>
          )}

          {/* Eduroam warning banner — pinned above scroll area */}
          {!puterReady && (
            <div style={{ flexShrink: 0, margin: '0', padding: '9px 14px', background: 'rgba(251,191,36,0.1)', borderBottom: '1px solid rgba(251,191,36,0.3)', fontSize: 12, color: '#fbbf24', lineHeight: 1.5 }}>
              ⚠️ <strong>AI is still loading.</strong> On eduroam? AI may be blocked — try switching to <strong>hotspot</strong>, using a <strong>VPN</strong>, or changing your <strong>DNS</strong> (e.g. 8.8.8.8).
            </div>
          )}

          {/* Messages */}
          <div className="chat-scroll" style={{ flex: 1, overflowY: 'auto', padding: '16px 14px' }}>
            {chatMessages.length === 0 && (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', textAlign: 'center', padding: '20px 10px' }}>
                <div style={{ fontSize: 48, fontWeight: 700, background: 'linear-gradient(135deg, #e11d48, #fb7185)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: 8 }}>你好</div>
                <p style={{ color: '#777', fontSize: 13, maxWidth: 260, lineHeight: 1.5, marginBottom: 16 }}>Ask me about vocabulary, grammar, example sentences, or anything Chinese!</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, justifyContent: 'center', maxWidth: 360 }}>
                  {CHAT_SUGGESTED.map((prompt, i) => (
                    <button key={i} onClick={() => sendChatMessage(prompt)}
                      style={{ padding: '6px 12px', borderRadius: 20, border: '1px solid rgba(225,29,72,0.25)', background: 'rgba(225,29,72,0.08)', color: '#bbb', fontSize: 11, cursor: 'pointer' }}>
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {chatMessages.map((msg, i) => (
              <div key={i} style={{ display: 'flex', marginBottom: 10, justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start' }}>
                {msg.role === 'assistant' && (
                  <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'linear-gradient(135deg, #e11d48, #be123c)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 13, marginRight: 8, flexShrink: 0, marginTop: 2 }}>字</div>
                )}
                <div style={{
                  maxWidth: '80%', padding: '8px 12px', fontSize: 13, lineHeight: 1.6,
                  borderRadius: msg.role === 'user' ? '14px 14px 4px 14px' : '14px 14px 14px 4px',
                  background: msg.role === 'user' ? 'linear-gradient(135deg, #e11d48, #be123c)' : '#1a1a2e',
                  color: msg.role === 'user' ? '#fff' : '#e0e0ec',
                  border: msg.role === 'user' ? 'none' : '1px solid rgba(225,29,72,0.15)',
                  wordBreak: 'break-word',
                }}>
                  {msg.role === 'user' ? msg.content : renderMarkdown(msg.content)}
                </div>
              </div>
            ))}

            {chatLoading && (
              <div style={{ display: 'flex', marginBottom: 10, justifyContent: 'flex-start' }}>
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'linear-gradient(135deg, #e11d48, #be123c)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 13, marginRight: 8, flexShrink: 0 }}>字</div>
                <div style={{ padding: '10px 14px', borderRadius: '14px 14px 14px 4px', background: '#1a1a2e', border: '1px solid rgba(225,29,72,0.15)' }}>
                  <div style={{ display: 'flex', gap: 4 }}>
                    {[0,1,2].map(j => (<div key={j} style={{ width: 6, height: 6, borderRadius: '50%', background: '#e11d48', animation: `chatBounce 1.2s ease-in-out ${j*0.15}s infinite`, opacity: 0.5 }} />))}
                  </div>
                </div>
              </div>
            )}
            <div ref={chatMessagesEndRef} />
          </div>

          {/* Input */}
          <div style={{ padding: '10px 14px', borderTop: '1px solid rgba(225,29,72,0.15)', background: 'rgba(13,13,26,0.95)', flexShrink: 0 }}>
            <div style={{ display: 'flex', gap: 8, alignItems: 'flex-end' }}>
              <textarea
                ref={chatInputRef}
                defaultValue=""
                onKeyDown={e => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    const val = chatInputRef.current?.value?.trim();
                    if (val && !chatLoading) {
                      sendChatMessage(val);
                      if (chatInputRef.current) { chatInputRef.current.value = ''; chatInputRef.current.style.height = '38px'; }
                    }
                  }
                }}
                placeholder="Ask about Chinese..." rows={1}
                style={{ flex: 1, padding: '8px 12px', borderRadius: 10, border: '1px solid rgba(225,29,72,0.2)', background: '#1a1a2e', color: '#e8e8f0', fontSize: 14, fontFamily: 'inherit', resize: 'none', outline: 'none', minHeight: 38, maxHeight: 100 }}
                onInput={e => { e.target.style.height = 'auto'; e.target.style.height = Math.min(e.target.scrollHeight, 100) + 'px'; }}
              />
              <button
                onClick={() => {
                  const val = chatInputRef.current?.value?.trim();
                  if (val && !chatLoading) {
                    sendChatMessage(val);
                    if (chatInputRef.current) { chatInputRef.current.value = ''; chatInputRef.current.style.height = '38px'; }
                  }
                }}
                disabled={chatLoading}
                style={{ width: 38, height: 38, borderRadius: 10, border: 'none', background: !chatLoading ? 'linear-gradient(135deg, #e11d48, #be123c)' : 'rgba(225,29,72,0.15)', color: !chatLoading ? '#fff' : '#555', cursor: !chatLoading ? 'pointer' : 'not-allowed', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 16 }}>
                <SendIcon size={16} />
              </button>
            </div>
            <div style={{ fontSize: 9, color: '#555', textAlign: 'center', marginTop: 6 }}>Powered by Puter.js · Free</div>
          </div>
        </div>
      </React.Fragment>
    );
  };

  // AI-powered deck generation
  const generateAiDeck = async () => {
    if (!aiDeckTopic.trim() || aiDeckLoading) return;
    if (!window.puter || !window.puter.ai || typeof window.puter.ai.chat !== 'function') {
      setAiDeckError('AI is still loading. Please wait a moment and try again. On eduroam? AI may be blocked — try switching to hotspot, using a VPN, or changing your DNS (e.g. 8.8.8.8).');
      return;
    }
    setAiDeckLoading(true);
    setAiDeckError('');
    setAiDeckPreview(null);

    try {
      const response = await window.puter.ai.chat([
        { role: 'system', content: `You are a Chinese vocabulary list generator. You MUST respond with ONLY a valid JSON array, nothing else. No markdown, no explanation, no backticks. Just the raw JSON array.

Each item must have exactly these fields: "chinese" (simplified characters), "pinyin" (with tone marks), "english" (concise definition).

Example response format:
[{"chinese":"你好","pinyin":"nǐ hǎo","english":"hello"},{"chinese":"谢谢","pinyin":"xièxie","english":"thank you"}]` },
        { role: 'user', content: `Generate exactly ${aiDeckCount} Chinese vocabulary items about: "${aiDeckTopic.trim()}". Level: ${aiDeckLevel}. Include a mix of nouns, verbs, adjectives, and useful phrases. Respond with ONLY the JSON array.` },
      ], { model: chatModel });

      const raw = response?.message?.content || (typeof response === 'string' ? response : '');
      // Clean up response — strip markdown fences if present
      const cleaned = raw.replace(/```json\s*/g, '').replace(/```\s*/g, '').trim();
      
      let cards;
      try {
        cards = JSON.parse(cleaned);
      } catch (parseErr) {
        // Try to extract JSON array from the response
        const match = cleaned.match(/\[[\s\S]*\]/);
        if (match) {
          cards = JSON.parse(match[0]);
        } else {
          throw new Error('Could not parse AI response as JSON. Try again.');
        }
      }

      if (!Array.isArray(cards) || cards.length === 0) {
        throw new Error('AI returned empty results. Try a different topic.');
      }

      // Validate and clean cards
      const validCards = cards.filter(c => c.chinese && c.pinyin && c.english).map(c => ({
        chinese: String(c.chinese).trim(),
        pinyin: String(c.pinyin).trim(),
        english: String(c.english).trim(),
      }));

      if (validCards.length === 0) {
        throw new Error('No valid cards in AI response. Try again.');
      }

      const deckName = aiDeckTopic.trim().charAt(0).toUpperCase() + aiDeckTopic.trim().slice(1) + ' (' + aiDeckLevel + ')';
      setAiDeckPreview({ name: deckName, cards: validCards });
      if (!puterReady) setPuterReady(true);
    } catch (err) {
      console.error('AI deck generation error:', err);
      setAiDeckError(err.message || 'Something went wrong. Try again.');
      showEduroamToast();
    } finally {
      setAiDeckLoading(false);
    }
  };

  const saveAiDeck = (name) => {
    if (!aiDeckPreview) return;
    const deckName = name || aiDeckPreview.name;
    const newDeck = {
      id: 'deck-' + Date.now() + '-' + Math.random().toString(36).slice(2, 7),
      name: deckName,
      cards: aiDeckPreview.cards.map((c, i) => ({
        id: Date.now() + i + Math.random(),
        chinese: c.chinese,
        pinyin: c.pinyin,
        english: c.english,
        known: false, lastReviewed: null, difficulty: 0,
        easeFactor: 2.5, interval: 0, repetitions: 0,
      })),
    };
    setDecks(prev => [...prev, newDeck]);
    setAiDeckPreview(null);
    setAiDeckTopic('');
    setAiDeckError('');
    alert('Deck "' + deckName + '" created with ' + newDeck.cards.length + ' cards!');
    setCurrentView('home');
  };

  // Fetch example sentences for a card inline (no navigation to chat view)
  const fetchExamples = async (card, type = 'examples') => {
    if (!card || exampleLoading) return;
    
    if (!window.puter || !window.puter.ai || typeof window.puter.ai.chat !== 'function') {
      setExampleContent('⚠️ AI is still loading. Please wait a moment and try again. On eduroam? AI may be blocked — try switching to hotspot, using a VPN, or changing your DNS (e.g. 8.8.8.8).');
      setExamplePanelOpen(true);
      return;
    }

    const wordKey = `${card.chinese}-${type}`;
    // If we already fetched this exact word+type, just show the panel
    if (exampleWord === wordKey && exampleContent && !exampleContent.startsWith('⚠️')) {
      setExamplePanelOpen(true);
      return;
    }

    setExamplePanelOpen(true);
    setExampleLoading(true);
    setExampleContent('');
    setExampleWord(wordKey);

    const prompts = {
      examples: `Give me 3 natural example sentences using the word/phrase "${card.chinese}" (${card.pinyin} - ${card.english}). For each sentence provide:
Chinese: [sentence]
Pinyin: [pinyin]
English: [translation]

Keep sentences at an intermediate level. Make them practical and useful for daily conversation.`,
      grammar: `Explain how to use "${card.chinese}" (${card.pinyin} - ${card.english}) grammatically. Cover:
1. What part of speech it is
2. Where it goes in a sentence
3. Common patterns or collocations
4. One common mistake learners make
Keep it concise with 1-2 example sentences.`,
      related: `For the word "${card.chinese}" (${card.pinyin} - ${card.english}), give me:
1. 3-4 related/similar words with pinyin and English
2. Brief note on how they differ from ${card.chinese}
Keep it concise and practical.`,
    };

    try {
      const response = await window.puter.ai.chat([
        { role: 'system', content: 'You are a concise Chinese language tutor. Give clear, practical explanations. Use simplified characters. Always include pinyin for Chinese text.' },
        { role: 'user', content: prompts[type] || prompts.examples },
      ], { model: chatModel });

      const content = response?.message?.content || (typeof response === 'string' ? response : 'Could not generate a response.');
      setExampleContent(content);
      if (!puterReady) setPuterReady(true);
    } catch (err) {
      console.error('Example fetch error:', err);
      setExampleContent(`⚠️ ${err.message || 'Something went wrong'}. Try again.`);
      showEduroamToast();
    } finally {
      setExampleLoading(false);
    }
  };

  // ==========================================
  // HANZI WRITER STROKE ORDER PANEL
  // ==========================================
  const HanziWriterPanel = ({ chinese, onClose }) => {
    const [speed, setSpeed] = React.useState(1);
    const [isAnimating, setIsAnimating] = React.useState(false);
    const speedRef = React.useRef(1);
    const writersRef = React.useRef([]);
    const isAnimatingRef = React.useRef(false);
    const generationRef = React.useRef(0);
    const containerNodeRef = React.useRef(null); // store the DOM node for recreation
    const chars = chinese ? chinese.split('') : [];

    const animateFrom = React.useCallback((i, gen) => {
      const ws = writersRef.current;
      if (gen !== generationRef.current || i >= ws.length) {
        if (gen === generationRef.current) { isAnimatingRef.current = false; setIsAnimating(false); }
        return;
      }
      if (!ws[i]) { animateFrom(i + 1, gen); return; }
      ws[i].hideCharacter({ duration: 0 });
      ws[i].animateCharacter({
        onComplete: () => animateFrom(i + 1, gen),
      });
    }, []);

    const startAnim = React.useCallback((from) => {
      const gen = ++generationRef.current;
      isAnimatingRef.current = true;
      setIsAnimating(true);
      writersRef.current.forEach((w, i) => { if (w && i >= from) w.hideCharacter({ duration: 0 }); });
      animateFrom(from, gen);
    }, [animateFrom]);

    // Creates writers into a given DOM node at the current speedRef value
    const buildWriters = React.useCallback((node) => {
      // Clear existing writers and DOM
      writersRef.current = [];
      node.innerHTML = '';
      generationRef.current++;

      let loadedCount = 0;
      const totalChars = chars.length;
      if (totalChars === 0) return;
      let animStarted = false;
      const tryStart = () => { if (!animStarted) { animStarted = true; setTimeout(() => startAnim(0), 50); } };

      chars.forEach((char) => {
        const div = document.createElement('div');
        div.style.cssText = 'display:inline-block;margin:8px;vertical-align:top;';
        node.appendChild(div);
        try {
          const writer = window.HanziWriter.create(div, char, {
            width: 150, height: 150, padding: 10,
            showOutline: true, showCharacter: false,
            strokeColor: '#e11d48', outlineColor: '#d1d5db',
            strokeAnimationSpeed: speedRef.current,
            delayBetweenStrokes: 300,
            onLoadCharDataSuccess: () => { loadedCount++; if (loadedCount >= totalChars) tryStart(); },
            onLoadCharDataError: ()  => { loadedCount++; if (loadedCount >= totalChars) tryStart(); },
          });
          writersRef.current.push(writer);
        } catch(e) {
          div.innerHTML = '<div style="width:150px;height:150px;display:flex;align-items:center;justify-content:center;font-size:64px;color:#9ca3af">' + char + '</div>';
          writersRef.current.push(null);
          loadedCount++;
          if (loadedCount >= totalChars) tryStart();
        }
      });

      setTimeout(tryStart, 4000); // safety fallback
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const containerRef = React.useCallback((node) => {
      if (!node || !window.HanziWriter) return;
      containerNodeRef.current = node;
      buildWriters(node);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const showAll = () => {
      generationRef.current++;
      isAnimatingRef.current = false;
      setIsAnimating(false);
      writersRef.current.forEach(w => w && w.showCharacter({ duration: 0.3 }));
    };
    const hideAll = () => {
      generationRef.current++;
      isAnimatingRef.current = false;
      setIsAnimating(false);
      writersRef.current.forEach(w => w && w.hideCharacter({ duration: 0.3 }));
    };
    const handleSpeed = (v) => {
      speedRef.current = v;
      setSpeed(v);
      // strokeAnimationSpeed is constructor-only — must recreate writers to apply new speed
      if (containerNodeRef.current) buildWriters(containerNodeRef.current);
    };

    return (
      <div style={{ position:'fixed', inset:0, background:'rgba(0,0,0,0.55)', display:'flex', alignItems:'center', justifyContent:'center', zIndex:9999, padding:'16px' }} onClick={onClose}>
        <div style={{ background:'#fff', borderRadius:'16px', boxShadow:'0 25px 50px rgba(0,0,0,0.25)', padding:'24px', maxWidth:'520px', width:'100%', maxHeight:'90vh', overflowY:'auto' }} onClick={e => e.stopPropagation()}>
          <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', marginBottom:'16px' }}>
            <div>
              <h3 style={{ margin:0, fontSize:'20px', fontWeight:700, color:'#1f2937' }}>Stroke Order</h3>
              <p style={{ margin:'4px 0 0', fontSize:'13px', color:'#6b7280' }}>Characters animate one at a time in order</p>
            </div>
            <button onClick={onClose} style={{ background:'none', border:'none', cursor:'pointer', color:'#9ca3af', padding:'4px' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>
          <div ref={containerRef} style={{ display:'flex', justifyContent:'center', flexWrap:'wrap', minHeight:'170px', alignItems:'center', background:'#f9fafb', borderRadius:'12px', padding:'8px', marginBottom:'16px' }} />
          <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'8px', marginBottom:'14px' }}>
            <span style={{ fontSize:'13px', color:'#6b7280', fontWeight:600 }}>Speed:</span>
            {[{l:'🐢 Slow',v:0.5},{l:'▶ Normal',v:1},{l:'⚡ Fast',v:2}].map(s => (
              <button key={s.v} onClick={() => handleSpeed(s.v)} style={{ padding:'6px 12px', borderRadius:'8px', border:'none', cursor:'pointer', fontSize:'13px', fontWeight:600, background: speed===s.v ? '#e11d48' : '#f3f4f6', color: speed===s.v ? '#fff' : '#374151' }}>{s.l}</button>
            ))}
          </div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'8px', justifyContent:'center' }}>
            <button onClick={() => startAnim(0)} style={{ background:'#e11d48', color:'#fff', border:'none', borderRadius:'8px', padding:'10px 20px', fontWeight:700, fontSize:'14px', cursor:'pointer', display:'flex', alignItems:'center', gap:'6px' }}>
              {isAnimating ? <><span style={{ display:'inline-block', width:'14px', height:'14px', border:'2px solid #fff', borderTopColor:'transparent', borderRadius:'50%', animation:'hw-spin 0.7s linear infinite' }}/> Animating…</> : '↺ Replay'}
            </button>
            <button onClick={showAll} style={{ background:'#f3f4f6', color:'#374151', border:'none', borderRadius:'8px', padding:'10px 20px', fontWeight:600, fontSize:'14px', cursor:'pointer' }}>Show All</button>
            <button onClick={hideAll} style={{ background:'#f3f4f6', color:'#374151', border:'none', borderRadius:'8px', padding:'10px 20px', fontWeight:600, fontSize:'14px', cursor:'pointer' }}>Hide All</button>
          </div>
          <p style={{ textAlign:'center', fontSize:'11px', color:'#9ca3af', marginTop:'16px', marginBottom:0 }}>Powered by Hanzi Writer · open-source stroke data</p>
        </div>
        <style>{`@keyframes hw-spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  };



  // Inline expandable panel for example sentences (used in study/writing/learn views)
  const ExamplePanel = ({ card, hideButtons = false }) => {
    if (!card) return null;

    return (
      <React.Fragment>
        {/* Action buttons — hidden in writing view where they're rendered inline above */}
        {!hideButtons && (
        <div className="flex flex-wrap gap-2 justify-center mt-4 mb-2">
          <button
            onClick={(e) => { e.stopPropagation(); fetchExamples(card, 'examples'); }}
            className="bg-gradient-to-r from-rose-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:from-rose-700 hover:to-pink-700 transition flex items-center gap-2 text-sm font-medium shadow-md"
          >
            <MessageCircle size={16} />
            Example Sentences
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); fetchExamples(card, 'grammar'); }}
            className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-violet-700 hover:to-purple-700 transition flex items-center gap-2 text-sm font-medium shadow-md"
          >
            <Brain size={16} />
            Grammar
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); fetchExamples(card, 'related'); }}
            className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-2 rounded-lg hover:from-amber-700 hover:to-orange-700 transition flex items-center gap-2 text-sm font-medium shadow-md"
          >
            <BookOpen size={16} />
            Related Words
          </button>
        </div>
        )}

        {/* Slide-up results panel */}
        {examplePanelOpen && (
          <div className="mt-3 bg-gray-50 border border-gray-200 rounded-xl shadow-inner overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 bg-gray-100 border-b border-gray-200">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">AI Tutor</span>
              <button
                onClick={(e) => { e.stopPropagation(); setExamplePanelOpen(false); }}
                className="text-gray-400 hover:text-gray-600 transition"
              >
                <X size={16} />
              </button>
            </div>
            <div className="p-4 max-h-64 overflow-y-auto">
              {exampleLoading ? (
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <div className="flex gap-1">
                    {[0,1,2].map(i => (
                      <div key={i} className="w-1.5 h-1.5 rounded-full bg-rose-400" style={{ animation: `chatBounce 1.2s ease-in-out ${i * 0.15}s infinite` }} />
                    ))}
                  </div>
                  Generating...
                </div>
              ) : (
                <div className="text-sm text-gray-700 leading-relaxed">
                  {renderMarkdown(exampleContent)}
                </div>
              )}
            </div>
          </div>
        )}

        <style>{`
          @keyframes chatBounce {
            0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
            30% { transform: translateY(-6px); opacity: 1; }
          }
        `}</style>
      </React.Fragment>
    );
  };

  const sendChatMessage = async (text) => {
    const content = text || chatInput.trim();
    if (!content || chatLoading) return;

    // Check if Puter.js has loaded
    if (!window.puter || !window.puter.ai || typeof window.puter.ai.chat !== 'function') {
      console.error('Puter.js not ready. window.puter:', window.puter, 'window.puter?.ai:', window.puter?.ai);
      setChatMessages(prev => [...prev, 
        { role: 'user', content },
        { role: 'assistant', content: '⚠️ Puter.js is still loading. Please wait a few seconds and try again. If this persists, try refreshing the page.\n\nOn eduroam? AI may be blocked — try switching to hotspot, using a VPN, or changing your DNS (e.g. 8.8.8.8).\n\n(Check browser console for details — look for "Puter.js loaded successfully" message)' }
      ]);
      setChatInput('');
      return;
    }

    const userMsg = { role: 'user', content };
    const newMessages = [...chatMessages, userMsg];
    setChatMessages(newMessages);
    setChatInput('');
    setChatLoading(true);

    try {
      // Build context about current deck if one is selected
      let contextNote = '';
      if (selectedDeck) {
        const deck = decks.find(d => d.id === selectedDeck);
        if (deck) {
          const sampleWords = deck.cards.slice(0, 15).map(c => `${c.chinese} (${c.pinyin}) - ${c.english}`).join(', ');
          contextNote = `\n\nThe user is currently studying a deck called "${deck.name}" with ${deck.cards.length} cards. Sample vocabulary: ${sampleWords}. When relevant, use words from this deck in your examples.`;
        }
      }

      const apiMessages = [
        { role: 'system', content: CHAT_SYSTEM_PROMPT + contextNote },
        ...newMessages.map(m => ({ role: m.role, content: m.content })),
      ];

      // This call will auto-trigger Puter auth popup if user isn't authenticated yet
      const response = await window.puter.ai.chat(apiMessages, { model: chatModel });
      const assistantContent = response?.message?.content || (typeof response === 'string' ? response : 'Sorry, I couldn\'t generate a response. Please try again.');

      // Mark as ready after first successful call
      if (!puterReady) setPuterReady(true);

      setChatMessages(prev => [...prev, { role: 'assistant', content: assistantContent }]);
    } catch (err) {
      console.error('Chat error:', err);
      setChatMessages(prev => [...prev, { role: 'assistant', content: `⚠️ Error: ${err.message || 'Something went wrong'}. Try again or switch models in settings.` }]);
      showEduroamToast();
    } finally {
      setChatLoading(false);
      chatInputRef.current?.focus();
    }
  };

  // Text-to-speech for Chinese pronunciation
  const speakChinese = (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'zh-CN';
      utterance.rate = 0.8;
      window.speechSynthesis.cancel(); // Cancel any ongoing speech
      window.speechSynthesis.speak(utterance);
    } else {
      alert('Text-to-speech not supported in this browser');
    }
  };

  // Initialize Learn Mode
  const startLearnMode = (deck) => {
    setLastStudied(prev => ({...prev, [deck.id]: { timestamp: Date.now(), mode: 'learn' }}));
    // Prioritize cards that need review (based on difficulty and last reviewed)
    const sortedCards = [...deck.cards].sort((a, b) => {
      // Cards never reviewed come first
      if (!a.lastReviewed && b.lastReviewed) return -1;
      if (a.lastReviewed && !b.lastReviewed) return 1;
      
      // Then by difficulty (higher difficulty = needs more practice)
      if (a.difficulty !== b.difficulty) return b.difficulty - a.difficulty;
      
      // Then by last reviewed (older first)
      return (a.lastReviewed || 0) - (b.lastReviewed || 0);
    });

    setSelectedDeck(deck);
    setAllLearnCards(sortedCards);
    
    // Check for saved progress for this deck
    const saved = learnProgress[deck.id];
    let resumeRound = 1;
    let resumeAtTyping = false;
    
    if (saved) {
      if (saved.pendingTypingRound) {
        // MC was completed for this round, resume at typing phase
        resumeRound = saved.pendingTypingRound;
        resumeAtTyping = true;
      } else if (saved.completedRound > 0 && saved.completedRound * 10 < sortedCards.length) {
        // Resume from the next round after the last completed one
        resumeRound = saved.completedRound + 1;
      }
    }

    // Get the cards for the current round
    const startIdx = (resumeRound - 1) * 10;
    const endIdx = Math.min(startIdx + 10, sortedCards.length);
    const roundCards = sortedCards.slice(startIdx, endIdx);
    
    // Initialize card progress tracking
    const progress = {};
    // Mark cards from completed rounds as done
    const completedUpTo = saved ? (saved.completedRound || 0) : 0;
    if (completedUpTo > 0) {
      const completedCards = sortedCards.slice(0, completedUpTo * 10);
      completedCards.forEach(card => {
        progress[card.id] = 'done';
      });
    }
    
    if (resumeAtTyping) {
      // MC was already done for these cards - set them to typing phase
      roundCards.forEach(card => {
        progress[card.id] = 'typing';
      });
    } else {
      // Current round cards start with MC
      roundCards.forEach(card => {
        progress[card.id] = 'mc';
      });
    }

    setCurrentRound(resumeRound);
    setRoundComplete(false);
    setCardProgress(progress);
    
    if (resumeAtTyping) {
      // Start directly in typing phase
      setLearnCards(roundCards);
      setCurrentLearnIndex(0);
      setLearnMode('fill-blank');
    } else {
      setLearnCards(roundCards);
      setCurrentLearnIndex(0);
      setLearnMode('multiple-choice');
      if (roundCards.length > 0) {
        generateMultipleChoiceOptions(roundCards[0], deck.cards);
      }
    }
    
    setShowAnswer(false);
    setUserAnswer('');
    setAnswerResult(null);
    setSelectedOption(null);
    setCurrentView('learn');
  };

  // Generate multiple choice options
  const generateMultipleChoiceOptions = (correctCard, allCards) => {
    const options = [correctCard.english];
    const otherCards = allCards.filter(c => c.id !== correctCard.id);
    
    while (options.length < 4 && otherCards.length > 0) {
      const randomIndex = Math.floor(Math.random() * otherCards.length);
      const option = otherCards[randomIndex].english;
      if (!options.includes(option)) {
        options.push(option);
      }
      otherCards.splice(randomIndex, 1);
    }
    
    // Shuffle options
    setMultipleChoiceOptions(options.sort(() => Math.random() - 0.5));
  };

  // Convert pinyin with numbers to tone marks (e.g., "ni3 ha3o" -> "nǐ hǎo")
  const convertNumbersToTones = (pinyin) => {
    const toneMap = {
      'a1': 'ā', 'a2': 'á', 'a3': 'ǎ', 'a4': 'à',
      'e1': 'ē', 'e2': 'é', 'e3': 'ě', 'e4': 'è',
      'i1': 'ī', 'i2': 'í', 'i3': 'ǐ', 'i4': 'ì',
      'o1': 'ō', 'o2': 'ó', 'o3': 'ǒ', 'o4': 'ò',
      'u1': 'ū', 'u2': 'ú', 'u3': 'ǔ', 'u4': 'ù',
      'ü1': 'ǖ', 'ü2': 'ǘ', 'ü3': 'ǚ', 'ü4': 'ǜ',
      'v1': 'ǖ', 'v2': 'ǘ', 'v3': 'ǚ', 'v4': 'ǜ'
    };

    let result = pinyin.toLowerCase();
    
    // Replace tone numbers with tone marks
    for (const [key, value] of Object.entries(toneMap)) {
      result = result.replace(new RegExp(key, 'g'), value);
    }
    
    // Remove remaining numbers (neutral tone)
    result = result.replace(/[0-9]/g, '');
    
    return result;
  };

  // Normalize pinyin for comparison (accepts both tone marks and numbers)
  const normalizePinyin = (pinyin) => {
    // Convert numbers to tone marks first
    const withTones = convertNumbersToTones(pinyin);
    // Remove all spaces and convert to lowercase
    return withTones.toLowerCase().replace(/\s+/g, '');
  };

  // Check answer in Learn Mode
  const checkAnswer = () => {
    const currentCard = learnCards[currentLearnIndex];
    let isCorrect = false;
    let quality = 0;

    if (learnMode === 'multiple-choice') {
      isCorrect = selectedOption === currentCard.english;
      quality = isCorrect ? 5 : 1;
    } else if (learnMode === 'fill-blank') {
      // Normalize both the user's answer and the correct answer
      const normalizedAnswer = normalizePinyin(userAnswer);
      const normalizedCorrect = normalizePinyin(currentCard.pinyin);
      isCorrect = normalizedAnswer === normalizedCorrect;
      quality = isCorrect ? 4 : 2;
    }

    setAnswerResult(isCorrect ? 'correct' : 'incorrect');
    updateCardWithSpacedRepetition(selectedDeck.id, currentCard.id, quality, userSettings.flashcard.srOffset);
    const newProgress = { ...cardProgress };
    
    if (learnMode === 'multiple-choice') {
      if (isCorrect) {
        // Mark as ready for typing phase
        newProgress[currentCard.id] = 'typing';
      } else {
        // Keep in MC phase
        newProgress[currentCard.id] = 'mc';
      }
    } else if (learnMode === 'fill-blank') {
      if (isCorrect) {
        // Completed both phases successfully
        newProgress[currentCard.id] = 'done';
      } else {
        // Failed typing, need to redo from MC
        newProgress[currentCard.id] = 'mc';
      }
    }
    
    setCardProgress(newProgress);
    
    // Update difficulty for adaptive progression
    const updatedDecks = decks.map(deck => {
      if (deck.id === selectedDeck.id) {
        return {
          ...deck,
          cards: deck.cards.map(card => {
            if (card.id === currentCard.id) {
              return { ...card, difficulty: isCorrect ? Math.max(0, card.difficulty - 1) : Math.min(5, card.difficulty + 1) };
            }
            return card;
          })
        };
      }
      return deck;
    });
    setDecks(updatedDecks);

    setShowAnswer(true);
  };

  // Progress to next question in Learn Mode (Quizlet-style)
  const nextLearnCard = () => {
    const currentCard = learnCards[currentLearnIndex];
    
    // In MC phase: go through all cards with MC
    if (learnMode === 'multiple-choice') {
      // If the current card was answered WRONG, re-queue it later in the MC list
      if (cardProgress[currentCard.id] === 'mc') {
        const newLearnCards = [...learnCards];
        // Insert the failed card 3-5 positions ahead (or at end)
        const reinsertOffset = Math.floor(Math.random() * 3) + 3;
        const reinsertPosition = Math.min(currentLearnIndex + reinsertOffset, newLearnCards.length);
        newLearnCards.splice(reinsertPosition, 0, { ...currentCard });
        setLearnCards(newLearnCards);
      }
      
      if (currentLearnIndex < learnCards.length - 1) {
        // Move to next card in MC phase
        const nextIndex = currentLearnIndex + 1;
        setCurrentLearnIndex(nextIndex);
        setShowAnswer(false);
        setUserAnswer('');
        setSelectedOption(null);
        setAnswerResult(null);
        // Use updated learnCards if we just re-queued
        const nextCards = cardProgress[currentCard.id] === 'mc' 
          ? [...learnCards, { ...currentCard }] // approximate - state updates are batched
          : learnCards;
        generateMultipleChoiceOptions(learnCards[nextIndex] || currentCard, selectedDeck.cards);
      } else {
        // Finished all MC questions (including re-queued ones)
        // Save MC phase completion so user can resume at typing if they leave
        saveLearnPhaseComplete('mc');
        
        // Now start typing phase with all cards that passed MC
        // Get unique cards that are ready for typing (use the current round's cards from allLearnCards)
        const currentRoundStart = (currentRound - 1) * 10;
        const currentRoundEnd = Math.min(currentRoundStart + 10, allLearnCards.length);
        const currentRoundCards = allLearnCards.slice(currentRoundStart, currentRoundEnd);
        const cardsForTyping = currentRoundCards.filter(card => cardProgress[card.id] === 'typing');
        
        if (cardsForTyping.length > 0) {
          // Switch to typing phase with cards that passed MC
          setLearnCards(cardsForTyping);
          setCurrentLearnIndex(0);
          setLearnMode('fill-blank');
          setShowAnswer(false);
          setUserAnswer('');
          setSelectedOption(null);
          setAnswerResult(null);
        } else {
          // No cards ready for typing - this shouldn't happen since wrong MC cards get re-queued
          // But just in case, round complete
          saveLearnRoundComplete();
          setRoundComplete(true);
        }
      }
    } 
    // In typing phase: go through cards that passed MC
    else if (learnMode === 'fill-blank') {
      // If the current card was answered WRONG in typing, re-queue it later
      if (cardProgress[currentCard.id] === 'mc') {
        const newLearnCards = [...learnCards];
        const reinsertOffset = Math.floor(Math.random() * 3) + 3;
        const reinsertPosition = Math.min(currentLearnIndex + reinsertOffset, newLearnCards.length);
        newLearnCards.splice(reinsertPosition, 0, { ...currentCard });
        setLearnCards(newLearnCards);
      }
      
      if (currentLearnIndex < learnCards.length - 1) {
        // Move to next card in typing phase
        const nextIndex = currentLearnIndex + 1;
        setCurrentLearnIndex(nextIndex);
        setShowAnswer(false);
        setUserAnswer('');
        setSelectedOption(null);
        setAnswerResult(null);
      } else {
        // Finished typing phase
        // Check if any cards in this round still need work
        const currentRoundStart = (currentRound - 1) * 10;
        const currentRoundEnd = Math.min(currentRoundStart + 10, allLearnCards.length);
        const currentRoundCards = allLearnCards.slice(currentRoundStart, currentRoundEnd);
        const failedCards = currentRoundCards.filter(card => cardProgress[card.id] !== 'done');
        
        if (failedCards.length > 0) {
          // Retry failed cards with MC
          setLearnCards(failedCards);
          setCurrentLearnIndex(0);
          setLearnMode('multiple-choice');
          setShowAnswer(false);
          setUserAnswer('');
          setSelectedOption(null);
          setAnswerResult(null);
          generateMultipleChoiceOptions(failedCards[0], selectedDeck.cards);
        } else {
          // All cards passed! Round complete - save progress
          saveLearnRoundComplete();
          setRoundComplete(true);
        }
      }
    }
  };

  // Save learn round/phase progress for the current deck
  const saveLearnPhaseComplete = (phase) => {
    // phase: 'mc' (just finished MC), 'full' (finished both MC and typing)
    if (!selectedDeck) return;
    const totalCards = allLearnCards.length;
    const isFullyComplete = phase === 'full' && currentRound * 10 >= totalCards;
    
    if (isFullyComplete) {
      // All rounds done - clear saved progress so next time starts fresh
      setLearnProgress(prev => {
        const updated = { ...prev };
        delete updated[selectedDeck.id];
        return updated;
      });
    } else {
      setLearnProgress(prev => ({
        ...prev,
        [selectedDeck.id]: { 
          completedRound: phase === 'full' ? currentRound : currentRound - 1,
          // If MC just finished, save that we're mid-round at the typing phase
          pendingTypingRound: phase === 'mc' ? currentRound : null
        }
      }));
    }
  };
  
  // Backwards-compatible alias
  const saveLearnRoundComplete = () => saveLearnPhaseComplete('full');

  // Start next round of 10 cards
  const startNextRound = () => {
    const startIdx = currentRound * 10;
    const endIdx = Math.min(startIdx + 10, allLearnCards.length);
    const nextRoundCards = allLearnCards.slice(startIdx, endIdx);
    
    if (nextRoundCards.length === 0) {
      // No more cards
      alert('Congratulations! You\'ve completed all cards!');
      setCurrentView('home');
      return;
    }
    
    // Initialize progress for new round cards - all start with MC
    const newProgress = { ...cardProgress };
    nextRoundCards.forEach(card => {
      newProgress[card.id] = 'mc';
    });
    setCardProgress(newProgress);
    
    setLearnCards(nextRoundCards);
    setCurrentRound(currentRound + 1);
    setRoundComplete(false);
    setCurrentLearnIndex(0);
    setLearnMode('multiple-choice'); // Always start with MC phase
    setShowAnswer(false);
    setUserAnswer('');
    setSelectedOption(null);
    setAnswerResult(null);
    
    if (nextRoundCards.length > 0) {
      generateMultipleChoiceOptions(nextRoundCards[0], selectedDeck.cards);
    }
  };

  // Create new deck
  // CC-CEDICT lookup — fetches cedict.json once from GitHub Pages, caches in memory
  const cedictCacheRef = React.useRef(null);   // null = not loaded, {} = loaded
  const cedictLoadingRef = React.useRef(false); // prevent parallel fetches

  const getCedict = async () => {
    if (cedictCacheRef.current) return cedictCacheRef.current;
    if (cedictLoadingRef.current) {
      // Wait for the in-flight fetch to finish
      await new Promise(resolve => {
        const check = setInterval(() => {
          if (cedictCacheRef.current) { clearInterval(check); resolve(); }
        }, 100);
      });
      return cedictCacheRef.current;
    }
    cedictLoadingRef.current = true;
    try {
      const base = window.location.origin + window.location.pathname.replace(/\/[^\/]*$/, '/');
      const res = await fetch(base + 'cedict.json');
      if (!res.ok) throw new Error('cedict.json not found');
      cedictCacheRef.current = await res.json();
    } catch (e) {
      cedictCacheRef.current = {}; // empty = failed, don't retry
    }
    cedictLoadingRef.current = false;
    return cedictCacheRef.current;
  };

  const lookupWord = async (word) => {
    setSelectedWords(prev => {
      const next = new Map(prev);
      next.set(word, { pinyin: '', english: '', loading: true, error: null });
      return next;
    });
    try {
      const dict = await getCedict();
      const entry = dict[word];
      if (entry) {
        setSelectedWords(prev => {
          const next = new Map(prev);
          next.set(word, { pinyin: entry.p, english: entry.e, loading: false, error: null });
          return next;
        });
      } else {
        setSelectedWords(prev => {
          const next = new Map(prev);
          next.set(word, { pinyin: '', english: '', loading: false, error: 'Not found' });
          return next;
        });
      }
    } catch (e) {
      setSelectedWords(prev => {
        const next = new Map(prev);
        next.set(word, { pinyin: '', english: '', loading: false, error: 'Lookup failed' });
        return next;
      });
    }
  };

  // AI auto-select vocabulary from pasted text
  // Add/edit 课文 for a deck
  const addKewenToDeck = (deckId, kewenText) => {
    setDecks(prev => {
      const updated = prev.map(d => d.id === deckId ? { ...d, kewen: kewenText || undefined } : d);
      // Immediately flush to cloud so kewen is never lost on reload.
      if (currentUser && FIREBASE_ENABLED && cloudLoadedRef.current) {
        setTimeout(() => saveToCloud(currentUser.uid, updated), 0);
      }
      return updated;
    });
  };

  // Generate AI study guide for a deck
  const generateStudyGuide = async (deck) => {
    if (!deck || studyGuideLoading) return;
    if (!window.puter || !window.puter.ai || typeof window.puter.ai.chat !== 'function') {
      alert('AI is still loading. Please wait and try again.\n\nOn eduroam? AI may be blocked — try switching to hotspot, using a VPN, or changing your DNS (e.g. 8.8.8.8).');
      return;
    }
    setStudyGuideLoading(true);
    setStudyGuidePreview(null);

    const vocabList = deck.cards.slice(0, 50).map(c => `${c.chinese} (${c.pinyin}) - ${c.english}`).join('\n');
    const kewenSnippet = deck.kewen ? deck.kewen.substring(0, 2000) : '';

    try {
      const response = await window.puter.ai.chat([
        { role: 'system', content: `You are a Chinese language study guide creator. Create comprehensive, well-organized study guides that help students prepare for quizzes and exams. Format with clear sections using markdown headers and bold. Be thorough but concise.` },
        { role: 'user', content: `Create a study guide for a Chinese language deck called "${deck.name}".

${kewenSnippet ? `课文 (Text):\n${kewenSnippet}\n\n` : ''}Vocabulary (${deck.cards.length} words):\n${vocabList}

Please create a study guide with these sections:
1. **Key Vocabulary** - Group the most important words by category (nouns, verbs, adjectives, phrases) with usage notes
2. **Grammar Structures** - Identify and explain the key grammar patterns ${kewenSnippet ? 'used in the 课文' : 'relevant to this vocabulary'}, with example sentences
3. **Key Sentences** - ${kewenSnippet ? 'Important sentences from the 课文 with analysis' : 'Example sentences combining multiple vocabulary words'}
4. **Common Mistakes** - Mistakes learners often make with these words/patterns
5. **Quick Review** - A concise summary of the most important points to remember` },
      ], { model: chatModel });

      const content = response?.message?.content || (typeof response === 'string' ? response : 'Could not generate study guide.');
      setStudyGuidePreview({
        id: 'sg-' + Date.now(),
        deckId: deck.id,
        deckName: deck.name,
        content,
        createdAt: Date.now(),
      });
      if (!puterReady) setPuterReady(true);
    } catch (err) {
      console.error('Study guide error:', err);
      alert('Failed to generate study guide: ' + (err.message || 'Unknown error'));
      showEduroamToast();
    } finally {
      setStudyGuideLoading(false);
    }
  };

  const saveStudyGuide = () => {
    if (!studyGuidePreview) return;
    setStudyGuides(prev => [studyGuidePreview, ...prev]);
    setStudyGuidePreview(null);
  };

  const deleteStudyGuide = (guideId) => {
    if (confirm('Delete this study guide?')) {
      setStudyGuides(prev => prev.filter(g => g.id !== guideId));
    }
  };

  // ==========================================
  // AI Test Practice Functions
  // ==========================================
  const getAiTestContext = () => {
    const selectedDecksData = aiTestDecks.map(id => decks.find(d => d.id === id)).filter(Boolean);
    const allVocab = selectedDecksData.flatMap(d => d.cards.map(c => `${c.chinese} (${c.pinyin}) - ${c.english}`));
    const allKewen = selectedDecksData.filter(d => d.kewen).map(d => `[${d.name}]\n${d.kewen.substring(0, 1500)}`).join('\n\n');
    return { selectedDecksData, allVocab, allKewen, deckNames: selectedDecksData.map(d => d.name).join(', ') };
  };

  const generateAiTestQuestion = async () => {
    if (aiTestLoading) return;
    if (!window.puter?.ai?.chat) { alert('AI is still loading. Please wait a moment and try again.\n\nOn eduroam? AI may be blocked — try switching to hotspot, using a VPN, or changing your DNS (e.g. 8.8.8.8).'); return; }
    setAiTestLoading(true);
    setAiTestFeedback(null);
    setAiTestAnswer('');
    const { allVocab, allKewen, deckNames } = getAiTestContext();
    const vocabSample = allVocab.sort(() => Math.random() - 0.5).slice(0, 30).join('\n');

    const modePrompts = {
      xiaokao: `You are creating a 小考 (mini quiz) question for a Chinese class.

Decks: ${deckNames}
${allKewen ? `课文:\n${allKewen.substring(0, 2000)}\n\n` : ''}Available vocabulary:\n${vocabSample}

Generate a 小考 question. Pick 5 grammar structures/vocab words from the vocabulary list. Create a prompt (a question or scenario in Chinese that a student must answer). The student will pick at least 4 of the 5 items and construct ONE coherent Chinese sentence answering the prompt using all the items they picked.

Respond in this EXACT JSON format only:
{"prompt":"[question/scenario in Chinese]","promptEnglish":"[English translation of prompt]","items":["word1","word2","word3","word4","word5"],"hint":"[brief hint about expected answer]"}`,

      quiz: `You are creating a quiz question for a Chinese class covering multiple lessons.

Decks: ${deckNames}
${allKewen ? `课文:\n${allKewen.substring(0, 2000)}\n\n` : ''}Available vocabulary:\n${vocabSample}

Generate ONE question of ${aiQuizType === 'construction' ? 'Type A' : aiQuizType === 'translation' ? 'Type B' : 'either Type A or Type B (randomly pick)'}:
- Type A (sentence construction): Pick 5 vocab/grammar items, give a prompt, student constructs a sentence using 4+ items
- Type B (translation): Give an English sentence using concepts from the vocabulary, student translates to Chinese

Respond in this EXACT JSON format only:
{"type":"A or B","prompt":"[the question]","promptEnglish":"[English version if prompt is Chinese, or same if already English]","items":["word1","word2"],"hint":"[hint]"}
For type B, items can be empty array.`,

      essay: `You are creating an essay prompt for a Chinese class.

Decks: ${deckNames}
${allKewen ? `课文:\n${allKewen.substring(0, 2000)}\n\n` : ''}Available vocabulary:\n${vocabSample}

Generate an essay prompt. Pick 15-20 vocabulary/grammar items from the list that the student should try to incorporate (at least 8). The essay should be ≥80 characters responding to the prompt.

Respond in this EXACT JSON format only:
{"prompt":"[essay prompt in Chinese]","promptEnglish":"[English translation]","items":["word1","word2","...15-20 items"],"minChars":80}`
    };

    try {
      const response = await window.puter.ai.chat([
        { role: 'system', content: 'You generate Chinese language test questions. Respond with ONLY valid JSON, no markdown, no backticks.' },
        { role: 'user', content: modePrompts[aiTestMode] },
      ], { model: chatModel });

      const raw = response?.message?.content || '';
      const cleaned = raw.replace(/```json\s*/g, '').replace(/```\s*/g, '').trim();
      let question;
      try { question = JSON.parse(cleaned); }
      catch { const m = cleaned.match(/\{[\s\S]*\}/); if (m) question = JSON.parse(m[0]); else throw new Error('Parse failed'); }

      setAiTestQuestion(question);
      setAiTestQuestionNum(prev => prev + 1);
      if (!puterReady) setPuterReady(true);
    } catch (err) {
      console.error('AI test question error:', err);
      alert('Failed to generate question: ' + (err.message || 'Unknown error'));
      showEduroamToast();
    } finally {
      setAiTestLoading(false);
    }
  };

  const gradeAiTestAnswer = async () => {
    if (aiTestLoading || !aiTestAnswer.trim()) return;
    if (!window.puter?.ai?.chat) return;
    setAiTestLoading(true);

    const modeContext = aiTestMode === 'essay'
      ? `This is an essay response (should be ≥${aiTestQuestion.minChars || 80} characters). Student should incorporate at least 8 of the given items.`
      : aiTestMode === 'xiaokao'
      ? 'The student should use at least 4 of the 5 given items in one coherent sentence.'
      : aiTestQuestion.type === 'B'
      ? 'The student is translating from English to Chinese.'
      : 'The student should use at least 4 of the given items in one coherent sentence.';

    try {
      const response = await window.puter.ai.chat([
        { role: 'system', content: `You are a Chinese language teacher grading student work. Be encouraging but accurate. Grade on: correctness of grammar, proper use of required vocabulary/structures, natural Chinese expression, and whether the response addresses the prompt. Give a score out of 10.

Respond in this EXACT JSON format:
{"score":8,"feedback":"[detailed feedback in English]","corrected":"[corrected Chinese version if needed]","highlights":"[what the student did well]"}` },
        { role: 'user', content: `${modeContext}

Prompt: ${aiTestQuestion.prompt}${aiTestQuestion.promptEnglish ? ` (${aiTestQuestion.promptEnglish})` : ''}
Required items: ${(aiTestQuestion.items || []).join(', ')}
Student's answer: ${aiTestAnswer}

Grade this response.` },
      ], { model: chatModel });

      const raw = response?.message?.content || '';
      const cleaned = raw.replace(/```json\s*/g, '').replace(/```\s*/g, '').trim();
      let feedback;
      try { feedback = JSON.parse(cleaned); }
      catch { const m = cleaned.match(/\{[\s\S]*\}/); if (m) feedback = JSON.parse(m[0]); else feedback = { score: '?', feedback: raw, corrected: '', highlights: '' }; }

      setAiTestFeedback(feedback);
      setAiTestScore(prev => [...prev, {
        questionNum: aiTestQuestionNum,
        mode: aiTestMode,
        question: aiTestQuestion,
        answer: aiTestAnswer,
        feedback,
      }]);
    } catch (err) {
      console.error('Grading error:', err);
      setAiTestFeedback({ score: '?', feedback: 'Grading failed: ' + (err.message || 'Unknown error'), corrected: '', highlights: '' });
      showEduroamToast();
    } finally {
      setAiTestLoading(false);
    }
  };

  // AI Test handwriting canvas functions
  const initAiTestCanvas = () => {
    const canvas = aiTestCanvasRef.current;
    const bgCanvas = aiTestBgCanvasRef.current;
    if (!canvas || !bgCanvas) return;
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    // Size both canvases identically
    [canvas, bgCanvas].forEach(c => {
      c.width = rect.width * dpr;
      c.height = rect.height * dpr;
    });
    // Background canvas: white fill + horizontal lines only (90px spacing)
    const bgCtx = bgCanvas.getContext('2d');
    bgCtx.scale(dpr, dpr);
    bgCtx.fillStyle = '#ffffff';
    bgCtx.fillRect(0, 0, rect.width, rect.height);
    bgCtx.strokeStyle = '#e5e7eb';
    bgCtx.lineWidth = 1;
    bgCtx.beginPath();
    const gridSize = 90;
    for (let y = gridSize; y < rect.height; y += gridSize) {
      bgCtx.moveTo(0, y); bgCtx.lineTo(rect.width, y);
    }
    bgCtx.stroke();
    // Foreground canvas: fully transparent, destination-out eraser works here
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, rect.width, rect.height);
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.globalCompositeOperation = 'source-over';
    aiTestDrawCtrl.current.ctx = ctx;
  };

  // Ref holds the cleanup fn for imperative touch listeners so we never leak them
  const aiTestTouchCleanupRef = useRef(null);

  useEffect(() => {
    if (!(aiTestInputMode === 'handwrite' && aiTestSetupStep === 'inProgress' && aiTestQuestion && !aiTestFeedback)) {
      return;
    }
    const t = setTimeout(() => {
      initAiTestCanvas();
      const canvas = aiTestCanvasRef.current;
      if (!canvas) return;
      // iOS Safari fires touchstart even with touch-action:none and won't suppress the
      // selection highlight unless we explicitly preventDefault (passive:false required).
      const block = (e) => e.preventDefault();
      const opts  = { passive: false };
      canvas.addEventListener('touchstart',  block, opts);
      canvas.addEventListener('touchmove',   block, opts);
      canvas.addEventListener('touchend',    block, opts);
      canvas.addEventListener('selectstart', block);
      canvas.addEventListener('contextmenu', block);
      aiTestTouchCleanupRef.current = () => {
        canvas.removeEventListener('touchstart',  block, opts);
        canvas.removeEventListener('touchmove',   block, opts);
        canvas.removeEventListener('touchend',    block, opts);
        canvas.removeEventListener('selectstart', block);
        canvas.removeEventListener('contextmenu', block);
      };
    }, 100);
    return () => {
      clearTimeout(t);
      aiTestTouchCleanupRef.current?.();
      aiTestTouchCleanupRef.current = null;
    };
  }, [aiTestInputMode, aiTestSetupStep, aiTestQuestion, aiTestFeedback, aiTestQuestionNum]);

  // Sentence canvas init — same pattern as aiTest
  useEffect(() => {
    if (!(currentView === 'sentencePractice' && sentencePracticeDeck && !sentencePracticeDeck.noKewen && sentenceInputMode === 'handwrite')) return;
    const t = setTimeout(() => {
      initSentenceCanvas();
      const canvas = sentenceCanvasRef.current;
      if (!canvas) return;
      const block = (e) => e.preventDefault();
      const opts = { passive: false };
      canvas.addEventListener('touchstart',  block, opts);
      canvas.addEventListener('touchmove',   block, opts);
      canvas.addEventListener('touchend',    block, opts);
      canvas.addEventListener('selectstart', block);
      canvas.addEventListener('contextmenu', block);
      sentenceTouchCleanupRef.current = () => {
        canvas.removeEventListener('touchstart',  block, opts);
        canvas.removeEventListener('touchmove',   block, opts);
        canvas.removeEventListener('touchend',    block, opts);
        canvas.removeEventListener('selectstart', block);
        canvas.removeEventListener('contextmenu', block);
      };
    }, 100);
    return () => {
      clearTimeout(t);
      sentenceTouchCleanupRef.current?.();
      sentenceTouchCleanupRef.current = null;
    };
  }, [currentView, sentencePracticeDeck, sentenceInputMode, sentenceIndex]);

  const aiTestCanvasPointerDown = (e) => {
    const ctrl = aiTestDrawCtrl.current;
    if (!ctrl.ctx) return;
    e.preventDefault();
    e.currentTarget.setPointerCapture(e.pointerId);
    const canvas = aiTestCanvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const scaleX = canvas.width  / dpr / rect.width;
    const scaleY = canvas.height / dpr / rect.height;
    const x = (e.clientX - rect.left) * scaleX;
    const y = (e.clientY - rect.top)  * scaleY;
    ctrl.isDrawing = true;
    ctrl.hasMoved  = false;
    ctrl.lastX = x;
    ctrl.lastY = y;
    ctrl.scaleX = scaleX;
    ctrl.scaleY = scaleY;
    ctrl.rect = rect;
    ctrl.ctx.globalCompositeOperation = ctrl.isErasing ? 'destination-out' : 'source-over';
    ctrl.ctx.strokeStyle = ctrl.isErasing ? 'rgba(0,0,0,1)' : '#1a1a1a';
    ctrl.ctx.fillStyle   = ctrl.isErasing ? 'rgba(0,0,0,1)' : '#1a1a1a';
    ctrl.ctx.lineWidth   = ctrl.isErasing ? 24 : 3;
    ctrl.ctx.beginPath();
    ctrl.ctx.moveTo(x, y);
  };

  const aiTestCanvasPointerMove = (e) => {
    const ctrl = aiTestDrawCtrl.current;
    if (!ctrl.isDrawing || !ctrl.ctx) return;

    // Collect all OS-level intermediate points via coalesced events for smooth, gap-free strokes.
    const coalesced = e.getCoalescedEvents ? e.getCoalescedEvents() : null;
    const events = (coalesced && coalesced.length > 0) ? coalesced : [e];

    // Accumulate the entire batch into one continuous path, then stroke once.
    // Stroking once per batch (not per point) eliminates visual gaps between segments
    // that appear when fast strokes produce many coalesced points per frame.
    let moved = false;
    for (const ce of events) {
      const x = (ce.clientX - ctrl.rect.left) * ctrl.scaleX;
      const y = (ce.clientY - ctrl.rect.top)  * ctrl.scaleY;
      const dx = x - ctrl.lastX, dy = y - ctrl.lastY;
      // Drop only impossibly large jumps (corrupt iOS coalesced artifact, > ~300px)
      if (dx * dx + dy * dy > 90000) continue;
      ctrl.ctx.lineTo(x, y);
      ctrl.lastX = x;
      ctrl.lastY = y;
      moved = true;
    }
    if (moved) {
      ctrl.ctx.stroke();
      // Continue the path from the current tip — no beginPath so the line stays connected
      ctrl.ctx.beginPath();
      ctrl.ctx.moveTo(ctrl.lastX, ctrl.lastY);
      ctrl.hasMoved = true;
    }
  };

  const aiTestCanvasPointerUp = (e) => {
    const ctrl = aiTestDrawCtrl.current;
    if (!ctrl.isDrawing) return;
    // Draw a dot for pure taps (no move) — handles strokes like 丶 in Chinese characters
    if (!ctrl.hasMoved && ctrl.ctx) {
      const r = ctrl.ctx.lineWidth / 2;
      ctrl.ctx.beginPath();
      ctrl.ctx.arc(ctrl.lastX, ctrl.lastY, r, 0, Math.PI * 2);
      ctrl.ctx.fill();
    }
    ctrl.isDrawing = false;
    ctrl.hasMoved  = false;
  };

  const clearAiTestCanvas = () => {
    aiTestDrawCtrl.current.isErasing = false;
    setAiTestEraserOn(false);
    initAiTestCanvas();
  };

  // Helper: export canvas as a white-background PNG data URL.
  // The AI test canvas uses a transparent background (grid lines come from CSS),
  // so a raw toDataURL() sends black-on-black (or invisible) strokes to the vision
  // model, causing hallucinations. This composites the strokes onto white first.
  const getCanvasDataUrlWithWhiteBg = (canvas) => {
    const offscreen = document.createElement('canvas');
    offscreen.width = canvas.width;
    offscreen.height = canvas.height;
    const offCtx = offscreen.getContext('2d');
    // Draw bg (white) then fg strokes — gives OCR clean black-on-white image
    const bgCanvas = aiTestBgCanvasRef.current;
    if (bgCanvas) offCtx.drawImage(bgCanvas, 0, 0);
    else { offCtx.fillStyle = '#ffffff'; offCtx.fillRect(0, 0, offscreen.width, offscreen.height); }
    offCtx.drawImage(canvas, 0, 0);
    return offscreen.toDataURL('image/png');
  };

  // ── Sentence Writing Practice helpers ─────────────────────────────────────
  const splitKewen = (text) => {
    if (!text) return [];
    // Split on sentence-ending punctuation, keep delimiter attached to the sentence
    const raw = text.split(/(?<=[。！？…]+)/).map(s => s.trim()).filter(s => s.length > 1);
    // Remove footnote markers like (1)(2) at start/end, collapse whitespace
    return raw.map(s => s.replace(/^\(\d+\)\s*/, '').replace(/\s*\(\d+\)\s*$/, '').trim()).filter(s => s.length > 1);
  };

  const getSavedSentenceSession = (deckId) => {
    try {
      const saved = localStorage.getItem('sentenceSession');
      if (!saved) return null;
      const session = JSON.parse(saved);
      return String(session.deckId) === String(deckId) ? session : null;
    } catch (e) { return null; }
  };

  const resumeSentenceSession = (deck) => {
    try {
      const session = JSON.parse(localStorage.getItem('sentenceSession'));
      if (!session || String(session.deckId) !== String(deck.id)) return;
      setSentenceResumeModal(null);
      setSentencePracticeDeck({ deck, noKewen: false });
      setSentenceQueue(session.queue);
      setSentenceIndex(Math.min(session.currentIndex, session.queue.length - 1));
      setSentenceRevealed(false);
      setSentenceAnswer('');
      setSentenceInputMode('type');
      setSentenceEraserOn(false);
      setCurrentView('sentencePractice');
      setLastStudied(prev => ({ ...prev, [deck.id]: { timestamp: Date.now(), mode: 'sentences' } }));
      // Load cached translations (no AI call needed)
      fetchSentenceTranslations(session.queue, deck.id, deck.kewen);
    } catch (e) { localStorage.removeItem('sentenceSession'); }
  };

  const startSentencePractice = (deck) => {
    if (!deck.kewen) {
      setSentencePracticeDeck({ deck, noKewen: true });
      setCurrentView('sentencePractice');
      return;
    }
    // If there's a saved session for this deck, show resume modal
    const saved = getSavedSentenceSession(deck.id);
    if (saved && saved.queue && saved.queue.length > 0) {
      setSentenceResumeModal({ deck, session: saved });
      return;
    }
    launchFreshSentencePractice(deck);
  };

  const launchFreshSentencePractice = (deck) => {
    setSentenceResumeModal(null);
    const sentences = splitKewen(deck.kewen);
    if (sentences.length === 0) { alert('No sentences found in 课文.'); return; }
    localStorage.removeItem('sentenceSession');
    setSentencePracticeDeck({ deck, noKewen: false });
    setSentenceQueue(sentences);
    setSentenceIndex(0);
    setSentenceRevealed(false);
    setSentenceAnswer('');
    setSentenceInputMode('type');
    setSentenceEraserOn(false);
    setCurrentView('sentencePractice');
    setLastStudied(prev => ({ ...prev, [deck.id]: { timestamp: Date.now(), mode: 'sentences' } }));
    fetchSentenceTranslations(sentences, deck.id, deck.kewen);
  };

  const fetchSentenceTranslations = async (sentences, deckId, kewen) => {
    // Simple hash: sum of char codes of the kewen string, fast and good enough for cache invalidation
    const kewenHash = kewen ? String(kewen.split('').reduce((acc, c) => (acc + c.charCodeAt(0)) & 0xfffffff, 0)) : '0';
    const cacheKey = `sentenceTrans_${deckId}`;

    // Check localStorage cache first
    try {
      const cached = localStorage.getItem(cacheKey);
      if (cached) {
        const { hash, translations } = JSON.parse(cached);
        if (hash === kewenHash) {
          setSentenceTranslations(translations);
          setSentenceTransLoading(false);
          return; // cache hit — no AI call needed
        }
      }
    } catch (e) { /* ignore parse errors, fall through to fetch */ }

    // Cache miss or stale — fetch from AI
    setSentenceTransLoading(true);
    setSentenceTranslations({});
    try {
      if (!window.puter || !window.puter.ai) throw new Error('Puter not ready');
      const list = sentences.map((s, i) => `${i+1}. ${s}`).join('\n');
      const response = await window.puter.ai.chat([
        { role: 'system', content: 'You are a Chinese-English translator. The user will send a numbered list of Chinese sentences. Respond ONLY with a JSON object where each key is the sentence number (as a string) and each value is the English translation. No markdown, no extra text, just the raw JSON.' },
        { role: 'user', content: `Translate each sentence into natural English:\n${list}` }
      ], { model: 'claude-sonnet-4-20250514' });
      const raw = response?.message?.content?.[0]?.text || response?.message?.content || '';
      const clean = raw.replace(/```json|```/g, '').trim();
      const parsed = JSON.parse(clean);
      const map = {};
      sentences.forEach((s, i) => { map[s] = parsed[String(i+1)] || ''; });
      setSentenceTranslations(map);
      // Save to localStorage cache
      try {
        localStorage.setItem(cacheKey, JSON.stringify({ hash: kewenHash, translations: map }));
      } catch (e) { /* storage full — not fatal */ }
    } catch (err) {
      console.error('Sentence translation error:', err);
      showEduroamToast();
      const fallback = {};
      sentences.forEach(s => { fallback[s] = '(Translation unavailable — check AI connection)'; });
      setSentenceTranslations(fallback);
      // Don't cache failures so next open retries
    } finally {
      setSentenceTransLoading(false);
    }
  };

  const shuffleSentences = () => {
    setSentenceQueue(q => [...q].sort(() => Math.random() - 0.5));
    setSentenceIndex(0);
    setSentenceRevealed(false);
    setSentenceAnswer('');
    clearSentenceCanvas();
  };

  const sentenceForgot = () => {
    setSentenceQueue(q => {
      const next = [...q];
      const current = next[sentenceIndex];
      const remaining = next.length - sentenceIndex - 1;
      const offset = Math.max(3, Math.floor(remaining * 0.25) + Math.floor(Math.random() * 2));
      const insertAt = Math.min(sentenceIndex + offset, next.length);
      next.splice(insertAt, 0, current);
      return next;
    });
    advanceSentence();
  };

  const advanceSentence = () => {
    setSentenceIndex(i => {
      const next = i + 1;
      return next >= sentenceQueue.length ? 0 : next;
    });
    setSentenceRevealed(false);
    setSentenceAnswer('');
    clearSentenceCanvas();
  };

  // Sentence canvas — mirrors aiTest canvas exactly
  const initSentenceCanvas = () => {
    const canvas = sentenceCanvasRef.current;
    const bgCanvas = sentenceBgCanvasRef.current;
    if (!canvas || !bgCanvas) return;
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    [canvas, bgCanvas].forEach(c => { c.width = rect.width * dpr; c.height = rect.height * dpr; });
    const bgCtx = bgCanvas.getContext('2d');
    bgCtx.scale(dpr, dpr);
    bgCtx.fillStyle = '#ffffff';
    bgCtx.fillRect(0, 0, rect.width, rect.height);
    bgCtx.strokeStyle = '#e5e7eb';
    bgCtx.lineWidth = 1;
    bgCtx.beginPath();
    for (let y = 90; y < rect.height; y += 90) { bgCtx.moveTo(0, y); bgCtx.lineTo(rect.width, y); }
    bgCtx.stroke();
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, rect.width, rect.height);
    ctx.strokeStyle = '#000'; ctx.lineWidth = 3; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    ctx.globalCompositeOperation = 'source-over';
    sentenceDrawCtrl.current.ctx = ctx;
  };

  const clearSentenceCanvas = () => {
    sentenceDrawCtrl.current.isErasing = false;
    setSentenceEraserOn(false);
    initSentenceCanvas();
  };

  const sentenceCanvasPointerDown = (e) => {
    const ctrl = sentenceDrawCtrl.current;
    if (!ctrl.ctx) return;
    e.preventDefault();
    e.currentTarget.setPointerCapture(e.pointerId);
    const canvas = sentenceCanvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const scaleX = canvas.width / dpr / rect.width;
    const scaleY = canvas.height / dpr / rect.height;
    const x = (e.clientX - rect.left) * scaleX;
    const y = (e.clientY - rect.top)  * scaleY;
    ctrl.isDrawing = true; ctrl.hasMoved = false;
    ctrl.lastX = x; ctrl.lastY = y;
    ctrl.scaleX = scaleX; ctrl.scaleY = scaleY; ctrl.rect = rect;
    ctrl.ctx.globalCompositeOperation = ctrl.isErasing ? 'destination-out' : 'source-over';
    ctrl.ctx.strokeStyle = ctrl.isErasing ? 'rgba(0,0,0,1)' : '#1a1a1a';
    ctrl.ctx.fillStyle   = ctrl.isErasing ? 'rgba(0,0,0,1)' : '#1a1a1a';
    ctrl.ctx.lineWidth   = ctrl.isErasing ? 24 : 3;
    ctrl.ctx.beginPath(); ctrl.ctx.moveTo(x, y);
  };

  const sentenceCanvasPointerMove = (e) => {
    const ctrl = sentenceDrawCtrl.current;
    if (!ctrl.isDrawing || !ctrl.ctx) return;
    const coalesced = e.getCoalescedEvents ? e.getCoalescedEvents() : null;
    const events = (coalesced && coalesced.length > 0) ? coalesced : [e];
    let moved = false;
    for (const ce of events) {
      const x = (ce.clientX - ctrl.rect.left) * ctrl.scaleX;
      const y = (ce.clientY - ctrl.rect.top)  * ctrl.scaleY;
      const dx = x - ctrl.lastX, dy = y - ctrl.lastY;
      if (dx*dx + dy*dy > 90000) continue;
      ctrl.ctx.lineTo(x, y); ctrl.lastX = x; ctrl.lastY = y; moved = true;
    }
    if (moved) { ctrl.ctx.stroke(); ctrl.ctx.beginPath(); ctrl.ctx.moveTo(ctrl.lastX, ctrl.lastY); ctrl.hasMoved = true; }
  };

  const sentenceCanvasPointerUp = (e) => {
    const ctrl = sentenceDrawCtrl.current;
    if (!ctrl.isDrawing) return;
    if (!ctrl.hasMoved && ctrl.ctx) {
      const r = ctrl.ctx.lineWidth / 2;
      ctrl.ctx.beginPath(); ctrl.ctx.arc(ctrl.lastX, ctrl.lastY, r, 0, Math.PI * 2); ctrl.ctx.fill();
    }
    ctrl.isDrawing = false; ctrl.hasMoved = false;
  };

  const getSentenceCanvasDataUrl = () => {
    const canvas = sentenceCanvasRef.current;
    if (!canvas) return null;
    const offscreen = document.createElement('canvas');
    offscreen.width = canvas.width; offscreen.height = canvas.height;
    const offCtx = offscreen.getContext('2d');
    const bgCanvas = sentenceBgCanvasRef.current;
    if (bgCanvas) offCtx.drawImage(bgCanvas, 0, 0);
    else { offCtx.fillStyle = '#ffffff'; offCtx.fillRect(0, 0, offscreen.width, offscreen.height); }
    offCtx.drawImage(canvas, 0, 0);
    return offscreen.toDataURL('image/png');
  };

  const recognizeHandwriting = async () => {
    const canvas = aiTestCanvasRef.current;
    if (!canvas || aiTestLoading) return;
    if (!window.puter?.ai?.chat) { alert('AI is still loading. Please wait a moment and try again.\n\nOn eduroam? AI may be blocked — try switching to hotspot, using a VPN, or changing your DNS (e.g. 8.8.8.8).'); return; }
    setAiTestLoading(true);
    try {
      // Convert canvas to base64 image with white background so the model can see the strokes
      const dataUrl = getCanvasDataUrlWithWhiteBg(canvas);
      // Use a vision model to read the handwriting
      const response = await window.puter.ai.chat([
        { role: 'system', content: 'You are a Chinese handwriting recognition system. Read the handwritten Chinese text in the image and output ONLY the recognized Chinese text. No explanation, no translation, just the Chinese characters exactly as written. If you cannot read something, use ？ as placeholder.' },
        { role: 'user', content: [
          { type: 'image_url', image_url: { url: dataUrl } },
          { type: 'text', text: 'Read the handwritten Chinese text in this image. Output only the Chinese text.' }
        ]}
      ], { model: 'gpt-4o' });
      const recognized = response?.message?.content || (typeof response === 'string' ? response : '');
      const cleanText = recognized.trim();
      if (cleanText) {
        setAiTestAnswer(cleanText);
      } else {
        alert('Could not recognize any text. Try writing larger or clearer.');
      }
      if (!puterReady) setPuterReady(true);
    } catch (err) {
      console.error('Handwriting recognition error:', err);
      // Fallback: try with a different model
      try {
        const dataUrl = getCanvasDataUrlWithWhiteBg(canvas);
        const response = await window.puter.ai.chat(
          'Read the handwritten Chinese text in this image. Output ONLY the Chinese characters, nothing else.',
          dataUrl,
          { model: 'gpt-4o-mini' }
        );
        const recognized = response?.message?.content || (typeof response === 'string' ? response : '');
        if (recognized.trim()) {
          setAiTestAnswer(recognized.trim());
        } else {
          alert('Recognition failed. Try typing your answer instead.');
        }
      } catch (err2) {
        console.error('Fallback recognition also failed:', err2);
        alert('Handwriting recognition failed: ' + (err.message || 'Unknown error') + '. Try typing instead.');
      }
    } finally {
      setAiTestLoading(false);
    }
  };

  const resetAiTest = () => {
    setAiTestMode(null);
    setAiTestDecks([]);
    setAiTestQuestion(null);
    setAiTestAnswer('');
    setAiTestFeedback(null);
    setAiTestScore([]);
    setAiTestQuestionNum(0);
    setAiTestSetupStep('selectMode');
  };

  // ==========================================
  // HANDWRITE & RECOGNIZE MODAL (standalone)
  // ==========================================
  const initHwrCanvas = () => {
    const canvas = hwrCanvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, rect.width, rect.height);
    ctx.strokeStyle = '#1a1a1a';
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    hwrDrawCtrl.current.ctx = ctx;
    hwrDrawCtrl.current.isDrawing = false;
  };

  const hwrPointerDown = (e) => {
    const ctrl = hwrDrawCtrl.current;
    if (!ctrl.ctx) return;
    e.preventDefault();
    e.currentTarget.setPointerCapture(e.pointerId);
    const canvas = hwrCanvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const scaleX = canvas.width / dpr / rect.width;
    const scaleY = canvas.height / dpr / rect.height;
    const x = (e.clientX - rect.left) * scaleX;
    const y = (e.clientY - rect.top)  * scaleY;
    ctrl.isDrawing = true;
    ctrl.hasMoved  = false;
    ctrl.lastX = x;
    ctrl.lastY = y;
    ctrl.scaleX = scaleX;
    ctrl.scaleY = scaleY;
    ctrl.rect = rect;
    // Always use source-over; eraser paints white so grid lines never show through
    ctrl.ctx.globalCompositeOperation = 'source-over';
    ctrl.ctx.strokeStyle = ctrl.isErasing ? '#ffffff' : '#1a1a1a';
    ctrl.ctx.fillStyle   = ctrl.isErasing ? '#ffffff' : '#1a1a1a';
    ctrl.ctx.lineWidth = ctrl.isErasing ? 24 : 4;
    ctrl.ctx.beginPath();
    ctrl.ctx.moveTo(x, y);
  };

  const hwrPointerMove = (e) => {
    const ctrl = hwrDrawCtrl.current;
    if (!ctrl.isDrawing || !ctrl.ctx) return;
    const coalesced = e.getCoalescedEvents ? e.getCoalescedEvents() : null;
    const events = (coalesced && coalesced.length > 0) ? coalesced : [e];
    let moved = false;
    for (const ce of events) {
      const x = (ce.clientX - ctrl.rect.left) * ctrl.scaleX;
      const y = (ce.clientY - ctrl.rect.top)  * ctrl.scaleY;
      const dx = x - ctrl.lastX, dy = y - ctrl.lastY;
      if (dx * dx + dy * dy > 90000) continue;
      ctrl.ctx.lineTo(x, y);
      ctrl.lastX = x;
      ctrl.lastY = y;
      moved = true;
    }
    if (moved) {
      ctrl.ctx.stroke();
      ctrl.ctx.beginPath();
      ctrl.ctx.moveTo(ctrl.lastX, ctrl.lastY);
      ctrl.hasMoved = true;
    }
  };

  const hwrPointerUp = () => {
    const ctrl = hwrDrawCtrl.current;
    if (!ctrl.isDrawing) return;
    // Draw a dot for pure taps (no move) — handles strokes like 丶 in Chinese characters
    if (!ctrl.hasMoved && ctrl.ctx) {
      const r = ctrl.ctx.lineWidth / 2;
      ctrl.ctx.beginPath();
      ctrl.ctx.arc(ctrl.lastX, ctrl.lastY, r, 0, Math.PI * 2);
      ctrl.ctx.fill();
    }
    ctrl.isDrawing = false;
    ctrl.hasMoved  = false;
  };

  const clearHwrCanvas = () => {
    hwrDrawCtrl.current.isErasing = false;
    setHwrEraserOn(false);
    setHwrResult(null);
    initHwrCanvas();
  };

  // Block touch selection and scrolling on the HWR canvas — same pattern as aiTest canvas
  useEffect(() => {
    if (!showHandwriteRecognize) {
      hwrTouchCleanupRef.current?.();
      hwrTouchCleanupRef.current = null;
      return;
    }
    const t = setTimeout(() => {
      const canvas = hwrCanvasRef.current;
      if (!canvas) return;
      const block = (e) => e.preventDefault();
      const opts  = { passive: false };
      canvas.addEventListener('touchstart',  block, opts);
      canvas.addEventListener('touchmove',   block, opts);
      canvas.addEventListener('touchend',    block, opts);
      canvas.addEventListener('selectstart', block);
      canvas.addEventListener('contextmenu', block);
      hwrTouchCleanupRef.current = () => {
        canvas.removeEventListener('touchstart',  block, opts);
        canvas.removeEventListener('touchmove',   block, opts);
        canvas.removeEventListener('touchend',    block, opts);
        canvas.removeEventListener('selectstart', block);
        canvas.removeEventListener('contextmenu', block);
      };
    }, 150);
    return () => {
      clearTimeout(t);
      hwrTouchCleanupRef.current?.();
      hwrTouchCleanupRef.current = null;
    };
  }, [showHandwriteRecognize]);

  const recognizeHwrCanvas = async () => {
    const canvas = hwrCanvasRef.current;
    if (!canvas || hwrLoading) return;
    setHwrLoading(true);
    setHwrResult(null);
    setHwrAddedToDeck(false);

    if (!window.puter?.ai?.chat) {
      setHwrResult({ chinese: '', pinyin: '', english: '', error: 'AI is still loading. Please wait a moment and try again. On eduroam? AI may be blocked — try switching to hotspot, using a VPN, or changing your DNS (e.g. 8.8.8.8).' });
      setHwrLoading(false);
      return;
    }

    try {
      // Composite white background + strokes onto an offscreen canvas — same approach as AI test OCR
      const offscreen = document.createElement('canvas');
      offscreen.width = canvas.width;
      offscreen.height = canvas.height;
      const offCtx = offscreen.getContext('2d');
      offCtx.fillStyle = '#ffffff';
      offCtx.fillRect(0, 0, offscreen.width, offscreen.height);
      offCtx.drawImage(canvas, 0, 0);
      const dataUrl = offscreen.toDataURL('image/png');

      const res = await window.puter.ai.chat([
        {
          role: 'system',
          content: 'You are a Chinese handwriting recognition system. The user has drawn Chinese character(s) on a white canvas. Respond ONLY with a JSON object — no markdown, no backticks, no extra text. Format: {"chinese":"<recognized characters>","pinyin":"<pinyin with tone marks>","english":"<concise English definition>"}. IMPORTANT: Only report characters you can clearly see. Do NOT guess or invent characters. If the canvas is blank or you cannot clearly read Chinese characters, respond with exactly: {"chinese":"","pinyin":"","english":""}',
        },
        {
          role: 'user',
          content: [
            { type: 'image_url', image_url: { url: dataUrl } },
            { type: 'text', text: 'What Chinese character(s) did I write? Return JSON only. Do not hallucinate — if the canvas looks blank or unclear, return the empty JSON.' },
          ],
        },
      ], { model: 'gpt-4o' });

      const raw = res?.message?.content || (typeof res === 'string' ? res : '');
      const clean = raw.replace(/```json\s*/g, '').replace(/```\s*/g, '').trim();
      const m = clean.match(/\{[\s\S]*\}/);
      const parsed = m ? JSON.parse(m[0]) : null;

      if (parsed?.chinese) {
        setHwrResult(parsed);
      } else {
        setHwrResult({ chinese: '', pinyin: '', english: '', error: 'Could not recognize any characters. Try writing larger and clearer.' });
      }
      if (!puterReady) setPuterReady(true);
    } catch (err) {
      console.error('HWR recognition error:', err);
      setHwrResult({ chinese: '', pinyin: '', english: '', error: 'Recognition failed: ' + (err.message || 'unknown error') + '. Try again.' });
    } finally {
      setHwrLoading(false);
    }
  };

  // Speak kewen text aloud
  const speakKewen = (text) => {
    if (!('speechSynthesis' in window)) { alert('Text-to-speech not supported in this browser.'); return; }
    window.speechSynthesis.cancel();
    if (kewenSpeaking) { setKewenSpeaking(false); return; }
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'zh-CN';
    utter.rate = 0.85;
    utter.onend = () => setKewenSpeaking(false);
    utter.onerror = () => setKewenSpeaking(false);
    setKewenSpeaking(true);
    window.speechSynthesis.speak(utter);
  };

  const stopKewen = () => {
    window.speechSynthesis.cancel();
    setKewenSpeaking(false);
  };

  // Toggle pinyin overlay — pre-loads CEDICT on first use
  const toggleKewenPinyin = async (text) => {
    const next = !kewenPinyinOverlay;
    setKewenPinyinOverlay(next);
    try { localStorage.setItem('kewenPinyinOverlay', JSON.stringify(next)); } catch(e) {}
    if (!next) return; // turning off — nothing to load

    // If cache already has entries for this text's chars, we're done
    const chars = [...new Set(text.split('').filter(c => /\p{Script=Han}/u.test(c)))];
    if (chars.every(c => kewenPinyinCacheRef.current[c] !== undefined)) return;

    // Load CEDICT and populate cache
    setKewenPinyinLoading(true);
    try {
      const dict = await getCedict();
      if (dict) {
        chars.forEach(c => {
          if (kewenPinyinCacheRef.current[c] === undefined) {
            const entry = dict[c];
            // CEDICT pinyin is space-separated with tone numbers or marks; take first reading
            kewenPinyinCacheRef.current[c] = entry ? (entry.p || '').split(' ')[0] : '';
          }
        });
      }
    } catch(e) {}
    setKewenPinyinLoading(false);
  };

  const aiAutoSelectWords = async () => {
    if (aiAutoSelectLoading || !textImportInput.trim()) return;
    if (!window.puter || !window.puter.ai || typeof window.puter.ai.chat !== 'function') {
      alert('AI is still loading. Please wait a moment and try again.\n\nOn eduroam? AI may be blocked — try switching to hotspot, using a VPN, or changing your DNS (e.g. 8.8.8.8).');
      return;
    }
    setAiAutoSelectLoading(true);
    try {
      const response = await window.puter.ai.chat([
        { role: 'system', content: `You are a Chinese vocabulary extractor. Given a Chinese text, identify the most useful vocabulary words and phrases for a language learner. Return ONLY a JSON array of objects, each with "chinese", "pinyin" (with tone marks), and "english" fields. No markdown, no backticks, no explanation. Just the raw JSON array.

Rules:
- Extract 15-30 of the most useful/important words and phrases
- Include multi-character words and phrases, not just single characters
- Prioritize words that are commonly used and good for a learner to know
- Skip very basic words like 的, 了, 是, 在, 我, 你, 他 unless they are part of a phrase
- Include verbs, nouns, adjectives, adverbs, and useful phrases
- Each entry should be a distinct vocabulary item` },
        { role: 'user', content: `Extract vocabulary from this Chinese text:\n\n${textImportInput.trim().substring(0, 3000)}` },
      ], { model: chatModel });

      const raw = response?.message?.content || (typeof response === 'string' ? response : '');
      const cleaned = raw.replace(/```json\s*/g, '').replace(/```\s*/g, '').trim();
      
      let words;
      try {
        words = JSON.parse(cleaned);
      } catch (e) {
        const match = cleaned.match(/\[[\s\S]*\]/);
        if (match) words = JSON.parse(match[0]);
        else throw new Error('Could not parse AI response');
      }

      if (!Array.isArray(words) || words.length === 0) throw new Error('No words found');

      // Add each word to selectedWords
      const newSelected = new Map(selectedWords);
      words.filter(w => w.chinese && w.pinyin && w.english).forEach(w => {
        if (!newSelected.has(w.chinese)) {
          newSelected.set(w.chinese, { 
            pinyin: String(w.pinyin).trim(), 
            english: String(w.english).trim(), 
            loading: false, 
            error: null 
          });
        }
      });
      setSelectedWords(newSelected);
      if (!puterReady) setPuterReady(true);
    } catch (err) {
      console.error('AI auto-select error:', err);
      alert('AI word extraction failed: ' + (err.message || 'Unknown error') + '. Try again.');
      showEduroamToast();
    } finally {
      setAiAutoSelectLoading(false);
    }
  };

  const toggleWordSelection = (word) => {
    setSelectedWords(prev => {
      const next = new Map(prev);
      if (next.has(word)) {
        next.delete(word);
      } else {
        next.set(word, { pinyin: '', english: '', loading: false, error: null });
        // Kick off lookup after state update
        setTimeout(() => lookupWord(word), 0);
      }
      return next;
    });
  };

  const createDeckFromText = () => {
    if (!textImportDeckName.trim()) { alert('Please enter a deck name.'); return; }
    const cards = [];
    selectedWords.forEach((info, word) => {
      if (!info.error && (info.pinyin || info.english)) {
        cards.push({
          id: Date.now() + Math.random(),
          chinese: word,
          pinyin: info.pinyin,
          english: info.english,
          known: false, lastReviewed: null, difficulty: 0,
          easeFactor: 2.5, interval: 0, repetitions: 0
        });
      }
    });
    if (cards.length === 0) { alert('No valid cards to add. Try selecting some words first.'); return; }
    const deck = {
      id: 'deck-' + Date.now() + '-' + Math.random().toString(36).slice(2, 7),
      name: textImportDeckName.trim(),
      cards,
      kewen: textImportInput.trim() || undefined,
    };
    setDecks(prev => [...prev, deck]);
    setShowTextImport(false);
    setTextImportInput('');
    setTextImportSubmitted(false);
    setSelectedWords(new Map());
    setTextImportDeckName('');
    alert('Deck "' + deck.name + '" created with ' + cards.length + ' cards!');
    setCurrentView('home');
  };

  const createDeck = () => {
    if (!newDeckName.trim()) {
      alert('Please enter a deck name');
      return;
    }
    const newDeck = {
      id: `deck-${Date.now()}`,
      name: newDeckName.trim(),
      cards: []
    };
    setDecks(prev => [...prev, newDeck]);
    setNewDeckName('');
    setNewDeckCreated(newDeck); // show the add-vocab-now prompt
  };

  // Create combined deck from selected decks
  const createCombinedDeck = () => {
    if (!newDeckName.trim()) {
      alert('Please enter a name for the combined deck');
      return;
    }
    if (combineSelectedDecks.length < 2) {
      alert('Please select at least 2 decks to combine');
      return;
    }
    
    // Gather all cards from selected decks, deduplicating by chinese character
    const seen = new Set();
    const combinedCards = [];
    combineSelectedDecks.forEach(deckId => {
      const deck = decks.find(d => d.id === deckId);
      if (deck) {
        deck.cards.forEach(card => {
          if (!seen.has(card.chinese)) {
            seen.add(card.chinese);
            combinedCards.push({
              ...card,
              id: Date.now() + Math.random(), // new unique id
              // Reset mastery for fresh combined study
              known: false,
              masteryScore: 0,
              masteryStatus: 'not_started',
              lastReviewed: null,
              difficulty: 0,
              easeFactor: 2.5,
              interval: 0,
              repetitions: 0
            });
          }
        });
      }
    });
    
    const newDeck = {
      id: `deck-${Date.now()}`,
      name: newDeckName,
      cards: combinedCards
    };
    
    setDecks([...decks, newDeck]);
    setNewDeckName('');
    setCombineSelectedDecks([]);
    setCurrentView('home');
  };

  // Add card to deck
  const addCard = (deckId) => {
    if (!newCard.chinese || !newCard.pinyin || !newCard.english) {
      alert('Please fill in all fields');
      return;
    }

    const updatedDecks = decks.map(deck => {
      if (deck.id === deckId) {
        const card = {
          id: Date.now(),
          chinese: newCard.chinese,
          pinyin: newCard.pinyin,
          english: newCard.english,
          known: false,
          lastReviewed: null,
          difficulty: 0,
          easeFactor: 2.5,
          interval: 0,
          repetitions: 0
        };
        return { ...deck, cards: [...deck.cards, card] };
      }
      return deck;
    });

    setDecks(updatedDecks);
    setNewCard({ chinese: '', pinyin: '', english: '' });
    // Sync editingDeck
    const updatedEditingDeck = updatedDecks.find(d => d.id === deckId);
    if (updatedEditingDeck && editingDeck && editingDeck.id === deckId) {
      setEditingDeck(updatedEditingDeck);
    }
  };

  // AI autofill pinyin + english for a single Chinese input
  const aiAutofillCard = async () => {
    if (!newCard.chinese.trim()) { alert('Enter a Chinese character or phrase first.'); return; }
    if (!window.puter?.ai?.chat) { alert('AI is still loading, please wait a moment.\n\nOn eduroam? AI may be blocked — try switching to hotspot, using a VPN, or changing your DNS (e.g. 8.8.8.8).'); return; }
    setAiAutofillLoading(true);
    try {
      const response = await window.puter.ai.chat([
        { role: 'system', content: 'You are a Chinese language expert. Given a Chinese word or phrase, respond with ONLY a JSON object with keys "pinyin" (with tone marks, no numbers) and "english" (concise English definition). No explanation, no markdown, just the raw JSON.' },
        { role: 'user', content: newCard.chinese.trim() }
      ]);
      const text = (response?.message?.content || (typeof response === 'string' ? response : '')).trim();
      const clean = text.replace(/```json|```/g, '').trim();
      const parsed = JSON.parse(clean);
      if (parsed.pinyin && parsed.english) {
        setNewCard(prev => ({ ...prev, pinyin: parsed.pinyin, english: parsed.english }));
      }
    } catch(e) {
      alert('AI autofill failed. Please fill in pinyin and English manually.');
    }
    setAiAutofillLoading(false);
  };

  // AI bulk autofill - takes comma-separated Chinese phrases, generates cards for all
  const aiBulkAutofill = async (deckId) => {
    if (!bulkInput.trim()) { alert('Enter some Chinese phrases separated by commas.'); return; }
    if (!window.puter?.ai?.chat) { alert('AI is still loading, please wait a moment.\n\nOn eduroam? AI may be blocked — try switching to hotspot, using a VPN, or changing your DNS (e.g. 8.8.8.8).'); return; }
    const phrases = bulkInput.split(/[、，,]/).map(s => s.trim()).filter(Boolean);
    if (phrases.length === 0) return;
    setBulkAutofillLoading(true);
    try {
      const response = await window.puter.ai.chat([
        { role: 'system', content: 'You are a Chinese language expert. Given a list of Chinese words or phrases, respond with ONLY a JSON array. Each element should be an object with keys: "chinese" (the original phrase), "pinyin" (with tone marks, no numbers), and "english" (concise English definition). No explanation, no markdown, just the raw JSON array.' },
        { role: 'user', content: phrases.join('\n') }
      ]);
      const text = (response?.message?.content || (typeof response === 'string' ? response : '')).trim();
      const clean = text.replace(/```json|```/g, '').trim();
      const parsed = JSON.parse(clean);
      if (!Array.isArray(parsed) || parsed.length === 0) throw new Error('bad response');
      const makeCard = (c) => ({ id: Date.now() + Math.random(), chinese: c.chinese, pinyin: c.pinyin, english: c.english, known: false, lastReviewed: null, difficulty: 0, easeFactor: 2.5, interval: 0, repetitions: 0 });
      const newCards = parsed.filter(c => c.chinese && c.pinyin && c.english).map(makeCard);
      const updatedDecks = decks.map(deck => {
        if (deck.id !== deckId) return deck;
        return { ...deck, cards: [...deck.cards, ...newCards] };
      });
      setDecks(updatedDecks);
      const updated = updatedDecks.find(d => d.id === deckId);
      if (updated && editingDeck?.id === deckId) setEditingDeck(updated);
      setBulkInput('');
      alert('Added ' + newCards.length + ' card' + (newCards.length !== 1 ? 's' : '') + '!');
    } catch(e) {
      alert('AI bulk autofill failed. Check that your input is valid Chinese phrases.');
    }
    setBulkAutofillLoading(false);
  };

  // Delete card
  const deleteCard = (deckId, cardId) => {
    const updatedDecks = decks.map(deck => {
      if (deck.id === deckId) {
        return { ...deck, cards: deck.cards.filter(card => card.id !== cardId) };
      }
      return deck;
    });
    setDecks(updatedDecks);
    // Sync editingDeck if we're editing this deck
    const updatedEditingDeck = updatedDecks.find(d => d.id === deckId);
    if (updatedEditingDeck && editingDeck && editingDeck.id === deckId) {
      setEditingDeck(updatedEditingDeck);
    }
  };

  // Save edited card
  const saveEditCard = (deckId, cardId) => {
    if (!editCardValues.chinese || !editCardValues.pinyin || !editCardValues.english) {
      alert('Please fill in all fields');
      return;
    }
    const updatedDecks = decks.map(deck => {
      if (deck.id === deckId) {
        return {
          ...deck,
          cards: deck.cards.map(card => {
            if (card.id === cardId) {
              return { ...card, chinese: editCardValues.chinese, pinyin: editCardValues.pinyin, english: editCardValues.english };
            }
            return card;
          })
        };
      }
      return deck;
    });
    setDecks(updatedDecks);
    // Also update editingDeck so the UI refreshes
    const updatedEditingDeck = updatedDecks.find(d => d.id === deckId);
    if (updatedEditingDeck) setEditingDeck(updatedEditingDeck);
    setEditingCardId(null);
  };

  // Bulk delete selected cards
  const bulkDeleteCards = (deckId) => {
    if (bulkSelectedCards.size === 0) return;
    const count = bulkSelectedCards.size;
    const confirmed = window.confirm(`Are you sure you want to delete ${count} selected card${count !== 1 ? 's' : ''}?\n\nThis action cannot be undone.`);
    if (!confirmed) return;
    
    const updatedDecks = decks.map(deck => {
      if (deck.id === deckId) {
        return { ...deck, cards: deck.cards.filter(card => !bulkSelectedCards.has(card.id)) };
      }
      return deck;
    });
    setDecks(updatedDecks);
    const updatedEditingDeck = updatedDecks.find(d => d.id === deckId);
    if (updatedEditingDeck) setEditingDeck(updatedEditingDeck);
    setBulkSelectedCards(new Set());
    setBulkSelectMode(false);
  };

  // Delete deck
  const deleteDeck = (deckId, deckName) => {
    const confirmed = window.confirm(`Are you sure you want to delete "${deckName}"?\n\nThis action cannot be undone.`);
    if (confirmed) {
      setDecks(decks.filter(deck => deck.id !== deckId));
      // Also delete from cloud
      if (currentUser && FIREBASE_ENABLED) {
        CloudSync.deleteDeckFromCloud(currentUser.uid, deckId).catch(e => console.error('Cloud delete error:', e));
      }
      setCurrentView('home');
    }
  };

  // Move deck up or down in the list
  // Get the set of deck IDs visible in the current context (folder or unfoldered root)
  const getContextDeckIds = () => {
    if (currentFolderId) {
      const folder = folders.find(f => f.id === currentFolderId);
      return folder ? new Set(folder.deckIds) : new Set();
    }
    const allFolderedDeckIds = new Set(folders.flatMap(f => f.deckIds));
    return new Set(decks.filter(d => !allFolderedDeckIds.has(d.id)).map(d => d.id));
  };

  const moveDeck = (deckId, direction) => {
    const contextIds = getContextDeckIds();
    const contextDecks = decks.filter(d => contextIds.has(d.id));
    const contextIdx = contextDecks.findIndex(d => d.id === deckId);
    if (contextIdx === -1) return;
    const targetContextIdx = contextIdx + direction;
    if (targetContextIdx < 0 || targetContextIdx >= contextDecks.length) return;
    // Swap in the global array by finding global indices of the two context-adjacent decks
    const globalIdx = decks.findIndex(d => d.id === deckId);
    const swapTargetId = contextDecks[targetContextIdx].id;
    const globalSwapIdx = decks.findIndex(d => d.id === swapTargetId);
    const newDecks = [...decks];
    [newDecks[globalIdx], newDecks[globalSwapIdx]] = [newDecks[globalSwapIdx], newDecks[globalIdx]];
    setDecks(newDecks);
  };

  const moveDeckToTop = (deckId) => {
    const contextIds = getContextDeckIds();
    const contextDecks = decks.filter(d => contextIds.has(d.id));
    const contextIdx = contextDecks.findIndex(d => d.id === deckId);
    if (contextIdx <= 0) return;
    // Move before the first context deck in the global array
    const firstContextGlobalIdx = decks.findIndex(d => d.id === contextDecks[0].id);
    const globalIdx = decks.findIndex(d => d.id === deckId);
    const newDecks = [...decks];
    const [moved] = newDecks.splice(globalIdx, 1);
    newDecks.splice(firstContextGlobalIdx, 0, moved);
    setDecks(newDecks);
  };

  const moveDeckToBottom = (deckId) => {
    const contextIds = getContextDeckIds();
    const contextDecks = decks.filter(d => contextIds.has(d.id));
    const contextIdx = contextDecks.findIndex(d => d.id === deckId);
    if (contextIdx === -1 || contextIdx === contextDecks.length - 1) return;
    // Move after the last context deck in the global array
    const lastContextGlobalIdx = decks.findIndex(d => d.id === contextDecks[contextDecks.length - 1].id);
    const globalIdx = decks.findIndex(d => d.id === deckId);
    const newDecks = [...decks];
    const [moved] = newDecks.splice(globalIdx, 1);
    // After splice, the last context deck's index may have shifted by -1 if globalIdx was before it
    const adjustedLastIdx = globalIdx < lastContextGlobalIdx ? lastContextGlobalIdx - 1 : lastContextGlobalIdx;
    newDecks.splice(adjustedLastIdx + 1, 0, moved);
    setDecks(newDecks);
  };

  // Folder management functions
  const createFolder = () => {
    if (!newFolderName.trim()) return;
    const newFolder = { id: Date.now(), name: newFolderName.trim(), deckIds: [] };
    setFolders([...folders, newFolder]);
    setNewFolderName('');
    setShowCreateFolder(false);
  };

  // Bulk reorder functions for folder deckIds (use functional updater to avoid stale closures)
  const moveFolderDeck = (folderId, deckId, direction) => {
    setFolders(prev => prev.map(f => {
      if (f.id !== folderId) return f;
      const ids = [...f.deckIds];
      const idx = ids.indexOf(deckId);
      if (idx === -1) return f;
      const newIdx = idx + direction;
      if (newIdx < 0 || newIdx >= ids.length) return f;
      [ids[idx], ids[newIdx]] = [ids[newIdx], ids[idx]];
      return { ...f, deckIds: ids };
    }));
  };

  const moveFolderDeckToTop = (folderId, deckId) => {
    setFolders(prev => prev.map(f => {
      if (f.id !== folderId) return f;
      const ids = f.deckIds.filter(id => id !== deckId);
      return { ...f, deckIds: [deckId, ...ids] };
    }));
  };

  const moveFolderDeckToBottom = (folderId, deckId) => {
    setFolders(prev => prev.map(f => {
      if (f.id !== folderId) return f;
      const ids = f.deckIds.filter(id => id !== deckId);
      return { ...f, deckIds: [...ids, deckId] };
    }));
  };

  const deleteFolder = (folderId) => {
    const folder = folders.find(f => f.id === folderId);
    if (!folder) return;
    const confirmed = window.confirm(`Delete folder "${folder.name}"? Decks inside will be moved back to the root level.`);
    if (!confirmed) return;
    setFolders(folders.filter(f => f.id !== folderId));
    if (currentFolderId === folderId) setCurrentFolderId(null);
  };

  const renameFolder = (folderId) => {
    if (!editFolderName.trim()) return;
    setFolders(folders.map(f => f.id === folderId ? { ...f, name: editFolderName.trim() } : f));
    setEditingFolderId(null);
    setEditFolderName('');
  };

  const moveDeckToFolder = (deckId, folderId) => {
    // Remove deck from all folders first
    let updated = folders.map(f => ({ ...f, deckIds: f.deckIds.filter(id => id !== deckId) }));
    // Add to target folder if not null
    if (folderId !== null) {
      updated = updated.map(f => f.id === folderId ? { ...f, deckIds: [...f.deckIds, deckId] } : f);
    }
    setFolders(updated);
    setMovingDeckId(null);
  };

  const removeDeckFromFolder = (deckId) => {
    setFolders(folders.map(f => ({ ...f, deckIds: f.deckIds.filter(id => id !== deckId) })));
  };

  // Folder reorder functions
  const moveFolder = (folderId, direction) => {
    const idx = folders.findIndex(f => f.id === folderId);
    if (idx === -1) return;
    const newIdx = idx + direction;
    if (newIdx < 0 || newIdx >= folders.length) return;
    const newFolders = [...folders];
    const [moved] = newFolders.splice(idx, 1);
    newFolders.splice(newIdx, 0, moved);
    setFolders(newFolders);
  };

  const moveFolderToTop = (folderId) => {
    const idx = folders.findIndex(f => f.id === folderId);
    if (idx <= 0) return;
    const newFolders = [...folders];
    const [moved] = newFolders.splice(idx, 1);
    newFolders.unshift(moved);
    setFolders(newFolders);
  };

  const moveFolderToBottom = (folderId) => {
    const idx = folders.findIndex(f => f.id === folderId);
    if (idx === -1 || idx === folders.length - 1) return;
    const newFolders = [...folders];
    const [moved] = newFolders.splice(idx, 1);
    newFolders.push(moved);
    setFolders(newFolders);
  };

  // Clear progress for a single card (reset to "new" state)
  const clearCardProgress = (deckId, cardId) => {
    const updatedDecks = decks.map(d => {
      if (d.id === deckId) {
        return {
          ...d,
          cards: d.cards.map(card => {
            if (card.id === cardId) {
              return {
                ...card,
                known: false,
                lastReviewed: null,
                difficulty: 0,
                easeFactor: 2.5,
                interval: 0,
                repetitions: 0,
                masteryScore: 0,
                masteryStatus: 'not_started',
                nextReview: null
              };
            }
            return card;
          })
        };
      }
      return d;
    });
    setDecks(updatedDecks);
    const updatedEditingDeck = updatedDecks.find(d => d.id === deckId);
    if (updatedEditingDeck && editingDeck && editingDeck.id === deckId) {
      setEditingDeck(updatedEditingDeck);
    }
  };

  // Clear progress for a deck (reset all cards to "new" state)
  const clearDeckProgress = (deckId) => {
    const deck = decks.find(d => d.id === deckId);
    if (!deck) return;
    const confirmed = window.confirm(`Clear all progress for "${deck.name}"?\n\nThis will reset all ${deck.cards.length} cards back to "new" state. Your card content will be preserved.`);
    if (!confirmed) return;
    const updatedDecks = decks.map(d => {
      if (d.id === deckId) {
        return {
          ...d,
          cards: d.cards.map(card => ({
            ...card,
            known: false,
            lastReviewed: null,
            difficulty: 0,
            easeFactor: 2.5,
            interval: 0,
            repetitions: 0,
            masteryScore: 0,
            masteryStatus: 'not_started',
            nextReview: null
          }))
        };
      }
      return d;
    });
    setDecks(updatedDecks);
    // Update editingDeck if this deck is currently being edited
    const updatedDeck = updatedDecks.find(d => d.id === deckId);
    if (updatedDeck && editingDeck && editingDeck.id === deckId) {
      setEditingDeck(updatedDeck);
    }
    // Also clear learn progress for this deck
    setLearnProgress(prev => {
      const updated = { ...prev };
      delete updated[deckId];
      return updated;
    });
    alert('Progress cleared! All cards are now "new".');
  };

  // Export deck as JSON
  const exportDeck = (deck, includeKewen = true) => {
    const deckToExport = includeKewen
      ? deck
      : { ...deck, kewen: undefined }; // strip kewen field
    // Remove undefined keys so JSON.stringify doesn't include them
    const cleaned = JSON.parse(JSON.stringify(deckToExport));
    const dataStr = JSON.stringify(cleaned, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${deck.name}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  // Bulk export selected decks as a single JSON array file
  const handleBulkExport = () => {
    const selectedDecks = decks.filter(d => bulkExportSelected[d.id]);
    if (selectedDecks.length === 0) return;
    const cleaned = selectedDecks.map(deck => {
      const d = bulkExportIncludeKewen ? deck : { ...deck, kewen: undefined };
      return JSON.parse(JSON.stringify(d));
    });
    const dataStr = JSON.stringify(cleaned.length === 1 ? cleaned[0] : cleaned, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = cleaned.length === 1 ? `${cleaned[0].name}.json` : `decks-export-${Date.now()}.json`;
    link.click();
    URL.revokeObjectURL(url);
    setShowBulkExportModal(false);
    setBulkExportSelected({});
  };

  // Route through modal only when deck has kewen
  const handleExportClick = (deck) => {
    if (deck.kewen) {
      setExportModal({ deck });
    } else {
      exportDeck(deck, false);
    }
  };

  // Import deck(s) - supports multiple files
  const importDeck = (event) => {
    const files = Array.from(event.target.files);
    if (files.length === 0) return;
    // Reset file input so same files can be re-selected
    event.target.value = '';

    const parsed = [];
    let loaded = 0;
    let errors = 0;

    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const imported = JSON.parse(e.target.result);
          // Handle both single deck and array of decks in one file
          if (Array.isArray(imported)) {
            imported.forEach(d => {
              d.id = `deck-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
              parsed.push(d);
            });
          } else {
            imported.id = `deck-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
            parsed.push(imported);
          }
        } catch (error) {
          errors++;
        }
        loaded++;
        if (loaded === files.length) {
          if (parsed.length === 0) {
            alert('Error importing decks. Please check the file format.');
            return;
          }
          if (errors > 0) {
            alert(`${errors} file(s) could not be parsed. ${parsed.length} deck(s) loaded successfully.`);
          }
          if (parsed.length === 1) {
            // Single deck - just import directly
            setDecks(prev => [...prev, parsed[0]]);
            if (importTargetFolder) {
              setFolders(prev => prev.map(f => f.id === importTargetFolder ? { ...f, deckIds: [...f.deckIds, parsed[0].id] } : f));
            }
            alert(`Deck "${parsed[0].name}" imported successfully!`);
          } else {
            // Multiple decks - ask user whether to combine or separate
            setImportedDecks(parsed);
            setImportCombineTitle('');
            setShowImportModal(true);
          }
        }
      };
      reader.readAsText(file);
    });
  };

  const handleImportSeparate = () => {
    setDecks(prev => [...prev, ...importedDecks]);
    if (importTargetFolder) {
      const newIds = importedDecks.map(d => d.id);
      setFolders(prev => prev.map(f => f.id === importTargetFolder ? { ...f, deckIds: [...f.deckIds, ...newIds] } : f));
    }
    setShowImportModal(false);
    setImportedDecks([]);
    setImportTargetFolder(null);
    alert(`${importedDecks.length} decks imported successfully!`);
  };

  const handleImportCombine = () => {
    const title = importCombineTitle.trim();
    if (!title) {
      alert('Please enter a title for the combined deck.');
      return;
    }
    const allCards = importedDecks.flatMap(d => d.cards.map(card => ({
      ...card,
      id: Date.now() + Math.random()
    })));
    const combined = {
      id: `deck-${Date.now()}`,
      name: title,
      cards: allCards
    };
    setDecks(prev => [...prev, combined]);
    if (importTargetFolder) {
      setFolders(prev => prev.map(f => f.id === importTargetFolder ? { ...f, deckIds: [...f.deckIds, combined.id] } : f));
    }
    setShowImportModal(false);
    setImportedDecks([]);
    setImportTargetFolder(null);
    alert(`Combined deck "${title}" with ${allCards.length} cards imported successfully!`);
  };

  // Bulk move selected root-level decks into a folder (or back to root)
  const bulkMoveDeckToFolder = (targetFolderId) => {
    const selectedIds = [...bulkMoveSelectedDecks];
    setFolders(prev => {
      let updated = prev.map(f => ({ ...f, deckIds: f.deckIds.filter(id => !selectedIds.includes(id)) }));
      if (targetFolderId !== null) {
        updated = updated.map(f => f.id === targetFolderId ? { ...f, deckIds: [...f.deckIds, ...selectedIds] } : f);
      }
      return updated;
    });
    setBulkMoveSelectedDecks(new Set());
    setShowBulkMoveModal(false);
    if (currentUser && FIREBASE_ENABLED && cloudLoadedRef.current) {
      setTimeout(() => saveToCloud(currentUser.uid), 100);
    }
  };

  // Start studying a deck
  const startStudy = (deck) => {
    setLastStudied(prev => ({...prev, [deck.id]: { timestamp: Date.now(), mode: 'study' }}));
    setSelectedDeck(deck);
    setShuffledCards([...deck.cards]); // Start with original order
    setCurrentCardIndex(0);
    setIsFlipped(false);
    setSwipeHistory([]);
    setCurrentView('study');
    updateStudyStreak();
  };

  // Shuffle cards in study mode
  const shuffleCards = () => {
    const shuffled = [...shuffledCards].sort(() => Math.random() - 0.5);
    setShuffledCards(shuffled);
    setCurrentCardIndex(0);
    setIsFlipped(false);
  };

  // Start Match Game
  const startMatchGame = (deck) => {
    setLastStudied(prev => ({...prev, [deck.id]: { timestamp: Date.now(), mode: 'match' }}));
    console.log('Starting match game with deck:', deck);
    if (deck.cards.length < 4) {
      alert('You need at least 4 cards to play Match!');
      return;
    }

    // Select random cards (max 8 pairs)
    const shuffled = [...deck.cards].sort(() => Math.random() - 0.5).slice(0, 8);
    console.log('Shuffled cards:', shuffled);
    
    // Create pairs: chinese and meaning
    const pairs = [];
    shuffled.forEach(card => {
      pairs.push({ id: `${card.id}-chinese`, content: card.chinese, type: 'chinese', matchId: card.id });
      pairs.push({ id: `${card.id}-english`, content: card.english, type: 'english', matchId: card.id });
    });

    const finalPairs = pairs.sort(() => Math.random() - 0.5);
    console.log('Match cards created:', finalPairs);
    
    setMatchCards(finalPairs);
    setSelectedMatchCards([]);
    setMatchedPairs([]);
    setMatchStartTime(Date.now());
    setMatchEndTime(null);
    setMatchLiveTime(0);
    setSelectedDeck(deck);
    console.log('Setting view to match');
    setCurrentView('match');
  };

// Handle Match card selection
  const selectMatchCard = (card) => {
    // 1. If we already have 2 cards showing a "wrong match" animation, ignore clicks
    if (selectedMatchCards.length === 2 && 
        selectedMatchCards[0].matchId !== selectedMatchCards[1].matchId) return;
    
    // 2. Ignore clicks on cards that are already solved (matched)
    if (matchedPairs.includes(card.matchId)) return;

    // 3. DESELECT LOGIC: Check if the card is already selected
    const isAlreadySelected = selectedMatchCards.find(c => c.id === card.id);
    if (isAlreadySelected) {
      // Remove it from the selection array
      setSelectedMatchCards(selectedMatchCards.filter(c => c.id !== card.id));
      return;
    }

    // 4. If we already have 2 selected (and they weren't the same one), don't add a 3rd
    if (selectedMatchCards.length === 2) return;

    // 5. Select the card
    const newSelected = [...selectedMatchCards, card];
    setSelectedMatchCards(newSelected);

    if (newSelected.length === 2) {
      // Check if they match
      if (newSelected[0].matchId === newSelected[1].matchId) {
        // Match!
        setTimeout(() => {
          setMatchedPairs([...matchedPairs, card.matchId]);
          setSelectedMatchCards([]);
          
          if (matchedPairs.length + 1 === matchCards.length / 2) {
            const endTime = Date.now();
            setMatchEndTime(endTime);
            setMatchLiveTime(Math.floor((endTime - matchStartTime) / 100));
            
            // Save best time for this deck
            const timeInTenths = Math.floor((endTime - matchStartTime) / 100);
            const deckId = selectedDeck.id;
            if (!bestMatchTimes[deckId] || timeInTenths < bestMatchTimes[deckId]) {
              setBestMatchTimes(prev => ({ ...prev, [deckId]: timeInTenths }));
            }
          }
        }, 300);
      } else {
        // No match - leave them visible for a moment so user sees the mistake
        setTimeout(() => {
          setSelectedMatchCards([]);
        }, 600);
      }
    }
  };

  // Start Practice Test
  const startPracticeTest = (deck) => {
    setLastStudied(prev => ({...prev, [deck.id]: { timestamp: Date.now(), mode: 'test' }}));
    if (deck.cards.length < 4) {
      alert('You need at least 4 cards for a test!');
      return;
    }
    setTestSetupDeck(deck);
    setSelectedDeck(deck);
    setTestConfig(prev => ({
      ...prev,
      numQuestions: Math.min(prev.numQuestions, deck.cards.length)
    }));
    setCurrentView('testSetup');
  };

  // Generate test from config
  const generateTest = () => {
    const deck = testSetupDeck;
    if (!deck) return;

    const enabledTypes = [];
    if (testConfig.trueFalse) enabledTypes.push('trueFalse');
    if (testConfig.multipleChoice) enabledTypes.push('mc');
    if (testConfig.matching) enabledTypes.push('matching');
    if (testConfig.written) enabledTypes.push('written');
    if (testConfig.typePinyin) enabledTypes.push('typePinyin');

    if (enabledTypes.length === 0) {
      alert('Please enable at least one question type!');
      return;
    }

    const numQ = Math.min(testConfig.numQuestions, deck.cards.length);
    // Fresh random shuffle each time
    const shuffled = [...deck.cards].sort(() => Math.random() - 0.5);
    const selectedCards = shuffled.slice(0, numQ);
    
    const hasMatching = enabledTypes.includes('matching');
    const nonMatchTypes = enabledTypes.filter(t => t !== 'matching');
    
    // Split cards: some for matching sections, rest for individual questions
    // Each card is used exactly once
    let matchingSections = [];
    let cardsForIndividual = [...selectedCards];
    
    if (hasMatching && selectedCards.length >= 4) {
      // Matching gets 1 section per ~10 questions, max 1/4 of total cards
      const numSections = Math.min(
        Math.max(1, Math.floor(numQ / 10)),
        Math.floor(selectedCards.length / 8) // Never take more than half the cards
      ) || 1; // At least 1 section
      const actualSections = Math.min(numSections, Math.floor(selectedCards.length / 4));
      
      // But ensure we leave enough cards for other types
      const maxCardsForMatching = Math.min(actualSections * 4, selectedCards.length - (nonMatchTypes.length > 0 ? Math.max(nonMatchTypes.length, 2) : 0));
      const finalSections = Math.max(0, Math.floor(maxCardsForMatching / 4));
      
      const matchCards = selectedCards.slice(0, finalSections * 4);
      cardsForIndividual = selectedCards.slice(finalSections * 4);
      
      for (let i = 0; i < matchCards.length; i += 4) {
        const group = matchCards.slice(i, i + 4);
        matchingSections.push({
          type: 'matchingSection',
          cards: group,
          correctAnswer: '_matching_'
        });
      }
    }
    
    // If only matching is enabled, put all remaining cards into matching too
    if (nonMatchTypes.length === 0) {
      for (let i = 0; i < cardsForIndividual.length; i += 4) {
        const group = cardsForIndividual.slice(i, Math.min(i + 4, cardsForIndividual.length));
        if (group.length >= 2) {
          matchingSections.push({ type: 'matchingSection', cards: group, correctAnswer: '_matching_' });
        }
      }
      setTestQuestions(matchingSections);
      setTestAnswers(new Array(matchingSections.length).fill(null));
      setCurrentTestIndex(0);
      setShowTestResults(false);
      setMatchingMatched(new Set());
      setMatchingSelected(null);
      setCurrentView('test');
      updateStudyStreak();
      return;
    }
    
    // Assign each remaining card to exactly one question type (round-robin through non-match types)
    const otherQuestions = cardsForIndividual.map((card, i) => {
      const qType = nonMatchTypes[i % nonMatchTypes.length];
      const otherCards = deck.cards.filter(c => c.id !== card.id);

      if (qType === 'trueFalse') {
        const isTrue = Math.random() > 0.5;
        const displayAnswer = isTrue ? card.english : otherCards[Math.floor(Math.random() * otherCards.length)].english;
        return { type: 'trueFalse', card, displayAnswer, correctAnswer: isTrue ? 'True' : 'False' };
      } else if (qType === 'mc') {
        const options = [card.english];
        const pool = [...otherCards];
        while (options.length < 4 && pool.length > 0) {
          const ri = Math.floor(Math.random() * pool.length);
          const opt = pool[ri].english;
          if (!options.includes(opt)) options.push(opt);
          pool.splice(ri, 1);
        }
        return { type: 'mc', card, options: options.sort(() => Math.random() - 0.5), correctAnswer: card.english };
      } else if (qType === 'written') {
        return { type: 'written', card, correctAnswer: card.english };
      } else if (qType === 'typePinyin') {
        return { type: 'typePinyin', card, correctAnswer: card.pinyin };
      }
      return { type: 'mc', card, options: [card.english], correctAnswer: card.english };
    });
    
    // Interleave matching sections evenly among individual questions, then shuffle
    const finalQuestions = [];
    if (matchingSections.length > 0 && otherQuestions.length > 0) {
      const interval = Math.ceil(otherQuestions.length / (matchingSections.length + 1));
      let mIdx = 0;
      for (let i = 0; i < otherQuestions.length; i++) {
        finalQuestions.push(otherQuestions[i]);
        if (mIdx < matchingSections.length && (i + 1) % interval === 0) {
          finalQuestions.push(matchingSections[mIdx]);
          mIdx++;
        }
      }
      while (mIdx < matchingSections.length) { finalQuestions.push(matchingSections[mIdx]); mIdx++; }
    } else {
      finalQuestions.push(...otherQuestions, ...matchingSections);
    }

    setTestQuestions(finalQuestions);
    setTestAnswers(new Array(finalQuestions.length).fill(null));
    setCurrentTestIndex(0);
    setShowTestResults(false);
    setMatchingMatched(new Set());
    setMatchingSelected(null);
    setCurrentView('test');
    updateStudyStreak();
  };

  // Answer test question
  const answerTestQuestion = (answer) => {
    const newAnswers = [...testAnswers];
    newAnswers[currentTestIndex] = answer;
    setTestAnswers(newAnswers);
  };

  // Submit test
  const submitTest = () => {
    setShowTestResults(true);
  };

  // Start Writing Practice - show mode selection
  const startWritingPractice = (deck) => {
    setLastStudied(prev => ({...prev, [deck.id]: { timestamp: Date.now(), mode: 'writing' }}));
    if (deck.cards.length === 0) {
      alert('You need cards to practice writing!');
      return;
    }
    setSelectedDeck(deck);
    setCurrentView('writing');
    setWritingMode(null); // Show mode selection screen
    setWritingUndoHistory([]);
  };

  // ── Trouble Words launchers ────────────────────────────────────────────────
  // Each receives the pre-filtered sorted trouble cards (with _deckId/_deckName).
  // For cross-deck mode we use a synthetic deck object so existing modes work unchanged.
  const makeTroubleDeck = (troubleCards, deckId, deckName) => {
    // Strip internal _* fields before handing to study modes
    const clean = troubleCards.map(({ _deckId, _deckName, _score, ...rest }) => rest);
    // If single-deck, find the real deck (needed for SR updates to work correctly)
    const realDeck = deckId ? decks.find(d => d.id === deckId) : null;
    return realDeck
      ? { ...realDeck, cards: clean }
      : { id: 'trouble-cross', name: '🔥 Trouble Words', cards: clean };
  };

  const startTroubleStudy = (troubleCards, deckId, deckName) => {
    const deck = makeTroubleDeck(troubleCards, deckId, deckName);
    setTroubleModal(null);
    setSelectedDeck(deck);
    setShuffledCards([...deck.cards]);
    setCurrentCardIndex(0);
    setIsFlipped(false);
    setSwipeHistory([]);
    setCurrentView('study');
    updateStudyStreak();
  };

  const startTroubleLearn = (troubleCards, deckId, deckName) => {
    const deck = makeTroubleDeck(troubleCards, deckId, deckName);
    setTroubleModal(null);
    const cards = [...deck.cards];
    setSelectedDeck(deck);
    setAllLearnCards(cards);
    const roundCards = cards.slice(0, Math.min(10, cards.length));
    const progress = {};
    roundCards.forEach(c => { progress[c.id] = 'mc'; });
    setLearnCards(roundCards);
    setCardProgress(progress);
    setCurrentLearnIndex(0);
    setCurrentRound(1);
    setRoundComplete(false);
    setLearnMode('multiple-choice');
    setSelectedOption(null);
    setUserAnswer('');
    setAnswerResult(null);
    setShowAnswer(false);
    if (roundCards.length > 0) generateMultipleChoiceOptions(roundCards[0], cards);
    setCurrentView('learn');
    updateStudyStreak();
  };

  const startTroubleWritePractice = (troubleCards, deckId, deckName) => {
    const deck = makeTroubleDeck(troubleCards, deckId, deckName);
    setTroubleModal(null);
    setSelectedDeck(deck);
    localStorage.removeItem('writingSession');
    setWritingCards([...deck.cards]);
    setPracticedCardIds([]);
    setCurrentWritingIndex(0);
    drawCtrl.current.strokeCount = 0;
    canvasReadyRef.current = false;
    drawCtrl.current.currentStroke = null;
    setWritingFeedback(null);
    setWritingSessionComplete(false);
    setWritingMode('practiceAll');
    setWritingUndoHistory([]);
    setCurrentView('writing');
    updateStudyStreak();
  };

  const startTroubleWriteTest = (troubleCards, deckId, deckName) => {
    const deck = makeTroubleDeck(troubleCards, deckId, deckName);
    setTroubleModal(null);
    setSelectedDeck(deck);
    localStorage.removeItem('writingSession');
    setWritingCards([...deck.cards]);
    setPracticedCardIds([]);
    setCurrentWritingIndex(0);
    drawCtrl.current.strokeCount = 0;
    canvasReadyRef.current = false;
    drawCtrl.current.currentStroke = null;
    setWritingFeedback(null);
    setWritingSessionComplete(false);
    setTestRevealed(false);
    setWritingMode('testAll');
    setWritingUndoHistory([]);
    setCurrentView('writing');
    updateStudyStreak();
  };
  const resumeWritingSession = () => {
    const saved = localStorage.getItem('writingSession');
    if (!saved) return false;
    try {
      const session = JSON.parse(saved);
      const deck = decks.find(d => String(d.id) === String(session.deckId));
      if (!deck) return false;

      // Reconstruct writingCards from saved card IDs
      // Cards may have been re-queued (appear multiple times), so map each ID
      const cards = session.cardIds.map(id => deck.cards.find(c => String(c.id) === String(id))).filter(Boolean);
      if (cards.length === 0) return false;

      const resumeIndex = Math.min(session.currentIndex, cards.length - 1);

      setSelectedDeck(deck);
      setWritingCards(cards);
      setCurrentWritingIndex(resumeIndex);
      setWritingMode(session.writingMode);
      setPracticedCardIds(session.practicedCardIds || []);
      setWritingSessionComplete(false);
      drawCtrl.current.strokeCount = 0;
      canvasReadyRef.current = false; // trigger canvas re-init for new card
      drawCtrl.current.currentStroke = null;
  
      setWritingFeedback(null);
      setTestRevealed(false);
      setWritingUndoHistory([]);
      setCurrentView('writing');
      setLastStudied(prev => ({...prev, [deck.id]: { timestamp: Date.now(), mode: 'writing' }}));
      return true;
    } catch (e) {
      localStorage.removeItem('writingSession');
      return false;
    }
  };

  // Check if there's a saved writing session for a given deck
  const getSavedWritingSession = (deckId) => {
    const saved = localStorage.getItem('writingSession');
    if (!saved) return null;
    try {
      const session = JSON.parse(saved);
      if (String(session.deckId) === String(deckId)) {
        return session;
      }
    } catch (e) {}
    return null;
  };

  // Start Practice 10 mode
  const startPractice10 = () => {
    localStorage.removeItem('writingSession');
    const numCards = Math.min(10, selectedDeck.cards.length);
    const shuffled = [...selectedDeck.cards].sort(() => Math.random() - 0.5).slice(0, numCards);
    
    setWritingCards(shuffled);
    setPracticedCardIds(shuffled.map(c => c.id));
    setCurrentWritingIndex(0);
    drawCtrl.current.strokeCount = 0;
    canvasReadyRef.current = false; // trigger canvas re-init for new card
    drawCtrl.current.currentStroke = null;

    setWritingFeedback(null);
    setWritingSessionComplete(false);
    setWritingMode('practice10');
    updateStudyStreak();
  };

  // Start Practice All mode
  const startPracticeAll = () => {
    localStorage.removeItem('writingSession');
    const allCards = [...selectedDeck.cards];
    
    setWritingCards(allCards);
    setPracticedCardIds([]);
    setCurrentWritingIndex(0);
    drawCtrl.current.strokeCount = 0;
    canvasReadyRef.current = false; // trigger canvas re-init for new card
    drawCtrl.current.currentStroke = null;

    setWritingFeedback(null);
    setWritingSessionComplete(false);
    setWritingMode('practiceAll');
    updateStudyStreak();
  };

  // Start Writing Test mode (no characters shown, only pinyin + english)
  const startWritingTest = () => {
    localStorage.removeItem('writingSession');
    const numCards = Math.min(10, selectedDeck.cards.length);
    const shuffled = [...selectedDeck.cards].sort(() => Math.random() - 0.5).slice(0, numCards);
    
    setWritingCards(shuffled);
    setPracticedCardIds(shuffled.map(c => c.id));
    setCurrentWritingIndex(0);
    drawCtrl.current.strokeCount = 0;
    canvasReadyRef.current = false; // trigger canvas re-init for new card
    drawCtrl.current.currentStroke = null;

    setWritingFeedback(null);
    setWritingSessionComplete(false);
    setTestRevealed(false);
    setWritingMode('test');
    updateStudyStreak();
  };

  // Start Writing Test All mode (test with all cards)
  const startWritingTestAll = () => {
    localStorage.removeItem('writingSession');
    const allCards = [...selectedDeck.cards];
    
    setWritingCards(allCards);
    setPracticedCardIds([]);
    setCurrentWritingIndex(0);
    drawCtrl.current.strokeCount = 0;
    canvasReadyRef.current = false; // trigger canvas re-init for new card
    drawCtrl.current.currentStroke = null;

    setWritingFeedback(null);
    setWritingSessionComplete(false);
    setTestRevealed(false);
    setWritingMode('testAll');
    updateStudyStreak();
  };

  // Get a NEW set of 10 cards (excluding already practiced ones)
  const getNewWritingSet = () => {
    if (!selectedDeck) return;
    
    // Get cards we haven't practiced yet
    const unpracticedCards = selectedDeck.cards.filter(c => !practicedCardIds.includes(c.id));
    
    // If we've practiced everything, reset and start over
    if (unpracticedCards.length === 0) {
      alert('Great job! You\'ve practiced all cards in this deck. Starting over with a new random set!');
      setPracticedCardIds([]);
      const numCards = Math.min(10, selectedDeck.cards.length);
      const shuffled = [...selectedDeck.cards].sort(() => Math.random() - 0.5).slice(0, numCards);
      setWritingCards(shuffled);
      setPracticedCardIds(shuffled.map(c => c.id));
    } else {
      // Get up to 10 unpracticed cards
      const numCards = Math.min(10, unpracticedCards.length);
      const newSet = [...unpracticedCards].sort(() => Math.random() - 0.5).slice(0, numCards);
      setWritingCards(newSet);
      setPracticedCardIds([...practicedCardIds, ...newSet.map(c => c.id)]);
    }
    
    // Reset all session state
    setCurrentWritingIndex(0);
    drawCtrl.current.strokeCount = 0;
    canvasReadyRef.current = false; // trigger canvas re-init for new card
    drawCtrl.current.currentStroke = null;

    setWritingFeedback(null);
    setWritingSessionComplete(false);
    setTestRevealed(false);
    
    // Clear canvas if it exists
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }
  };

  // Shuffle/Randomize based on mode
  const shuffleWritingCards = () => {
    if (writingMode === 'practiceAll' || writingMode === 'testAll') {
      // For Practice All / Test All: just shuffle the current cards
      const shuffled = [...writingCards].sort(() => Math.random() - 0.5);
      setWritingCards(shuffled);
      setCurrentWritingIndex(0);
      drawCtrl.current.strokeCount = 0;
      canvasReadyRef.current = false; // trigger canvas re-init for new card
      drawCtrl.current.currentStroke = null;
  
      setWritingFeedback(null);
      setWritingSessionComplete(false);
      setTestRevealed(false);
      if (canvasRef.current) {
        const ctx = canvasRef.current.getContext('2d');
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      }
    } else if (writingMode === 'practice10' || writingMode === 'test') {
      // For Practice 10 and Test: get a new set of 10
      getNewWritingSet();
      setTestRevealed(false);
    }
  };

  // Handle "I Forgot" - re-queue the card to appear again soon
  const handleForgotCard = () => {
    const currentCard = writingCards[currentWritingIndex];

    // Save snapshot for undo
    setWritingUndoHistory(prev => [...prev, { action: 'forgot', cardIndex: currentWritingIndex, cards: [...writingCards] }]);

    // Update the card with higher difficulty
    updateCardWithSpacedRepetition(selectedDeck.id, currentCard.id, 1, userSettings.writing.srOffset);

    // Re-insert the card proportionally later in the queue
    const newWritingCards = [...writingCards];
    const remaining = newWritingCards.length - currentWritingIndex - 1;
    const proportionalOffset = Math.max(4, Math.floor(remaining * 0.15) + Math.floor(Math.random() * Math.max(1, Math.floor(remaining * 0.05))));
    const reinsertPosition = Math.min(
      currentWritingIndex + proportionalOffset,
      writingCards.length
    );

    // Add the card back into the queue
    newWritingCards.splice(reinsertPosition, 0, currentCard);

    setWritingCards(newWritingCards);
    clearCanvas();
    setWritingFeedback(null);
    setTestRevealed(false);
    setShowStrokePanel(false);
    setShowCanvasCharPicker(false);
    setCanvasHanziChar(null);
    if (canvasOverlayRef.current) { canvasOverlayRef.current.innerHTML = ''; canvasOverlayRef.current.style.opacity='1'; canvasOverlayRef.current.style.transition=''; }
    if (canvasHanziWriterRef.current) { try {  } catch(e) {} canvasHanziWriterRef.current = null; }

    // Move to next card
    if (currentWritingIndex < newWritingCards.length - 1) {
      setCurrentWritingIndex(currentWritingIndex + 1);
    } else {
      // Session complete
      if (writingMode === 'practice10' || writingMode === 'test') {
        setWritingSessionComplete(true); // Show "Next 10" option
      } else {
        // practiceAll or testAll mode - just go back home
        localStorage.removeItem('writingSession');
        alert('Great job! You\'ve completed all cards!');
        setCurrentView('home');
      }
    }
  };

  // Handle "I Know This" - move to next without re-queuing
  const handleKnowCard = () => {
    const currentCard = writingCards[currentWritingIndex];

    // Save snapshot for undo
    setWritingUndoHistory(prev => [...prev, { action: 'know', cardIndex: currentWritingIndex, cards: [...writingCards] }]);

    // Update with good score
    updateCardWithSpacedRepetition(selectedDeck.id, currentCard.id, 5, userSettings.writing.srOffset);

    clearCanvas();
    setWritingFeedback(null);
    setTestRevealed(false);
    setShowStrokePanel(false);
    setShowCanvasCharPicker(false);
    setCanvasHanziChar(null);
    if (canvasOverlayRef.current) { canvasOverlayRef.current.innerHTML = ''; canvasOverlayRef.current.style.opacity='1'; canvasOverlayRef.current.style.transition=''; }
    if (canvasHanziWriterRef.current) { try {  } catch(e) {} canvasHanziWriterRef.current = null; }

    // Move to next card
    if (currentWritingIndex < writingCards.length - 1) {
      setCurrentWritingIndex(currentWritingIndex + 1);
    } else {
      // Session complete
      if (writingMode === 'practice10' || writingMode === 'test') {
        setWritingSessionComplete(true); // Show "Next 10" option
      } else {
        // practiceAll or testAll mode - just go back home
        localStorage.removeItem('writingSession');
        alert('Great job! You\'ve completed all cards!');
        setCurrentView('home');
      }
    }
  };

  const undoWritingAction = () => {
    if (writingUndoHistory.length === 0) return;
    const last = writingUndoHistory[writingUndoHistory.length - 1];
    setWritingUndoHistory(prev => prev.slice(0, -1));
    setWritingCards(last.cards);
    setCurrentWritingIndex(last.cardIndex);
    setWritingSessionComplete(false);
    clearCanvas();
    setWritingFeedback(null);
    setTestRevealed(false);
  };

  // Mouse/touch drawing is now handled by Pointer Events attached in the useEffect above.
  // Pointer Events unify mouse + touch + pen and provide getCoalescedEvents() for smooth strokes.

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas) drawCtrl.current.clearCanvas(canvas);
    // Also clear canvas HanziWriter overlay
    if (canvasHanziWriterRef.current) {
      try {  } catch(e) {}
      canvasHanziWriterRef.current = null;
    }
    if (canvasOverlayRef.current) {
      canvasOverlayRef.current.style.transition = '';
      canvasOverlayRef.current.style.opacity = '1';
      canvasOverlayRef.current.innerHTML = '';
    }
    setCanvasHanziChar(null);
    setWritingFeedback(null);
  };

  // Clears only the user's drawn strokes — keeps the HanziWriter tracing overlay intact
  const clearTracesOnly = () => {
    const canvas = canvasRef.current;
    if (canvas) drawCtrl.current.clearCanvas(canvas);
    setWritingFeedback(null);
  };

  // Draw a character stroke-by-stroke on the user's practice canvas using HanziWriter
  const canvasOverlayRef = React.useRef(null); // ref to the absolute overlay div inside canvas wrapper

  const drawCharOnCanvas = (char) => {
    const canvas = canvasRef.current;
    const overlayDiv = canvasOverlayRef.current;
    if (!canvas || !overlayDiv || !window.HanziWriter) return;

    // Cancel any existing writer
    if (canvasHanziWriterRef.current) {
      try {  } catch(e) {}
      canvasHanziWriterRef.current = null;
    }

    // Clear user drawings
    drawCtrl.current.clearCanvas(canvas);
    setCanvasHanziChar(char);
    setShowCanvasCharPicker(false);

    // Size the overlay to match the canvas CSS size exactly
    const size = canvas.offsetWidth;
    overlayDiv.style.width  = size + 'px';
    overlayDiv.style.height = size + 'px';
    overlayDiv.style.opacity = '1';
    overlayDiv.style.transition = '';
    overlayDiv.innerHTML = '';          // clear previous SVG

    // Use the stable JSX id — don't set it imperatively (React will wipe it on re-render)
    const uid = 'hw-canvas-overlay-anchor';

    try {
      const spd = (userSettings.writing.traceSpeed || 1);
      const fadeDuration = spd >= 2 ? 0.1 : spd <= 0.4 ? 0.6 : 0.2;
      const writer = window.HanziWriter.create(uid, char, {
        width:  size,
        height: size,
        padding: Math.round(size * 0.06),
        showOutline: false,
        showCharacter: false,
        strokeColor: '#e11d48',
        radicalColor: '#be123c',
        strokeAnimationSpeed: spd,
        delayBetweenStrokes: spd >= 2 ? 150 : spd <= 0.4 ? 600 : 350,
      });
      canvasHanziWriterRef.current = writer;

      writer.animateCharacter({
        onComplete: () => {
          overlayDiv.style.transition = 'opacity ' + fadeDuration + 's';
          overlayDiv.style.opacity = '0.25';
        }
      });
    } catch(e) {
      overlayDiv.innerHTML = '';
      setCanvasHanziChar(null);
    }
  };

    const checkWriting = () => {
    if (drawCtrl.current.strokeCount === 0) {
      setWritingFeedback({ correct: false, message: 'Please draw the character first!' });
      return;
    }

    const currentCard = writingCards[currentWritingIndex];
    const drawnStrokes = drawCtrl.current.strokeCount;

    if (drawnStrokes >= 3) {
      setWritingFeedback({
        correct: true,
        message: 'Great effort! Keep practicing to improve your stroke order.'
      });
      updateCardWithSpacedRepetition(selectedDeck.id, currentCard.id, 4, userSettings.writing.srOffset);
    } else {
      setWritingFeedback({
        correct: false,
        message: 'Try drawing more strokes. Chinese characters need multiple strokes!'
      });
      updateCardWithSpacedRepetition(selectedDeck.id, currentCard.id, 2, userSettings.writing.srOffset);
    }
  };

  const nextWritingCard = () => {
    if (currentWritingIndex < writingCards.length - 1) {
      setCurrentWritingIndex(currentWritingIndex + 1);
      clearCanvas();
      setWritingFeedback(null);
    } else {
      alert('Great job! You\'ve completed the writing practice!');
      setCurrentView('home');
    }
  };

  // Navigate cards

  const nextCard = () => {
    if (currentCardIndex < shuffledCards.length - 1) {
      const currentCard = shuffledCards[currentCardIndex];
      const snapshot = { direction: 'next', cardIndex: currentCardIndex, cards: [...shuffledCards], card: currentCard };
      setSwipeHistory(prev => [...prev, snapshot]);
      setCurrentCardIndex(currentCardIndex + 1);
      setIsFlipped(false);
    } else {
      // Reached the end of the deck
      alert('Great job! You\'ve finished studying this deck!');
      setCurrentView('home');
    }
  };

  const previousCard = () => {
    if (swipeHistory.length > 0) {
      undoLastSwipe();
    }
  };

  // Edit deck
  const startEditDeck = (deck) => {
    setEditingDeck(deck);
    setCurrentView('edit');
  };

  console.log('Current view is:', currentView);

  // ==========================================
  // Landing Page (non-logged-in splash screen)
  // ==========================================
  if (currentView === 'login') {
    const googleG = (
      <svg width="18" height="18" viewBox="0 0 48 48">
        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.35-8.16 2.35-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
        <path fill="none" d="M0 0h48v48H0z"/>
      </svg>
    );
    return (
      <div className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #e5e1f0 0%, #f0e8e2 40%, #fdf5f0 100%)' }}>

        {/* Top-left: icon + EST badge */}
        <div className="absolute top-5 left-5 flex items-center gap-2">
          <img
            src="icons/icon-128.png"
            alt="中文 Learn"
            className="w-10 h-10 rounded-xl shadow-sm"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div style={{ display: 'none' }} className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-blue-600 items-center justify-center text-white font-bold text-sm shadow-sm">
            中
          </div>
          <span className="text-xs text-gray-400 font-medium tracking-wider">EST. 2026</span>
        </div>

        {/* Main content */}
        <div className="flex flex-col items-center px-6 w-full max-w-sm">
          {/* Big title */}
          <div className="text-center mb-10 select-none">
            <div className="font-black tracking-tight" style={{ fontSize: '5.5rem', lineHeight: 1 }}>
              <div style={{ color: '#4338a0', fontFamily: 'Georgia, "Times New Roman", serif' }}>中文</div>
              <div style={{ color: '#b84c1e', fontFamily: 'Georgia, "Times New Roman", serif', fontStyle: 'italic' }}>Learn</div>
            </div>
            <p className="text-gray-500 mt-4 text-base">Your Chinese flashcard &amp; writing companion</p>
          </div>

          {/* Action buttons */}
          <div className="w-full space-y-3">
            <button
              onClick={() => { setAuthMode('signup'); setAuthError(''); setCurrentView('loginForm'); }}
              className="w-full py-4 rounded-2xl font-bold text-white text-sm tracking-widest transition-all active:scale-95 hover:opacity-90"
              style={{ background: '#5b4fcf', letterSpacing: '0.13em' }}
            >
              CREATE ACCOUNT
            </button>

            <button
              onClick={() => { setAuthMode('login'); setAuthError(''); setCurrentView('loginForm'); }}
              className="w-full py-4 rounded-2xl font-bold text-sm tracking-widest transition-all active:scale-95 hover:bg-gray-50"
              style={{ background: 'white', color: '#222', border: '1.5px solid #ddd5f5', letterSpacing: '0.13em' }}
            >
              SIGN IN
            </button>

            <div className="flex items-center gap-3 py-1">
              <div className="flex-1 h-px" style={{ background: '#d9d1e8' }} />
              <span className="text-xs tracking-widest font-medium" style={{ color: '#aaa', letterSpacing: '0.15em' }}>OR</span>
              <div className="flex-1 h-px" style={{ background: '#d9d1e8' }} />
            </div>

            <button
              onClick={handleGoogleSignIn}
              className="w-full py-4 rounded-2xl font-bold text-sm tracking-widest transition-all active:scale-95 hover:bg-gray-50 flex items-center justify-center gap-3"
              style={{ background: 'white', color: '#222', border: '1.5px solid #ddd5f5', letterSpacing: '0.13em' }}
            >
              {googleG}
              CONTINUE WITH GOOGLE
            </button>

            <button
              onClick={() => { cloudLoadedRef.current = true; setCurrentView('home'); }}
              className="w-full py-3.5 rounded-2xl font-bold text-sm tracking-widest transition-all active:scale-95"
              style={{ background: 'transparent', color: '#999', border: '1.5px dashed #ccc', letterSpacing: '0.13em' }}
            >
              CONTINUE AS GUEST
            </button>

            <p className="text-center text-xs text-gray-400 leading-relaxed pt-1">
              Guest mode saves locally in your browser only.<br />Sign in to sync across devices.
            </p>
          </div>
        </div>

        {/* Bottom-left colour dots */}
        <div className="absolute bottom-5 left-5 flex gap-2">
          {['#9b8fcf','#e07a5f','#e8a598','#888','#6a9e6a'].map((c, i) => (
            <div key={i} className="w-3 h-3 rounded-full" style={{ background: c }} />
          ))}
        </div>

        {/* Bottom-right credit */}
        <p className="absolute bottom-5 right-6 text-xs font-medium tracking-widest" style={{ color: '#bbb', letterSpacing: '0.12em' }}>
          LILLIAN WANG
        </p>
      </div>
    );
  }

  // ==========================================
  // Login / Signup Form View
  // ==========================================
  if (currentView === 'loginForm') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 flex items-center justify-center p-6">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full border border-gray-100">
          <button
            onClick={() => { setCurrentView('login'); setAuthError(''); }}
            className="text-gray-500 hover:text-gray-700 mb-4 flex items-center gap-1 text-sm"
          >
            ← Back
          </button>

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {authMode === 'login' ? 'Welcome Back' : 'Create Account'}
            </h1>
            <p className="text-gray-500">
              {authMode === 'login'
                ? 'Sign in to sync your decks across devices'
                : 'Sign up to save and sync your progress'}
            </p>
          </div>

          {authError && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
              <p className="text-sm text-red-700">{authError}</p>
            </div>
          )}

          <form onSubmit={authMode === 'login' ? handleLogin : handleSignUp} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                value={authEmail}
                onChange={(e) => setAuthEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                value={authPassword}
                onChange={(e) => setAuthPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                placeholder="••••••••"
                required
              />
            </div>
            {authMode === 'signup' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                <input
                  type="password"
                  value={authConfirmPassword}
                  onChange={(e) => setAuthConfirmPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                  placeholder="••••••••"
                  required
                />
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl"
            >
              {authMode === 'login' ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          <div className="my-6 flex items-center gap-3">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-sm text-gray-400">or</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all"
          >
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Sign in with Google
          </button>

          <div className="mt-6 text-center">
            <button
              onClick={() => { setAuthMode(authMode === 'login' ? 'signup' : 'login'); setAuthError(''); }}
              className="text-sm text-orange-600 hover:text-orange-700 font-medium"
            >
              {authMode === 'login'
                ? "Don't have an account? Sign up"
                : 'Already have an account? Sign in'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // Account Management View
  // ==========================================
  if (currentView === 'account') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 p-6">
        <div className="max-w-lg mx-auto">
          <button
            onClick={() => setCurrentView('home')}
            className="text-gray-500 hover:text-gray-700 mb-6 flex items-center gap-1 text-sm"
          >
            ← Back to Home
          </button>

          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <UserIcon size={28} />
              Account &amp; Settings
            </h2>

            {currentUser ? (
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-sm text-gray-500 mb-1">Signed in as</p>
                  <p className="text-lg font-semibold text-gray-800">{currentUser.email || currentUser.displayName || 'User'}</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-sm text-gray-500 mb-1">Cloud Sync Status</p>
                  <div className="flex items-center gap-2">
                    {syncStatus === 'syncing' && <><RefreshCw size={16} className="animate-spin text-blue-500" /> <span className="text-blue-600 font-medium">Syncing...</span></>}
                    {syncStatus === 'synced' && <><CloudIcon size={16} className="text-green-500" /> <span className="text-green-600 font-medium">Synced</span></>}
                    {syncStatus === 'error' && <><X size={16} className="text-red-500" /> <span className="text-red-600 font-medium">Sync Error</span></>}
                    {syncStatus === 'idle' && <><CloudIcon size={16} className="text-gray-400" /> <span className="text-gray-600">Up to date</span></>}
                  </div>
                  {lastSyncTime && (
                    <p className="text-xs text-gray-400 mt-1">Last synced: {lastSyncTime.toLocaleTimeString()}</p>
                  )}
                </div>

                <div className="space-y-3">
                  <button
                    onClick={forceSync}
                    disabled={syncStatus === 'syncing'}
                    className="w-full flex items-center justify-center gap-2 bg-blue-500 text-white py-3 rounded-xl font-semibold hover:bg-blue-600 transition-all disabled:opacity-50"
                  >
                    <RefreshCw size={18} className={syncStatus === 'syncing' ? 'animate-spin' : ''} />
                    Push to Cloud
                  </button>

                  <button
                    onClick={forcePullFromCloud}
                    disabled={syncStatus === 'syncing'}
                    className="w-full flex items-center justify-center gap-2 bg-indigo-500 text-white py-3 rounded-xl font-semibold hover:bg-indigo-600 transition-all disabled:opacity-50"
                  >
                    <Download size={18} />
                    Pull from Cloud
                  </button>

                  <button
                    onClick={handleSignOut}
                    className="w-full flex items-center justify-center gap-2 bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all"
                  >
                    <LogOut size={18} />
                    Sign Out
                  </button>

                  <button
                    onClick={handleDeleteAccount}
                    className="w-full flex items-center justify-center gap-2 bg-red-50 text-red-600 py-3 rounded-xl font-semibold hover:bg-red-100 transition-all mt-4"
                  >
                    <Trash2 size={18} />
                    Delete Account
                  </button>
                </div>

                {authError && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                    <p className="text-sm text-red-700">{authError}</p>
                  </div>
                )}

                <div className="bg-blue-50 rounded-xl p-4">
                  <p className="text-sm text-blue-800">
                    <strong>How sync works:</strong> Your decks and progress automatically sync to the cloud when you're signed in.
                    Open this app on any device, sign in with the same account, and your data will be there.
                  </p>
                </div>

                {/* Settings Panel */}
                {(() => {
                  const srLabels = ['Much sooner', 'Sooner', 'Default', 'Later', 'Much later'];
                  const srValues = [-2, -1, 0, 1, 2];
                  const SettingToggle = ({ label, checked, onChange }) => (
                    <label className="flex items-center justify-between cursor-pointer">
                      <span className="text-sm text-gray-700">{label}</span>
                      <div
                        onClick={onChange}
                        className={`relative w-11 h-6 rounded-full transition-colors ${checked ? 'bg-red-500' : 'bg-gray-300'}`}
                      >
                        <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${checked ? 'translate-x-5' : 'translate-x-0'}`} />
                      </div>
                    </label>
                  );
                  const SRSlider = ({ value, onChange }) => (
                    <div>
                      <div className="flex justify-between text-xs text-gray-400 mb-1">
                        <span>Earlier</span><span>Later</span>
                      </div>
                      <input
                        type="range" min="-2" max="2" step="1"
                        value={value}
                        onChange={e => onChange(parseInt(e.target.value))}
                        className="w-full accent-red-500"
                      />
                      <p className="text-center text-xs font-medium text-red-600 mt-1">{srLabels[srValues.indexOf(value)] || 'Default'}</p>
                    </div>
                  );
                  return (
                    <div className="space-y-4">
                      {/* Flashcard Settings */}
                      <div className="bg-gray-50 rounded-xl p-4 space-y-4">
                        <h3 className="font-bold text-gray-800 flex items-center gap-2">🃏 Flashcard Mode</h3>
                        <SettingToggle
                          label="Auto-play audio when card appears"
                          checked={userSettings.flashcard.autoPlayAudio}
                          onChange={() => setUserSettings(s => ({ ...s, flashcard: { ...s.flashcard, autoPlayAudio: !s.flashcard.autoPlayAudio } }))}
                        />
                        <div>
                          <p className="text-sm text-gray-700 mb-2">Spaced repetition timing</p>
                          <SRSlider
                            value={userSettings.flashcard.srOffset}
                            onChange={v => setUserSettings(s => ({ ...s, flashcard: { ...s.flashcard, srOffset: v } }))}
                          />
                        </div>
                      </div>

                      {/* Writing Settings */}
                      <div className="bg-gray-50 rounded-xl p-4 space-y-4">
                        <h3 className="font-bold text-gray-800 flex items-center gap-2">✍️ Handwriting Mode</h3>
                        <SettingToggle
                          label="Auto-play audio when card appears"
                          checked={userSettings.writing.autoPlayAudio}
                          onChange={() => setUserSettings(s => ({ ...s, writing: { ...s.writing, autoPlayAudio: !s.writing.autoPlayAudio } }))}
                        />
                        <div>
                          <p className="text-sm text-gray-700 mb-2">Spaced repetition timing</p>
                          <SRSlider
                            value={userSettings.writing.srOffset}
                            onChange={v => setUserSettings(s => ({ ...s, writing: { ...s.writing, srOffset: v } }))}
                          />
                        </div>
                        <div>
                          <p className="text-sm text-gray-700 mb-2">Show on card <span className="text-xs text-gray-400">(at least one required)</span></p>
                          <div className="space-y-2">
                            <label className="flex items-center gap-3 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={userSettings.writing.showPinyin}
                                onChange={() => {
                                  const next = !userSettings.writing.showPinyin;
                                  if (!next && !userSettings.writing.showEnglish) return; // enforce at least one
                                  setUserSettings(s => ({ ...s, writing: { ...s.writing, showPinyin: next } }));
                                }}
                                className="w-4 h-4 accent-red-500"
                              />
                              <span className="text-sm text-gray-700">Pinyin</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={userSettings.writing.showEnglish}
                                onChange={() => {
                                  const next = !userSettings.writing.showEnglish;
                                  if (!next && !userSettings.writing.showPinyin) return; // enforce at least one
                                  setUserSettings(s => ({ ...s, writing: { ...s.writing, showEnglish: next } }));
                                }}
                                className="w-4 h-4 accent-red-500"
                              />
                              <span className="text-sm text-gray-700">English definition</span>
                            </label>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-gray-700 mb-1">Stroke trace speed</p>
                          <div className="flex gap-2">
                            {[{label:'🐢 Slow', val:0.4},{label:'▶ Normal', val:1},{label:'⚡ Fast', val:2}].map(opt => (
                              <button
                                key={opt.val}
                                onClick={() => setUserSettings(s => ({ ...s, writing: { ...s.writing, traceSpeed: opt.val } }))}
                                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition ${(userSettings.writing.traceSpeed || 1) === opt.val ? 'bg-rose-600 text-white border-rose-600' : 'bg-white text-gray-600 border-gray-300 hover:border-rose-400'}`}
                              >{opt.label}</button>
                            ))}
                          </div>
                        </div>
                      </div>
                      {/* Trouble Words Settings */}
                      <div className="bg-gray-50 rounded-xl p-4 space-y-3">
                        <h3 className="font-bold text-gray-800 flex items-center gap-2">🔥 Trouble Words</h3>
                        <div>
                          <p className="text-sm text-gray-700 mb-1">Cross-deck practice size</p>
                          <p className="text-xs text-gray-400 mb-2">How many of your top trouble words to show in the home screen banner</p>
                          <div className="flex items-center gap-3">
                            <input
                              type="range" min="5" max="50" step="5"
                              value={(userSettings.troubleWords || {}).topN || 20}
                              onChange={e => setUserSettings(s => ({ ...s, troubleWords: { ...(s.troubleWords || {}), topN: parseInt(e.target.value) } }))}
                              className="flex-1 accent-red-500"
                            />
                            <span className="text-sm font-semibold text-red-600 w-8 text-right">{(userSettings.troubleWords || {}).topN || 20}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>
            ) : (
              <div className="space-y-6">
                <div className="text-center space-y-4">
                  <p className="text-gray-500">You're not signed in. Sign in to sync your data across devices.</p>
                  <button
                    onClick={() => setCurrentView('login')}
                    className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg"
                  >
                    Sign In / Sign Up
                  </button>
                </div>
                {/* Settings available even when not logged in */}
                {(() => {
                  const srLabels = ['Much sooner', 'Sooner', 'Default', 'Later', 'Much later'];
                  const srValues = [-2, -1, 0, 1, 2];
                  const SettingToggle = ({ label, checked, onChange }) => (
                    <label className="flex items-center justify-between cursor-pointer">
                      <span className="text-sm text-gray-700">{label}</span>
                      <div onClick={onChange} className={`relative w-11 h-6 rounded-full transition-colors ${checked ? 'bg-red-500' : 'bg-gray-300'}`}>
                        <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${checked ? 'translate-x-5' : 'translate-x-0'}`} />
                      </div>
                    </label>
                  );
                  const SRSlider = ({ value, onChange }) => (
                    <div>
                      <div className="flex justify-between text-xs text-gray-400 mb-1"><span>Earlier</span><span>Later</span></div>
                      <input type="range" min="-2" max="2" step="1" value={value} onChange={e => onChange(parseInt(e.target.value))} className="w-full accent-red-500" />
                      <p className="text-center text-xs font-medium text-red-600 mt-1">{srLabels[srValues.indexOf(value)] || 'Default'}</p>
                    </div>
                  );
                  return (
                    <div className="space-y-4">
                      <div className="bg-gray-50 rounded-xl p-4 space-y-4">
                        <h3 className="font-bold text-gray-800">🃏 Flashcard Mode</h3>
                        <SettingToggle label="Auto-play audio when card appears" checked={userSettings.flashcard.autoPlayAudio} onChange={() => setUserSettings(s => ({ ...s, flashcard: { ...s.flashcard, autoPlayAudio: !s.flashcard.autoPlayAudio } }))} />
                        <div>
                          <p className="text-sm text-gray-700 mb-2">Spaced repetition timing</p>
                          <SRSlider value={userSettings.flashcard.srOffset} onChange={v => setUserSettings(s => ({ ...s, flashcard: { ...s.flashcard, srOffset: v } }))} />
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-4 space-y-4">
                        <h3 className="font-bold text-gray-800">✍️ Handwriting Mode</h3>
                        <SettingToggle label="Auto-play audio when card appears" checked={userSettings.writing.autoPlayAudio} onChange={() => setUserSettings(s => ({ ...s, writing: { ...s.writing, autoPlayAudio: !s.writing.autoPlayAudio } }))} />
                        <div>
                          <p className="text-sm text-gray-700 mb-2">Spaced repetition timing</p>
                          <SRSlider value={userSettings.writing.srOffset} onChange={v => setUserSettings(s => ({ ...s, writing: { ...s.writing, srOffset: v } }))} />
                        </div>
                        <div>
                          <p className="text-sm text-gray-700 mb-2">Show on card <span className="text-xs text-gray-400">(at least one required)</span></p>
                          <div className="space-y-2">
                            <label className="flex items-center gap-3 cursor-pointer">
                              <input type="checkbox" checked={userSettings.writing.showPinyin} onChange={() => { const next = !userSettings.writing.showPinyin; if (!next && !userSettings.writing.showEnglish) return; setUserSettings(s => ({ ...s, writing: { ...s.writing, showPinyin: next } })); }} className="w-4 h-4 accent-red-500" />
                              <span className="text-sm text-gray-700">Pinyin</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer">
                              <input type="checkbox" checked={userSettings.writing.showEnglish} onChange={() => { const next = !userSettings.writing.showEnglish; if (!next && !userSettings.writing.showPinyin) return; setUserSettings(s => ({ ...s, writing: { ...s.writing, showEnglish: next } })); }} className="w-4 h-4 accent-red-500" />
                              <span className="text-sm text-gray-700">English definition</span>
                            </label>
                          </div>
                        </div>

                      </div>
                      {/* Trouble Words Settings */}
                      <div className="bg-gray-50 rounded-xl p-4 space-y-3">
                        <h3 className="font-bold text-gray-800">🔥 Trouble Words</h3>
                        <div>
                          <p className="text-sm text-gray-700 mb-1">Cross-deck practice size</p>
                          <p className="text-xs text-gray-400 mb-2">How many of your top trouble words to show in the home screen banner</p>
                          <div className="flex items-center gap-3">
                            <input
                              type="range" min="5" max="50" step="5"
                              value={(userSettings.troubleWords || {}).topN || 20}
                              onChange={e => setUserSettings(s => ({ ...s, troubleWords: { ...(s.troubleWords || {}), topN: parseInt(e.target.value) } }))}
                              className="flex-1 accent-red-500"
                            />
                            <span className="text-sm font-semibold text-red-600 w-8 text-right">{(userSettings.troubleWords || {}).topN || 20}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (currentView === 'home') {
    return (
      <div className="min-h-screen" style={{background: 'linear-gradient(160deg, #fdf3ee 0%, #fef9f5 60%, #fdf3ee 100%)'}}>
        {/* Hero Section */}
        <div className="text-white py-12 px-6 shadow-2xl" style={{background: 'linear-gradient(120deg, #7a0d0d 0%, #a01515 25%, #c0310d 55%, #8b1a08 80%, #5c0a0a 100%)'}}>
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between flex-wrap gap-6">
              <div className="flex-1">
                <h1 className="text-5xl md:text-6xl font-black mb-3 tracking-tight" style={{textShadow: '0 2px 12px rgba(0,0,0,0.4)'}}>
                  中文 Learn
                </h1>
                <p className="text-2xl md:text-3xl font-light mb-4" style={{color: '#f5d49a', fontFamily: "'Great Vibes', cursive", fontSize: '2.4rem'}}>
                  Chinese Learning App
                </p>
                <p className="text-lg max-w-2xl" style={{color: '#fce8c8', fontFamily: "'Crimson Pro', Georgia, serif", fontStyle: 'italic', fontSize: '1.25rem', fontWeight: 300, letterSpacing: '0.01em', lineHeight: 1.6}}>
                  Master Chinese vocabulary with spaced repetition, interactive writing practice, and engaging study modes.
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  <a
                    href="https://github.com/lillianwang112/chinese-learning-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white text-sm font-medium px-4 py-2 rounded-full transition-all"
                    style={{background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,220,150,0.4)'}}
                    onMouseEnter={e => e.currentTarget.style.background='rgba(255,255,255,0.25)'}
                    onMouseLeave={e => e.currentTarget.style.background='rgba(255,255,255,0.15)'}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    How to Use This App (GitHub Guide)
                  </a>
                  <a
                    href="https://drive.google.com/drive/folders/11h7AetpBc2-AZqHWY8M3xm_z4YkOqYEf?usp=share_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white text-sm font-medium px-4 py-2 rounded-full transition-all"
                    style={{background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,220,150,0.4)'}}
                    onMouseEnter={e => e.currentTarget.style.background='rgba(255,255,255,0.25)'}
                    onMouseLeave={e => e.currentTarget.style.background='rgba(255,255,255,0.15)'}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    </svg>
                    Download Decks + 课文 (Princeton Only)
                  </a>
                  <a
                    href="https://forms.gle/EABUSDMinmqvb6AS8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white text-sm font-medium px-4 py-2 rounded-full transition-all"
                    style={{background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,220,150,0.4)'}}
                    onMouseEnter={e => e.currentTarget.style.background='rgba(255,255,255,0.25)'}
                    onMouseLeave={e => e.currentTarget.style.background='rgba(255,255,255,0.15)'}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                    Share Feedback / Ideas
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <img 
                  src="data:image/png;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBMRXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAH0KADAAQAAAABAAAEZQAAAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/8AAEQgEZQfQAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMAAQEBAQEBAgEBAgMCAgIDBAMDAwMEBgQEBAQEBgcGBgYGBgYHBwcHBwcHBwgICAgICAkJCQkJCwsLCwsLCwsLC//bAEMBAgICAwMDBQMDBQsIBggLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLC//dAAQAff/aAAwDAQACEQMRAD8A/wA/+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//9D/AD/6KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigByI0jbUGT/hQylGKnGQccHIqUq0MYY7T5q5HIJAB/Q5HfBx7GnY8+Et/FEMklgMrkAADgkgn349AKBlaiiigQUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAf/9H/AD/6KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACpYkViWkztUZOMZ9hz6//X7U1I3kO2NSxwTgDPAGSfwHNPldTiOPOxegJzzgZPQdT+nFADZZGmkaV8ZY5OAAOfQDgfQURSNDIsqYypyMgEceoPB+hqOigCedEUh4vuOMjPUeo/D9RzUFTQtHny5fut36EHBwc4JwCeQOtQ0AFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAH//0v8AP/ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooqVPLVSzct0AI4wQec5HTjFAEki+Qvl/xtkOCOVwenI4PHY9Dj1FVqKKACiiigAqyg89BEAA6/dwDufJHHHU855+megqtRQAUVYmZJf3wwGJ+ZVGAOnI5788YAHaq9ABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAH/0/8AP/ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiinJs3jzM7c8464oAkWJxF9pZcpu29cZPX6nHfHTI9RTHkeQ7pGLHAGSc8AYA/AcU04zx0pKACiiigAooooAKKKKAFBKkMO3409kOwTAAKSRjOTke3Xvxn+lR05CquGcbgDyOmaAG0U5tpYlBgdgeTim0AFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB//1P8AP/ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKt2dvFcSkXEgijUbnY8nA7KONzHsPzIGSABtvb+dl5DsjT7zdcZ7Adyew/oCaZO8UkpaBPLTgBc56ep9T1PQZ6ADipbq5E5CQr5cSZ2JnOM9ye7HufyAAAFSgAooooAKKKKACiiigAooooAKKKKALNrOkDnzYxIjjawPXHqD2IxwfwOQSDXIAPBzSUUAFFXr2zW2ZZIH82CTlHxjOOoI5ww7j8QSCCaNABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB/9X/AD/6KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKkCbQHkB2sDjH+emaACLyvMHnZ299vWo6keWWRVWRiwQbVBOcDJOB6ckn8ajoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAHBioIGORjpSyBA2IyWHHJGKZU8FzNbb/ACWwJFKMOoKnsQfzHoQCOQKAIKKkMYKb48nA+bjpn+nvUdABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAH/9b/AD/6KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAopyoW6dPU1MzrC2LcnIBUsDw2cg44BAIOMH/61ADWRYi0cwO8DGOhVgecgj0zxx/SoTzzRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQADjmrGBcMBEp8xuoH8TE9FAHHB6e34VXooAKKegDsFYhQT949B+VNIKnBoASiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA/9f/AD/6KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKcEYjd/CCAT2GaAG1ajijjKyXecAqTGDtdlPOQcEDjufUHBFIzRwMUhIZ1Y4kGcEDpgEAj1yeenTFVqAFJBPAxSUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAVKkzqhj6qc8HnGccj0PA5H8qiooAmlEbSM9uCEySATuKjPGTgZ+uBUNKCQcjgirCtHOwSYhXZhmQ5wAeuQASfXI569c0AVqKcUYDd/CSQD2OKbQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB//9D/AD/6KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiinIjyHbGCxwTxzwOT+QoAbTkR5GCRgsx6Acmm08O4UoDgHr70AOjMcciu4EgHJXkA+x6H64/OmF3KCMk7QSQO2T1/lTaKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAHB3CGME7SQSO2R0/nT5DHJIzoBGDyFGSB7Dqfpn86iooAc6PGxSQFWHUHg02nl3KhCcgdPamUAFFPkjkibZKpU4BwRg4PI/SmUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAH//R/wA/+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKmMLRttm+Tkgg9QR7dfzxQBDUiQyyqzRqSEG5iOgGQMn8SB9TUhe3VNsaZJXBLHo2c5AGMccc57n0xHJK8rbnP0A4AzzwBwPwoAcnkqu58s3YDgfif6frUj3czQC2XCR8ZVRjcR3Pcn69M8YFVaKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigCwLqf7P8AZS2Y+wIBx9M9M98YzUbeW3K/L7dfy/z+NR0UASSxNBK0TkEqcHaQw/AgkH8DUdFSs8bhV2hNqkErkljycnJ/DjAwOmeoBFRUwhaRtsPz8gADqSfbr+WahoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD//0v8AP/ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigCYi38skM2/jAxweDnnPGDjHBz146UrQNuYRMJArbQV79eQDg449PriknlWZw6IEAVVwPVQAT+OMn61DQAUUoJAwKlMqyTebMvBbLBcL9ccYH5YFAENFTgWzDJLKeB0DeuT274wP19U8kFgiOrE7fYZb3OAMdD2+o5oAhoqSOGWUlYlLkAsQozgLyT+A5NMII60AJRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRUscM0pxEhY4J4GeFGSfwHJ9qRYmZS4Iwo3HJAOM46dz7dcc9KAI6KkZFVQwcMckYGc8d+QOv50pMA3ABm/unOPTqOe2e//ANcAioxU7zhshEVATnAGfXucnvjr2HfmoWZnJZjkn1oAcUwuSRnjjr1/Spna1RsQhnAc4Z+Ny8Y+UdD1z8x6+2TWooAmM8pXYDgEbSBxkZzzjrz6+g9BUNFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFTCeULsJyANoB5wM54z059PU+pqGigCxGbV3xOGQM4yU52rznCnGT0x8w6e+Q2KEzMqRsu5jjDELj6k4H61DRQAYopVZkIZTgj0qTzcpsZVPocYI6emPTvn86AIqKlBgO0EMv945z69Bx2x3/wDrCRoy5LheQMHPfvwDwPzoAioqRomVQ5Iww3DBBOM46dj7dcc9KWSGaI4lQqcA8jHDDIP4jke1AEVFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFKAT0qSSGWLiVShwGAbgkMMg/QjmgCKipvJAYo7qpG73GV9xkHPQdvoOaUi2UZBZjyOgX0we/fOR+voAQUVMJER2aNBjPy7vmI5z7A+nIx7VESSMGgB4ibGWwoBAOT6+3WgiLygVYl8nIxwBxjnPPfIxx754jqxayzRTZgGWZWTGM53gqfxwaAK9FFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAf/0/8AP/ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigCa5kkluJJZRtdmJYdMEnmoalnnluZ3uZzueRizHpknk1FQAUUUUAFFFFABUiSyxq6RsVEg2sAcBhkHB9RkA/UVHRQBLHK8TF1wSQV+YBhgjHfPOOh6g8jmo+2KSigCxcTRzbPLhSLYgU7N3zEfxHcTye+MD0AqFipPyAge5zTaKALtlJp0bN/aMUko/h8uQR4+uUfP6Veafw2VIS0uQ2OCbhSM/9+qxKKVh3N37R4Z/59Lr/wACV/8AjNYjbS3yAge/NNop2C44lNuADn1zxU5niNqLcQoHDbvNy28j067cf8Bz71WooEWLe5e2nE8QQsMjDoHXkY6MCP0461HFNNBKs0DFHQhlZTggjoQexqOigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigCSWaaeVpp2Lu5LMzHJJPUk9zUlxcSXUxnlChiAMIoReBjooA/TnrVeigCxHNGkEkLQo7Pja53bkx1xggc9DkH2xUOU24IOfXPFNooAcu0N84JHtxW39o8M/8+l1/wCBK/8AxmsKiiw7m4tx4bx81pck89LhRx/36qjeSaa5H9nwyxevmSCT+SLVGilYLjgV53An8amt5o4d/mQpLvQqN+75Sf4htI5HbOR6g1XopiF7VLNPJPJ5j7QSAPlUKMAY6KAO3PqeTzUNFAEjyyyKiSMWEY2qCchRknA9Bkk/U1HRRQAUUUUAFFFFABU1uk0lwkdtnzGYBMcHcTxj8ahp8cjxOssTFWUggg4II7igBlFOZWRijghgcEHgg02gAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/9T/AD/6KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAqa3ne2uI7mMAtGwYZ6ZBzUNWbOSGG8imuF3xq6llxnIB5GDQCK1FFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABX1Z4F/Ya/bA+KP7Pt5+1T8MPhzrviX4fabqFzpd9rWk2jX0Fnc2kUM0ouFg3yQIsc8TeZKqxndgMSGA+U6/wBQ7/gy4/5RUeMf+yn6t/6bNKoA/wAvN0eJzHICrKcEHggim1/uBftSf8Et/wDgnf8Atpi9uP2mvg94Z8T6jqJQ3GrNZLa6u/l42j+0LbyrwAAAYEwBAweK/Df4w/8ABnB/wSY+I3iS58Q+Ab/xz4AhlTEem6Pq8NzZRNz8w/tG1vLk9eQbg8DjHWgD/LFor/QE8Wf8GNtpLqs8/gb9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gAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//9H/AD/6KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAq5YypDMzyHAMci/iyED9TVOigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP6x/8Agzu+Lnwo+DX/AAUi8feJPi/4n0nwpp1x8NNRt4rrWL2GxheUalpkuxXndFLeXG77Qc7VY9ATX+kMv7dv7D7qrp8ZfAxVlZwR4isMFU+8R+/6Due1f4WVFAz/AEX/APg8c/aL/Z8+M37BPwt0v4P+O/D3iu5Tx6tw0WjapbXziFLC8RnKwSOQquwUt0DEA8mv01/4NIf+UL/hP/sYtf8A/So1/k11/rKf8GkP/KF/wn/2MWv/APpUaBHif/B5n/yia0D/ALKNo/8A6RajWL/wZcf8oqPGP/ZT9W/9NmlVtf8AB5n/AMomtA/7KNo//pFqNYv/AAZcf8oqPGP/AGU/Vv8A02aVQB/XVRRRQB+KP/BRP/gvn+wX/wAEv/jrp/7PP7Th8Rf8JBqWjW+uxHSNOW7gFpczTwJuczRkPvt3yu08YOea8y+Gn/ByB+wf8ZPA918S/hR4T+KfiXw/YBzeajpXgjUb60tjEu+QSz26SRIUXlsvgDnpzXyj+3t/wRE1v/go5/wXl8GftFfHbR1uPgR4K8A6Y+p+ay7NY1W3vb9otMChxJsG9J7htpUxDy8hpQR/Sl498F6FZ/A/W/h/4ZsodO01dEurC2tbNEgihi8hkVI0UBEVRwoAwPTFAH4B/DL/AIOqP+CaXxt8Z/8ACu/gnoHxJ8Za66TSQafofhaXULueOAFndIYZXkKhRuJKjaOWxWF8Qf8Ag7H/AOCY/wAJPFVz4F+Kvh/4k+GdbsyBPp+reGjZXURP9+KadHX8QK/js/4NFLeGb/gsv4fklXLReF9edD6EwBc/kSK/0fP+Cl//AATl+BP/AAU0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BRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAH//T/wA/+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKfHG8sixRjLMQAB3JplOR3jcSRkqynII4IIoAbRT5I3idopVKspIIIwQR2NMoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAr/WU/wCDSH/lC/4T/wCxi1//ANKjX+TXX+sp/wAGkP8Ayhf8J/8AYxa//wClRoA8T/4PM/8AlE1oH/ZRtH/9ItRrF/4MuP8AlFR4x/7Kfq3/AKbNKra/4PM/+UTWgf8AZRtH/wDSLUaxf+DLj/lFR4x/7Kfq3/ps0qgD+uqiiigAr8Wf25/+CL2jft/eLvE198WP2iPjHoXhLxTHFBc+DPDuu2tl4eWGKNEMYtWsZd6OymRxK0m52J6AAftNRQB/I94M/wCDN3/gnt8NfFmnePvht8Wvi94f17SJ0urDUtO1nTba7tZ4zlZIpYtKR43U8hlYEdq/oq/Yz/ZY1z9kP4XXXww1v4qeNvi351+97Fqvj2/i1PU4FkRE8hbiOCAtCChdQ4Zgzt82CAPreigDl/HHh7UPF3grWPCmkaveeH7vU7K4tIdU08RG7sZJo2RbiDz45YfNiJDp5kcibgNysMg/zYftAf8ABrT+zZ+1lLptz+1J+0X8d/iFLoyyjT/7f8TWN+lp5+3zfJSfTJBH5mxN+zBbauc4GP6d6KAP5ePgL/waufs3/spXmo6j+y3+0X8dPh5PrAiS/bQPEllp/wBrWDcYxMLfTYxJsLsU3527jjqa+nNd/wCCIHxH1zQm8OTftsftFLbPuD48UWqykNkEebHYpJj/AIFgV+9dFAH8t/7IH/Bp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f8GUv/KMX4if9lQ1D/006VQB9Cf8HfX/AChz1P8A7G7Qv/Qpa/yj6/1cP+Dvr/lDnqf/AGN2hf8AoUtf5R9A30CiiigQUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFPiMYkUyglMjcB1x3plTQSiFy7IHyrLhunzAjP1Gcj3oAhooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/1f8AP/ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigBzbQflOelNqaWTeka7Au1cZA5bknJ9+cfQVDQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAf0z/APBqz+xX+y5+3V+3141+FP7Wng+18a+HtN+H97q1tZXck0aR3sWo6dCsoMMkbZEc0i4JxhjxnFf37z/8G8//AAReuDIZP2fvDw83ltsl2uOMcYnG38Mc89a/ir/4Mpf+UnnxD/7JdqP/AKdtJr/TuoC5/nnf8HWH/BLL/gnv+wp+xr4F+KX7JvwwsPBXiTX/ABxFp95e2VzdOHs/sF5K0IilmkiVWkSNsqqkbMdCa/c3/g0h/wCUL/hP/sYtf/8ASo18X/8AB7KD/wAO+vhWf+qhR/8Aptva+0P+DSH/AJQv+E/+xi1//wBKjQB4n/weZ/8AKJrQP+yjaP8A+kWo1i/8GXH/ACio8Y/9lP1b/wBNmlVtf8Hmf/KJrQP+yjaP/wCkWo1i/wDBlx/yio8Y/wDZT9W/9NmlUAf11UUUUAFFFFAH4Bf8HRv/ACgo+Of/AHLP/qQaZX8kP/Bqb+wQ/wC274X+OsbfGb4o/CWLQbjw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RVqgR/Jr/wAHl2z/AIdLaJu6/wDCxNHx9fseof0rz3/gyl/5Ri/ET/sqGof+mnSq7T/g85m8v/gk94bT/np8SdIX/wAkNSP9K4v/AIMpf+UYvxE/7KhqH/pp0qgbPoT/AIO+v+UOep/9jdoX/oUtfjf/AMGqH/BKv/gn1+3H+wx42+L37WHwx07xt4i0rx9daXa3l9LcqY7OHT7CZItkUqRlRJNIxypJ3YOQAK/ZD/g76/5Q56n/ANjdoX/oUtfOn/BlH/yjP+I//ZTr7/01aXSB9D9dB/wbxf8ABFwRCH/hn/w/hQQP3t5nkEdftGTweCTweRzzX8A3/B1J+xb+y9+wt/wUC8GfCb9kzwfa+CvDupfD2w1e5srSSaRJL2XUtSheUmaSRsmOGNcA4wo4zmv9Ziv8wn/g9Y/5Sj/D/wD7JZpn/p31enYLn8ftFFFAgooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAqaFZcPJFgbFy2SBwfl4z169vrUNKNuDn8KAEooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD//W/wA/+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAJmEfkIwcl8sCuOAoxgg57knjHGPeoamETtbmYY2owU8jOWzjjqRweeg79RUNABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB/YV/wZS/8pPPiH/2S7Uf/AE7aTX+ndX+V9/waAfHP4J/AH/go3488W/HfxjofgrSrv4b39nBe69qEGm28tw2p6Y4iSS4eNWkKI7BASxVWOMA1/o0H/gpb/wAE5F6/tAfD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l7w//wAHDH/BF7xM7Jp37QPh6Iqu8/a47u0GOnBngjBPsOfavZNP/wCC0X/BJTU4vOtv2jvh4oyR+91+0hPHtJIp/Sv8T2igD/bn/wCHvH/BKj/o5P4Yf+FZpn/yRXO6h/wWf/4JLaZG0tz+0f8ADxguM+V4gs5Tz6CORievav8AE6ooA/2ZfEf/AAcH/wDBGLwrcG11P9oLw3KwzzZi5vF4JH3reGQdvX37ivLtX/4Ob/8AghvogJuvjrbSkdrfQtanzn/rnYMP881/j10UAf6t3j7/AIO/P+COng65EHh3UfF/itST+80rQmjUY/6/pbVufp9a+YviB/wevf8ABO/SdPZvhn8MviFrl6M4S/g07ToD6fvEvbl/r+6496/zLqKAP79/E3/B8nO+nzQ+Df2aVju2X91Ne+LN8aN6tGmmKWGOwkX618HeJv8Ag9S/4Kc6k91F4Z8A/DXTIZd4gL6fqdxPCrZ2ncdTVGZfUx7SR93HFfx80UAfrT+3B/wXF/4KX/8ABRH4d3Xwb/ak8fw6x4NuNRi1RNFtdI0+yghng3eVslht1uSqB2ADzPnPzZr8lqKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAliwCzFQwCnhjjrxkcjJBOf58ZqKpUO2NyCMnC4Iycdcg446fXn0zUVABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAH/9L/AD/6KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKlwDBngFW9eTn29sfrUVSx7Sj7gTxkYOMHI6+vGf50ARUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAXINR1C1XZazyRj0ViP5U24vr27GLqZ5QP77Fv51VooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAJi2LcKCRuYk/NwcDj5fbJ59+O9Q1POrpsjkUqQoOCu04bkH3yDkE9vaoKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/0/8AP/ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAqe3SSWZYYVLO/yqoG4ktwABUFFABRUsyxpM6RNvUEgMRjI9cdqioAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiipYM+arbPMC/MVOcEDk5xg4x1wRQATosczRodwUkAgEZx3weeaioooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACi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g6l/4Mj/AJh/qdnv/QBV/wDBcv8AI/MGpI3kjJeMlTgrkccMMEfiK/Tr/hzv+3v/ANCraf8AgztP/jtfKv7Rn7J3xt/ZSv8ATNG+NmmwabdazHJNapFdRXLGOEhWJ8p2CglhjPXHHQ104TiLK8XVVDDYqnOb2UZxbdtXon2OXGcOZrhKTr4rCVIQW7lCSSvotWu5810UUV7J4oUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB//1f8AP/ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA/ar/ghl8TW8LftS6v8OLqcR23irRZdkRz+8u7F1ljx/uwmc8//r/rOr+DL9hz4jv8Jv2vPh544DrFFDrdtbXDucBbe9P2aZifaKVj6V/ebX8x+MmX+xziniUtKkF98W0/w5T+ofBjMPbZNUwsnrSm7ekkmvx5gooor8jP18KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAor54/aY/ag+Ev7J/wAOpPiP8WLxo4S3lWtpbhXu7ybr5cKMygkDkkkKo5JFdf8ABP43fDX9ob4dWPxS+FOopqWk3wIDD5ZIpVxvilQ8pImeVPsRkEE9ssuxSwyxrpP2TfKpW92/a/8AX4HFHMcK8U8EqsfbJczjdc1u9v66d0esUUUVxHaFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAV/HV/wWg+I3/Cbfts3/huFmMPhTS7LTAN2ULyIbpyB0B/fhT7rX9itf5+P7SPxGPxc/aA8afExZWmi1vWr27gZjnEDyt5S/RY9qj2FfsfgxgPa5pXxbWlOFvnJ6fhGR+M+NeYeyyuhhE9ak7/KC1/GUTxWiiiv6VP5lCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/W/wA/+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigCSKWWCVZ4GKOhDKynBBHQg9jX+gn+z38RV+LvwJ8H/E8OHfXtHsr2UjjE0sSmRfqr7gfcV/n0V/YV/wRa+KP/CefsZW/hK5kVrnwhqd3p23Pz+TKRcxsR6ZmZR/uV+OeM+Xe1yyhjEtac7P0mv81E/ZvBXMfZZpXwcnpUhdesH/AJOR+t1FFFfzUf00FFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABXzD+1f+1j8L/2RPhjP8QviHP5lxJuj07TYmAuL64xwiA5wo6u5GEHqSAcL9sP9s/4T/sZ/D7/hLfHrm91W9DppWj27AXF7Ko9Tny4lJHmSkEIDwGYqjfxZ/tD/ALQ/xO/af+KF98V/ire/ab+7OyGGPK29pbqSUggQk7Y0ycclmJLMWZmY/pfAXh/WzqosVik44aL36zfaPl3l8lre35lx/wCIVHJKbwuFalipLbpBP7UvPtHru9LX1f2mf2nPip+1b8S7n4lfFG8MkjEpaWcZItrKDtFChJ2j+8fvMeWJNek/sU/tq/Ej9jH4kjxN4aZr/QdQZE1fSHbEV1EOjL2SZMko/wCBypIPxhRX9N1cnwVTBPLp0l7C3Ly20t5drbp7313P5fpZzjaeNWZQqv29+bmvrfz732a2tpsf6B37P/7QHwy/aY+GVj8VfhTfC7067GySN8LPazqAXhmQE7JEyMjJBBDKSpBPtVfwZ/sh/te/FH9jn4mp49+H0v2ixu9kWraVK2Le/t1OdrcHZImSYpQNyEkcozo39pf7Nv7TXwm/aq+HUPxH+E1/9og+WO7tZBsubOcqGMUydmGeCCVbqpI5r+W+OeA8RkdZ1qN5YaT0l1j/AHZefZ7P1ul/VPAnH2Hz2iqNa0MTFe9HpL+9Hy7rePpZv6Booor89P0QKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAPmb9s34l/8ACoP2VPH3xBRzHPZaLcpbsMcXNwvkwnn/AKautfwQV/Wh/wAFy/ievhT9lnSfhvaXLRXXivWYhJCM4ls7FTNJk9MLMYDg9+e1fyX1/Tfg3l3scoqYprWrN29Iqy/HmP5f8Z8x9tnFPCxelKCv/ik7v8OUKKKK/XT8fCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/X/wA/+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAr96P8Aggv8UG0b4zeM/hDctEkOvaVFqMRdtrmfTpdmxAfvFo7h2YDnEeegNfgvX2L/AME/finF8Gv2yvh944uzGtt/aiWFw8zbI44dRVrSSRmJAAjWYvknHy88V81xjlv1/JcXhkrtwbXrH3o/ikfTcGZl9QzvCYpuyU0n/hl7svwbP7s6KKK/iw/toKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAK+H/wBt/wDbk+G/7F/w/wD7W1vbqfibUUYaTo6Ph5mHHmSEZKQqfvNjJPyrk9MT9u79vb4efsZeBn3vDqvjPUIidL0ff83OQJ5wp3JApB54MhG1T95l/jE+KnxU8ffGvx7qPxM+JupS6rrOqSmWeeU/gFVRwiIMKiKAqqAAABX6r4f+Hk82msdj044ZbLZ1H2XaPd9dlrdr8o8QvEWGUQeBwDUsS1q91TXd95dl03elk9z46fHT4lftG/Eq/wDir8Vr9r/VL44AGVhghUnZDCmTsjTJ2r6kkksWJ8hoor+nqFCnRpxpUoqMYqyS0SS6I/luvXqVqkq1aTlKTu29W2922FFFFamQV9J/ss/tTfFD9kn4n2/xJ+GtxkHEV/YSk/Z723zkxyAfmjj5kbkdwfmyiufFYWjiaM8PiIqUJKzT2aOjCYuthq0MRh5uM4u6a3TP72v2T/2svhd+198MYviH8Op/LuIdsWpabKwNxY3BGdjgYyrYJjkA2uBxghlX6er/AD/v2dP2kPir+y38SrX4ofCa/wDst5DiO4t5AXtry3JBaGdMjcjY7EMpwysrAEf2kfse/tl/Cn9sn4dL4v8AAkwtNVtAiaro8rg3NlMw78DfE3PlygBXAIO11ZF/lrjzw/rZLUeKwqcsK3vu4X6S8u0vk9bX/qvgHxCo53TWFxTUcVFarZTS6x8+8em60vb65ooor80P00KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA/lF/4Lq/FZfFX7SHh74VWF4s9t4T0cSzQqMGC91Fy7qxxyWgS3YckAH1Jr8Qa+mf2y/i83x4/am8dfFJLiO7tdR1WaOymiXar2NriC1OPUwRx5Pc5Pevmav7Y4Uy3+z8nwuEas4wV/8T1l/wCTNn8Q8W5n/aGc4rFp3Upu3+Fe7H/yVIKKKK+gPnQooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/0P8AP/ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP9An9mr4qR/G/wDZ/wDB3xZBTzdd0m1ubhYySqXJQCZBnJ+SUMvPPFe31+LX/BDn4tp4y/Zb1L4W3UiG58GarIqRqfmFpqGZ42Ye83ngeuK/aWv4k4nyz+z81xODtZRm7f4XrH/yVo/uLhfNP7RynC4293OCv/iWkv8AyZMKKKK8I94KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACvzk/b9/4KHeBP2MPCw0bTEi1vx1qcJbT9LL4SFTkC4uivKxBvuoCHlIKqVAZ15H/goj/wAFIfCP7Ivh+XwL4Ekt9X+IV7GPJtCd8Wno4yJrkA9SCDHFkF8gnC9f4/PHXjrxf8TfF+oePvH2oTarrGqzNPdXU7bnkdv0AAwFUAKqgAAAAV+u+H3hxPMnHMMyjbD7xjs5/wCUfPd9NNT8f8Q/EmGWKWXZbK+I2lLdU/8AOXlsuuuhb+JHxI8cfF7xxqPxH+I+pS6trWrSma5uZj8zMeAAAAFVQAqIoCqoCqAABXEUUV/TFOnGnFQgrRWiS0SS2SR/MVSpOpNzqNuTd23q23u2FFFFWQFFFFABRRRQAV6/8Cvjr8Sv2cfiXp/xX+FV+bHVLBsEHLQ3ELEb4ZkyN8T4+Zcgg4ZSGCsPIKKyr0KdanKlVipRkrNPVNPozWhXqUKka1GTjOLumtGmtmmf3RfsWftx/Cv9tDwQ+r+FCdN8Qackf9qaPOwMsDMB88ZH+shLZCyYB4wyqcCvtav89X4O/GL4ifAb4haf8UPhdqMmmavpz7kkQ/K6H70ci9HjccMp4Ir+zP8AYP8A28fAH7aPgPzIDHpfjDS4lOraTu5HQefBnl4GPfkoSFbqpb+X/EDw8qZRJ43Apywz36uD7PvHs/k9bN/1L4e+ItPOIrA45qOKW3RTXdf3u6+a0ul970UUV+WH6sFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABXzd+2B8V/wDhSH7MHjn4nw3KWl1pmkXH2KSQZUXsy+VbDHfMzoMd6+ka/Dr/AILr/FhvC/7PPh34S2M2yfxVq3nzqCPntNPXcykdf9dJCwP+zivoeFMs/tDOMLhGrqU1f/CtZfgmfPcWZp/Z2T4rGJ2cYO3+J+7H/wAmaP5TKKKK/tc/iAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/9H/AD/6KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD9j/wDgiP8AF2PwJ+1lc/DvUJAtr4z0ua1jBOB9rtP9IjOf+uayqB3LD6H+umv89r4HfE3Uvgx8YvDHxX0nmbw9qdtfbecOkTguhxzh1ypx2Jr/AEFdI1bTNf0q113RZ0urO9iSeCaJtySRSAMrKRwQwIIPcV/NXjNlfsczo46K0qxs/wDFDT/0lx+4/prwWzX22WVsDJ60pXX+Gev/AKUpfeaFFFFfjh+zBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABX5Jf8FHv+Cl/hr9lnRbr4WfCm4h1H4i3UQGMCSHSkkGRLMCCrS4OY4j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fB/9ifxFBZySRX/i2SLw/bNGMjF3uecN6K1tHMufUgd6/iyr96v+C8Hxml174u+E/gZp8p+y+HtPfU7tUlyrXV+21FkjHAaOKIMpPO2Y4wDz+Ctf1h4VZT9TyGnVkveqtzfptH8En8z+SvFfN/ruf1KUX7tFKC9d5fi2vkFFFFfpB+aBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB//T/wA/+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAK+m/2NPjOP2fv2n/BfxWuJPKs9O1GOO9YkgCzucwzk464idiB0yBXzJRXPjMLTxNCph6qvGacX6NWZ04PFVMNXp4mk7ShJSXqndH+jsrK6h0IKkZBHIIp1fD3/BOP42/8L5/Y78HeLLubztS0+1/sjUCfvfaLD91ub/akjCSH/f8Awr7hr+G8xwNTB4qrhKvxQk4v5Ox/dWXY6njcLSxdL4ZxUl81cKKKK4ztCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKQkAZPQUALX89H/AAU+/wCCpr+GJNQ/Zw/Zk1Ef2kN1vreu2zf8exzhre1cceb1Ekoz5f3V+fJTzn/gpt/wVVi8Swal+zn+zFfn7Axe21nX7dsC4HR4LRh/yzPR5Qfn5CfJ8zfzyV++eHnhp8GaZvDzhTa+6U/0j832P5/8RfE348ryeflOon98YP8AOXyXcVmZmLMck8kmkoor98P5/CiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACrmnajqGkahBq2kzyWt1ayLNDNCxSSORDuVlYYKspAIIOQap0Umk1ZjTad0f1Z/8E0P+CpVp8bxafAj9oq9itvGPEWm6nJtii1TJwsT4wq3PZQABL0Hz8N+4tf5xUckkMiyxMVdSCrA4II6EGv6jP8AgmP/AMFSrT4lw6b+zv8AtIagI/E2VttJ1i4bC6gMYSGdzwLjjajH/XEgH94fn/nrxF8N/Yc+aZTD3N5wX2e8or+Xuvs7rTb+ivDjxL9vyZXm8/f2hUf2u0ZP+bs/tbPXf96aKKK/DT91CiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACo5pobaF7i4cRxxgszMcBQOSST0AqSvg7/gpZ8a/+FF/sbeL/ENpL5Wo6vANFscEBjNf5jYjPdIvMcd/lrty3A1Mbi6WEpfFOSivm7fgcOZ4+ngsJWxlX4acXJ/JX/E/j9/ax+Msn7QX7SHjL4wbt8Gs6lK1odpU/Y4cRWwIPORCiA+/YdK+eqKK/uTC4anh6MMPSVowSivRKy/A/hXFYmpiK9TEVXeU25P1bu/xCiiitznCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD//U/wA/+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP6HP+CC/xsay8S+M/wBnnUpT5V9DHr1grMAolhKwXAAPVnRoTx/DGfw/pcr+Br9j/wCOTfs3/tK+EPjHIcWmk36i+ATzGNjcAw3O1cjL+S77OeGwa/vjR1kQSIcqwyCO4Nfy94vZP9VzhYyK92tG/wD29Gyl+HK/Vn9TeD2c/Wsmlg5v3qMrf9uyu4/jzL0Q6iiivyg/WgooooAKKKKACiiigAooooAKKKKA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UAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAfsz/wTb/4Kiap+zbPb/Bv46z3Go+A5XCWt0AZp9IZjjKryz23do1yyfejBOUb+s3RtZ0fxHo9r4h8PXcN/YX0KXFtc27rLDNDKAyOjqSrKykFWBIIORX+czX66/wDBN7/gpjrv7K19B8JfirJLqPw+u58oQDJNpTynLSQjqYWJ3SRDPOWQbiwf8Y8Q/DhY1SzLKoWrbygtp+a/vd19r/Fv+1eHXiU8E45Zms70doTe8PJ/3ez+z/h2/sDorG8PeIdC8W6FZ+KPC95DqGnahClxbXNu4kilikGVZWHBBByCK2a/m+UXFuMlZo/pWMlJKUXdMKKKKQwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAK5vxn4t0LwB4P1Xx34om+z6ZotnPf3cuC2yC2QySNgcnCqTgV0lfjT/wWy+PzfDH9ma0+EekStHqXj67MD4VuLCyKS3GHBABZ2hTBzuRnFexw/lM8zzGhgIfbkk/JbyfyimzxuIc3hleW18fP7EW15vaK+cml8z+WP4v/EzX/jL8Udf+Kvidt19r99NeygdF81iQg/2UGFHsK85oor+3KVKFKEadNWikkl2S2P4crVZ1Zyq1HeUm233b1bCiiitDMKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9f/AD/6KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP0v/AOCTv7Qg+A/7Xuj2OrTmLRvGK/2FeAs2xZLhgbaTaOCwmCpuYfKjvyMmv7Sa/wA462ubmyuY7yzkaKaJg6OhKsrKcggjkEHkEV/eZ+xb8fLX9pb9mnwt8VxIr311ai31FV/gvrf93MCDyMsNw/2WB5r+e/GfI+SrQzamtJe5L1WsX81dfJH9EeCue89GvlFR6x9+Po9JL5Oz+bPqWiiivws/eAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoorxr49fH34X/s1/Da8+Kfxa1FbDTbX5I0GDPdTkEpBAhIMkrhThRwACzEKrMNsPh6terGjRi5Tk7JLVtvojHEYilQpSrVpKMIq7b0SS6s1vjH8Y/h38BPh5qHxQ+KOoppukaam55G5d3P3Y416vI54VRyT7ZNfxp/t6ft7+Pf20/HS7lk0jwZpUjHSdI3ZOehuLgjh52HHdY1O1c5d35j9tX9uL4o/toeOxrHig/2b4e093/srR4XJit0bje548yZhwzkD0UKOK+Ka/p/gDw8p5RFY3HJSxL+agn0XeXeXyWl2/5a8QfEWpnEngcC3HCrfo5tdX2j2j83rZIooor9TPyoKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA/Vf/AIJ0f8FJvFX7JeuQ/Dj4iSTap8O72YmSADfNpskh+aaDuUJ5ki6Hllw+d/8AX54O8Y+FfiD4YsvGngfUINV0nUohNbXds4kilQ91Yeh4I6ggg8iv86yv0n/4J+/8FFPG/wCxp4m/4R7Xln1vwHqMoa901WBktmYjNxa7iFEgH3kJVZQMEqcOPyHxB8OIZkpZjlsUsRvKOyn/AJS89n111P2Hw88SZ5a45dmcm8PtGW7p/wCcPLddNND+1GiuH+GvxK8C/GDwNpvxK+GupQ6vomrwia1uoSdrrkggg4ZXVgVdGAZGBVgGBFdxX80VKc6c3TqJqSdmno01umu5/TlOpCpBVKbTi1dNapp7NPsFFFFQWFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFfxY/8ABWD4+wfHb9sLWodHl8zSfCKLoFqVLbXe2ZjO+Dxkzu65HDKinJr+qb9tb4+Q/s0/sy+K/ivHKkeoW1o1vpofndfXP7uDgYJCud7AEfKp5FfwbXNzc3tzJeXkjSzSsXd3JZmZjkkk8kk8kmv3XwYyPmq182qLSPuR9XZyfyVl82fg/jXnvLSoZRTesvfl6K6ivm7v5Igooor+gz+dwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD//Q/wA/+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAr+gH/ghP8AtDroHjrxH+zPrs+2315Dq+lqx4+2W6hbhFGOWkhCvyQAIT61/P8AV6d8F/ir4i+B3xY8PfF3woT9v8PX0N5Gm9kWURt88TFSDslTKOAeVYjvXz/FOSxzbK6+Be8l7vlJax/FK/lc+h4VzuWUZrQxy2i/e84vSX4PTzsf6FVFcr4G8Z+H/iP4K0j4g+E5jcaXrllBf2kpUoXguUEiEqcEEqwyCMjvXVV/FM4ShJwmrNaNeZ/bsJxnFTg7p6p+QUUUVJQUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFfOH7UX7Ufwu/ZL+GNx8SviZc46x2NjER9ovbjGRHEp/NmPyoOT2B6MLha2JrQw+Hg5Tk7JLds58Xi6OGozxGImowirtvZI1/2i/2kPhZ+y38N7j4m/Fe9+z2kZ8u3gjw1xdTEEiKFCRuYgE9QAASSAM1/Fl+2J+2B8S/2yPii/jvxw5tdOtN8Wk6VG5aCxt2IJA4G6R8AyyEAuQBwqoq5f7V/7WnxW/a/+JT/ABB+JU4jhgBi07TYCfs1jATnbGD1ZsAySH5nPooVV+YK/qfgLgCjklNYrE2lipLV9IJ9I+fd9dlpv/KfH/iDWzuo8LhbxwsXotnNr7UvLtHpu9diiiiv0k/MwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP0G/YK/b+8f8A7FnjCS0Cvq/gzVplfU9JLfdfhTcW+eEnCgA9FkUBW+6jL/Zd8Kfit4A+NvgLT/iX8MtSi1TR9TjEkM0Z6Hujr1R1PDKwBU8EV/nl191fsM/t1fEX9jD4gLfae0up+E9RkUato5fCSLwPOhzwk6gcN0YDa3GCPyrxA8PKebQljsClHErdbKouz7S7Prs+jX6x4e+ItTKJxwGPk5YV7Pd02+q7x7rpuuqf9x1FeWfBr40/DX4//D+y+Jnwp1SLVdJvRw8Z+eKTALRSp1jkTI3I2CMg9CCfU6/mGtRqUakqVWLjJOzT0afZo/qOjWp1qcatKSlFq6a1TXdMKKKKyNQooooAKKKKACiiigAooooAKKKKACiiigAooooAKKK5Xxz4z8P/AA48Fav8QfFkxt9L0Oynv7uUKXKQWyGRyFGSSFU4AGT2qoQlOShBXb0S8yZzjCLnN2S1b8j+bL/gux+0Omv+OvDn7NGhT7rfQUGsaoqnj7ZcKVt0YY4aOEs/BIImHpX8/wBXp3xo+KviL44/FjxD8XfFZP2/xDfTXkib2dYhI3yRKWJOyJMIgJ4VQO1eY1/a3C2SxynK6GBW8V73nJ6y/Fu3lY/iLirO5ZvmtfHPaT93yitI/gtfO4UUUV9AfPBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAH/0f8AP/ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP6p/+CHH7RkfjX4L6t+zprco/tDwdM13YA4BfT712dgOdzGKcvuJAAEqAV+6Nfwg/sL/ALRE37L/AO054a+KM7EaWJvsWqoMfNY3WElPPUx8SKMjLIBkCv7uYJ4LqBLm2dZI5FDI6nKsp5BBHBBFfyr4q5B9Qzh4mmrU6/vL/F9tff73/bx/WHhPxB/aGTLDVH+8oe6/8P2H914/9uktFFFfmJ+oBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRXxz+2V+2r8LP2MvAA8S+NGN/rN+rrpWkQMBPdSKOpJ/1cKnG+Qg4zgBmwp68DgMRja8MNhYOVSTskv6+97Jas5Mfj8PgqE8VipqFOKu2/6+5bt6I1/wBrr9sT4TfscfDo+NPiJP8AaNQvA8elaTC3+k386DJC8HZGuR5krDagIHLsiN/Fz+0p+038V/2q/iTcfEn4q3xnmYslpaR5W2soCciKFCTtUdycsx5Yk81ifH/4/fEv9pf4n3/xZ+Kt8bzUr0hI41ysFrApJSCBCTsiTJwMkkksxZ2Zj4vX9WcDcCYfIqKq1bSxMl70v5f7sey7veXpZL+TeO+PcRntZ0aV4YaL92PWX96Xd9ltH1u2UUUV+gn54FFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAH2N+xl+2p8UP2MfiJ/wlPg4/2ho18UTVtHmcrBeRKeCDg+XMgJ8uQKducEMpZT/aF+zz+0P8L/ANp/4YWXxW+FF99rsLr93NC+FuLS4UAvBOmTskTIyOQykMpZGVj/AJ+9fVH7JH7XnxU/Y7+JS+O/h1P51nd7ItU0uVj9mvoEOQrjna65PlygbkJPVWdW/NOPfD+jnVN4rCpRxSW+yml0l59pfJ6Wt+ncAeIVbJKiwmLblhW9t3BvrHy7x+a1vf8AvQor58/Zp/aZ+Fv7Vfw0tviX8LrzzYnwl3aSYFxZz4y0Uq9iOxHysOVJFfQdfyzisLWw1WVCvFxnF2ae6Z/VWFxVHE0Y4jDzUoSV01s0FFFFYHQFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFfhl/wXG/aIh8F/BHS/2edFnX+0fGNwl1fRjBZdOsnDrnnK+ZcBNp7iNxX7kTzwWsD3Ny6xxxqWd2OFVRySSeAAK/hK/br/aLuf2of2nPEnxOilZ9KWb7BpCschLC1JWIj08w7pWHOGc81+m+FWQfX84WJqL93Q95/wCL7C+/3v8At0/MPFfiD+z8mlhqb/eV/cX+H7b+73f+3j5Booor+qz+TgooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//9L/AD/6KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAr+yr/gkT+0nH8d/wBlSx8Iazc+d4g8BlNIuw332tQCbOTgdDEvlZJJLRMT1r+NWv0W/wCCXX7S8X7Nf7Vmk3mvTiHw/wCKFGiamztiOJbh1MMxyQo8qULuY52xl8da+E8ReHv7VyapGmr1afvx9UtV81fTvbsfe+HHEX9k5zTlUdqVT3J9rN6P5O2va/c/tiooor+Qj+wwooooAKKKKACiiigAooooAKKKKACiivzy/b1/4KD/AA7/AGLfCg02NU1rxvqkDPpmkhvljXkC4uiCCkAYEAD55WBVcAO6d+WZZicwxMMJhIOVSWyX5vsl1b0RwZnmeFy/DTxeMmo047t/ku7fRLVnVftx/tyfDr9i/wCHp1XVympeKNSRhpGkK2HmYcebJjlIUP3m6sflXJ6fxg/Gr42/Ev8AaE+Id78UPivqT6nq16QCzfLHFGudsUSDhI1zwo9yckknJ+KfxT8e/Grx7qXxN+JupS6rrWqymW4uJT+CqqjAREACoigKqgAAAV59X9YcFcD4bIaHM7TxEl70/wD22PaP4y3fRL+SeN+OcTn9flV4YeL92H/t0u8vwjsurZRRRX3J8IFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAfSH7LX7UnxO/ZK+KNt8TPhtcZHEV9YyE/Z723zkxSAfmrDlG5HcH+1D9lj9rD4S/tdfDpfH3wvu8ywbI9R0+b5bmxndd2yRe4POyRco+Dg5DAfwP17x+zl+0h8VP2WviZa/FH4T3otryEeXcW8oLW15bkgtDOgI3I2OxDKQGUqwBH53x1wFQzyk69G0cTFaS6S/uy/R7rzWh+jcB8f4jIqqoVrzwsnrHrH+9H9Vs/J6n+gBRXyP+x3+2T8Lf2y/hsPGvgR/sep2eyPVtImcNcWMzA4BOBvifBMUoUBwCCFdXRfriv5VxuCr4OvPDYmDjUi7NPdf10ezWq0P6wwOOoYyhDE4WalTkrprZ/11W6ej1CiiiuU6gooooAKKKKACiiigAooooAKKKKAPy2/4K4/tLJ8BP2Vr7wpo1yYfEHjvzNIswuN62pA+1ycgjAiPlZGGDSqQcjI/jQr9JP+CqH7TUn7Rv7Veq2+j3DS+HfCBfRdNUH5HaFiLiYAMynzZgQrjG6JI89K/Nuv688OeH/7KyamqitVqe/L57L5Rtp3ufx74kcQ/wBrZ1UdN3pU/cj8t385X17WCiiivvD4EKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/0/8AP/ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD+3b/gmj+06n7T37Lukaxq84l8ReHgukauCfnaaBRsmI4/10e1ycY37gOlfoFX8aH/BJb9qX/hnf9pq18LeIrnyfDXjjy9Lvd7YjiuSx+yzHJAG2RijMeFSRj2r+y+v5B8ROHP7IzepGnG1Kp78O1nuv+3XdW7WP7E8OuJP7XyenKpK9Wn7k+91tL/t5Wd+9+wUUUV8KfeBRRRQAUUUUAFFFFABRRX5V/8ABRP/AIKT+EP2S9Eufhx8P5YdU+It3Cpjtsb4tOSUZWa47bsfMkOdzAhmAQjd6eUZRi8zxUcJg4c039yXVt9EurPMzjOMJlmFljMbPlhH72+iS6t9EdH/AMFB/wDgov4N/Y48Nf8ACMeFxb6z4+1CPdaae5LRWqN0nugpDBf7iAhn7ELkj+On4g/EHxp8VfGmpfET4iajNq2tatMZ7u6nOXkc8DgYCqoAVVUBUUBVAUADO8V+K/EvjrxLfeMfGN9NqWqalM9xdXVwxeSWVzksxP8Akdq5+v604O4NwmQ4blp+9Wl8c+r8l2iu3Xdn8i8ZcaYvP8TzVPdoxfuQ6LzfeT79NkFFFFfYnxgUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUV3nwy+GPj34yeOdO+Gvwy0ybV9b1WTyra1hxljjJJZiFRFALO7EKqgliACaxPFnhPxL4E8S33g7xjYzaZqmmzNBdWtwpSSKRDgqwP+T1FZe2p+09jzLnte19bbXtva+lzX2FT2ftuV8l7Xtpfe19r21sc9RRRWpkFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAewfAr47fE39nH4kWXxT+E+ovp+p2Z2sOTDcQkgvDMmQHifA3Ke4DAhgpH9oH7FH7cXww/bO8B/2v4cZdO8R6fGn9q6PI4MsDHjfGeDJCx+64Ax0YA1/C/Xp3wd+MXxC+AvxE074o/C/UH03V9MfdHIvKOp+9HIvR43HDKeCK+E424Hw2fUOeNo4iK92Xf+7LuvxW66p/e8D8dYnIa/JK88PJ+9Ht/ej2f4S2fRr/AEKqK+DP2F/29vhr+2n4Pk/swDSfFulRI2qaRIw3AHAM8BzmSAsdufvIcBwNylvvOv5QzHLcTgMRPC4uDjUjun/WqfR7M/rXLcyw2Pw8MXhJqdOWzX9aNdVugooorhO4KKKKACiiigAooooAK+Bv+Ck37TY/Zf8A2Wta8RaNdfZ/EeuD+ydG2n51uLgHfKOuPJiDyA4I3hQfvCvvmv45v+Cvv7T3/C+P2m5/AXh+4Mvh7wF5mmQBSdkl7kfa5MezqIgehEeRwa+58PeHf7XzinCor0qfvz7WWy/7edlbtfsfC+InEf8AZGTVJ05Wq1Pch3u93/26ru/e3c/KCiiiv6/P45CiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//U/wA/+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAHI7xuJIyVZTkEcEEV/cL/wAE4f2n/wDhqj9l7RvFmsz+b4i0b/iUa1uJLNdWyriYkgZ8+MpKSBtDsyj7pr+Hiv1M/wCCSH7US/s8/tO2/hPxFcCHw348EWlXhYgJFdBj9kmJx/DIzRHJChZWY/dFfnniXw5/auUSnSjerRvOPdr7UfmtfNpI/RfDHiT+ys4jCrK1GtaEuyf2ZfJ6Psm2f2WUUUV/JR/XYUUUUAFFFFABRRX4m/8ABS3/AIKiaV8B7O++BnwBvI7zxvIGhvr6PDxaSCOQDyrXPovIjPLfMNtexkWRYvNsXHB4ON5Pd9Irq2+iX/AWrPGz3PsHlGEljMbO0Vsusn0UV1b/AOC7JNnaf8FIv+CnOifst2Nx8IPg9JDqXxDuov3khxJBo6SAESSryHnZTmKE8Dh5AV2pJ/I74h8Q674s1288T+J7ybUNR1CZ7i5ubhzJLNLIdzO7NkszEkkmq2q6rqeu6nc63rdzLeXt5K89xcTuZJZZZCWd3diWZmJJJJJJOTVCv614S4RwmQ4X2NBXqS+OfWT/AEiui/N3Z/IvF3F+Mz/Fe2r+7Tj8EFtFfrJ9X91lZBRRRX1Z8kFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFem/B/4P8AxC+PHxC074X/AAv059S1jUn2xxrwqKPvSSN0SNByzHgCtH4GfAz4lftGfEqw+FXwqsDf6pftkk5WGCJcb5pnwdkaA/M3PYAFiAf7RP2Kv2Hfhb+xh4E/sfwwo1HxFqEaf2trMq4luHHOxBz5cKn7qA+7Fm5r4TjbjjDZDQ5I2liJL3Y9v70uy/FvRdWvveB+BcTn9fnleGHi/el3/ux7v8IrV9E839h79hT4afsZeA47PTI4tT8W30QGq600YEkhbBMMRPzJApAwv8RAZucY8t/4KGf8E5vBn7X/AIYl8YeEUh0n4g2EQFrfEbY7xIwcW9xjgg9EkwWTjquVr9OqK/mClxNmVPMv7WVZ+3vdvv5NbcvTl2tsf1JV4Yyyplv9kuivYWsl2809+brzb33P87Dxt4J8WfDfxZf+BfHVhNper6XM0F1azrteOReoPqD1BGQQQQSDXLV/bD/wUF/4J++Df2zvBH9paT5Ok+O9JiI0vU2GElUZP2a52gloWJO1sFomO5QQXR/4z/iD8PvGnwq8aaj8O/iJps2ka1pMxgu7ScYeNxyOmQysCGVlJV1IZSVINf1Pwbxnhc+w3NH3a0fihfbzXeL/AAej6N/ynxpwVisgxPLL3qMvgnbf+6+0l+K1XVLjqKKK+zPigooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigDvfhh8UPH3wZ8dad8Svhjqc2ka3pcnm29zCRkHoVZSCrowJV0YFWUkMCCRX9kn/BP7/goL4G/bN8G/2TqRh0nx3pUIbUtLDYWZBgfabbcctExI3Ly0TEK2QUZ/4nq6vwP448XfDTxdp/jzwFqE2laxpUyz2t1A22SN17jsQRkMpBDAkEEEivi+MuC8Ln2HtL3a8fhn+j7xf4PVdU/tuC+NsVkGIvH3qEvjh/7dHtJfitH0a/0TaK/L//AIJ5/wDBR/wb+2BoSeCPGHk6P8QLCHdcWYO2K+RB809tn83iyWTqMryP1Ar+Tc2ynFZbip4PGQ5Zx/FdGn1T6M/rjKc3wuZ4WGMwc+aEvwfVNdGuqCiiivNPSCiiigAooooA+Jf+Cg/7Tkf7Kn7Mmt+PdOmEevX4/szRV7/bblSFkAIYHyUDTYIwdm3uK/hkkkklkaWVizMSSTyST3NfrN/wWC/ajX47/tJP8OfDdx5vh7wF5mnxFDlJb9iPtUnvtZViH/XMkfer8lq/rLwy4c/svKI1aqtVrWlLul9lfJa+TbR/I/ihxJ/ambypUpXpUbwj2b+1L5vTzUUwooor9GPzcKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9X/AD/6KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKcrMjB0OCOQR2ptFAH9vP/BNr9qy3/ar/AGa9N1rWLxZ/FPh8LpmtoWHmmaMfu52Gc4nQBt2MFw6j7px9/wBfxWf8Etf2qz+zF+03YweIrow+FfF4TSdWDMRHEzt/o1yRvVAYZThnbdshklwMmv7Uwc8iv5D8ROGv7HzaapRtRqe9Dsr7x/7df4NH9heHPE39sZRCVWV61P3J93baX/by/FMKKKK+DPvgoor+f7/gpv8A8FUz4Ck1L9nP9mPUAdcAe21nXrds/YT0eC1cf8vHVZJR/qeifvfmi9zh/h7GZzi44TBxu+re0V3b7fi9lqeFxDxFg8mwksZjJWXRLeT7Jd/wW70Or/4KY/8ABU2x+ES6p+z1+zvd+f4tANvqerwkNFphOQ8UTZ+a5Xox6RE4z5gIT+WO4uLi8uJLu7kaWWVi7u5LMzMckknkknqajd3kcySEszHJJ5JJptf1xwxwtg8jwv1fCq8nbmk95Pv5Lstl5u7P5C4p4qxue4t4jFO0V8MVtFfq+73fpZIooor6Q+ZCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACvaf2f/gB8TP2mPifYfCf4VWRu9RvMvJI2VgtbdSA88zgHZGmRk4JJIVQWZVOn+zd+zb8Uf2p/ifafC34V2fn3U37y5uZMi3s7cEBppnAO1Fz7sxIVQWIB/tM/ZD/AGOvhP8AscfDkeC/h5B9o1G8CSarq0ygXN/OgwC3J2Rrk+XEp2oCTy7O7fn/ABzx1h8io+yp2liZL3Y9F/el5dlvL0u1+hcCcB4jPq/tat44aL96XV/3Y+fd7RXnZOj+x1+xj8K/2N/h4nhXwTELzWLtEOq6vKuJ7yVeemTsiUkhIwcAdSzZY/X1FFfyljsdXxleeJxU3KpJ3bf9fctktEf1ngcDh8HQhhsLBQpxVkl/X3vdvVhRRRXIdYV8Bft5fsD/AA+/bQ8CkkRaT400yNv7K1fb+PkXG0ZeBj9WjY7kzllf79oruy3MsTgMTDF4SbjUi9GvyfdPqno0cOZZZhsww08Ji4KVOSs0/wA12a3TWqZ/nj/FL4W+PPgt491L4ZfEzTpdK1rSZfKuLeXseqsrDIZHUhkdSVZSCCQa8/r+5f8Abj/Yd+Hn7aHw7OkasE03xPpqM2kauFy8Lnny5McvC5+8vUH5l56/xcfGT4N/EX4B/EPUPhd8UtOfTdX05sPG3KOh+7JGw4eNxyrDg/UEV/WPBXG+Gz6hZ2hiIr3of+3R7x/FbPo3/JHG/A2JyCvzK88PJ+7P/wBtl2kvuktV1S8vooor7k+ECiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAOg8KeK/EngbxJY+MPB99NpuqabMlxa3VuxSSKVDkMpHcV/Xl/wAE3/8AgpZoX7WemJ8MPig0Gl/EOyjZgifu4NUhQEmWBT92VFGZYsngF0+Xcsf8dtaOkavqvh/VbbXdCuZbK+spUnt7iBzHLFLGQyOjKQVZSAQQcgjNfJcW8IYPPsL7KsuWovgn1i/1i+q+6z1PruEOMcZkGK9rRfNSl8cOkl5dpLo/k7rQ/wBGeivxx/4Jtf8ABTvQP2ktMs/g38a7qLT/AIgwKI4JiBHDq6IM70wAqTgD95HwG+9HxuVP2Or+Ss6yTF5VipYPGw5ZL7muji+qf/Admmj+vMkzvB5thI4zBT5oP70+qkujX/BV00woooryT1gr4Z/4KHftT237KH7NmreMdOuEj8R6qDpuiRnljdTA5lA9IU3SEnjIVTywz9zV/GR/wVh/aqX9pD9pe58O+Grrz/C/gnzNLsChzHNcZH2qcdvnkURqQcNHGjDqa+58PeGv7YzaEKivRp+9PtZbR/7eenpfsfCeInE39jZROdOVq1T3Id03vL/t1a+tu5+Yc881zM9zcu0kkjFmZjlmY8kknqTUVFFf1+fx0FFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAf/W/wA/+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAr+zX/glF+1p/w0p+zjbeGvFV35/izwWI9OvzI5eW4twMW1y24liXQbHYklpEZjjcBX8ZVfZv7Bf7Ul9+yV+0ZpHxGndzod0fsGtQpz5ljMRuYLkZaJgsi+pXHQmviOP+GVnOVTp01++h70PVbx/wC3lp62fQ+58PeJ3kubQqVHajU92fo9pf8Abr19Lrqf3V0VUsdQsNTsIdV06ZLi2uI1liljYMjxuMqysMggg5BHBFfzWf8ABTz/AIKnW3im2v8A9nP9mLU9+nPvtta122YgXAGVe3tXHWI8h5VOJBwhKElv5g4b4ZxudYxYXCxsl8UntFd3+i3b+dv6k4l4nwWSYN4vFS1fwxW8n2X6vZL5HVf8FN/+CqogF9+zx+y3qgZmDW+seILVwwAYENBaOM89nmU8dEOfmH83dFFf1vw5w5g8lwiwuEj/AIpPeT7v9Fsuh/IXEnEuMzvFvF4yX+GK2iuy/V7vqFFF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VR7jRRX8s4jEVcRVlWrScpyd23q231Z/VeHw1LD0o0KEVGEVZJaJJdEFFFFYmwUUUUAFFFFABRRRQAUUUUAFfLH7XP7I/wAMP2w/hfL8PviBH9nvLffLpeqRKGuLC4YY3LnG5GwBJGSA4A5DBWX6norqwWNr4SvDE4abjUi7prdP+t1s1o9DlxuCoYuhPDYmClTkrNPZr+tnunqtT+BD9pv9l/4rfsnfEmb4a/FW0VJdvm2l5BlrW8hPSSFyFJGeGBAZTwQK+dq/vn/ak/Za+F/7WvwwuPhr8SrfkZlsb6ID7RZXGMCSMn8mU/K44PYj+Lj9rH9kv4p/sgfE2X4ffEaDzbefdLpupxKRbX9upxvQnoy5AkjJ3ISOqlWb+qOBOPqGd0lh8RaOJitV0kl9qP6rdeh/KPHvh/XyOq8Rh7ywsno+sW/sy/R7P1Pl+iiiv0Y/NwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAr9YL7/AIKqfGXxB+xLqv7Nnix5bvX7xotNi14ufPk0kqTPHK38c2AsJc8vFIS3zjc35RxRSTSCOMZJ/p/IDuaazZ+grzMxyfB490ni6ak6clKN+jX6d1s+p6mW5zjcAqqwlRxVSLjK3VP9V0e66DaKKK9M8sKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/9D/AD/6KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAqYsZYgrEkpwo7beSf1/nUNSQytBKsyAEoQwDAMMj1ByCPYjFAEdFSyRlAr8YYZGP5fhUVABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFfcX7Dv7DnxE/bQ+IY0nSA+m+GNNdTq+rsmUhQ8+XHnh5nH3V6KPmbjrt/sFfsGeOf20vH+wmXSvBulSL/a2rBeex8i33Aq07j1BWNTuYH5Vf+zr4WfCvwB8FfAmn/DT4Y6ZFpOi6XH5cFvEPxLMxyzux5d2JZmJJJNflfiB4hQyiLwOBaliWtXuoJ9X3l2Xzelk/1fw88O55xJY7HJxwyei2dRrou0e767LW7VL4O/B34e/AX4d6d8Lvhfp6abpGmJtjjXl3Y/ekkbq8jnlmPJNenUUV/L9atUq1JVasm5Sd23q23u2f1LRo06VONKlFRjFWSWiSWySCiiiszQKKKKACiiigAooooAKKKKACiiigAooooAK8C/aT/Zu+GX7U/wALrz4WfFC0822m/eW1zGALizuFBCTQsejLkgjoykqwIJFe+0VvhsTVw9WNehJxnF3TW6aMMVhaWJpToV4qUJKzT2aZ/Bx+1/8Ase/FH9jn4knwT4+iFzYXgaXS9UhB+z3kK4ztJ+7ImQJIzypIPKsrH5Or/QI/aH/Z5+GH7T/wvvvhR8VrL7VYXfzwzR4W4tLhQQk8DkHZImTg4KsCVYMjMp/i2/bF/Yu+K/7GfxB/4RXx0gvtIvWkbStYgQrb3sKH0JPlyqMeZEWJUngspVj/AFNwDx/SzqksLi2o4qK22U13j594/NaXt/KniB4fVclqvF4ROWFk993BvpLy/ll8nra/yBRRRX6WfmIUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFSxRiQnJwFBJOCenTp6nj8aAEBVY/9pvUcAe1R1JLLLO2+ZixAC5JzwowB9ABge1R0AFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB/9H/AD/6KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAmiBk/0dQuXYYYkDHbqeAOec1DRUrLuTztwJJwR3+v4/57UARUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFfoZ/wAE/v2BfGv7aPjtrq887S/A+jyqNW1QLgu+A32a3JGGnZSCx5WJCGbkoj9L/wAE9f8AgnZ40/bD8WJ4n8UJPpHgDTpR9s1ALte7ZTzb2pIwzHGHflYx1y2FP9i/gD4f+CvhX4N0/wCH3w60yDR9F0uLyrW0tl2RxrksfcszEszElmYlmJJJr8l8QfESGVxll+XyviXu+lP/ADl2XTd9E/13w78OZ5pKOYZjFrDLZbOp/lHu+uy6tQfDf4b+B/hF4I074c/DfTYdJ0XSovKtrWAYVRkkknkszMSzsxLMxLEkkmu3oor+ZKlSdSbqVG3Ju7b1bb3bZ/UFOnCnBU6aSilZJaJJbJLsFFFFQWFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAV5F8cvgb8Nv2i/htf8Awq+Ktgt/pV+uePllglXOyaF8EpImflb6ggqSD67RWtCvUo1I1qMnGUXdNaNNdUZV6FOvTlRrRUoSVmnqmn0aP4bP25P2GPiL+xf8QP7N1XfqfhbUpGOk6uq4SVRz5UuOEmQdV6MPmXjIHw1X+hX8Yfg/8Pfjx8PNR+F3xQ09NS0fU49kkbcMjD7skbdUkQ8qw5Br+Mf9un9g74i/sXeOBFe79U8JanK40rVlXhgMkQz4ACTqvJH3XGWXoQv9QeH/AIhU83gsFjmo4lL0U0uq/vd181pdL+WvEPw7qZRN47ApywrevV02+j/u9n8nrZv4Mooor9TPykKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKlcx7EEec4+bPrnt7Yx+NOiM0G27UEckKwyPmXHQjuMg1BQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB//0v8AP/ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAqSOWSMMqEgONrD1HXB/EA/Wo6KAHOoViFzjtkYOKbT85XB7dP8KZQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABX6n/8E4f+CcviL9rrxMnj74gRzad8PdMmxPOMpJqMqHmCA9lHSWQfd+6vzHK7n/BN3/gmp4i/as1aD4r/ABRhl074dWcxAbmObVpYjhooDwRErArLMO4KId4Yx/15eG/DegeD9As/C3hWyh07TdPiWC2trdBHFFGgwqqowAAK/HfEPxGjl6lluWSvX2lJbQ8l/f8A/SfXb9l8OvDeWYOGZ5nG1Baxi95+b/uf+lem8XhTwp4a8C+G7Hwd4OsYdN0vTYVt7W1t0CRRRoMBVA6V0FFFfzXKUpScpO7Z/TMYxjFRirJBRRRUlBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAVwPxP+F3gH4zeBtQ+G3xO0uHWNF1OPy7i2mzgjqGVlIZHU8q6kMpAIINd9RWlKrOnNVKcmpJ3TWjTXVMzq0oVYSp1Ipxas09U0+jXVH8SX7fX/BP7x7+xd41+2Wxl1jwPqspGlasV+ZCcn7PdbQFWdQDggBJVG5QCHRPz0r/RE+Ifw78EfFnwXqHw8+I2mw6vouqRGG6tZwSrqeRgghlZSAVZSGVgCpBANfxwf8FCv+Ceni79jLxcuu6A0+r+A9VlK6fqLjMlvIcn7NclQFEgAJRwAsigkAEMq/034e+IkM1jHL8wdsSlo9lUS/KXddd11S/l/wARPDmeVSlmGXq+Gb1W7pt/nHs+mz6N/m1RRRX6yfkYUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFOVSxwMD68dKbUm4qhQH73UY7duaACVw7AqoUAAYGe3fknr1Pv0qOiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD//0/8AP/ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKtXBEv+lKMbydwAAAb2A6D04HoOlValhdUf8AeDcpwGAxnGexIOD74oAiop8iGNtpIPAPBz1Ge3+RTKACiiigAooooAKKKKACiiigAooooAKKKKACv2E/4Jrf8EzdX/ad1S3+L/xkglsfh9aSZiiyY5dXkQ4McZBDLACMSSDBP3UOcsnRf8E2P+CXev8Ax+1PT/jd8ebOSx8BR7bi0tHOybVyDwMA7kt8jLOcGQYCcEuv9Y2nadp+kafBpOkwR2traxrDDDCoSOONBtVVUYCqoAAAGAK/F/ETxHWDUssyqd6205r7Hkv73d/Z/wAW37Z4c+GzxjjmebQtRWsIP7fm1/J2X2v8O8OjaNpHhzR7Xw/4ftYbGwsYUt7a2t0EcUMMQCoiIoCqqqAFUAAAYFaVFFfzg227vc/pNJJJJaBRRRSGFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFcx4z8FeEfiL4XvPBPjvTbfV9I1BPLubS7jEsUi5BGVbI4IBB6ggEYIFdPRVQnKElODs1qmt0yZwjOLhNXT0aezR/Gh/wUa/4JzeJf2Q/E7+OvAiTal8PdTmxb3By8mnyOeLec+naOQ/eHB+br+W1f6K/izwn4a8deGr7wd4xsYdT0vUoWgurW4QPFLG4wVYH/I6iv5E/wDgpN/wTW1r9k/WZPil8Kkm1H4d6hKB82ZJtJmc8QzN1aFicRSnn+B/m2tJ/Svh54jRzBQy3MpWr7Rk9p+T7T/9K9dH/M3iL4byy9zzPLI3w+8oreHmv7n/AKT6ar8lKKKK/YT8aCiiigAooooAKKKKACiiigAooooAKKKkiTzJAmdoPUnJAHqcZPFADQvy7z06Cm092DEEDAAAwPb6+vWmUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAH/9T/AD/6KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigCwJFeDyZM5U5Q8YA7g8Z+nOBzxzmq9FSsryAzcserH0z3J96AIqKKKACiiigAooooAKKKKACiiigAr9y/8AgmZ/wS41H4xXdj8fP2itPktfCEey40zS51KPquQGSRwcEWpBBH/Pbt8nLdR/wTG/4JZXXxBuNO/aJ/aX04J4cXbc6RolyvzageGSe4Q9LbukbczdWHlcSf1CgADAr8O8RPEj2HPleUz9/ac19nvGL/m7v7Oy12/dfDnw09vyZrm8Pc3hTf2u0pL+XsvtbvTeC1tbaxto7KyjWGGFQkcaAKqqowAAOAAOABU9FFfzw2f0WkFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFZOvaDofinRbrw34ms4dQ0++iaC5trmNZYZYnGGR0YFWUjggjBrWopxk4tSi7NClFSTjJXTP5B/wDgpj/wTW1T9l7Vp/jF8IoJbz4e30w82MZkk0iaU4WOQ8kwMx2xSHoSEc7irP8Aj/X+jLrWi6P4k0e78O+IrSG/0+/he3uba4RZYZoZVKujowKsrKSGUggg4Nfya/8ABSz/AIJhX37NtxcfGn4F28154CmfN1a5aWbSHY4AZiSz25JwsjEsp+VyeGb+kPDvxGWNUMszSdq20Jv7fk/73Z/a/wAW/wDNfiP4bywTnmmVQvR3nBfY7tf3O6+z/h2/GSiiiv2c/FAooooAKKKKACiiigAooooAKmDvEjw4wWwG6g4Hb0xnB5HUUsX7vFwcfKflBwckeoPb8MHpUFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAf/1f8AP/ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACpI5PLfdgHqMEZ4PH+fSo6KAFKkAE9+RSVPE2/EDsdvO30DH6kAZwAT6VBQAUUUUAFFFFABRRRQAV/QT/wAEw/8AglhfeKryw/aL/ad03ydGj2XGi6Fcr816ThluLpD92AcGOJuZT8zARgCXtf8AgmX/AMEp5IpNO/aJ/ai04DAS60fw/cLyD1Wa8Rh9GSE/Vx/DX9HVfg3iH4lKKnleUT12nUXTvGD795dNlrqv33w58M3JwzXOIabwpvr2lNdu0eu700aKoUBVGAOABS0UV+AH9BhRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFV7u0tNQtJbC/iSeCdGjkjkUMjowwVYHggjgg9asUU07aoGr6M/lS/4Kef8EwJvgrLe/tB/s+WbS+EJGMuqaXECzaWzHmSMdTbE9R1i/wBz7n4aV/o5XNtb3lvJZ3kayxSqUdHAZWVhggg8EEcEGv5c/wDgp1/wS2ufhhJf/tDfs3ac0vhli9xq+j26ZbTerNNAijm2HV1A/cjn/V52f0P4deI6r8mV5tP95tCb+12jJ/zdn9rZ67/zn4j+Groc+a5TD93vOC+z3lFfy919nde7t+DNFFFfuB+FhRRRQAUUUUAFSJFJIGZASEG5j2A6c/iQPrTUR5HEcYLMxwAOSSafJsAVU5wMk+5/AdOnfmgBJJHk2hjwowB2A/8A18/Wo6KKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA/9b/AD/6KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKnd/OTfKzGQbVGeQVAx1J7YAAx0+nMFOVmRg6HBHII7UANop+1ivmAHaMAntk/wD6qZQAUUU+OOSaRYolLOxAVQMkk9ABQA1VZmCqMk8ACv6Xv+CXn/BLZvDbad+0p+0vpxGpAi40XQbqPBtiMFLm5Rv+WveOIj93wzfPgJ0H/BMH/glonw/TT/2jv2lrANr7bbjRtDnXIsB1S4uVPBuD1jjPEIwW/e8RfvzX8/eIviR7TnyrKZ+7tOouveMX27y67LTV/wBC+HHhr7PkzbN4e9vCm+naUl37R6bvXRFFFFfhB+9hRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUEZ4NFFAH8xf/BTv/glifBMmoftF/syab/xJGL3Gs6FbL/x5Hq89qg/5Yd3iA/ddUHl/LH/AD91/o8V/Nj/AMFQP+CWl1aXV5+0V+y9pLTQTMZda0Cyj3NGzcm4tY15KE8yRKMqfmUbchf6B8OvEjn5Mqzaeu0Kj69oyfftLrs9dX/PXiP4a8nPmuUQ03nTS27yiu3ePTdaaL+dWiiiv3c/BAoopRwcmgCfaIYz5ikSHGM9lI9CO+Rg54/Kq9OdzI5kbGWOeBgc+w4FNoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//9f/AD/6KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAHo5Q5GDkEcgHr9aRgFOAQeB0ptSiVjGIZCxQZIXPAYjr+gz64oAdbW1ze3MdnZxtLNKwREQFmZmOAABySTwAK/qU/wCCYf8AwS6j+Eq2P7Qv7Rlgsnilgs+k6TMMjTQRlZplPH2n+6p/1PU/vPubX/BLP/gm/wCAvhr4N0P9pj4pLa694q1WKLUdJWOQTWumwSrmNkKkpJOwbcX5EZwE5Bdv3Dr+ePEXxHddzyrK5NQV1Of83eMf7vd9dlpv/Rnhv4bKgqebZrFObs4Q35eqlL+92XTd66RKKKK/Dj90CiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD+d3/gqD/wS0k12TUf2kv2ZtOzenfda5oVuuPOxlnubZB1k6mSIcufmQbshv5qiCDg8EV/o71/P/wD8FU/+CZek+LrLV/2qPgRFbabqlrFLe+ItOZlggu0jBeS7iJwiTgAtMpIWX7/Eu7zf3jw68SHFwynNZabQm+naMvLopdNnpqvwTxH8NVNVM2ymOu86a695R8+rj13Wuj/mMiiaQlsHYmC5UZ2rkDP5kfjSSStIFB4CjAGTgfnnqefqaH2DCxnI4OSMHJHPr36f0qOv6AP56CiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/0P8AP/ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP2+/4JM/8FELL4Fayv7O3xv1EweDtVmzpd9O2YtMu5SMpIxPyW0pOWb7sUnzHCtI4/q6r/OHr+ov/gkZ/wAFDV+ImkWX7LHxovh/b+nQ+XoN9Mx3X1vGCfs7k9ZolHyH+NBg/MuW/BvFLgXm5s7wEdd6kV/6Wl/6V/4F3Z+/eFXHlnDJMwlptSk//SG//Sf/AAH+VH720UUV+AH9BBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAV/Lb/AMFeP+Cg7fEjXrz9lX4O3bL4f0mfy9evYmwt/dREf6OmDzDCw+cn78o4G1Az/aP/AAVn/wCChsvwS0GX9nP4K6iYvGGqRA6pewH59NtJB9xGH3biUHg/ejj+YYZkYfykV+9eFnAt3HO8fHTenF/+lv8A9t/8C/lPwHxV48sp5Hl89dqsl/6Qn/6V/wCA90FFFFfvx/PoUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAf/R/wA/+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAK1NE1vWPDWsWviHw9dS2N/YypPb3MDmOWKWMhldGUgqykAgg5BrLopNJpprQcZNNNPU/s6/4Joft82H7X3w4Phbx5cwRfELQIwNQgUCL7bbghVu4kHGDkLME4SQ5wqugr9Pq/zyfhT8UvG/wV+IWlfFD4dXrWGsaPOs8Eq9DjhkYfxI6kq6nhlJFf25/sUftieBf2zPhHH468ObbPWLApb6zphbL2lyVzkd2hkwTE/wDEAQfmVgP5e8SeBHlVZ5hgo/7NN6pfYk+n+F/Z7fD2v/U3hpx4s2orL8dL/aYLRv8A5eRXX/Evtd/i72+w6KKK/KT9ZCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAK/N//go3+3loX7G/wz/s/wANSw3fjzXUK6VZON4gjyQ11MvaNMEIDzJJwAVVyvuf7YP7W3w7/Y++E1x8QfGcqz6hcB4dJ01WAmvbkDhVHURpkGV+ir6sVU/xC/Gb4x+P/j78SdU+K/xNvTfavq0u+RgNqRqOEjjXnbGigKq9gOcnJP6n4ccCvN66x2Mj/s0Ht/O10/wr7T+S62/KvEnjxZRQeBwUv9pmt/5Ivr/if2V830vw3iDxBrvizXbvxP4nvJtQ1HUJnuLm5uHMkssshyzuzZJJJySax6KK/qSMVFJJWSP5VlJyblJ3bCiiimIKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP//S/wA/+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACvob9l/9pb4h/so/Fyw+LPw8l3S2+YruzdmWC9tX+/DKFPIPBU4O1wrAZFfPNFYYrC0sTRnQrxUoSTTT2aZ0YXFVcNWhiKEnGcWmmt00f6A/7O37Qnw3/ae+FWnfFv4YXXn2N6u2WGTAntLhf9ZBMv8AC6H6hhhlJVlJ9xr+GD9hn9tPxt+xh8VV8UaYsmoeHdS2Q6zpYbaLiJc7XTPAmiySh75Kk4Ymv7Zfhl8S/BHxi8BaX8TfhxqEeqaJrEIntbmPOGXJUgg4KsrAq6kBlYEEAgiv5K464LrZDirwvLDzfuS7f3Zea6fzLVdUv674D42o59hLTtHEQXvx7/3o+T6/yvR9G+6ooor4M+9CiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACvHfjz8d/hx+zf8MdR+LPxSvPsmmaeoAVBumuJW4SGFMjdI54AyAOSxCgkdn4+8feDfhb4N1H4hfELUYdJ0XSYTPd3U5wkaDjtklmJCqqgszEKoJIFfxTft6ftyeNP20fiYdTkEum+EtJd00bS2YZRDgGabbw00mMnkhB8ik4LN9zwNwZWz7F+9eOHh8cv/bY/wB5/gtX0T+E4641o5BhPdtLET+CP/t0v7q/F6Lq15d+1v8AtWfEP9r34uXnxO8cMba2BMWmaYkhkhsLUH5Y0JA3MeDJJtXe+ThRhR8wUUV/W2EwlHC0YYfDxUYRVkl0SP5DxmMrYqvPE4iblOTu2+rf9fLoFFFFdJzBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAf/0/8AP/ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAK/S3/AIJz/wDBQHxN+x349Xw74ommvvAGtTL/AGjZAl/skjYX7XAvJDqBh1H+sUYPzKhH5pUV5+a5Xhsxws8Hi4c0JLX9GuzW6Z6OVZrictxUMZg58tSL0/VPuns0f6LXhfxR4d8beHbLxd4RvYdS0zUYUuLW6t3DxSxOMqysOCCK3q/kE/4Jh/8ABR29/Zd8RR/CH4v3c1x8PNTkPluQZG0i4kbJlQckwMSTNGvQnzEG7csn9dml6ppmuaZb61otzFeWd5Ek8E8DiSKWKQBldGUkMrAgggkEciv5D4v4SxORYx0KutOWsJ9JL9JLqvns0f2Fwfxdhc+war0vdqR0nDrF/rF9H8t0y/RRRXyZ9aFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABWP4h8Q6F4S0K88UeKLyHT9N0+F7i5ubhxHFDFGCzO7NgKqgZJNXb/ULDSrGbVNUnjtra2jaWaaVgkcaIMszMcAKAMkngCv5IP+Cn3/BSW8/aZ1af4IfB64e38AadcAzzqSj6xPCcq7Dj/R0Ybooz95gJG+YIE+q4S4TxWe4xUKOlNazn0iv1b6L9E2fJ8X8W4XIcG8RW1qPSEOsn+iXV9PVpHmf/AAUl/wCChGrftg+NF8IeBnmsvAGiTFrOB8o99OMr9qmXtwSIkPKKSThmIH5e0UV/XuU5VhstwsMHhI8sI/j3b7t9Wfx7m+bYrM8XPG4yfNOX3Lsl2S2SCiiivRPNCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP//U/wA/+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAK/cD/AIJbf8FLX+B1/a/s+/Hm+ZvBt0+zTdQlJY6XM5GEck8WzHP/AFzY5+6Tt/D+ivHz3IsJm+Dng8ZG8Xs+sX0afRr/AID0PZyHPsXlGMhjcHK0luukl1TXVP8A4K1R/o5W9xb3dul3aOssUqh0dCGVlYZBBHBBHQ1NX8tX/BLr/gqAPhQ2n/s3ftE3oHhd2EOj6zM2P7NZzxDcMf8Al2JPyyE/uTw37rmP+pNHSRBJGQysMgjkEGv5D4o4XxeR4x4bEq8XrGXSS7+T7ro/Kzf9hcLcU4TPcGsVhnaS0lHrF9n3T6PqvNNJ1FFFfNn0oUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABTXdIkMkhCqoySeAAKHdI0MkhCqoySeAAK/l6/wCCpX/BT2b4iXepfs0/s637R+HYWe11zWITtOoOpKvbwMOfsw6PIP8AXHIX91zL9Hwxwxi88xiwuGVktZSe0V3fn2W7fldr5vijijB5Fg3isU7t6Rit5PsvLu+i87J83/wVD/4KcSfGi4vf2eP2f7xo/CMLmLVdTiODqjqeY4z1FspHJ/5an/YHz/hlRRX9eZDkWEyjCRweDjaK3fWT6tvq3+Gy0R/Huf5/i84xksbjJXk9l0iuiS6Jfi9Xqwooor2TxQooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//9X/AD/6KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAK/oE/4JV/8FN/+EHOnfswftF6j/xIztt9A1m5f/jx7JaXDt/y79oXJ/c/cP7rb5X8/dFeHxDw/hM5wcsHi46PVPrF9GvP81o9D3eHeIcXkuMjjMHLVaNdJLqn5fk9Vqf6PFFfzL/8Evv+CpL+FX0v9mn9pO+L6W5W10XXbhxizGMJb3Tsf9TwFjk58vIVv3fzJ/TMjpKgkjIZWGQRyCDX8i8TcM4zJMW8LilpvGS2ku6/Vbr7mf2DwzxPg88waxWEeu0oveL7P9Hs/vSdRRRXzp9EFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFfzI/8FOf+CqKeNF1P9nH9mW/YaQGe11nXrdsC9A4eC0dTnyM5WSUY83BCZiO6T6LhnhnGZ3i1hcKtFrKT2iu7/Rbv72fOcT8T4PI8I8Vi3q9IxW8n2X6vZfcnd/4Kj/8ABUUeJf7R/Zp/Zq1H/iW/Nb65rls3/Hz2e2tnH/LLtLKD+8+6vyZL/wA9FFFf1zw9w9hMmwccJhI6dW95Pu/6sloj+QOI+I8ZnWMljMZLXZJbRXRL+rt6sKKKK908EKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9b/AD/6KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACv3u/wCCY/8AwVOn+G8mn/s7/tLagX8NsRb6Rrdw2W08k/LDcueTbknCyEkw8Bv3WDH+CNFeJn/D+DzjCSwmMjdPZ9Yvun0f4PZ6HucP8Q4zJsXHGYOVmt10ku0l1X4p6qzP9HWOSOWNZYmDKwBBByCD3FPr+VD/AIJn/wDBUq5+CK2nwF/aJvJbrwhlYdM1N8ySaWOAI5O7WwH3cZaLoAUwF/qk0/ULDVrCDVdKnjubW5jWWGaJg8ckbjKsrDIZWBBBBwRX8kcU8K4zI8U8PiVeL+Ga2kv0a6rp5qzP694V4rwee4RYjDO0l8UHvF/qn0fXyd0rdFFFfMn04UUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFRTzwWsD3Ny6xxxqWd2OFVRySSeAAKh1DULDSbCfVdVnjtrW2jaWaaVgkccaDLMzHAVVAJJJwBX8qn/BS3/gqZdfHRL34Dfs93Mtp4PDNDqWprmOXVQDgxp3S2PfOGl6EBchvp+FuFcZnmKVDDK0F8U3tFfq30XXyV2fL8VcWYPIsI8RiXeb+GC3k/0S6vp5uyOq/4Kdf8FS5viXJqH7O37NWosnhob7bWNat2wdRzlXgt2H/Lt1DuP9dyB+65k/BOiiv62yDIMHk+EjhMHGyW76yfdvq/wWy0P5D4g4hxmc4uWMxkrt7LpFdEl0X4vd3YUUUV7Z4YUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB/9f/AD/6KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAr9jf8Agm//AMFQta/Znu7X4P8Axunn1L4fyuEt5lUyz6Qzty6AfM9vkkvGMsv3owTlH/HKivKzrJcJmuFlg8bDmg/vT6NPo1/wHdaHrZJneMynFRxmCnyzX3NdU11T/wCCrPU/0YfD/iDQ/Feh2fifwzeQ6hp2oQpcW1zbuJIpopAGV0ZchlYEEEdRWvX8ZX/BPX/gpF40/ZB1uLwN4wEmsfD++nDXNpktNYs5+aa2yce7xHh8cbWOa/sE+H/xA8GfFTwbp/xB+Hmow6to2qxCe1uoDlHQ/XBVgchlYBlYEEAgiv5N4v4NxeQ4jlqe9Rl8M+j8n2l5fNaH9ccHcaYPP8Pz0vdrR+KHVea7x8/k7M7Giiivjj7IKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigArE8SeJfD3g7QbvxT4svoNN02wiae5urmQRQxRoMlndiAoHqaw/iP8SfAnwi8F3/xE+JWqQaNoumx+ZcXVw21FBOAB3ZmJCqqgszEAAkgV/Hl/wUE/4KNeOP2wvEsvhXwq1xovw/snH2XTi22S7ZDkT3W0kM2RlI8lYx0y2WP2XB/BmLz7EctP3aMfin0Xku8vLpuz4zjLjXB5Bh+ap71aXwwvq/N9o+fXZeXp3/BRv/gqB4g/afvLn4R/BuSfSfAFvKVklyY7jVyvR5V4KQZ5SE8tw8gDYRPx9oor+scmyXCZVhY4PBQ5YL72+rb6t/8AAVlZH8kZ1neMzXFSxmNnzTf3JdEl0S/4Lu7sKKKK9U8kKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/Q/wA/+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACvvD9hv9vb4m/sV+L5H0lTrHhTU3DanosshVHbAHnQtyI5wABuwQ6gKwOFK/B9FcWYZdhsdh54XFwUqct0/60a6Nap7Hdl2ZYnAYiGLwk3CpHZr+tU+qejW5/oM/Av47fDL9o74b2PxT+E+orqGl3g2sOBNbzKAXhmTJKSpkZU9iGBKlSfX6/gp/ZS/a5+Lv7IXxDj8bfDW8ZrSdkXUtLlY/ZL6FT92RegdcnZIBuQk44LKf7Lv2TP2vvhJ+2F8Pf+E1+Gtz5d5abE1PS5mH2qxlcEgOB1RsN5cgG18HGGVlH8scb8AYnI6jr0bzwzekusfKX6PZ+T0P6s4G8QcNntNUK1oYlLWPSVusf1W681qfVFFFFfnZ+jBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABXi3x8/aB+Ff7NPw5u/id8W9TTT9PtgVijBDXF1NglYbeMkGSRscAcAAsxVAzDzH9r39sz4R/sb+Ah4q+IU5udTvQ66XpMB/0m9kTGccEJGuRvkb5V6DLFVP8AGf8AtP8A7VXxc/a1+Icnj/4qXu8R7ksbCElbSxhYj5IUJOM4G5zlnIG4nAx+jcD+H+JzuaxFe8MMnrLrLyj+TlsvN6H5vx14hYbI4PD0LTxTWkekfOf5qO78lqeo/ts/t2/FP9tHxkt54hJ0rwzp8jNpmiwuWii6gSyngSTlTguQAASFCgnPw7RRX9TZfl+HwOHhhcLBRpx0SX9avu3q+p/KmYZjicdiJ4rFzc6ktW3/AFouyWi6BRRRXYcQUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAH/0f8AP/ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAK9R+D3xo+J3wC8dW3xI+EmrzaNq9qColiIKyRkgtHIhyskbEDKOCpIBxkDHl1FZ1qNOrCVKrFSi1Zpq6a7NM1o1qlGpGrSk4yTumnZp900f2wfsHf8FFPhp+2T4cj0K+MOh+O7OHdfaQWO2YL96a1LcvGepTJeLo2Rh2/Riv86Lw34l8Q+DtetPFPhS9n03UrCVZra6tnMcsUi8hlZSCCPav6nf8Agnl/wVo0P443Wm/BH9olotK8YSqILLVRiOz1OQYCo44ENw/YD93IwIXaxSM/zfx34Y1MDz4/KYuVHeUN3DzXeP4rrdXa/pTgLxRp47ky/NpKNfaM9oz8n2l+D6Wdk/3Aooor8bP2cKKKKACiiigAooooAKKKKACvzQ/b0/4KS/Df9jzSZPCegCHxD48uYibfTVfMVpuXKS3hUhlXkFYwQ8g6FQdw+U/+CiX/AAVu0z4R3N58Ev2Yp7fU/Eio8Woa2pEttp0nTy4RgrNOvJYn93EcKQ7blT+XbW9b1jxLrF14h8Q3Ut9f30rz3FxO5klllkO5ndmJLMxOSSck1+z8CeGFTGcmPzeLjR3jDZy831UfxfkrN/ivHvijTwXPl+USUq20p7qHkujl+C83ouw+KvxZ+Inxu8c3vxH+KWrT6zrGoOWlnnbOBkkIijCpGucIiAKo4AArzuiiv6NpUoUoKnTilFaJLRJdkj+batWdWbqVJNybu23dt92wooorQzCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/0v8AP/ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD97f+Ce3/BXfWPh39h+DP7U91NqWg5SCw11syXNkCcBbk/elhHZ+ZEHB3DAX+nfQ9c0XxPo1p4j8N3cN/p9/ClxbXNu6ywzRSAMjo6kqysCCCCQRX+c3X6R/sM/8FJvi1+x5fw+FL0v4h8CyyEz6TM/z229tzyWjk/u2JJYof3bknIDHePxjjnwup4zmx2URUau8obRl5rpGX4Pye/7XwJ4p1MHy4DOJOVLaM95R8pdZR8915rb+1WivGvgT8f/AIU/tI+Abb4j/CLVY9T0+bCyKPlmt5cZMU0fVJFzyDweoJUgn2Wv50r0KlCpKjWi4zi7NNWafmj+j8PiKVenGtRkpQkrpp3TXkwooorE2CiivB/2hv2k/hB+y74Cl+IXxf1RbG1G5be3TD3V3KP+WcEWQXbkZ6KucsVGTW+Gw1XEVY0aEHKcnZJK7b8kYYnE0sPSlXrzUYRV227JLzZ674l8TeHfBug3firxbfW+maZYRma5urqRYoYo16s7sQqgepNfy2f8FBv+CuHiL4wm9+D/AOzLczaR4TcGK71dQ8N7qK/xLHna0MB6EcSOOG2qWQ/F/wC29/wUE+LX7ZviQWupO+i+ELGRmsdEgkPlk54luCMCabHAJG1BkIBuYt8C1/R3A/hfSwPLjs2SnW3UN4w9f5pfgul3Zn82cdeKdXH8+ByluFHZz2lP0/lj+L62V0FFFFfsZ+MhRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAf/0/8AP/ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA94/Z6/aU+MP7LvjyL4g/B7VnsLkFRc27fPa3kSnPlXEWcOhyRnhlzlGVsMP6//wBij/goh8Gv2x9DTTbGVNB8YwL/AKVoVzKDI2ASZLZiF8+PAJO0b0x86gFS38RFbPh3xFr/AIR12z8UeFr2fTtS0+VJ7a6tnMU0MqHKsjqQVYHoQa+H4v4FwOe0+eXuV0tJpfhJfaX4ro90/uuDuPMdkNTkj79Bv3oN/jF/Zf4Pqtmv9F+ivwG/YM/4LGaJ43+xfCf9rKeLTNYbbDa+IQojtLk8AC5AwsMhP/LQARHuExzw/wC3l/wWUt4Y7/4R/shTCWRt1vd+JyDtUYIYWKnGWzwJ244JjU5WQfzzDw5zyWY/2d7Gz35/scv83N+nxeVz+i5+JGRRy3+0lXutuT7fN/Ly9/P4fOx+h37cv/BSf4S/sd2UvhOzC+IvHMsQaHSYXwluJFykl04/1akYIQfvHBBACneP5D/jt8f/AIr/ALSXxAufiT8XdWl1PUJyREhJEFrFnIhgjyVjjXPCjqcsxLEk+TahqN/q9/PquqzyXN1cu0s00rF5JHc5ZmY8kk8knkmqdf0VwjwPgcipXprnrNe9NrX0ivsry3fVvQ/nDi/jrH59VtUfJQT92CenrJ/afnsuiWoUUUV9ofEhRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAH/9T/AD/6KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD//1f8AP/ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP//Z" 
                  alt="Princeton University Shield" 
                  className="h-24 w-auto drop-shadow-2xl"
                />
                <div className="text-center">
                  <p className="text-xs font-medium" style={{color: '#f5d49a'}}>Created by Lillian Wang</p>
                  <p className="text-xs" style={{color: '#e8b87a'}}>CHI 108 • Spring 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-8">
          {/* Cross-deck Trouble Words banner */}
          {(() => {
            const topN = (userSettings.troubleWords || {}).topN || 20;
            const topCards = getTopTroubleCards(topN);
            if (topCards.length === 0) return null;
            return (
              <div className="mb-6 bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-2xl p-4 flex items-center justify-between gap-4 flex-wrap">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">🔥</span>
                    <span className="font-bold text-gray-800">Trouble Words</span>
                    <span className="bg-orange-100 text-orange-700 text-xs font-semibold px-2 py-0.5 rounded-full">{topCards.length} cards</span>
                  </div>
                  <p className="text-xs text-gray-500">Your most-missed words across all decks — practice them now</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {topCards.slice(0, 5).map((c, i) => (
                      <span key={i} className="bg-white border border-orange-200 text-gray-700 text-xs px-2 py-0.5 rounded-full">{c.chinese}</span>
                    ))}
                    {topCards.length > 5 && <span className="text-xs text-gray-400 self-center">+{topCards.length - 5} more</span>}
                  </div>
                </div>
                <button
                  onClick={() => setTroubleModal({ cards: topCards, deckId: null, deckName: null })}
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:from-orange-600 hover:to-red-600 transition-all shadow-md flex-shrink-0"
                >
                  Practice All →
                </button>
              </div>
            );
          })()}

          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search decks or vocab (e.g. 你好, hello, HSK1)..."
                className="w-full bg-white border-2 border-gray-200 rounded-2xl px-5 py-4 pl-12 text-lg focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 transition-all shadow-md placeholder-gray-400 text-gray-800"
              />
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X size={18} />
                </button>
              )}
            </div>
          </div>

          {/* Quick Actions Bar */}
          <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-gray-100">
            <div className="flex gap-3 justify-center flex-wrap">
              <button
                onClick={() => setCurrentView('create')}
                className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold"
              >
                <Plus size={20} />
                Create Deck
              </button>
              <button
                onClick={() => setShowImportExportModal(true)}
                className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer font-semibold"
              >
                <Upload size={20} />
                Import / Export
              </button>
              <button
                onClick={() => setShowBrowseDecks(true)}
                className="flex items-center gap-2 bg-gradient-to-r from-rose-500 to-rose-600 text-white px-6 py-3 rounded-xl hover:from-rose-600 hover:to-rose-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold"
              >
                <BookOpen size={20} />
                Browse Decks
              </button>
              <button
                onClick={() => setCurrentView('stats')}
                className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl hover:from-green-600 hover:to-green-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold"
              >
                <TrendingUp size={20} />
                Stats
              </button>
              <button
                onClick={() => setCurrentView('studyGuides')}
                className="flex items-center gap-2 bg-gradient-to-r from-rose-500 to-pink-600 text-white px-6 py-3 rounded-xl hover:from-rose-600 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold"
              >
                <Brain size={20} />
                Study Guides
                {studyGuides.length > 0 && (
                  <span className="bg-white/30 text-white text-xs px-1.5 py-0.5 rounded-full">{studyGuides.length}</span>
                )}
              </button>
              <button
                onClick={() => { resetAiTest(); setCurrentView('aiTestPractice'); }}
                className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-violet-600 text-white px-6 py-3 rounded-xl hover:from-indigo-600 hover:to-violet-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold"
              >
                <Edit2 size={20} />
                Test Practice
              </button>
              <button
                onClick={() => { setShowHandwriteRecognize(true); setHwrResult(null); setHwrEraserOn(false); setTimeout(initHwrCanvas, 120); }}
                className="flex items-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-3 rounded-xl hover:from-teal-600 hover:to-cyan-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold"
              >
                ✍️ Recognize
              </button>
              {decks.length > 0 && (
                <button
                  onClick={() => {
                    if (expandedDecks.size > 0) {
                      setExpandedDecks(new Set());
                    } else {
                      setExpandedDecks(new Set(decks.map(d => d.id)));
                    }
                  }}
                  className="flex items-center gap-2 bg-gradient-to-r from-gray-400 to-gray-500 text-white px-5 py-3 rounded-xl hover:from-gray-500 hover:to-gray-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold text-sm"
                >
                  {expandedDecks.size > 0 ? '▲ Collapse All' : '▼ Expand All'}
                </button>
              )}
              <button
                onClick={() => currentUser ? setCurrentView('account') : setCurrentView('login')}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold ${
                  currentUser
                    ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-600 hover:to-purple-700'
                    : 'bg-gradient-to-r from-indigo-500 to-indigo-600 text-white hover:from-indigo-600 hover:to-indigo-700'
                }`}
              >
                <UserIcon size={20} />
                {currentUser ? 'Account' : 'Sign In'}
                {currentUser && syncStatus === 'syncing' && (
                  <RefreshCw size={14} className="animate-spin" />
                )}
                {currentUser && syncStatus === 'synced' && (
                  <CloudIcon size={14} />
                )}
              </button>
              {(decks.length >= 2 || folders.length >= 2) && (
                <button
                  onClick={() => {
                    if (reorderMode) {
                      setBulkMoveSelectedDecks(new Set());
                      if (currentUser && FIREBASE_ENABLED && cloudLoadedRef.current) {
                        saveToCloud(currentUser.uid);
                      }
                    }
                    setReorderMode(!reorderMode);
                  }}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold ${
                    reorderMode
                      ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white ring-2 ring-yellow-300'
                      : 'bg-gradient-to-r from-gray-500 to-gray-600 text-white hover:from-gray-600 hover:to-gray-700'
                  }`}
                >
                  {reorderMode ? '✓ Done' : '↕ Move'}
                </button>
              )}
              {reorderMode && bulkMoveSelectedDecks.size > 0 ? (
                <button
                  onClick={() => setShowBulkMoveModal(true)}
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold"
                >
                  <span className="text-lg">📁</span>
                  Move {bulkMoveSelectedDecks.size} to Folder
                </button>
              ) : (
                <button
                  onClick={() => setShowCreateFolder(true)}
                  className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold"
                >
                  <span className="text-lg">📁</span>
                  New Folder
                </button>
              )}
            </div>
          </div>

          {/* Create Folder Modal */}
          {showCreateFolder && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setShowCreateFolder(false)}>
              <div className="bg-white rounded-xl shadow-2xl p-6 max-w-sm mx-4 w-full" onClick={(e) => e.stopPropagation()}>
                <h3 className="text-lg font-bold text-gray-800 mb-4">Create New Folder</h3>
                <input
                  type="text"
                  value={newFolderName}
                  onChange={(e) => setNewFolderName(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && createFolder()}
                  placeholder="Folder name..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-gray-800"
                  autoFocus
                />
                <div className="flex gap-3">
                  <button onClick={() => setShowCreateFolder(false)} className="flex-1 bg-gray-100 text-gray-700 py-2.5 rounded-lg font-semibold hover:bg-gray-200 transition-all">Cancel</button>
                  <button onClick={createFolder} className="flex-1 bg-gradient-to-r from-amber-500 to-amber-600 text-white py-2.5 rounded-lg font-semibold hover:from-amber-600 hover:to-amber-700 transition-all">Create</button>
                </div>
              </div>
            </div>
          )}

          {/* Move Deck to Folder Modal */}
          {movingDeckId && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setMovingDeckId(null)}>
              <div className="bg-white rounded-xl shadow-2xl p-6 max-w-sm mx-4 w-full" onClick={(e) => e.stopPropagation()}>
                <h3 className="text-lg font-bold text-gray-800 mb-1">Move Deck to Folder</h3>
                <p className="text-sm text-gray-500 mb-4">Select a destination folder</p>
                <div className="space-y-2 max-h-60 overflow-y-auto">
                  <button
                    onClick={() => moveDeckToFolder(movingDeckId, null)}
                    className="w-full text-left px-4 py-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-all flex items-center gap-3"
                  >
                    <span className="text-lg">📄</span>
                    <span className="font-medium text-gray-700">Root (no folder)</span>
                  </button>
                  {folders.map(folder => (
                    <button
                      key={folder.id}
                      onClick={() => moveDeckToFolder(movingDeckId, folder.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg border hover:bg-amber-50 transition-all flex items-center gap-3 ${
                        folder.deckIds.includes(movingDeckId) ? 'border-amber-400 bg-amber-50' : 'border-gray-200'
                      }`}
                    >
                      <span className="text-lg">{folder.deckIds.includes(movingDeckId) ? '📂' : '📁'}</span>
                      <span className="font-medium text-gray-700">{folder.name}</span>
                      <span className="text-xs text-gray-400 ml-auto">{folder.deckIds.length} decks</span>
                    </button>
                  ))}
                </div>
                <button onClick={() => setMovingDeckId(null)} className="w-full mt-4 bg-gray-100 text-gray-700 py-2.5 rounded-lg font-semibold hover:bg-gray-200 transition-all">Cancel</button>
              </div>
            </div>
          )}

          {/* Bulk Move to Folder Modal (from home page reorder/select mode) */}
          {showBulkMoveModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setShowBulkMoveModal(false)}>
              <div className="bg-white rounded-xl shadow-2xl p-6 max-w-sm mx-4 w-full" onClick={(e) => e.stopPropagation()}>
                <h3 className="text-lg font-bold text-gray-800 mb-1">Move {bulkMoveSelectedDecks.size} Deck{bulkMoveSelectedDecks.size !== 1 ? 's' : ''} to Folder</h3>
                <p className="text-sm text-gray-500 mb-4">Select a destination folder</p>
                <div className="space-y-2 max-h-60 overflow-y-auto">
                  <button onClick={() => bulkMoveDeckToFolder(null)} className="w-full text-left px-4 py-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-all flex items-center gap-3">
                    <span className="text-lg">📄</span>
                    <span className="font-medium text-gray-700">Root (no folder)</span>
                  </button>
                  {folders.map(folder => (
                    <button key={folder.id} onClick={() => bulkMoveDeckToFolder(folder.id)} className="w-full text-left px-4 py-3 rounded-lg border border-gray-200 hover:bg-amber-50 transition-all flex items-center gap-3">
                      <span className="text-lg">📁</span>
                      <span className="font-medium text-gray-700">{folder.name}</span>
                      <span className="text-xs text-gray-400 ml-auto">{folder.deckIds.length} decks</span>
                    </button>
                  ))}
                </div>
                <button onClick={() => setShowBulkMoveModal(false)} className="w-full mt-4 bg-gray-100 text-gray-700 py-2.5 rounded-lg font-semibold hover:bg-gray-200 transition-all">Cancel</button>
              </div>
            </div>
          )}

          {/* Bulk Reorder Modal for Folder Decks */}
          {bulkReorderFolderId && (() => {
            const folder = folders.find(f => f.id === bulkReorderFolderId);
            if (!folder) return null;
            const folderDecksList = folder.deckIds.map(id => decks.find(d => d.id === id)).filter(Boolean);
            const [folderSelectedDecks, setFolderSelectedDecks] = React.useState(new Set());
            const [showFolderMoveTarget, setShowFolderMoveTarget] = React.useState(false);
            const toggleFolderDeckSelect = (deckId) => setFolderSelectedDecks(prev => { const n = new Set(prev); n.has(deckId) ? n.delete(deckId) : n.add(deckId); return n; });
            const moveFolderSelectedTo = (targetFolderId) => {
              const selectedIds = [...folderSelectedDecks];
              setFolders(prev => {
                let updated = prev.map(f => ({ ...f, deckIds: f.deckIds.filter(id => !selectedIds.includes(id)) }));
                if (targetFolderId !== null) updated = updated.map(f => f.id === targetFolderId ? { ...f, deckIds: [...f.deckIds, ...selectedIds] } : f);
                return updated;
              });
              setFolderSelectedDecks(new Set());
              setShowFolderMoveTarget(false);
              if (currentUser && FIREBASE_ENABLED && cloudLoadedRef.current) setTimeout(() => saveToCloud(currentUser.uid), 100);
            };
            return (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => { setBulkReorderFolderId(null); }}>
                <div className="bg-white rounded-xl shadow-2xl p-6 max-w-md mx-4 w-full max-h-[80vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">Reorder / Select Decks</h3>
                  <p className="text-sm text-gray-500 mb-4">Drag or use arrows to reorder · tap ○ to select for moving</p>
                  <div className="space-y-1 overflow-y-auto flex-1 pr-1">
                    {folderDecksList.map((deck, idx) => (
                      <div
                        key={deck.id}
                        draggable
                        onDragStart={(e) => { e.dataTransfer.setData('text/plain', deck.id); e.currentTarget.style.opacity = '0.5'; }}
                        onDragEnd={(e) => { e.currentTarget.style.opacity = '1'; }}
                        onDragOver={(e) => { e.preventDefault(); e.currentTarget.classList.add('bg-yellow-100'); }}
                        onDragLeave={(e) => { e.currentTarget.classList.remove('bg-yellow-100'); }}
                        onDrop={(e) => {
                          e.preventDefault();
                          e.currentTarget.classList.remove('bg-yellow-100');
                          const draggedId = e.dataTransfer.getData('text/plain');
                          if (String(draggedId) === String(deck.id)) return;
                          setFolders(prev => prev.map(f => {
                            if (f.id !== bulkReorderFolderId) return f;
                            const newIds = [...f.deckIds];
                            const fromIdx = newIds.findIndex(id => String(id) === String(draggedId));
                            if (fromIdx === -1) return f;
                            const toIdx = newIds.findIndex(id => String(id) === String(deck.id));
                            const [moved] = newIds.splice(fromIdx, 1);
                            newIds.splice(toIdx, 0, moved);
                            return { ...f, deckIds: newIds };
                          }));
                        }}
                        className={`flex items-center gap-2 px-3 py-2.5 rounded-lg border transition-all cursor-grab active:cursor-grabbing group ${folderSelectedDecks.has(deck.id) ? 'border-blue-400 bg-blue-50' : 'border-gray-200 bg-white hover:border-yellow-300'}`}
                      >
                        {/* Select circle */}
                        <button
                          onClick={(e) => { e.stopPropagation(); toggleFolderDeckSelect(deck.id); }}
                          className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all ${folderSelectedDecks.has(deck.id) ? 'bg-blue-500 border-blue-500 text-white' : 'border-gray-300 hover:border-blue-400 bg-white'}`}
                        >
                          {folderSelectedDecks.has(deck.id) && <Check size={10} />}
                        </button>
                        <span className="text-gray-400 group-hover:text-gray-600 select-none text-lg">⠿</span>
                        <span className="text-sm font-medium text-gray-800 flex-1 truncate">{deck.name}</span>
                        <span className="text-xs text-gray-400 mr-1">{deck.cards.length} cards</span>
                        <div className="flex gap-0.5">
                          <button onClick={() => moveFolderDeckToTop(bulkReorderFolderId, deck.id)} disabled={idx === 0} className="w-7 h-7 rounded flex items-center justify-center text-xs hover:bg-yellow-100 transition disabled:opacity-20 disabled:cursor-not-allowed" title="Top">⇈</button>
                          <button onClick={() => moveFolderDeck(bulkReorderFolderId, deck.id, -1)} disabled={idx === 0} className="w-7 h-7 rounded flex items-center justify-center hover:bg-yellow-100 transition disabled:opacity-20 disabled:cursor-not-allowed">↑</button>
                          <button onClick={() => moveFolderDeck(bulkReorderFolderId, deck.id, 1)} disabled={idx === folderDecksList.length - 1} className="w-7 h-7 rounded flex items-center justify-center hover:bg-yellow-100 transition disabled:opacity-20 disabled:cursor-not-allowed">↓</button>
                          <button onClick={() => moveFolderDeckToBottom(bulkReorderFolderId, deck.id)} disabled={idx === folderDecksList.length - 1} className="w-7 h-7 rounded flex items-center justify-center text-xs hover:bg-yellow-100 transition disabled:opacity-20 disabled:cursor-not-allowed" title="Bottom">⇊</button>
                        </div>
                      </div>
                    ))}
                  </div>
                  {folderSelectedDecks.size > 0 && (
                    <button onClick={() => setShowFolderMoveTarget(true)} className="w-full mt-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2.5 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all">
                      📁 Move {folderSelectedDecks.size} Selected to Another Folder
                    </button>
                  )}
                  <button
                    onClick={() => { setBulkReorderFolderId(null); if (currentUser && FIREBASE_ENABLED && cloudLoadedRef.current) saveToCloud(currentUser.uid); }}
                    className="w-full mt-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-2.5 rounded-lg font-semibold hover:from-yellow-600 hover:to-yellow-700 transition-all"
                  >
                    Done
                  </button>
                  {/* Inner: choose target folder */}
                  {showFolderMoveTarget && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60]" onClick={() => setShowFolderMoveTarget(false)}>
                      <div className="bg-white rounded-xl shadow-2xl p-6 max-w-sm mx-4 w-full" onClick={(e) => e.stopPropagation()}>
                        <h3 className="text-lg font-bold text-gray-800 mb-3">Move {folderSelectedDecks.size} Deck{folderSelectedDecks.size !== 1 ? 's' : ''} to…</h3>
                        <div className="space-y-2 max-h-60 overflow-y-auto">
                          <button onClick={() => moveFolderSelectedTo(null)} className="w-full text-left px-4 py-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-all flex items-center gap-3">
                            <span className="text-lg">📄</span><span className="font-medium text-gray-700">Root (no folder)</span>
                          </button>
                          {folders.filter(f => f.id !== bulkReorderFolderId).map(f => (
                            <button key={f.id} onClick={() => moveFolderSelectedTo(f.id)} className="w-full text-left px-4 py-3 rounded-lg border border-gray-200 hover:bg-amber-50 transition-all flex items-center gap-3">
                              <span className="text-lg">📁</span>
                              <span className="font-medium text-gray-700">{f.name}</span>
                              <span className="text-xs text-gray-400 ml-auto">{f.deckIds.length} decks</span>
                            </button>
                          ))}
                        </div>
                        <button onClick={() => setShowFolderMoveTarget(false)} className="w-full mt-4 bg-gray-100 text-gray-700 py-2.5 rounded-lg font-semibold hover:bg-gray-200 transition-all">Cancel</button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })()}

          {/* Jump Back In Section */}
          {(() => {
            const recentDecks = Object.entries(lastStudied)
              .map(([deckId, value]) => {
                // Backward compat: old format was just a timestamp number
                const timestamp = typeof value === 'number' ? value : value.timestamp;
                const mode = typeof value === 'number' ? 'study' : (value.mode || 'study');
                return { deck: decks.find(d => String(d.id) === String(deckId)), timestamp, mode };
              })
              .filter(item => item.deck)
              .sort((a, b) => b.timestamp - a.timestamp)
              .slice(0, 3);
            if (recentDecks.length === 0) return null;
            const modeLabels = { study: 'Flashcards', learn: 'Learn', match: 'Match', test: 'Test', writing: 'Writing', sentences: '课文 Sentences' };
            const modeColors = {
              study: 'from-red-500 to-red-600 hover:from-red-600 hover:to-red-700',
              learn: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
              match: 'from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600',
              test: 'from-indigo-400 to-indigo-500 hover:from-indigo-500 hover:to-indigo-600',
              writing: 'from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700',
            };
            return (
              <div className="mb-3">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <RotateCcw size={20} className="text-blue-500" />
                  Jump Back In
                </h2>
                <div className="flex gap-4 overflow-x-auto pb-2" style={{ scrollbarWidth: 'thin' }}>
                  {recentDecks.map(({ deck, timestamp, mode }) => {
                    const totalCards = deck.cards.length;
                    const masteredCards = deck.cards.filter(c => (c.masteryStatus === 'mastered') || (c.known && !c.masteryStatus)).length;
                    const masteredPct = totalCards > 0 ? (masteredCards / totalCards) * 100 : 0;
                    const timeAgo = (() => {
                      const diff = Date.now() - timestamp;
                      const mins = Math.floor(diff / 60000);
                      if (mins < 1) return 'Just now';
                      if (mins < 60) return `${mins}m ago`;
                      const hrs = Math.floor(mins / 60);
                      if (hrs < 24) return `${hrs}h ago`;
                      const days = Math.floor(hrs / 24);
                      return `${days}d ago`;
                    })();
                    const lastMode = modeLabels[mode] || 'Flashcards';
                    const savedSession = getSavedWritingSession(deck.id);
                    const savedSentenceSession = getSavedSentenceSession(deck.id);
                    return (
                      <div key={deck.id} className="min-w-[240px] max-w-[280px] bg-white rounded-xl shadow-md border-2 border-blue-100 overflow-hidden flex-shrink-0 hover:shadow-lg transition-all">
                        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3">
                          <h3 className="text-sm font-bold text-white line-clamp-1">{deck.name}</h3>
                          <p className="text-xs text-blue-100">{totalCards} cards · {timeAgo} · {lastMode}</p>
                        </div>
                        <div className="p-3">
                          <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden mb-3">
                            <div className="bg-gradient-to-r from-green-400 to-green-600 h-2 transition-all duration-500" style={{ width: `${masteredPct}%` }} />
                          </div>
                          {savedSession && (
                            <button
                              onClick={resumeWritingSession}
                              className="w-full mb-2 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white py-2 rounded-lg transition-all text-xs font-semibold flex items-center justify-center gap-1 ring-2 ring-pink-300"
                            >
                              📝 Resume Writing ({savedSession.currentIndex + 1}/{savedSession.cardIds.length})
                            </button>
                          )}
                          {savedSentenceSession && (
                            <button
                              onClick={() => resumeSentenceSession(deck)}
                              className="w-full mb-2 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white py-2 rounded-lg transition-all text-xs font-semibold flex items-center justify-center gap-1 ring-2 ring-teal-300"
                            >
                              📖 Resume 课文 ({savedSentenceSession.currentIndex + 1}/{savedSentenceSession.queue?.length || '?'})
                            </button>
                          )}
                          <div className="flex gap-2">
                            <button
                              onClick={() => startStudy(deck)}
                              className={`flex-1 bg-gradient-to-r ${modeColors.study} text-white py-2.5 rounded-lg transition-all text-xs font-semibold flex flex-col items-center justify-center gap-0.5`}
                            >
                              <Play size={14} />
                              Study
                            </button>
                            <button
                              onClick={() => startWritingPractice(deck)}
                              className={`flex-1 bg-gradient-to-r ${modeColors.writing} text-white py-2.5 rounded-lg transition-all text-xs font-semibold flex flex-col items-center justify-center gap-0.5`}
                            >
                              <span className="text-sm leading-none">📝</span>
                              Write
                            </button>
                            <button
                              onClick={() => startLearnMode(deck)}
                              className={`flex-1 bg-gradient-to-r ${modeColors.learn} text-white py-2.5 rounded-lg transition-all text-xs font-semibold flex flex-col items-center justify-center gap-0.5`}
                            >
                              <Brain size={14} />
                              Learn
                            </button>
                            {(() => {
                              const tc = getTroubleCardsForDeck(deck);
                              if (tc.length === 0) return null;
                              return (
                                <button
                                  onClick={() => setTroubleModal({ cards: tc, deckId: deck.id, deckName: deck.name })}
                                  className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-white py-2.5 rounded-lg transition-all text-xs font-semibold flex flex-col items-center justify-center gap-0.5"
                                  title={`${tc.length} trouble word${tc.length > 1 ? 's' : ''}`}
                                >
                                  <span className="text-sm leading-none">🔥</span>
                                  {tc.length}
                                </button>
                              );
                            })()}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })()}

          {/* Breadcrumb Navigation */}
          {currentFolderId && (() => {
            const folder = folders.find(f => f.id === currentFolderId);
            if (!folder) return null;
            return (
              <div className="mb-4 flex items-center gap-2">
                <button onClick={() => setCurrentFolderId(null)} className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold transition-all flex items-center gap-1">
                  ← All Decks
                </button>
                <ChevronRight size={16} className="text-gray-400" />
                <span className="text-gray-700 font-semibold">{folder.name}</span>
              </div>
            );
          })()}

          {/* Folders Grid (shown at root level) */}
          {!currentFolderId && folders.length > 0 && (() => {
            const q = searchQuery.trim().toLowerCase();
            const filteredFolders = q ? folders.filter(folder => {
              if (folder.name.toLowerCase().includes(q)) return true;
              const folderDecks = decks.filter(d => folder.deckIds.includes(d.id));
              return folderDecks.some(d =>
                d.name.toLowerCase().includes(q) ||
                d.cards.some(c =>
                  (c.chinese && c.chinese.toLowerCase().includes(q)) ||
                  (c.pinyin && c.pinyin.toLowerCase().includes(q)) ||
                  (c.english && c.english.toLowerCase().includes(q))
                )
              );
            }) : folders;
            if (filteredFolders.length === 0) return null;
            return (
            <div className="mb-8">
              <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="text-xl">📁</span>
                Folders
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {filteredFolders.map((folder, folderIndex) => {
                  const folderDecks = decks.filter(d => folder.deckIds.includes(d.id));
                  const totalCards = folderDecks.reduce((sum, d) => sum + d.cards.length, 0);
                  return (
                    <div
                      key={folder.id}
                      className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 border overflow-hidden cursor-pointer relative ${reorderMode ? 'border-yellow-300 border-2' : 'border-gray-100'}`}
                      onClick={() => !reorderMode && setCurrentFolderId(folder.id)}
                    >
                      {/* Folder Reorder Controls */}
                      {reorderMode && (
                        <div className="absolute top-2 right-2 z-10 flex gap-2" onClick={(e) => e.stopPropagation()}>
                          <div className="flex flex-col gap-1">
                            <button
                              onClick={() => moveFolderToTop(folder.id)}
                              disabled={folderIndex === 0}
                              className="bg-white bg-opacity-90 text-gray-700 w-8 h-8 rounded-lg shadow-md flex items-center justify-center hover:bg-yellow-100 transition disabled:opacity-30 disabled:cursor-not-allowed text-xs font-bold"
                              title="Move to top"
                            >⇈</button>
                            <button
                              onClick={() => moveFolder(folder.id, -1)}
                              disabled={folderIndex === 0}
                              className="bg-white bg-opacity-90 text-gray-700 w-8 h-8 rounded-lg shadow-md flex items-center justify-center hover:bg-yellow-100 transition disabled:opacity-30 disabled:cursor-not-allowed text-lg font-bold"
                            >↑</button>
                            <button
                              onClick={() => moveFolder(folder.id, 1)}
                              disabled={folderIndex === filteredFolders.length - 1}
                              className="bg-white bg-opacity-90 text-gray-700 w-8 h-8 rounded-lg shadow-md flex items-center justify-center hover:bg-yellow-100 transition disabled:opacity-30 disabled:cursor-not-allowed text-lg font-bold"
                            >↓</button>
                            <button
                              onClick={() => moveFolderToBottom(folder.id)}
                              disabled={folderIndex === filteredFolders.length - 1}
                              className="bg-white bg-opacity-90 text-gray-700 w-8 h-8 rounded-lg shadow-md flex items-center justify-center hover:bg-yellow-100 transition disabled:opacity-30 disabled:cursor-not-allowed text-xs font-bold"
                              title="Move to bottom"
                            >⇊</button>
                          </div>
                        </div>
                      )}
                      <div className="bg-gradient-to-r from-amber-400 to-yellow-500 p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            {editingFolderId === folder.id ? (
                              <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
                                <input
                                  type="text"
                                  value={editFolderName}
                                  onChange={(e) => setEditFolderName(e.target.value)}
                                  onKeyDown={(e) => e.key === 'Enter' && renameFolder(folder.id)}
                                  className="bg-white bg-opacity-90 text-gray-800 text-sm font-bold rounded-lg px-2 py-1 flex-1 focus:outline-none focus:ring-2 focus:ring-amber-300"
                                  autoFocus
                                />
                                <button onClick={() => renameFolder(folder.id)} className="bg-white bg-opacity-90 text-amber-700 px-2 py-1 rounded-lg text-xs font-bold hover:bg-opacity-100">Save</button>
                                <button onClick={() => setEditingFolderId(null)} className="bg-white bg-opacity-90 text-gray-500 px-2 py-1 rounded-lg text-xs font-bold hover:bg-opacity-100">Cancel</button>
                              </div>
                            ) : (
                              <h3 className="text-lg font-bold text-white mb-1 line-clamp-1">{folder.name}</h3>
                            )}
                            <p className="text-sm text-amber-100 font-medium">{folderDecks.length} decks · {totalCards} cards</p>
                          </div>
                          <span className={`text-3xl opacity-75 ${reorderMode ? 'mr-10' : ''}`}>📁</span>
                        </div>
                      </div>
                      <div className="p-3 flex gap-2" onClick={(e) => e.stopPropagation()}>
                        <button
                          onClick={() => { setEditingFolderId(folder.id); setEditFolderName(folder.name); }}
                          className="flex-1 bg-amber-50 text-amber-700 px-3 py-1.5 rounded-lg hover:bg-amber-100 transition-all border border-amber-200 text-xs font-medium"
                        >
                          Rename
                        </button>
                        {folderDecks.length >= 2 && (
                          <button
                            onClick={() => setBulkReorderFolderId(folder.id)}
                            className="flex-1 bg-yellow-50 text-yellow-700 px-3 py-1.5 rounded-lg hover:bg-yellow-100 transition-all border border-yellow-300 text-xs font-medium"
                          >
                            ↕ Reorder
                          </button>
                        )}
                        <button
                          onClick={() => deleteFolder(folder.id)}
                          className="flex-1 bg-red-50 text-red-600 px-3 py-1.5 rounded-lg hover:bg-red-100 transition-all border border-red-200 text-xs font-medium"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            );
          })()}

          {/* Decks Grid */}
          {(() => {
            // Determine which decks to show based on folder context and search
            const allFolderedDeckIds = folders.flatMap(f => f.deckIds);
            const q = searchQuery.trim().toLowerCase();
            let visibleDecks;
            let showAddDeckButton = false;
            if (q && !currentFolderId) {
              // When searching at root level, show ALL matching decks regardless of folder
              visibleDecks = decks.filter(d =>
                d.name.toLowerCase().includes(q) ||
                d.cards.some(c =>
                  (c.chinese && c.chinese.toLowerCase().includes(q)) ||
                  (c.pinyin && c.pinyin.toLowerCase().includes(q)) ||
                  (c.english && c.english.toLowerCase().includes(q))
                )
              );
            } else if (currentFolderId) {
              const folder = folders.find(f => f.id === currentFolderId);
              visibleDecks = folder ? folder.deckIds.map(id => decks.find(d => d.id === id)).filter(Boolean) : [];
              if (q) {
                visibleDecks = visibleDecks.filter(d =>
                  d.name.toLowerCase().includes(q) ||
                  d.cards.some(c =>
                    (c.chinese && c.chinese.toLowerCase().includes(q)) ||
                    (c.pinyin && c.pinyin.toLowerCase().includes(q)) ||
                    (c.english && c.english.toLowerCase().includes(q))
                  )
                );
              }
              showAddDeckButton = true;
            } else {
              // Root level: show only unfoldered decks
              visibleDecks = decks.filter(d => !allFolderedDeckIds.includes(d.id));
            }

            return (
              <div>
                {currentFolderId && (
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-bold text-gray-800">Decks in this folder</h2>
                    {showAddDeckButton && (() => {
                      const unfolderedDecks = decks.filter(d => !allFolderedDeckIds.includes(d.id));
                      if (unfolderedDecks.length === 0) return null;
                      return (
                        <div className="relative group">
                          <button className="flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-2 rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all shadow-md text-sm font-semibold">
                            <Plus size={16} />
                            Add Deck
                          </button>
                          <div className="absolute right-0 top-full mt-1 bg-white rounded-xl shadow-xl border border-gray-200 py-2 min-w-[200px] max-h-60 overflow-y-auto z-20 hidden group-hover:block hover:block">
                            {unfolderedDecks.map(d => (
                              <button
                                key={d.id}
                                onClick={() => moveDeckToFolder(d.id, currentFolderId)}
                                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 transition-all"
                              >
                                {d.name} <span className="text-gray-400 text-xs">({d.cards.length} cards)</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                )}

                {!currentFolderId && visibleDecks.length > 0 && (folders.length > 0 || q) && (
                  <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <BookOpen size={20} className="text-orange-500" />
                    {q ? `Search Results (${visibleDecks.length})` : 'Unfoldered Decks'}
                  </h2>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {visibleDecks.map((deck, deckIndex) => {
                    const totalCards = deck.cards.length;
                    const masteredCards = deck.cards.filter(c => (c.masteryStatus === 'mastered') || (c.known && !c.masteryStatus)).length;
                    const learningCards = deck.cards.filter(c => c.masteryStatus === 'learning' || (!c.masteryStatus && c.lastReviewed && !c.known)).length;
                    const notStartedCards = totalCards - masteredCards - learningCards;
                    const masteredPct = totalCards > 0 ? (masteredCards / totalCards) * 100 : 0;
                    const learningPct = totalCards > 0 ? (learningCards / totalCards) * 100 : 0;

                    return (
                      <div key={deck.id} className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 border overflow-hidden relative ${
                        reorderMode && bulkMoveSelectedDecks.has(deck.id)
                          ? 'border-blue-500 border-2 ring-2 ring-blue-200'
                          : reorderMode ? 'border-yellow-300 border-2' : 'border-gray-100'
                      }`}>
                        {/* Bulk Select Circle — appears in reorder mode */}
                        {reorderMode && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setBulkMoveSelectedDecks(prev => {
                                const next = new Set(prev);
                                next.has(deck.id) ? next.delete(deck.id) : next.add(deck.id);
                                return next;
                              });
                            }}
                            className={`absolute top-3 left-3 z-20 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all shadow ${
                              bulkMoveSelectedDecks.has(deck.id)
                                ? 'bg-blue-500 border-blue-500 text-white'
                                : 'bg-white border-gray-300 hover:border-blue-400'
                            }`}
                          >
                            {bulkMoveSelectedDecks.has(deck.id) && <Check size={12} />}
                          </button>
                        )}
                        {/* Reorder Controls */}
                        {reorderMode && (
                          <div className="absolute top-2 right-2 z-10 flex gap-2">
                            <div className="flex flex-col gap-1">
                              <button
                                onClick={(e) => { e.stopPropagation(); moveDeckToTop(deck.id); }}
                                disabled={deckIndex === 0}
                                className="bg-white bg-opacity-90 text-gray-700 w-8 h-8 rounded-lg shadow-md flex items-center justify-center hover:bg-yellow-100 transition disabled:opacity-30 disabled:cursor-not-allowed text-xs font-bold"
                                title="Move to top"
                              >
                                ⇈
                              </button>
                              <button
                                onClick={(e) => { e.stopPropagation(); moveDeck(deck.id, -1); }}
                                disabled={deckIndex === 0}
                                className="bg-white bg-opacity-90 text-gray-700 w-8 h-8 rounded-lg shadow-md flex items-center justify-center hover:bg-yellow-100 transition disabled:opacity-30 disabled:cursor-not-allowed text-lg font-bold"
                              >
                                ↑
                              </button>
                              <button
                                onClick={(e) => { e.stopPropagation(); moveDeck(deck.id, 1); }}
                                disabled={deckIndex === visibleDecks.length - 1}
                                className="bg-white bg-opacity-90 text-gray-700 w-8 h-8 rounded-lg shadow-md flex items-center justify-center hover:bg-yellow-100 transition disabled:opacity-30 disabled:cursor-not-allowed text-lg font-bold"
                              >
                                ↓
                              </button>
                              <button
                                onClick={(e) => { e.stopPropagation(); moveDeckToBottom(deck.id); }}
                                disabled={deckIndex === visibleDecks.length - 1}
                                className="bg-white bg-opacity-90 text-gray-700 w-8 h-8 rounded-lg shadow-md flex items-center justify-center hover:bg-yellow-100 transition disabled:opacity-30 disabled:cursor-not-allowed text-xs font-bold"
                                title="Move to bottom"
                              >
                                ⇊
                              </button>
                            </div>
                          </div>
                        )}

                        {/* Card Header */}
                        <div className="bg-gradient-to-r from-orange-500 to-blue-600 p-4">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-white mb-1 line-clamp-2">{deck.name}</h3>
                              <p className="text-sm text-orange-100 font-medium">{totalCards} cards</p>
                            </div>
                            <BookOpen className="text-white opacity-75" size={28} />
                          </div>
                        </div>

                        {/* Card Body */}
                        <div className="p-5">
                          {/* Progress Section - 3 tier */}
                          <div className="mb-5">
                            <div className="flex justify-between text-xs font-semibold text-gray-600 mb-2">
                              <div className="flex gap-3">
                                {notStartedCards > 0 && <span className="text-gray-400">{notStartedCards} new</span>}
                                {learningCards > 0 && <span className="text-orange-500">{learningCards} learning</span>}
                                {masteredCards > 0 && <span className="text-green-600">{masteredCards} mastered</span>}
                              </div>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden shadow-inner flex">
                              {masteredPct > 0 && (
                                <div
                                  className="bg-gradient-to-r from-green-400 to-green-600 h-3 transition-all duration-500"
                                  style={{ width: `${masteredPct}%` }}
                                />
                              )}
                              {learningPct > 0 && (
                                <div
                                  className="bg-gradient-to-r from-orange-300 to-orange-500 h-3 transition-all duration-500"
                                  style={{ width: `${learningPct}%` }}
                                />
                              )}
                            </div>
                          </div>

                          {/* Primary Actions */}
                          <div className="space-y-2 mb-4">
                            <div className="grid grid-cols-2 gap-2">
                              <button
                                onClick={() => startStudy(deck)}
                                disabled={totalCards === 0}
                                className="bg-gradient-to-r from-red-500 to-red-600 text-white py-2.5 rounded-xl hover:from-red-600 hover:to-red-700 transition-all shadow-md hover:shadow-lg disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-semibold text-sm"
                              >
                                <Play size={16} />
                                Study
                              </button>
                              <button
                                onClick={() => startLearnMode(deck)}
                                disabled={totalCards === 0}
                                className="bg-gradient-to-r from-purple-500 to-purple-600 text-white py-2.5 rounded-xl hover:from-purple-600 hover:to-purple-700 transition-all shadow-md hover:shadow-lg disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-semibold text-sm"
                              >
                                <Brain size={16} />
                                {learnProgress[deck.id] ? 'Resume' : 'Learn'}
                              </button>
                            </div>

                            {/* Secondary Actions */}
                            <div className="grid grid-cols-3 gap-2">
                              <button
                                onClick={() => startMatchGame(deck)}
                                disabled={totalCards < 4}
                                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white py-2 rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all shadow-sm hover:shadow-md disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed text-xs font-semibold"
                              >
                                Match
                              </button>
                              <button
                                onClick={() => startPracticeTest(deck)}
                                disabled={totalCards < 4}
                                className="bg-gradient-to-r from-indigo-400 to-indigo-500 text-white py-2 rounded-lg hover:from-indigo-500 hover:to-indigo-600 transition-all shadow-sm hover:shadow-md disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed text-xs font-semibold"
                              >
                                Test
                              </button>
                              <button
                                onClick={() => startWritingPractice(deck)}
                                disabled={totalCards === 0}
                                className="bg-gradient-to-r from-pink-400 to-pink-500 text-white py-2 rounded-lg hover:from-pink-500 hover:to-pink-600 transition-all shadow-sm hover:shadow-md disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed text-xs font-semibold"
                              >
                                Write
                              </button>
                            </div>
                            {/* Trouble Words */}
                            {(() => {
                              const tc = getTroubleCardsForDeck(deck);
                              if (tc.length === 0) return null;
                              return (
                                <button
                                  onClick={() => setTroubleModal({ cards: tc, deckId: deck.id, deckName: deck.name })}
                                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all shadow-sm text-xs font-semibold flex items-center justify-center gap-1.5"
                                >
                                  🔥 Trouble Words ({tc.length})
                                </button>
                              );
                            })()}
                          </div>

                          {/* Expand/Collapse toggle */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setExpandedDecks(prev => {
                                const next = new Set(prev);
                                if (next.has(deck.id)) next.delete(deck.id);
                                else next.add(deck.id);
                                return next;
                              });
                            }}
                            className="w-full text-center py-1.5 text-xs text-gray-400 hover:text-gray-600 transition"
                          >
                            {expandedDecks.has(deck.id) ? '▲ Collapse' : '▼ More options'}
                          </button>

                          {/* Collapsible sections */}
                          {expandedDecks.has(deck.id) && (
                          <React.Fragment>

                          {/* 课文 & Study Guide */}
                          <div className="space-y-2 pt-3 border-t border-gray-100">
                            <div className="grid grid-cols-2 gap-2">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setKewenEditDeck(deck);
                                  setKewenEditText(deck.kewen || '');
                                  setKewenViewMode(deck.kewen ? 'read' : 'edit');
                                }}
                                className="bg-orange-50 text-orange-600 px-3 py-2 rounded-lg hover:bg-orange-100 transition-all border border-orange-200 flex items-center justify-center gap-1"
                              >
                                <span className="text-sm">📄</span>
                                <span className="text-xs font-medium">{deck.kewen ? 'View 课文' : 'Add 课文'}</span>
                              </button>
                              <button
                                onClick={(e) => { e.stopPropagation(); setCurrentView('studyGuides'); setTimeout(() => generateStudyGuide(deck), 100); }}
                                disabled={studyGuideLoading || totalCards === 0}
                                className="bg-rose-50 text-rose-600 px-3 py-2 rounded-lg hover:bg-rose-100 transition-all border border-rose-200 flex items-center justify-center gap-1 disabled:opacity-50"
                              >
                                <Brain size={14} />
                                <span className="text-xs font-medium">Study Guide</span>
                              </button>
                            </div>
                            <button
                              onClick={(e) => { e.stopPropagation(); startSentencePractice(deck); }}
                              className="w-full bg-teal-50 text-teal-700 px-3 py-2 rounded-lg hover:bg-teal-100 transition-all border border-teal-200 flex items-center justify-center gap-2"
                            >
                              <span className="text-sm">📝</span>
                              <span className="text-xs font-medium">课文 Sentence Writing</span>
                              {!deck.kewen && <span className="text-xs text-teal-400">(no 课文)</span>}
                            </button>
                            {deck.kewen && (
                              <div className="text-xs text-gray-400 text-center">课文 attached ({deck.kewen.length} chars)</div>
                            )}
                          </div>

                          {/* Utility Actions */}
                          <div className="space-y-2 pt-3 border-t border-gray-100">
                            <div className="flex gap-2">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  startEditDeck(deck);
                                }}
                                className="flex-1 bg-blue-50 text-blue-600 px-3 py-2 rounded-lg hover:bg-blue-100 transition-all border border-blue-200 flex items-center justify-center gap-1"
                                title="Edit deck"
                              >
                                <Edit2 size={14} />
                                <span className="text-xs font-medium">Edit</span>
                              </button>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleExportClick(deck);
                                }}
                                className="flex-1 bg-green-50 text-green-600 px-3 py-2 rounded-lg hover:bg-green-100 transition-all border border-green-200 flex items-center justify-center gap-1"
                                title="Export deck"
                              >
                                <Download size={14} />
                                <span className="text-xs font-medium">Export</span>
                              </button>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setMovingDeckId(deck.id);
                                }}
                                className="flex-1 bg-amber-50 text-amber-700 px-3 py-2 rounded-lg hover:bg-amber-100 transition-all border border-amber-200 flex items-center justify-center gap-1"
                                title="Move to folder"
                              >
                                <span className="text-xs">📁</span>
                                <span className="text-xs font-medium">Move</span>
                              </button>
                            </div>
                            <div className="flex gap-2">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  clearDeckProgress(deck.id);
                                }}
                                className="flex-1 bg-orange-50 text-orange-600 px-3 py-2 rounded-lg hover:bg-orange-100 transition-all border border-orange-200 flex items-center justify-center gap-1"
                                title="Clear progress"
                              >
                                <RotateCcw size={14} />
                                <span className="text-xs font-medium">Clear Progress</span>
                              </button>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setDeleteConfirmation({ deckId: deck.id, deckName: deck.name });
                                }}
                                className="flex-1 bg-red-50 text-red-600 px-3 py-2 rounded-lg hover:bg-red-100 transition-all border border-red-200 flex items-center justify-center gap-1"
                                title="Delete deck"
                              >
                                <Trash2 size={14} />
                                <span className="text-xs font-medium">Delete</span>
                              </button>
                            </div>
                          </div>

                          </React.Fragment>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {visibleDecks.length === 0 && !currentFolderId && decks.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-gray-600 text-lg">No decks yet. Create your first deck to get started!</p>
                  </div>
                )}

                {visibleDecks.length === 0 && currentFolderId && (
                  <div className="text-center py-12">
                    <p className="text-gray-600 text-lg">This folder is empty. Add decks using the "Add Deck" button above.</p>
                  </div>
                )}

                {visibleDecks.length === 0 && !currentFolderId && decks.length > 0 && folders.length > 0 && !q && (
                  <div className="text-center py-8">
                    <p className="text-gray-500">All decks are organized into folders above.</p>
                  </div>
                )}

                {visibleDecks.length === 0 && q && (
                  <div className="text-center py-12">
                    <p className="text-4xl mb-3">🔍</p>
                    <p className="text-gray-600 text-lg">No decks or vocab found matching "{searchQuery.trim()}"</p>
                  </div>
                )}
              </div>
            );
          })()}
        </div>

        {/* Export Modal — shown when deck has 课文 */}
        {exportModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setExportModal(null)}>
            <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-sm w-full" onClick={e => e.stopPropagation()}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-green-50 border border-green-200 flex items-center justify-center flex-shrink-0">
                  <Download size={18} className="text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">Export "{exportModal.deck.name}"</h3>
                  <p className="text-xs text-gray-400 mt-0.5">This deck has an attached 课文</p>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-5">
                Do you want to include the <span className="font-semibold text-orange-600">课文 reading text</span> in the export?
              </p>

              {/* Preview of kewen length */}
              <div className="bg-orange-50 border border-orange-100 rounded-lg px-4 py-2.5 mb-5 text-sm text-orange-800">
                <span className="font-medium">课文:</span>{' '}
                <span className="text-orange-600">{exportModal.deck.kewen.slice(0, 60)}{exportModal.deck.kewen.length > 60 ? '…' : ''}</span>
                <span className="text-orange-400 text-xs ml-1">({exportModal.deck.kewen.length} chars)</span>
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => { exportDeck(exportModal.deck, true); setExportModal(null); }}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-xl font-bold hover:from-green-600 hover:to-green-700 transition flex items-center justify-center gap-2 shadow-md"
                >
                  <Download size={16} />
                  Export with 课文
                </button>
                <button
                  onClick={() => { exportDeck(exportModal.deck, false); setExportModal(null); }}
                  className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition flex items-center justify-center gap-2"
                >
                  <Download size={16} />
                  Export cards only (no 课文)
                </button>
                <button
                  onClick={() => setExportModal(null)}
                  className="w-full text-gray-400 hover:text-gray-600 py-2 text-sm transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Delete Confirmation Modal */}
        {deleteConfirmation && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setDeleteConfirmation(null)}>
            <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md mx-4" onClick={(e) => e.stopPropagation()}>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Delete Deck?</h2>
              <p className="text-gray-600 mb-6">
                Are you sure you want to delete <span className="font-bold">"{deleteConfirmation.deckName}"</span>?
                <br /><br />
                This action cannot be undone.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => setDeleteConfirmation(null)}
                  className="flex-1 bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-700 transition font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setDecks(decks.filter(d => d.id !== deleteConfirmation.deckId));
                    setDeleteConfirmation(null);
                  }}
                  className="flex-1 bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition font-medium"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Browse Built-in Decks Modal */}
        {showBrowseDecks && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowBrowseDecks(false)}>
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[80vh] flex flex-col" onClick={e => e.stopPropagation()}>
              <div className="p-5 border-b border-gray-100 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Browse CHI 108 Decks</h3>
                  <p className="text-sm text-gray-500 mt-0.5">Tap a deck to add it instantly — no download needed</p>
                </div>
                <button onClick={() => setShowBrowseDecks(false)} className="text-gray-400 hover:text-gray-600 transition"><X size={22} /></button>
              </div>
              <div className="overflow-y-auto flex-1 p-3">
                {BUILT_IN_DECKS.map((deck) => {
                  const alreadyAdded = decks.some(d => d.name === deck.name);
                  const isLoading = browseLoading === deck.filename;
                  const isDone = browseLoading === ('done-' + deck.filename);
                  return (
                    <div key={deck.filename} className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-gray-50 transition group">
                      <div className="flex-1 min-w-0 mr-3">
                        <div className="font-semibold text-gray-800 text-sm">{deck.name}</div>
                        <div className="text-xs text-gray-400">{deck.topic}{deck.cards ? ` · ${deck.cards} cards` : ''}</div>
                      </div>
                      <button
                        onClick={() => !alreadyAdded && !isLoading && importBuiltInDeck(deck)}
                        disabled={alreadyAdded || isLoading}
                        className={`flex-shrink-0 text-sm px-4 py-1.5 rounded-lg font-semibold transition-all ${
                          isDone ? 'bg-green-100 text-green-700' :
                          alreadyAdded ? 'bg-gray-100 text-gray-400 cursor-default' :
                          isLoading ? 'bg-rose-100 text-rose-400 cursor-wait' :
                          'bg-rose-500 text-white hover:bg-rose-600 shadow-sm'
                        }`}
                      >
                        {isDone ? '✓ Added' : alreadyAdded ? 'Added' : isLoading ? 'Loading…' : '+ Add'}
                      </button>
                    </div>
                  );
                })}
              </div>
              <div className="p-4 border-t border-gray-100">
                <button onClick={() => setShowBrowseDecks(false)} className="w-full py-2.5 rounded-xl bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition">Done</button>
              </div>
            </div>
          </div>
        )}

        {/* Multi-Import Modal */}
        {/* Sentence session resume modal */}
        {sentenceResumeModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setSentenceResumeModal(null)}>
            <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-sm w-full" onClick={e => e.stopPropagation()}>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-2xl">📝</span>
                <h3 className="text-lg font-bold text-gray-800">Resume Session?</h3>
              </div>
              <p className="text-sm text-gray-500 mb-5">
                You have a saved 课文 sentence session for <strong>{sentenceResumeModal.deck.name}</strong> — sentence {(sentenceResumeModal.session.currentIndex || 0) + 1} of {sentenceResumeModal.session.queue?.length || 0}.
              </p>
              <div className="space-y-2">
                <button
                  onClick={() => resumeSentenceSession(sentenceResumeModal.deck)}
                  className="w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white py-3 rounded-xl font-semibold hover:from-teal-600 hover:to-teal-700 transition-all ring-2 ring-teal-300"
                >
                  ▶ Resume (sentence {(sentenceResumeModal.session.currentIndex || 0) + 1}/{sentenceResumeModal.session.queue?.length || 0})
                </button>
                <button
                  onClick={() => launchFreshSentencePractice(sentenceResumeModal.deck)}
                  className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all"
                >
                  🔄 Start Fresh
                </button>
                <button
                  onClick={() => setSentenceResumeModal(null)}
                  className="w-full bg-white text-gray-400 py-2 rounded-xl font-medium hover:text-gray-600 transition-all"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Trouble Words modal */}
        {troubleModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setTroubleModal(null)}>
            <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-sm w-full" onClick={e => e.stopPropagation()}>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-2xl">🔥</span>
                <h3 className="text-lg font-bold text-gray-800">Trouble Words</h3>
              </div>
              <p className="text-sm text-gray-500 mb-1">
                {troubleModal.deckName ? `From: ${troubleModal.deckName}` : 'Across all your decks'}
              </p>
              <p className="text-xs text-gray-400 mb-4">{troubleModal.cards.length} word{troubleModal.cards.length !== 1 ? 's' : ''} sorted by how recently and how often you've missed them</p>

              {/* Preview top 6 */}
              <div className="bg-orange-50 rounded-xl p-3 mb-5 max-h-36 overflow-y-auto space-y-1">
                {troubleModal.cards.slice(0, 6).map((c, i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <span className="font-semibold text-gray-800">{c.chinese}</span>
                    <span className="text-gray-400 text-xs truncate max-w-[55%] text-right">{c.english}</span>
                  </div>
                ))}
                {troubleModal.cards.length > 6 && (
                  <p className="text-xs text-gray-400 text-center pt-1">+{troubleModal.cards.length - 6} more</p>
                )}
              </div>

              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Practice with:</p>
              <div className="grid grid-cols-2 gap-2 mb-2">
                <button
                  onClick={() => startTroubleStudy(troubleModal.cards, troubleModal.deckId, troubleModal.deckName)}
                  className="bg-gradient-to-r from-red-500 to-red-600 text-white py-3 rounded-xl font-semibold hover:from-red-600 hover:to-red-700 transition-all flex flex-col items-center justify-center gap-1"
                >
                  <Play size={18} />
                  <span className="text-xs">Flashcards</span>
                </button>
                <button
                  onClick={() => startTroubleLearn(troubleModal.cards, troubleModal.deckId, troubleModal.deckName)}
                  className="bg-gradient-to-r from-purple-500 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-purple-700 transition-all flex flex-col items-center justify-center gap-1"
                >
                  <Brain size={18} />
                  <span className="text-xs">Learn</span>
                </button>
                <button
                  onClick={() => startTroubleWritePractice(troubleModal.cards, troubleModal.deckId, troubleModal.deckName)}
                  className="bg-gradient-to-r from-pink-500 to-pink-600 text-white py-3 rounded-xl font-semibold hover:from-pink-600 hover:to-pink-700 transition-all flex flex-col items-center justify-center gap-1"
                >
                  <span className="text-lg">✍️</span>
                  <span className="text-xs">Write Practice</span>
                </button>
                <button
                  onClick={() => startTroubleWriteTest(troubleModal.cards, troubleModal.deckId, troubleModal.deckName)}
                  className="bg-gradient-to-r from-amber-500 to-orange-500 text-white py-3 rounded-xl font-semibold hover:from-amber-600 hover:to-orange-600 transition-all flex flex-col items-center justify-center gap-1"
                >
                  <span className="text-lg">🧪</span>
                  <span className="text-xs">Write Test</span>
                </button>
              </div>
              <button
                onClick={() => setTroubleModal(null)}
                className="w-full bg-gray-100 text-gray-700 py-2.5 rounded-xl font-semibold hover:bg-gray-200 transition-all"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Hidden file input for import (triggered by Import/Export modal) */}
        <input
          id="deck-import-file-input"
          type="file"
          accept=".json"
          onChange={(e) => { importDeck(e); setShowImportExportModal(false); }}
          multiple
          className="hidden"
        />

        {/* Import / Export entry modal */}
        {showImportExportModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowImportExportModal(false)}>
            <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-sm w-full" onClick={e => e.stopPropagation()}>
              <h3 className="text-lg font-bold text-gray-800 mb-1">Import / Export</h3>
              <p className="text-sm text-gray-500 mb-5">Add decks to the app, or save your decks to a file.</p>
              <div className="space-y-3">
                <label
                  htmlFor="deck-import-file-input"
                  className="flex items-center gap-3 w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-5 py-3.5 rounded-xl font-semibold cursor-pointer hover:from-blue-600 hover:to-blue-700 transition-all"
                >
                  <Upload size={18} />
                  Import Decks from File (.json)
                </label>
                <button
                  onClick={() => {
                    setShowImportExportModal(false);
                    const allSelected = {};
                    decks.forEach(d => { allSelected[d.id] = true; });
                    setBulkExportSelected(allSelected);
                    setBulkExportIncludeKewen(true);
                    setShowBulkExportModal(true);
                  }}
                  className="flex items-center gap-3 w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-5 py-3.5 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all"
                >
                  <Download size={18} />
                  Export Decks to File
                </button>
                <button
                  onClick={() => setShowImportExportModal(false)}
                  className="w-full bg-gray-100 text-gray-700 py-2.5 rounded-xl font-semibold hover:bg-gray-200 transition-all"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Bulk Export modal */}
        {showBulkExportModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowBulkExportModal(false)}>
            <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-md w-full" onClick={e => e.stopPropagation()}>
              <h3 className="text-lg font-bold text-gray-800 mb-1">Export Decks</h3>
              <p className="text-sm text-gray-500 mb-4">Select the decks you want to export.</p>

              {/* Select all / none */}
              <div className="flex gap-3 mb-3">
                <button
                  onClick={() => { const all = {}; decks.forEach(d => { all[d.id] = true; }); setBulkExportSelected(all); }}
                  className="text-xs text-blue-600 hover:underline font-medium"
                >Select all</button>
                <span className="text-gray-300">|</span>
                <button
                  onClick={() => setBulkExportSelected({})}
                  className="text-xs text-blue-600 hover:underline font-medium"
                >Deselect all</button>
              </div>

              {/* Deck list */}
              <div className="border border-gray-200 rounded-xl overflow-hidden mb-4 max-h-52 overflow-y-auto">
                {decks.map((deck, i) => (
                  <label
                    key={deck.id}
                    className={`flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-50 transition ${i > 0 ? 'border-t border-gray-100' : ''}`}
                  >
                    <input
                      type="checkbox"
                      checked={!!bulkExportSelected[deck.id]}
                      onChange={e => setBulkExportSelected(prev => ({ ...prev, [deck.id]: e.target.checked }))}
                      className="w-4 h-4 accent-orange-500 flex-shrink-0"
                    />
                    <span className="flex-1 text-sm font-medium text-gray-800">{deck.name}</span>
                    <span className="text-xs text-gray-400 flex-shrink-0">
                      {deck.cards.length} cards{deck.kewen ? ' · 课文' : ''}
                    </span>
                  </label>
                ))}
              </div>

              {/* Include 课文 toggle — only shown if any selected deck has kewen */}
              {decks.some(d => bulkExportSelected[d.id] && d.kewen) && (
                <label className="flex items-center gap-3 mb-5 cursor-pointer select-none">
                  <div
                    onClick={() => setBulkExportIncludeKewen(v => !v)}
                    className={`w-10 h-6 rounded-full flex-shrink-0 transition-colors ${bulkExportIncludeKewen ? 'bg-orange-500' : 'bg-gray-300'}`}
                    style={{position:'relative'}}
                  >
                    <div style={{
                      position:'absolute', top:2, left: bulkExportIncludeKewen ? 18 : 2,
                      width:20, height:20, borderRadius:'50%', background:'white',
                      boxShadow:'0 1px 3px rgba(0,0,0,0.2)', transition:'left 0.15s'
                    }}/>
                  </div>
                  <span className="text-sm text-gray-700">Include <span className="font-semibold text-orange-600">课文</span> reading text in export</span>
                </label>
              )}

              <div className="flex gap-3">
                <button
                  onClick={() => setShowBulkExportModal(false)}
                  className="flex-1 bg-gray-100 text-gray-700 py-2.5 rounded-xl font-semibold hover:bg-gray-200 transition-all"
                >Cancel</button>
                <button
                  onClick={handleBulkExport}
                  disabled={Object.values(bulkExportSelected).filter(Boolean).length === 0}
                  className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-2.5 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed"
                >
                  Export {Object.values(bulkExportSelected).filter(Boolean).length > 0
                    ? `(${Object.values(bulkExportSelected).filter(Boolean).length} deck${Object.values(bulkExportSelected).filter(Boolean).length > 1 ? 's' : ''})`
                    : ''}
                </button>
              </div>
            </div>
          </div>
        )}

        {showImportModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => { setShowImportModal(false); setImportedDecks([]); setImportTargetFolder(null); }}>
            <div className="bg-white rounded-xl shadow-2xl p-6 max-w-md mx-4 w-full" onClick={(e) => e.stopPropagation()}>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Import {importedDecks.length} Decks</h3>
              <p className="text-sm text-gray-500 mb-4">Would you like to import these as separate decks or combine them into one?</p>
              <div className="bg-gray-50 rounded-lg p-3 mb-4 max-h-40 overflow-y-auto">
                {importedDecks.map((d, i) => (
                  <div key={i} className="text-sm text-gray-700 py-1 flex justify-between">
                    <span className="font-medium">{d.name}</span>
                    <span className="text-gray-400">{d.cards?.length || 0} cards</span>
                  </div>
                ))}
              </div>
              {folders.length > 0 && (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Import into folder <span className="text-gray-400 font-normal">(optional)</span></label>
                  <select
                    value={importTargetFolder || ''}
                    onChange={(e) => setImportTargetFolder(e.target.value || null)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm bg-white"
                  >
                    <option value="">📄 Root (no folder)</option>
                    {folders.map(f => (
                      <option key={f.id} value={f.id}>📁 {f.name}</option>
                    ))}
                  </select>
                </div>
              )}
              <div className="space-y-3">
                <button
                  onClick={handleImportSeparate}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all font-semibold"
                >
                  Import as Separate Decks ({importedDecks.length} decks)
                </button>
                <div className="border-t border-gray-200 pt-3">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Or combine into one deck:</label>
                  <input
                    type="text"
                    value={importCombineTitle}
                    onChange={(e) => setImportCombineTitle(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleImportCombine()}
                    placeholder="Enter combined deck title..."
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 mb-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-800"
                  />
                  <button
                    onClick={handleImportCombine}
                    disabled={!importCombineTitle.trim()}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all font-semibold disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed"
                  >
                    Combine into One Deck ({importedDecks.reduce((sum, d) => sum + (d.cards?.length || 0), 0)} cards total)
                  </button>
                </div>
                <button
                  onClick={() => { setShowImportModal(false); setImportedDecks([]); setImportTargetFolder(null); }}
                  className="w-full bg-gray-100 text-gray-700 py-2.5 rounded-lg font-semibold hover:bg-gray-200 transition-all"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 课文 Rich Modal — Read, Listen, Highlight, Edit */}
        {kewenEditDeck && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col">

              {/* Header */}
              <div className="p-5 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {kewenViewMode === 'edit' ? (kewenEditDeck.kewen ? 'Edit' : 'Add') + ' 课文' : '课文'}
                  </h3>
                  <p className="text-sm text-gray-500 mt-0.5">{kewenEditDeck.name}</p>
                </div>
                <div className="flex items-center gap-2">
                  {/* Mode toggle — only shown when kewen exists */}
                  {kewenEditDeck.kewen && (
                    <div className="flex rounded-lg border border-gray-200 overflow-hidden text-xs font-semibold">
                      <button
                        onClick={() => { setKewenViewMode('read'); stopKewen(); }}
                        className={`px-3 py-1.5 transition ${kewenViewMode === 'read' ? 'bg-orange-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                      >📖 Read</button>
                      <button
                        onClick={() => { setKewenViewMode('edit'); stopKewen(); }}
                        className={`px-3 py-1.5 transition ${kewenViewMode === 'edit' ? 'bg-orange-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                      ><Edit2 size={12} className="inline mr-1" />Edit</button>
                    </div>
                  )}
                  <button onClick={() => { setKewenEditDeck(null); setKewenEditText(''); stopKewen(); setKewenViewMode('read'); }} className="text-gray-400 hover:text-gray-600 text-xl ml-1">✕</button>
                </div>
              </div>

              {/* READ MODE */}
              {kewenViewMode === 'read' && kewenEditDeck.kewen && (() => {
                const text = kewenEditDeck.kewen;
                const deckId = kewenEditDeck.id;
                const highlights = kewenHighlights[deckId] || [];

                // Build highlighted char map
                const charHighlighted = new Uint8Array(text.length);
                highlights.forEach(({ start, end }) => {
                  for (let i = start; i < end && i < text.length; i++) charHighlighted[i] = 1;
                });

                // Group into runs
                const runs = [];
                let ri = 0;
                while (ri < text.length) {
                  const h = charHighlighted[ri];
                  let j = ri + 1;
                  while (j < text.length && charHighlighted[j] === h) j++;
                  runs.push({ text: text.slice(ri, j), highlighted: !!h, start: ri });
                  ri = j;
                }

                const addHighlight = (start, end) => {
                  setKewenHighlights(prev => {
                    const existing = prev[deckId] || [];
                    const merged = [...existing, { start, end }]
                      .sort((a, b) => a.start - b.start)
                      .reduce((acc, cur) => {
                        if (acc.length === 0 || cur.start > acc[acc.length - 1].end) acc.push({ ...cur });
                        else acc[acc.length - 1].end = Math.max(acc[acc.length - 1].end, cur.end);
                        return acc;
                      }, []);
                    return { ...prev, [deckId]: merged };
                  });
                };

                const clearHighlights = () => { setKewenHighlights(prev => ({ ...prev, [deckId]: [] })); setKewenPopup(null); };

                // KewenReader: a self-contained component that attaches its own document mouseup listener
                // This avoids React synthetic event issues and IIFE-inside-render problems
                const KewenReader = () => {
                  React.useEffect(() => {
                    const onMouseUp = async () => {
                      // Capture everything synchronously FIRST before any await
                      const sel = window.getSelection();
                      if (!sel || sel.isCollapsed || sel.rangeCount === 0) return;

                      const range = sel.getRangeAt(0);
                      const container = document.getElementById('kewen-reader-' + deckId);
                      if (!container) return;

                      // Check the selection is inside our reader
                      try {
                        if (!container.contains(range.commonAncestorContainer)) return;
                      } catch(e) { return; }

                      const selectedText = sel.toString().replace(/\s/g, '');
                      if (!selectedText) return;

                      // Capture position synchronously
                      let popupX = window.innerWidth / 2, popupY = 200;
                      try {
                        const rects = range.getClientRects();
                        if (rects.length > 0) {
                          const r = rects[rects.length - 1];
                          popupX = r.left + r.width / 2;
                          popupY = r.bottom + 12;
                        }
                      } catch(e) {}

                      // Clamp to viewport
                      popupX = Math.min(Math.max(popupX, 160), window.innerWidth - 160);
                      popupY = Math.min(popupY, window.innerHeight - 220);

                      // Capture character offsets synchronously
                      let startOffset = null, endOffset = null, cumulative = 0;
                      const walk = (node) => {
                        if (startOffset !== null && endOffset !== null) return;
                        if (node.nodeType === 3) { // TEXT_NODE
                          const len = node.textContent.length;
                          if (startOffset === null && node === range.startContainer) startOffset = cumulative + range.startOffset;
                          if (endOffset === null && node === range.endContainer) endOffset = cumulative + range.endOffset;
                          cumulative += len;
                        } else {
                          for (let ci = 0; ci < node.childNodes.length; ci++) walk(node.childNodes[ci]);
                        }
                      };
                      walk(container);

                      // Clear browser selection
                      sel.removeAllRanges();

                      if (startOffset === null || endOffset === null || endOffset <= startOffset) return;

                      // Show popup immediately in loading state
                      setKewenPopup({ text: selectedText, x: popupX, y: popupY, pinyin: null, english: null, loading: true, start: startOffset, end: endOffset, deckId });

                      // Now do async lookups
                      // 1. Try CEDICT (instant local dictionary)
                      try {
                        const dict = await getCedict();
                        if (dict && dict[selectedText]) {
                          const entry = dict[selectedText];
                          if (entry.p && entry.e) {
                            setKewenPopup(prev => prev && prev.text === selectedText ? { ...prev, pinyin: entry.p, english: entry.e, loading: false } : prev);
                            return;
                          }
                        }
                      } catch(e) {}

                      // 2. Puter AI fallback for phrases
                      if (window.puter?.ai?.chat) {
                        try {
                          const resp = await window.puter.ai.chat([
                            { role: 'system', content: 'Chinese dictionary. Respond ONLY with JSON: {"pinyin":"...","english":"..."}. No markdown.' },
                            { role: 'user', content: `Pinyin and definition of: ${selectedText}` }
                          ], { model: 'google/gemini-2.5-flash' });
                          const raw = resp?.message?.content || (typeof resp === 'string' ? resp : '');
                          const m = raw.replace(/```[a-z]*/g,'').match(/\{[^}]+\}/);
                          const parsed = m ? JSON.parse(m[0]) : null;
                          if (parsed?.pinyin && parsed?.english) {
                            setKewenPopup(prev => prev && prev.text === selectedText ? { ...prev, pinyin: parsed.pinyin, english: parsed.english, loading: false } : prev);
                            return;
                          }
                        } catch(e) {}
                      }

                      setKewenPopup(prev => prev && prev.text === selectedText ? { ...prev, pinyin: '—', english: 'Not found', loading: false } : prev);
                    };

                    document.addEventListener('mouseup', onMouseUp);
                    document.addEventListener('touchend', onMouseUp);
                    return () => {
                      document.removeEventListener('mouseup', onMouseUp);
                      document.removeEventListener('touchend', onMouseUp);
                    };
                  }, []);

                  // Render a single run of text — either plain or with per-character ruby pinyin
                  const renderRun = (runText, isHighlighted, runStart) => {
                    const chars = runText.split('');
                    const isHan = (c) => /\p{Script=Han}/u.test(c);
                    const cache = kewenPinyinCacheRef.current;

                    const inner = kewenPinyinOverlay ? (
                      chars.map((ch, ci) => {
                        // Preserve newlines as <br> and spaces as non-breaking space in overlay mode
                        if (ch === '\n') return <br key={ci} />;
                        if (ch === ' ' || ch === '\u3000') return <span key={ci}>{'\u00A0'}</span>;
                        const py = isHan(ch) ? (cache[ch] || '') : '';
                        return py ? (
                          <ruby key={ci} style={{ rubyAlign: 'center' }}>
                            {ch}
                            <rt style={{
                              fontSize: '0.45em',
                              color: isHighlighted ? '#92400e' : '#e11d48',
                              fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
                              fontWeight: 500,
                              letterSpacing: 0,
                              lineHeight: 1,
                              userSelect: 'none',
                              WebkitUserSelect: 'none',
                            }}>{py}</rt>
                          </ruby>
                        ) : (
                          <span key={ci}>{ch}</span>
                        );
                      })
                    ) : runText; // pre-wrap on the container handles newlines/spaces automatically

                    if (isHighlighted) {
                      return (
                        <mark
                          style={{ background: '#fde68a', color: '#78350f', borderRadius: 3, padding: '1px 2px', cursor: 'pointer' }}
                          title="Click to remove"
                          onClick={(e) => {
                            e.stopPropagation();
                            setKewenHighlights(prev => ({
                              ...prev,
                              [deckId]: (prev[deckId] || []).filter(h => h.end <= runStart || h.start >= runStart + runText.length)
                            }));
                            setKewenPopup(null);
                          }}
                        >{inner}</mark>
                      );
                    }
                    return <span>{inner}</span>;
                  };

                  return (
                    <div
                      id={'kewen-reader-' + deckId}
                      style={{
                        fontFamily: 'serif',
                        fontSize: '1.3rem',
                        lineHeight: kewenPinyinOverlay ? 3.2 : 2.6,
                        color: '#1a1a1a',
                        userSelect: 'text',
                        WebkitUserSelect: 'text',
                        MozUserSelect: 'text',
                        cursor: 'text',
                        whiteSpace: 'pre-wrap',
                        overflowWrap: 'break-word',
                        wordBreak: 'break-word',
                        transition: 'line-height 0.2s ease',
                      }}
                    >
                      {runs.map((run, idx) => (
                        <React.Fragment key={idx}>
                          {renderRun(run.text, run.highlighted, run.start)}
                        </React.Fragment>
                      ))}
                    </div>
                  );
                };

                return (
                  <React.Fragment>
                    {/* TTS + Pinyin toolbar */}
                    <div className="px-5 pt-4 pb-2 flex items-center gap-2 flex-shrink-0 border-b border-gray-50 flex-wrap">
                      <button
                        onClick={() => speakKewen(text)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition ${kewenSpeaking ? 'bg-orange-600 text-white' : 'bg-orange-50 text-orange-700 border border-orange-200 hover:bg-orange-100'}`}
                      >
                        {kewenSpeaking ? (
                          <React.Fragment>
                            <span className="flex gap-0.5">{[0,1,2].map(ii => <span key={ii} className="w-1 h-3 bg-white rounded-full" style={{ animation: `chatBounce 0.8s ease-in-out ${ii*0.15}s infinite`, display:'inline-block' }} />)}</span>
                            Stop Reading
                          </React.Fragment>
                        ) : (
                          <React.Fragment><Volume2 size={16} />Read Aloud</React.Fragment>
                        )}
                      </button>

                      {/* Pinyin overlay toggle */}
                      <button
                        onClick={() => toggleKewenPinyin(text)}
                        disabled={kewenPinyinLoading}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition border ${
                          kewenPinyinOverlay
                            ? 'bg-rose-600 text-white border-rose-600'
                            : 'bg-rose-50 text-rose-700 border-rose-200 hover:bg-rose-100'
                        } disabled:opacity-50`}
                        title="Toggle pinyin above each character"
                      >
                        {kewenPinyinLoading ? (
                          <React.Fragment>
                            <span className="flex gap-0.5">{[0,1,2].map(ii => <span key={ii} style={{ width:5, height:5, borderRadius:'50%', background: kewenPinyinOverlay ? '#fff' : '#e11d48', animation:`chatBounce 0.9s ease-in-out ${ii*0.15}s infinite`, display:'inline-block' }} />)}</span>
                            Loading…
                          </React.Fragment>
                        ) : (
                          <React.Fragment>
                            <span style={{ fontFamily:'serif', fontSize:'1em', lineHeight:1 }}>拼</span>
                            {kewenPinyinOverlay ? 'Hide Pinyin' : 'Show Pinyin'}
                          </React.Fragment>
                        )}
                      </button>

                      {highlights.length > 0 && (
                        <button onClick={clearHighlights} className="px-3 py-2 rounded-lg bg-amber-50 text-amber-700 hover:bg-amber-100 border border-amber-200 text-xs font-semibold transition">
                          ✕ Clear highlights
                        </button>
                      )}
                      <span className="text-xs text-gray-400 ml-auto">{text.length} chars · Select any word</span>
                    </div>

                    {/* Scrollable text */}
                    <div className="flex-1 overflow-y-auto p-5" onClick={() => { const s = window.getSelection(); if (!s || s.isCollapsed) setKewenPopup(null); }}>
                      <KewenReader />
                      <style>{`@keyframes chatBounce { 0%,60%,100%{transform:translateY(0);opacity:.4}30%{transform:translateY(-6px);opacity:1} }`}</style>
                    </div>

                    {/* Popup rendered via portal to document.body — escapes all stacking contexts */}
                    {kewenPopup && kewenPopup.deckId === deckId && createPortal(
                      <div
                        style={{ position:'fixed', left: kewenPopup.x, top: kewenPopup.y, transform:'translateX(-50%)', zIndex:999999, minWidth:230, maxWidth:310, pointerEvents:'auto' }}
                        onMouseDown={e => e.stopPropagation()}
                      >
                        <div style={{ background:'#1a1a2e', borderRadius:12, boxShadow:'0 8px 32px rgba(0,0,0,0.5)', border:'1px solid rgba(225,29,72,0.35)', padding:'12px 14px', color:'#e8e8f0' }}>
                          <div style={{ position:'absolute', top:-7, left:'50%', transform:'translateX(-50%)', width:0, height:0, borderLeft:'7px solid transparent', borderRight:'7px solid transparent', borderBottom:'7px solid #1a1a2e' }} />
                          {kewenPopup.loading ? (
                            <div style={{ display:'flex', alignItems:'center', gap:8, padding:'4px 0' }}>
                              <div style={{ display:'flex', gap:3 }}>{[0,1,2].map(ii=><div key={ii} style={{ width:6, height:6, borderRadius:'50%', background:'#e11d48', animation:`chatBounce 1.2s ease-in-out ${ii*0.15}s infinite`, opacity:0.6 }} />)}</div>
                              <span style={{ fontSize:13, color:'#aaa' }}>Looking up {kewenPopup.text}…</span>
                            </div>
                          ) : (
                            <React.Fragment>
                              <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:6 }}>
                                <span style={{ fontSize:22, fontWeight:700, fontFamily:'serif', color:'#fde68a' }}>{kewenPopup.text}</span>
                                <button onClick={() => speakChinese(kewenPopup.text)} style={{ background:'rgba(225,29,72,0.15)', border:'none', borderRadius:6, padding:'4px 7px', cursor:'pointer', color:'#fb7185', marginLeft:8, display:'flex', alignItems:'center' }}>
                                  <Volume2 size={14} />
                                </button>
                              </div>
                              <div style={{ fontSize:13, color:'#fb7185', fontWeight:600, marginBottom:3 }}>{kewenPopup.pinyin}</div>
                              <div style={{ fontSize:13, color:'#c4c4d4', lineHeight:1.5, marginBottom:11 }}>{kewenPopup.english}</div>
                              <div style={{ display:'flex', gap:6 }}>
                                <button
                                  onClick={() => { addHighlight(kewenPopup.start, kewenPopup.end); setKewenPopup(null); }}
                                  style={{ flex:1, background:'rgba(253,230,138,0.15)', border:'1px solid rgba(253,230,138,0.35)', borderRadius:7, padding:'6px 0', fontSize:12, fontWeight:600, color:'#fde68a', cursor:'pointer' }}
                                >🖊 Highlight</button>
                                {kewenPopup.pinyin !== '—' && decks.length > 0 && (() => {
                                  // Exact-match duplicate check: only block if the chinese field matches exactly
                                  const targetDeck = decks.find(d => d.id === deckId);
                                  const isDuplicate = targetDeck?.cards.some(c => c.chinese === kewenPopup.text);
                                  return (
                                    <button
                                      onClick={() => {
                                        if (isDuplicate || kewenPopup.addedToDeck) return;
                                        setDecks(prev => prev.map(d => d.id === deckId ? { ...d, cards: [...d.cards, {
                                          id: Date.now() + Math.random(), chinese: kewenPopup.text, pinyin: kewenPopup.pinyin, english: kewenPopup.english,
                                          known:false, lastReviewed:null, difficulty:0, easeFactor:2.5, interval:0, repetitions:0, masteryScore:0, masteryStatus:'not_started'
                                        }]} : d));
                                        setKewenPopup(prev => prev ? { ...prev, addedToDeck:true } : null);
                                        setTimeout(() => setKewenPopup(null), 1400);
                                      }}
                                      title={isDuplicate ? `"${kewenPopup.text}" is already in this deck` : ''}
                                      style={{
                                        flex:1,
                                        background: kewenPopup.addedToDeck ? 'rgba(52,211,153,0.25)' : isDuplicate ? 'rgba(255,255,255,0.05)' : 'rgba(52,211,153,0.15)',
                                        border: isDuplicate ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(52,211,153,0.35)',
                                        borderRadius:7, padding:'6px 0', fontSize:12, fontWeight:600,
                                        color: kewenPopup.addedToDeck ? '#6ee7b7' : isDuplicate ? '#666' : '#6ee7b7',
                                        cursor: isDuplicate ? 'default' : 'pointer',
                                        opacity: isDuplicate ? 0.7 : 1,
                                      }}
                                    >
                                      {kewenPopup.addedToDeck ? '✓ Added!' : isDuplicate ? '✓ Already in deck' : '+ Add to Deck'}
                                    </button>
                                  );
                                })()}
                                <button onClick={() => setKewenPopup(null)} style={{ background:'rgba(255,255,255,0.07)', border:'1px solid rgba(255,255,255,0.12)', borderRadius:7, padding:'6px 9px', fontSize:12, color:'#888', cursor:'pointer' }}>✕</button>
                              </div>
                            </React.Fragment>
                          )}
                        </div>
                      </div>,
                      document.body
                    )}

                    {/* Footer */}
                    <div className="p-4 border-t border-gray-100 flex justify-between items-center flex-shrink-0">
                      <button onClick={() => { setKewenViewMode('edit'); setKewenEditText(text); stopKewen(); setKewenPopup(null); }} className="flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100 border border-blue-200 text-sm font-semibold transition">
                        <Edit2 size={14} /> Edit 课文
                      </button>
                      <button onClick={() => { setKewenEditDeck(null); setKewenEditText(''); stopKewen(); setKewenViewMode('read'); setKewenPopup(null); }} className="bg-gray-100 text-gray-600 px-5 py-2 rounded-lg hover:bg-gray-200 text-sm font-semibold transition">
                        Close
                      </button>
                    </div>
                  </React.Fragment>
                );
              })()}
              {/* EDIT MODE (or no kewen yet) */}
              {(kewenViewMode === 'edit' || !kewenEditDeck.kewen) && (
                <React.Fragment>
                  <div className="flex-1 overflow-y-auto p-5">
                    <textarea
                      value={kewenEditText}
                      onChange={e => setKewenEditText(e.target.value)}
                      placeholder="在这里粘贴课文 / Paste your reading text here..."
                      className="w-full h-64 p-4 border-2 border-gray-200 rounded-xl text-lg focus:outline-none focus:border-orange-400 resize-none text-gray-800"
                      style={{ fontFamily: 'serif', lineHeight: 1.8, minHeight: '250px' }}
                      autoFocus
                    />
                    {kewenEditText && (
                      <p className="text-xs text-gray-400 mt-2 text-right">{kewenEditText.length} characters</p>
                    )}
                  </div>
                  <div className="p-5 border-t border-gray-100 flex gap-3 flex-shrink-0">
                    <button
                      onClick={() => {
                        addKewenToDeck(kewenEditDeck.id, kewenEditText.trim());
                        if (kewenEditText.trim()) {
                          setKewenEditDeck(prev => ({ ...prev, kewen: kewenEditText.trim() }));
                          setKewenViewMode('read');
                        } else {
                          setKewenEditDeck(null);
                          setKewenEditText('');
                          setKewenViewMode('read');
                        }
                      }}
                      className="flex-1 bg-orange-600 text-white py-3 rounded-xl font-bold hover:bg-orange-700 transition"
                    >
                      {kewenEditText.trim() ? 'Save 课文' : 'Remove 课文'}
                    </button>
                    <button
                      onClick={() => {
                        if (kewenEditDeck.kewen) { setKewenViewMode('read'); setKewenEditText(''); }
                        else { setKewenEditDeck(null); setKewenEditText(''); }
                      }}
                      className="bg-gray-100 text-gray-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
                    >
                      Cancel
                    </button>
                  </div>
                </React.Fragment>
              )}

            </div>
          </div>
        )}

        {/* Handwrite & Recognize Modal */}
        {showHandwriteRecognize && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4" style={{ userSelect: 'none', WebkitUserSelect: 'none' }}>
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg flex flex-col" style={{ maxHeight: '92vh', userSelect: 'none', WebkitUserSelect: 'none' }} onSelectStart={e => e.preventDefault()} onDragStart={e => e.preventDefault()}>
              {/* Header */}
              <div className="p-5 border-b border-gray-100 flex items-center justify-between flex-shrink-0" style={{ userSelect: 'none', WebkitUserSelect: 'none' }}>
                <div>
                  <h3 className="text-xl font-bold text-gray-800" style={{ userSelect: 'none', WebkitUserSelect: 'none' }}>✍️ Recognize a Character</h3>
                  <p className="text-sm text-gray-500 mt-0.5" style={{ userSelect: 'none', WebkitUserSelect: 'none' }}>Draw any Chinese character · AI gives pinyin + meaning</p>
                </div>
                <button onClick={() => { setShowHandwriteRecognize(false); setHwrResult(null); setHwrAddedToDeck(false); setHwrTargetDeckId(''); }} className="text-gray-400 hover:text-gray-600 text-xl" style={{ userSelect: 'none', WebkitUserSelect: 'none' }}>✕</button>
              </div>

              {/* Canvas */}
              <div className="p-4 flex-shrink-0" style={{ userSelect: 'none', WebkitUserSelect: 'none' }}>
                <div
                  className="border-2 border-gray-200 rounded-xl overflow-hidden relative"
                  style={{
                    background: 'white',
                    backgroundImage: 'linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                    touchAction: 'none',
                    userSelect: 'none',
                    WebkitUserSelect: 'none',
                    WebkitTouchCallout: 'none',
                    WebkitTapHighlightColor: 'transparent',
                  }}
                >
                  <div style={{ position:'absolute', inset:0, pointerEvents:'none', zIndex:1 }}>
                    <div style={{ position:'absolute', top:'50%', left:0, right:0, height:1, background:'rgba(229,231,235,0.8)', transform:'translateY(-0.5px)' }} />
                    <div style={{ position:'absolute', left:'50%', top:0, bottom:0, width:1, background:'rgba(229,231,235,0.8)', transform:'translateX(-0.5px)' }} />
                  </div>
                  <canvas
                    ref={hwrCanvasRef}
                    onPointerDown={hwrPointerDown}
                    onPointerMove={hwrPointerMove}
                    onPointerUp={hwrPointerUp}
                    onPointerLeave={hwrPointerUp}
                    onSelectStart={e => e.preventDefault()}
                    onDragStart={e => e.preventDefault()}
                    onContextMenu={e => e.preventDefault()}
                    style={{ width: '100%', height: '280px', display:'block', cursor: hwrEraserOn ? 'cell' : 'crosshair', touchAction:'none', userSelect:'none', WebkitUserSelect:'none', WebkitTouchCallout:'none', WebkitTapHighlightColor:'transparent', position:'relative', zIndex:2 }}
                  />
                </div>
                <div className="flex gap-2 mt-3" style={{ userSelect: 'none', WebkitUserSelect: 'none' }}>
                  <button
                    onClick={() => { hwrDrawCtrl.current.isErasing = false; setHwrEraserOn(false); }}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${!hwrEraserOn ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                    style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
                  >✏️ Pen</button>
                  <button
                    onClick={() => { hwrDrawCtrl.current.isErasing = true; setHwrEraserOn(true); }}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${hwrEraserOn ? 'bg-pink-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                    style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
                  >🧹 Eraser</button>
                  <button
                    onClick={clearHwrCanvas}
                    className="px-4 py-2 rounded-lg text-sm font-semibold bg-gray-100 text-gray-600 hover:bg-gray-200 transition"
                    style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
                  >🗑️ Clear</button>
                  <button
                    onClick={recognizeHwrCanvas}
                    disabled={hwrLoading}
                    className="flex-1 bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:from-teal-600 hover:to-cyan-700 transition disabled:opacity-50 flex items-center justify-center gap-2"
                    style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
                  >
                    {hwrLoading ? (
                      <React.Fragment>
                        <div className="flex gap-1">{[0,1,2].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-white" style={{ animation: `chatBounce 1.2s ease-in-out ${i*0.15}s infinite` }} />)}</div>
                        Recognizing...
                      </React.Fragment>
                    ) : '🔍 Recognize'}
                  </button>
                </div>
              </div>

              {/* Result */}
              <div className="px-4 pb-5 flex-1 overflow-y-auto" style={{ userSelect: 'none', WebkitUserSelect: 'none' }}>
                {hwrLoading && !hwrResult && (
                  <div className="text-center py-6 text-gray-500 text-sm">
                    <div className="flex gap-1 justify-center mb-2">{[0,1,2].map(i => <div key={i} className="w-2 h-2 rounded-full bg-teal-400" style={{ animation: `chatBounce 1.2s ease-in-out ${i*0.15}s infinite` }} />)}</div>
                    AI is reading your handwriting…
                  </div>
                )}
                {hwrResult && hwrResult.chinese && (
                  <div>
                    {/* Result card */}
                    <div className="bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-200 rounded-xl p-4 mb-3">
                      <div className="flex items-start gap-4">
                        <div className="text-6xl font-bold text-teal-800 flex-shrink-0" style={{ fontFamily:'serif', lineHeight:1 }}>{hwrResult.chinese}</div>
                        <div className="flex-1 min-w-0">
                          <div className="text-lg font-semibold text-teal-700 mb-0.5">{hwrResult.pinyin}</div>
                          <div className="text-gray-700 text-base leading-snug">{hwrResult.english}</div>
                        </div>
                        <button
                          onClick={() => speakChinese(hwrResult.chinese)}
                          className="bg-teal-100 text-teal-700 p-2 rounded-lg hover:bg-teal-200 transition flex-shrink-0"
                          title="Hear pronunciation"
                        >
                          <Volume2 size={18} />
                        </button>
                      </div>
                    </div>

                    {/* Add to deck */}
                    {decks.length > 0 ? (
                      <div className="bg-white border border-gray-200 rounded-xl p-3">
                        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Add to a deck</div>
                        <div className="flex gap-2">
                          <select
                            value={hwrTargetDeckId}
                            onChange={e => { setHwrTargetDeckId(e.target.value); setHwrAddedToDeck(false); }}
                            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 bg-white"
                          >
                            <option value="">— choose deck —</option>
                            {decks.map(d => (
                              <option key={d.id} value={d.id}>{d.name} ({d.cards.length} cards)</option>
                            ))}
                          </select>
                          <button
                            disabled={!hwrTargetDeckId || hwrAddedToDeck}
                            onClick={() => {
                              if (!hwrTargetDeckId) return;
                              const newCard = {
                                id: Date.now() + Math.random(),
                                chinese: hwrResult.chinese,
                                pinyin: hwrResult.pinyin,
                                english: hwrResult.english,
                                known: false, lastReviewed: null, difficulty: 0,
                                easeFactor: 2.5, interval: 0, repetitions: 0,
                                masteryScore: 0, masteryStatus: 'not_started',
                              };
                              setDecks(prev => prev.map(d =>
                                d.id === hwrTargetDeckId ? { ...d, cards: [...d.cards, newCard] } : d
                              ));
                              setHwrAddedToDeck(true);
                              setTimeout(() => setHwrAddedToDeck(false), 2500);
                            }}
                            className={`px-4 py-2 rounded-lg text-sm font-bold transition flex items-center gap-1.5 flex-shrink-0 ${
                              hwrAddedToDeck
                                ? 'bg-green-500 text-white'
                                : hwrTargetDeckId
                                  ? 'bg-teal-600 text-white hover:bg-teal-700'
                                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            }`}
                          >
                            {hwrAddedToDeck ? <><Check size={15} /> Added!</> : <><Plus size={15} /> Add</>}
                          </button>
                        </div>
                        {hwrAddedToDeck && (
                          <div className="mt-2 text-xs text-green-600 font-medium">
                            ✓ {hwrResult.chinese} added to "{decks.find(d => d.id === hwrTargetDeckId)?.name}"
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-amber-700 text-sm">
                        No decks yet. <button onClick={() => { setShowHandwriteRecognize(false); setCurrentView('create'); }} className="underline font-semibold">Create a deck</button> first to save this word.
                      </div>
                    )}
                  </div>
                )}
                {hwrResult && hwrResult.error && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-sm">⚠️ {hwrResult.error}</div>
                )}
                {hwrResult && hwrResult.chinese === '' && !hwrResult.error && (
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-amber-700 text-sm">No characters detected. Try writing larger and clearer on the canvas.</div>
                )}
                {!hwrResult && !hwrLoading && (
                  <p className="text-center text-gray-400 text-sm py-4">Draw a character above, then tap Recognize</p>
                )}
              </div>

              <style>{`@keyframes chatBounce { 0%, 60%, 100% { transform: translateY(0); opacity: 0.4; } 30% { transform: translateY(-6px); opacity: 1; } }`}</style>
            </div>
          </div>
        )}

        {/* Floating Chat Button */}
        <ChatFAB />
        <ChatSidebar />
      </div>
    );
  }
  if (currentView === 'create') {
    const toggleCombineDeck = (deckId) => {
      setCombineSelectedDecks(prev => 
        prev.includes(deckId) ? prev.filter(id => id !== deckId) : [...prev, deckId]
      );
    };
    
    const totalCombinedCards = combineSelectedDecks.reduce((sum, deckId) => {
      const deck = decks.find(d => d.id === deckId);
      return sum + (deck ? deck.cards.length : 0);
    }, 0);

    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-yellow-50 p-6">
        <div className="max-w-2xl mx-auto">
          <button
            onClick={() => { setCurrentView('home'); setCombineSelectedDecks([]); setNewDeckName(''); setNewDeckCreated(null); }}
            className="mb-6 text-gray-600 hover:text-gray-800 flex items-center gap-2"
          >
            ← Back to Home
          </button>

          {/* Create Empty Deck */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Create New Deck</h2>

            {/* Post-create prompt — shown after deck is created */}
            {newDeckCreated ? (
              <div>
                <div className="flex items-center gap-3 mb-5 p-4 bg-green-50 border border-green-200 rounded-xl">
                  <div className="text-2xl">✅</div>
                  <div>
                    <div className="font-bold text-green-800">"{newDeckCreated.name}" created!</div>
                    <div className="text-sm text-green-700 mt-0.5">Would you like to add vocabulary now?</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <button
                    onClick={() => {
                      // Go straight to the edit view for this deck
                      setEditingDeck(newDeckCreated);
                      setNewDeckCreated(null);
                      setCurrentView('edit');
                    }}
                    className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-4 rounded-xl hover:from-red-600 hover:to-red-700 transition font-bold text-lg flex items-center justify-center gap-3 shadow-md"
                  >
                    <Plus size={22} />
                    Yes — Add Vocab Now
                  </button>
                  <button
                    onClick={() => { setNewDeckCreated(null); setCurrentView('home'); }}
                    className="w-full bg-gray-100 text-gray-700 py-4 rounded-xl hover:bg-gray-200 transition font-semibold text-base"
                  >
                    Not Now — I'll Add Later
                  </button>
                  {/* Instructions for adding later */}
                  <div className="mt-4 p-4 bg-blue-50 border border-blue-100 rounded-xl text-sm text-blue-800 space-y-2">
                    <div className="font-semibold text-blue-900">How to add vocab later:</div>
                    <ol className="list-decimal list-inside space-y-1.5 leading-relaxed">
                      <li>Go to your deck on the home screen</li>
                      <li>Tap <span className="font-semibold">▼ More options</span> to expand the deck card</li>
                      <li>Tap <span className="inline-flex items-center gap-1 bg-blue-100 px-2 py-0.5 rounded font-semibold"><Edit2 size={11} className="inline" /> Edit</span> to open the deck editor</li>
                      <li>Add cards one-by-one or paste a bulk list</li>
                    </ol>
                    <div className="mt-2 text-xs text-blue-600">💡 Tip: You can also use <strong>AI Generate Deck</strong> below to auto-fill a full deck on any topic!</div>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">Deck Name</label>
                  <input
                    type="text"
                    value={newDeckName}
                    onChange={(e) => setNewDeckName(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && newDeckName.trim() && createDeck()}
                    placeholder="e.g., HSK 2 Vocabulary"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    autoFocus
                  />
                </div>
                <button
                  onClick={createDeck}
                  disabled={!newDeckName.trim()}
                  className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition font-medium disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Create Deck
                </button>
              </div>
            )}
          </div>

          {/* From Text */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Deck from Chinese Text</h2>
            <p className="text-gray-600 mb-6">Paste any Chinese text — an essay, article, or passage — then tap the words you want to turn into flashcards. Definitions are looked up automatically.</p>
            <button
              onClick={() => { setShowTextImport(true); setTextImportSubmitted(false); setTextImportInput(''); setSelectedWords(new Map()); }}
              className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition font-medium flex items-center justify-center gap-2"
            >
              <span className="text-xl">文</span> Paste Chinese Text
            </button>
          </div>

          {/* AI Generate Deck */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">AI Generate Deck</h2>
            <p className="text-gray-600 mb-6">Type a topic and let AI create a complete vocabulary deck for you — with pinyin and definitions included.</p>
            
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Topic</label>
              <input
                type="text"
                value={aiDeckTopic}
                onChange={e => setAiDeckTopic(e.target.value)}
                placeholder="e.g., restaurant ordering, weather, campus life, travel..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-600"
                onKeyDown={e => { if (e.key === 'Enter') generateAiDeck(); }}
              />
            </div>

            <div className="flex gap-3 mb-4">
              <div className="flex-1">
                <label className="block text-gray-700 font-medium mb-2 text-sm">Level</label>
                <select value={aiDeckLevel} onChange={e => setAiDeckLevel(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-600 text-sm">
                  <option value="beginner">Beginner (HSK 1-2)</option>
                  <option value="intermediate">Intermediate (HSK 3-4)</option>
                  <option value="advanced">Advanced (HSK 5-6)</option>
                </select>
              </div>
              <div className="flex-1">
                <label className="block text-gray-700 font-medium mb-2 text-sm">Cards</label>
                <select value={aiDeckCount} onChange={e => setAiDeckCount(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-600 text-sm">
                  <option value={10}>10 cards</option>
                  <option value={20}>20 cards</option>
                  <option value={30}>30 cards</option>
                  <option value={40}>40 cards</option>
                </select>
              </div>
            </div>

            <button
              onClick={generateAiDeck}
              disabled={!aiDeckTopic.trim() || aiDeckLoading}
              className="w-full bg-gradient-to-r from-rose-600 to-pink-600 text-white py-3 rounded-lg hover:from-rose-700 hover:to-pink-700 transition font-medium flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {aiDeckLoading ? (
                <React.Fragment>
                  <div className="flex gap-1">
                    {[0,1,2].map(i => (
                      <div key={i} className="w-1.5 h-1.5 rounded-full bg-white" style={{ animation: `chatBounce 1.2s ease-in-out ${i * 0.15}s infinite` }} />
                    ))}
                  </div>
                  Generating...
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Brain size={20} /> Generate with AI
                </React.Fragment>
              )}
            </button>

            {aiDeckError && (
              <div className="mt-3 p-3 bg-red-50 text-red-700 rounded-lg text-sm">{aiDeckError}</div>
            )}

            {/* Preview generated cards */}
            {aiDeckPreview && (
              <div className="mt-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-gray-800">Preview: {aiDeckPreview.name}</h3>
                  <span className="text-sm text-gray-500">{aiDeckPreview.cards.length} cards</span>
                </div>
                <div className="max-h-64 overflow-y-auto border border-gray-200 rounded-lg mb-4">
                  {aiDeckPreview.cards.map((card, i) => (
                    <div key={i} className={`px-4 py-2.5 flex items-center gap-3 ${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                      <span className="text-lg font-bold text-gray-800 min-w-[60px]">{card.chinese}</span>
                      <span className="text-rose-600 text-sm min-w-[80px]">{card.pinyin}</span>
                      <span className="text-gray-600 text-sm flex-1">{card.english}</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => saveAiDeck()}
                    className="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition font-medium flex items-center justify-center gap-2"
                  >
                    <Check size={18} /> Save Deck
                  </button>
                  <button
                    onClick={generateAiDeck}
                    disabled={aiDeckLoading}
                    className="flex-1 bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-700 transition font-medium flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    🔄 Regenerate
                  </button>
                  <button
                    onClick={() => { setAiDeckPreview(null); setAiDeckError(''); }}
                    className="bg-gray-200 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-300 transition"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>
            )}

            <style>{`
              @keyframes chatBounce {
                0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
                30% { transform: translateY(-6px); opacity: 1; }
              }
            `}</style>
          </div>

          {/* Combine Decks */}
          {decks.length >= 2 && (
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Combine Decks</h2>
              <p className="text-gray-600 mb-6">Select 2 or more decks to merge into a new combined deck. Great for weekly review!</p>
              
              <div className="space-y-3 mb-6">
                {decks.map(deck => {
                  const isSelected = combineSelectedDecks.includes(deck.id);
                  return (
                    <button
                      key={deck.id}
                      onClick={() => toggleCombineDeck(deck.id)}
                      className={`w-full p-4 rounded-lg border-2 transition text-left flex items-center justify-between ${
                        isSelected 
                          ? 'border-blue-600 bg-blue-50' 
                          : 'border-gray-200 hover:border-blue-300 bg-white'
                      }`}
                    >
                      <div>
                        <div className="font-semibold text-gray-800">{deck.name}</div>
                        <div className="text-sm text-gray-500">{deck.cards.length} cards</div>
                      </div>
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition ${
                        isSelected ? 'border-blue-600 bg-blue-600' : 'border-gray-300'
                      }`}>
                        {isSelected && <Check size={14} className="text-white" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              {combineSelectedDecks.length >= 2 && (
                <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-700">
                    Combining {combineSelectedDecks.length} decks ({totalCombinedCards} cards total). Duplicate characters will be removed.
                  </p>
                </div>
              )}

              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Combined Deck Name</label>
                <input
                  type="text"
                  value={newDeckName}
                  onChange={(e) => setNewDeckName(e.target.value)}
                  placeholder="e.g., Week 3 Review"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <button
                onClick={createCombinedDeck}
                disabled={combineSelectedDecks.length < 2 || !newDeckName.trim()}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-medium disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Combine {combineSelectedDecks.length} Deck{combineSelectedDecks.length !== 1 ? 's' : ''} into New Deck
              </button>
            </div>
          )}
        </div>

      {/* Text-to-Deck Modal — inside create view return so showTextImport works */}
      {showTextImport && (() => {
        // Multi-char selection state lives as refs to avoid re-render flicker during drag
        const isCJK = c => /[一-鿿㐀-䶿]/.test(c);

        // Tokenise: each CJK char is its own span; non-CJK runs are plain text
        const tokens = [];
        let i = 0;
        while (i < textImportInput.length) {
          if (isCJK(textImportInput[i])) {
            tokens.push({ type: 'cjk', char: textImportInput[i], idx: i });
            i++;
          } else {
            let run = '';
            while (i < textImportInput.length && !isCJK(textImportInput[i])) { run += textImportInput[i]; i++; }
            tokens.push({ type: 'other', char: run });
          }
        }

        return (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col">

              {/* Header */}
              <div className="p-5 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Deck from Chinese Text</h3>
                  <p className="text-sm text-gray-500 mt-0.5">
                    {textImportSubmitted
                      ? 'Tap a single character, or tap-and-drag across multiple characters to select a word'
                      : 'Paste any Chinese text below'}
                  </p>
                </div>
                <button onClick={() => setShowTextImport(false)} className="text-gray-400 hover:text-gray-600 ml-4 flex-shrink-0"><X size={22}/></button>
              </div>

              {/* Body */}
              <div className="flex-1 overflow-y-auto p-5">
                {!textImportSubmitted ? (
                  <div>
                    <textarea
                      value={textImportInput}
                      onChange={e => setTextImportInput(e.target.value)}
                      placeholder="在这里粘贴中文文章..."
                      className="w-full h-48 p-4 border-2 border-gray-200 rounded-xl text-xl focus:outline-none focus:border-purple-400 resize-none text-gray-800"
                      style={{ fontFamily: 'serif', lineHeight: 1.8 }}
                      autoFocus
                    />
                    <button
                      onClick={() => { if (textImportInput.trim()) setTextImportSubmitted(true); }}
                      disabled={!textImportInput.trim()}
                      className="w-full mt-4 bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
                    >
                      Next: Select Words →
                    </button>
                  </div>
                ) : (
                  <div>
                    {/* Selectable text — supports tap (single char) and drag (multi-char word) */}
                    <div
                      className="p-4 bg-gray-50 rounded-xl mb-5 select-none overflow-y-auto"
                      style={{ fontFamily: 'serif', fontSize: '1.35rem', lineHeight: 2.4, maxHeight: '50vh', touchAction: 'pan-y', WebkitOverflowScrolling: 'touch', whiteSpace: 'pre-wrap', overflowWrap: 'break-word' }}
                      onPointerDown={e => {
                        const el = e.target.closest('[data-cidx]');
                        if (!el) return;
                        e.currentTarget._dragStart = parseInt(el.dataset.cidx);
                        e.currentTarget._dragging = true;
                        e.currentTarget.setPointerCapture(e.pointerId);
                      }}
                      onPointerMove={e => {
                        if (!e.currentTarget._dragging) return;
                        const el = document.elementFromPoint(e.clientX, e.clientY)?.closest('[data-cidx]');
                        if (!el) return;
                        const end = parseInt(el.dataset.cidx);
                        e.currentTarget._dragEnd = end;
                        // Highlight preview: mark chars between dragStart and dragEnd
                        const lo = Math.min(e.currentTarget._dragStart, end);
                        const hi = Math.max(e.currentTarget._dragStart, end);
                        e.currentTarget._dragRange = [lo, hi];
                        // Force re-render by storing in a tiny state trick — we use a data attr on the container
                        e.currentTarget.dataset.range = lo + '-' + hi;
                        // Re-render preview spans manually via class toggle
                        document.querySelectorAll('[data-cidx]').forEach(span => {
                          const ci = parseInt(span.dataset.cidx);
                          if (ci >= lo && ci <= hi) span.classList.add('bg-purple-200');
                          else span.classList.remove('bg-purple-200');
                        });
                      }}
                      onPointerUp={e => {
                        if (!e.currentTarget._dragging) return;
                        e.currentTarget._dragging = false;
                        const start = e.currentTarget._dragStart;
                        const end = e.currentTarget._dragEnd ?? start;
                        const lo = Math.min(start, end ?? start);
                        const hi = Math.max(start, end ?? start);
                        // Clear preview highlights
                        document.querySelectorAll('[data-cidx]').forEach(span => span.classList.remove('bg-purple-200'));
                        // Build word from char indices lo..hi
                        const word = tokens
                          .filter(t => t.type === 'cjk' && t.idx >= lo && t.idx <= hi)
                          .map(t => t.char).join('');
                        if (word) toggleWordSelection(word);
                        e.currentTarget._dragStart = null;
                        e.currentTarget._dragEnd = null;
                      }}
                    >
                      {tokens.map((tok, ti) => {
                        if (tok.type === 'other') {
                          // Render non-CJK runs preserving newlines and spaces
                          return tok.char.split('\n').map((segment, si, arr) => (
                            <React.Fragment key={`${ti}-${si}`}>
                              {segment && <span className="text-gray-400" style={{ whiteSpace: 'pre-wrap' }}>{segment}</span>}
                              {si < arr.length - 1 && <br />}
                            </React.Fragment>
                          ));
                        }
                        const isSelected = selectedWords.has(tok.char);
                        const info = selectedWords.get(tok.char);
                        // Also check if this char is part of a multi-char selected word
                        const inMulti = [...selectedWords.keys()].some(w => w.length > 1 && [...w].includes(tok.char) && tok.idx >= textImportInput.indexOf(w) && tok.idx < textImportInput.indexOf(w) + w.length);
                        const highlight = isSelected || inMulti;
                        return (
                          <span
                            key={ti}
                            data-cidx={tok.idx}
                            className={`rounded px-0.5 transition-colors cursor-pointer ${
                              highlight
                                ? info?.loading ? 'bg-purple-200 text-purple-500 animate-pulse'
                                  : info?.error ? 'bg-red-100 text-red-400'
                                  : 'bg-purple-500 text-white'
                                : 'hover:bg-purple-100 text-gray-800'
                            }`}
                          >
                            {tok.char}
                          </span>
                        );
                      })}
                    </div>

                    {/* AI Auto-Select Button */}
                    <button
                      onClick={aiAutoSelectWords}
                      disabled={aiAutoSelectLoading}
                      className="w-full mb-4 bg-gradient-to-r from-rose-600 to-pink-600 text-white py-3 rounded-xl font-semibold hover:from-rose-700 hover:to-pink-700 transition flex items-center justify-center gap-2 disabled:opacity-60"
                    >
                      {aiAutoSelectLoading ? (
                        <React.Fragment>
                          <div className="flex gap-1">
                            {[0,1,2].map(i => (
                              <div key={i} className="w-1.5 h-1.5 rounded-full bg-white" style={{ animation: `chatBounce 1.2s ease-in-out ${i * 0.15}s infinite` }} />
                            ))}
                          </div>
                          AI is analyzing text...
                        </React.Fragment>
                      ) : (
                        <React.Fragment>
                          <Brain size={18} /> AI Auto-Select Vocabulary
                        </React.Fragment>
                      )}
                    </button>
                    <p className="text-xs text-gray-400 text-center -mt-3 mb-4">
                      {selectedWords.size > 0 ? 'AI will add to your current selection' : 'Let AI pick the best vocabulary from this text'}
                    </p>

                    {/* Selected words list */}
                    {selectedWords.size > 0 && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-700 mb-2 text-sm">Selected ({selectedWords.size})</h4>
                        <div className="space-y-2 max-h-52 overflow-y-auto pr-1">
                          {[...selectedWords.entries()].map(([word, info]) => (
                            <div key={word} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                              <div className="text-2xl font-bold text-gray-800 w-12 flex-shrink-0 leading-tight pt-1">{word}</div>
                              <div className="flex-1 min-w-0">
                                {info.loading ? (
                                  <div className="text-sm text-purple-400 animate-pulse">Looking up…</div>
                                ) : info.error ? (
                                  <div className="space-y-1">
                                    <div className="text-xs text-red-400 mb-1">Not found — enter manually:</div>
                                    <input
                                      placeholder="pīnyīn"
                                      value={info.pinyin}
                                      onChange={e => setSelectedWords(prev => { const n = new Map(prev); n.set(word, {...info, pinyin: e.target.value, error: null}); return n; })}
                                      className="text-sm border border-gray-200 rounded-lg px-2 py-1 w-full focus:outline-none focus:border-purple-300 mb-1"
                                    />
                                    <input
                                      placeholder="English definition"
                                      value={info.english}
                                      onChange={e => setSelectedWords(prev => { const n = new Map(prev); n.set(word, {...info, english: e.target.value, error: null}); return n; })}
                                      className="text-sm border border-gray-200 rounded-lg px-2 py-1 w-full focus:outline-none focus:border-purple-300"
                                    />
                                  </div>
                                ) : (
                                  <div>
                                    <div className="text-sm text-purple-600 font-medium">{info.pinyin}</div>
                                    <div className="text-sm text-gray-500 leading-snug">{info.english}</div>
                                  </div>
                                )}
                              </div>
                              <button onClick={() => toggleWordSelection(word)} className="text-gray-300 hover:text-red-400 transition pt-1 flex-shrink-0"><X size={16}/></button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <button
                      onClick={() => { setTextImportSubmitted(false); setSelectedWords(new Map()); }}
                      className="text-sm text-gray-400 hover:text-gray-600 transition"
                    >← Edit text</button>
                  </div>
                )}
              </div>

              {/* Footer */}
              {textImportSubmitted && selectedWords.size > 0 && (
                <div className="p-5 border-t border-gray-100 flex-shrink-0">
                  <input
                    type="text"
                    value={textImportDeckName}
                    onChange={e => setTextImportDeckName(e.target.value)}
                    placeholder="Deck name…"
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl mb-3 focus:outline-none focus:border-purple-400 text-gray-800"
                  />
                  <button
                    onClick={createDeckFromText}
                    disabled={!textImportDeckName.trim() || [...selectedWords.values()].every(i => i.loading)}
                    className="w-full bg-purple-600 text-white py-3 rounded-xl font-bold hover:bg-purple-700 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    Create Deck ({[...selectedWords.values()].filter(i => !i.loading && !i.error && (i.pinyin || i.english)).length} cards ready)
                  </button>
                </div>
              )}

            </div>
          </div>
        );
      })()}
      </div>
    );
  }

  // EDIT DECK VIEW
  if (currentView === 'edit' && editingDeck) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-yellow-50 p-6">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => {
              setEditingDeck(null);
              setBulkSelectMode(false);
              setBulkSelectedCards(new Set());
              setCurrentView('home');
            }}
            className="mb-6 text-gray-600 hover:text-gray-800 flex items-center gap-2"
          >
            ← Back to Home
          </button>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Edit Deck</h2>
            
            {/* Deck Title */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <label className="block text-gray-700 font-medium mb-2">Deck Name</label>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={editingDeck.name}
                  onChange={(e) => {
                    const newName = e.target.value;
                    setEditingDeck({ ...editingDeck, name: newName });
                    setDecks(decks.map(d => d.id === editingDeck.id ? { ...d, name: newName } : d));
                  }}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-lg"
                />
                <button
                  onClick={() => clearDeckProgress(editingDeck.id)}
                  className="flex items-center gap-2 px-4 py-2 bg-orange-50 text-orange-600 rounded-lg hover:bg-orange-100 transition border border-orange-200 font-medium text-sm whitespace-nowrap"
                  title="Clear progress for all cards in this deck"
                >
                  <RotateCcw size={16} />
                  Clear All Progress
                </button>
              </div>
            </div>
            
            {/* Add New Card Form */}
            <div className="mb-6 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">Add New Card</h3>
              <p className="text-sm text-gray-500 mb-4">Type the Chinese, then click <strong>AI Autofill</strong> to generate pinyin &amp; English automatically.</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Chinese Character</label>
                  <input
                    type="text"
                    value={newCard.chinese}
                    onChange={(e) => setNewCard({ ...newCard, chinese: e.target.value })}
                    placeholder="你好"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Pinyin</label>
                  <input
                    type="text"
                    value={newCard.pinyin}
                    onChange={(e) => setNewCard({ ...newCard, pinyin: e.target.value })}
                    placeholder="nǐ hǎo"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">English Translation</label>
                  <input
                    type="text"
                    value={newCard.english}
                    onChange={(e) => setNewCard({ ...newCard, english: e.target.value })}
                    placeholder="hello"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>
              </div>

              <div className="flex gap-3 mb-6">
                <button
                  onClick={aiAutofillCard}
                  disabled={aiAutofillLoading || !newCard.chinese.trim()}
                  className="flex-1 bg-rose-600 text-white py-2 rounded-lg hover:bg-rose-700 transition font-medium disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {aiAutofillLoading ? <><span style={{display:'inline-block',width:14,height:14,border:'2px solid #fff',borderTopColor:'transparent',borderRadius:'50%',animation:'hw-spin 0.7s linear infinite'}}/> Filling...</> : '✨ AI Autofill'}
                </button>
                <button
                  onClick={() => addCard(editingDeck.id)}
                  className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition font-medium"
                >
                  + Add Card
                </button>
              </div>

              {/* Bulk add section */}
              <div className="border-t border-gray-200 pt-5">
                <h4 className="text-sm font-semibold text-gray-700 mb-1">Bulk Add with AI</h4>
                <p className="text-xs text-gray-500 mb-3">Paste multiple Chinese phrases separated by commas. AI will generate pinyin and English for all of them at once.</p>
                <textarea
                  value={bulkInput}
                  onChange={(e) => setBulkInput(e.target.value)}
                  placeholder="你好，再见，欢迎，谢谢，对不起"
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400 text-sm mb-3 resize-none"
                />
                <button
                  onClick={() => aiBulkAutofill(editingDeck.id)}
                  disabled={bulkAutofillLoading || !bulkInput.trim()}
                  className="w-full bg-gradient-to-r from-rose-500 to-pink-600 text-white py-2 rounded-lg hover:from-rose-600 hover:to-pink-700 transition font-medium disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {bulkAutofillLoading ? <><span style={{display:'inline-block',width:14,height:14,border:'2px solid #fff',borderTopColor:'transparent',borderRadius:'50%',animation:'hw-spin 0.7s linear infinite'}}/> Generating cards...</> : '✨ AI Generate Deck'}
                </button>
              </div>
            </div>

            {/* Cards List */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Cards ({editingDeck.cards.length})
                </h3>
                {editingDeck.cards.length > 0 && (
                  <div className="flex gap-2">
                    {bulkSelectMode ? (
                      <>
                        <button
                          onClick={() => {
                            if (bulkSelectedCards.size === editingDeck.cards.length) {
                              setBulkSelectedCards(new Set());
                            } else {
                              setBulkSelectedCards(new Set(editingDeck.cards.map(c => c.id)));
                            }
                          }}
                          className="px-3 py-1.5 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition text-sm font-medium"
                        >
                          {bulkSelectedCards.size === editingDeck.cards.length ? 'Deselect All' : 'Select All'}
                        </button>
                        <button
                          onClick={() => bulkDeleteCards(editingDeck.id)}
                          disabled={bulkSelectedCards.size === 0}
                          className="px-3 py-1.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition text-sm font-medium disabled:bg-gray-400 disabled:cursor-not-allowed"
                        >
                          Delete Selected ({bulkSelectedCards.size})
                        </button>
                        <button
                          onClick={() => { setBulkSelectMode(false); setBulkSelectedCards(new Set()); }}
                          className="px-3 py-1.5 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition text-sm font-medium"
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => setBulkSelectMode(true)}
                        className="px-3 py-1.5 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition text-sm font-medium"
                      >
                        Bulk Select
                      </button>
                    )}
                  </div>
                )}
              </div>
              
              {editingDeck.cards.length === 0 ? (
                <p className="text-gray-600 text-center py-8">No cards yet. Add your first card above!</p>
              ) : (
                <div className="space-y-3">
                  {editingDeck.cards.map(card => {
                    const isBulkSelected = bulkSelectedCards.has(card.id);
                    return (
                    <div key={card.id} className={`p-4 rounded-lg transition ${bulkSelectMode && isBulkSelected ? 'bg-red-50 border-2 border-red-300' : 'bg-gray-50 hover:bg-gray-100'}`}>
                      {editingCardId === card.id && !bulkSelectMode ? (
                        /* Editing mode */
                        <div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
                            <input
                              type="text"
                              value={editCardValues.chinese}
                              onChange={(e) => setEditCardValues({ ...editCardValues, chinese: e.target.value })}
                              className="px-3 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg font-bold"
                              placeholder="Chinese"
                            />
                            <input
                              type="text"
                              value={editCardValues.pinyin}
                              onChange={(e) => setEditCardValues({ ...editCardValues, pinyin: e.target.value })}
                              className="px-3 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="Pinyin"
                            />
                            <input
                              type="text"
                              value={editCardValues.english}
                              onChange={(e) => setEditCardValues({ ...editCardValues, english: e.target.value })}
                              className="px-3 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="English"
                            />
                          </div>
                          <div className="flex gap-2 justify-end">
                            <button
                              onClick={() => setEditingCardId(null)}
                              className="px-4 py-1.5 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition text-sm"
                            >
                              Cancel
                            </button>
                            <button
                              onClick={() => saveEditCard(editingDeck.id, card.id)}
                              className="px-4 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm"
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      ) : (
                        /* Display mode */
                        <div className="flex items-center justify-between">
                          {bulkSelectMode && (
                            <button
                              onClick={() => {
                                const newSet = new Set(bulkSelectedCards);
                                if (isBulkSelected) { newSet.delete(card.id); } else { newSet.add(card.id); }
                                setBulkSelectedCards(newSet);
                              }}
                              className={`w-6 h-6 rounded border-2 flex items-center justify-center mr-3 flex-shrink-0 transition ${
                                isBulkSelected ? 'border-red-500 bg-red-500' : 'border-gray-300 hover:border-red-400'
                              }`}
                            >
                              {isBulkSelected && <Check size={14} className="text-white" />}
                            </button>
                          )}
                          <div className="flex-1 grid grid-cols-3 gap-4">
                            <div>
                              <span className="text-2xl font-bold text-gray-800">{card.chinese}</span>
                            </div>
                            <div>
                              <span className="text-gray-700">{card.pinyin}</span>
                            </div>
                            <div>
                              <span className="text-gray-600">{card.english}</span>
                            </div>
                          </div>
                          
                          {!bulkSelectMode && (
                            <div className="flex items-center gap-2">
                              {/* Card mastery status indicator */}
                              {card.masteryStatus === 'mastered' ? (
                                <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700 font-medium whitespace-nowrap">Mastered</span>
                              ) : card.masteryStatus === 'learning' || (card.lastReviewed && !card.known) ? (
                                <span className="text-xs px-2 py-1 rounded-full bg-orange-100 text-orange-700 font-medium whitespace-nowrap">Learning</span>
                              ) : card.known ? (
                                <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700 font-medium whitespace-nowrap">Known</span>
                              ) : null}
                              <button
                                onClick={() => speakChinese(card.chinese)}
                                className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                                title="Pronounce"
                              >
                                <Volume2 size={16} />
                              </button>
                              <button
                                onClick={() => {
                                  setEditingCardId(card.id);
                                  setEditCardValues({ chinese: card.chinese, pinyin: card.pinyin, english: card.english });
                                }}
                                className="p-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
                                title="Edit card"
                              >
                                <Edit2 size={16} />
                              </button>
                              {(card.lastReviewed || card.known || card.masteryStatus === 'learning' || card.masteryStatus === 'mastered') && (
                                <button
                                  onClick={() => clearCardProgress(editingDeck.id, card.id)}
                                  className="p-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
                                  title="Clear progress for this card"
                                >
                                  <RotateCcw size={16} />
                                </button>
                              )}
                              <button
                                onClick={() => deleteCard(editingDeck.id, card.id)}
                                className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                                title="Delete card"
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Floating Chat Button */}
        <ChatFAB />
        <ChatSidebar />
      </div>
    );
  }

  // STUDY VIEW
  if (currentView === 'study' && selectedDeck) {
    const currentCard = shuffledCards[currentCardIndex];

    if (!currentCard) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-yellow-50 p-6 flex items-center justify-center">
          <div className="text-center">
            <p className="text-xl text-gray-600 mb-4">No cards in this deck yet!</p>
            <button
              onClick={() => setCurrentView('home')}
              className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
            >
              Back to Home
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-yellow-50 p-6">
        <style>{`
          .flip-card {
            perspective: 1000px;
          }
          
          .flip-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            transition: transform 0.6s;
            transform-style: preserve-3d;
          }
          
          .flip-card-inner.flipped {
            transform: rotateY(180deg);
          }
          
          .flip-card-front, .flip-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
          }
          
          .flip-card-back {
            transform: rotateY(180deg);
          }

          .swipe-left {
            animation: swipeLeft 0.3s ease-out;
          }

          .swipe-right {
            animation: swipeRight 0.3s ease-out;
          }

          @keyframes swipeLeft {
            0% { transform: translateX(0) rotate(0deg); opacity: 1; }
            100% { transform: translateX(-100px) rotate(-10deg); opacity: 0; }
          }

          @keyframes swipeRight {
            0% { transform: translateX(0) rotate(0deg); opacity: 1; }
            100% { transform: translateX(100px) rotate(10deg); opacity: 0; }
          }
        `}</style>

        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => setCurrentView('home')}
              className="text-gray-600 hover:text-gray-800 flex items-center gap-2"
            >
              ← Exit Study Mode
            </button>
            <div className="flex items-center gap-4">
              <button
                onClick={shuffleCards}
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition flex items-center gap-2"
              >
                🔀 Shuffle
              </button>
              <div className="text-gray-600">
                Card {currentCardIndex + 1} of {shuffledCards.length}
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-red-600 h-2 rounded-full transition-all"
                style={{ width: `${((currentCardIndex + 1) / shuffledCards.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Swipe Instructions */}
          <div className="text-center mb-4">
            <p className="text-gray-600">
              Tap to flip • Swipe right if you know it • Swipe left if you're still learning
            </p>
          </div>

          {/* Flashcard with 3D Flip */}
          <div className="mb-8" style={{ minHeight: '500px' }}>
            <div
              ref={cardRef}
              className={`flip-card ${swipeDirection === 'left' ? 'swipe-left' : ''} ${swipeDirection === 'right' ? 'swipe-right' : ''}`}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              style={{ height: '500px', width: '100%' }}
            >
              <div
                key={currentCardIndex}
                onClick={() => setIsFlipped(!isFlipped)}
                className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}
                style={{ cursor: 'pointer', height: '100%' }}
              >
                {/* Front: Chinese Character */}
                <div className="flip-card-front bg-white rounded-2xl shadow-2xl p-12 flex items-center justify-center" style={{ height: '100%' }}>
                  <div className="text-center w-full">
                    <div className="text-8xl font-bold text-gray-800 mb-4">
                      {currentCard.chinese}
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        speakChinese(currentCard.chinese);
                      }}
                      className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition flex items-center gap-2 mx-auto"
                    >
                      <Volume2 size={20} />
                      Pronounce
                    </button>
                    <p className="text-gray-500 mt-8">Tap to flip</p>
                  </div>
                </div>

                {/* Back: Pinyin + English */}
                <div className="flip-card-back bg-white rounded-2xl shadow-2xl p-12 flex items-center justify-center" style={{ height: '100%' }}>
                  <div className="text-center w-full">
                    <div className="text-4xl text-red-600 font-semibold mb-4">
                      {currentCard.pinyin}
                    </div>
                    <div className="text-3xl text-gray-700">
                      {currentCard.english}
                    </div>
                    <p className="text-gray-500 mt-8">Tap to flip back</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Know/Don't Know Buttons (only show when flipped) */}
          {isFlipped && !swipeDirection && (
            <div className="flex gap-4 mb-8 justify-center">
              <button
                onClick={() => handleSwipe('left')}
                className="flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition text-lg font-medium"
              >
                <X size={24} />
                Still Learning
              </button>
              <button
                onClick={() => handleSwipe('right')}
                className="flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition text-lg font-medium"
              >
                <Check size={24} />
                I Know This
              </button>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <button
              onClick={previousCard}
              disabled={swipeHistory.length === 0}
              className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2"
            >
              ↩ Undo
            </button>
            <button
              onClick={nextCard}
              disabled={currentCardIndex === shuffledCards.length - 1}
              className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Next →
            </button>
          </div>
        </div>

        {/* AI Example Sentences */}
        <div className="max-w-2xl mx-auto">
          <ExamplePanel card={currentCard} />
        </div>

        {/* Floating Chat Button */}
        <ChatFAB />
        <ChatSidebar />
      </div>
    );
  }

  // STATS VIEW
  if (currentView === 'stats') {
    const totalCards = decks.reduce((sum, deck) => sum + deck.cards.length, 0);
    const masteredCards = decks.reduce((sum, deck) => sum + deck.cards.filter(c => (c.masteryStatus === 'mastered') || (c.known && !c.masteryStatus)).length, 0);
    const learningCards = decks.reduce((sum, deck) => sum + deck.cards.filter(c => c.masteryStatus === 'learning' || (!c.masteryStatus && c.lastReviewed && !c.known)).length, 0);
    const notStartedCards = totalCards - masteredCards - learningCards;
    const studiedToday = decks.some(deck => 
      deck.cards.some(card => {
        if (!card.lastReviewed) return false;
        const today = new Date().toDateString();
        const reviewDate = new Date(card.lastReviewed).toDateString();
        return today === reviewDate;
      })
    );

    // Build study dates set from both studyStreak.studyDates AND card lastReviewed timestamps
    const allStudyDatesSet = new Set(studyStreak.studyDates || []);
    decks.forEach(deck => {
      deck.cards.forEach(card => {
        if (card.lastReviewed) {
          const d = new Date(card.lastReviewed).toISOString().split('T')[0];
          allStudyDatesSet.add(d);
        }
      });
    });
    
    // Count cards reviewed per day
    const cardsPerDay = {};
    decks.forEach(deck => {
      deck.cards.forEach(card => {
        if (card.lastReviewed) {
          const d = new Date(card.lastReviewed).toISOString().split('T')[0];
          cardsPerDay[d] = (cardsPerDay[d] || 0) + 1;
        }
      });
    });

    // Generate calendar grid for the last 16 weeks (112 days)
    const today = new Date();
    const calendarWeeks = 52;
    const totalDays = calendarWeeks * 7;
    
    // Start from the Monday of (calendarWeeks) weeks ago
    const endDay = new Date(today);
    const startDay = new Date(today);
    startDay.setDate(startDay.getDate() - totalDays + 1);
    // Align to Monday
    while (startDay.getDay() !== 1) {
      startDay.setDate(startDay.getDate() - 1);
    }
    
    const weeks = [];
    const current = new Date(startDay);
    let week = [];
    while (current <= endDay || week.length > 0) {
      const dateStr = current.toISOString().split('T')[0];
      const isStudied = allStudyDatesSet.has(dateStr);
      const cardCount = cardsPerDay[dateStr] || 0;
      const isFuture = current > today;
      const isToday = current.toDateString() === today.toDateString();
      
      week.push({ date: dateStr, isStudied, cardCount, isFuture, isToday, dayOfWeek: current.getDay() });
      current.setDate(current.getDate() + 1);
      
      if (week.length === 7) {
        weeks.push(week);
        week = [];
        if (current > endDay) break;
      }
    }
    if (week.length > 0) weeks.push(week);

    // Get activity level for heatmap color
    const getHeatColor = (count, isStudied, isFuture) => {
      if (isFuture) return 'bg-gray-50';
      if (!isStudied && count === 0) return 'bg-gray-100';
      if (count <= 5) return 'bg-green-200';
      if (count <= 15) return 'bg-green-300';
      if (count <= 30) return 'bg-green-400';
      return 'bg-green-600';
    };

    // Count unique Chinese characters across all decks
    const uniqueCharsSet = new Set();
    decks.forEach(deck => {
      deck.cards.forEach(card => {
        if (card.chinese) {
          for (const ch of card.chinese) {
            // Only count actual CJK characters (exclude punctuation, spaces, etc.)
            if (ch.match(/[\u4e00-\u9fff\u3400-\u4dbf]/)) {
              uniqueCharsSet.add(ch);
            }
          }
        }
      });
    });
    const uniqueCharCount = uniqueCharsSet.size;

    const totalStudyDays = allStudyDatesSet.size;
    const daysThisMonth = [...allStudyDatesSet].filter(d => {
      const date = new Date(d);
      return date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
    }).length;
    
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 p-4 sm:p-6">
        <div className="max-w-5xl mx-auto">
          <button
            onClick={() => setCurrentView('home')}
            className="mb-6 text-gray-600 hover:text-gray-800 flex items-center gap-2"
          >
            ← Back to Home
          </button>

          {/* Streak Banner */}
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl shadow-xl p-6 sm:p-8 mb-6 text-white">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <div className="text-5xl sm:text-6xl font-black mb-1">
                  🔥 {studyStreak.currentStreak}
                </div>
                <div className="text-lg font-medium text-orange-100">
                  {studyStreak.currentStreak === 1 ? 'day streak' : 'day streak'}
                </div>
                <div className="text-sm text-orange-200 mt-1">
                  {studiedToday ? "You've studied today! Keep it going!" : "Study today to keep your streak alive!"}
                </div>
              </div>
              <div className="flex gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold">{studyStreak.longestStreak}</div>
                  <div className="text-xs text-orange-200">Best Streak</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">{totalStudyDays}</div>
                  <div className="text-xs text-orange-200">Total Days</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">{daysThisMonth}</div>
                  <div className="text-xs text-orange-200">This Month</div>
                </div>
              </div>
            </div>
          </div>

          {/* Study Calendar Heatmap */}
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Study Activity</h3>
            
            <div style={{ overflowX: 'auto' }}>
              <div>
                {/* Month labels */}
                <div style={{ marginLeft: '30px', position: 'relative', height: '18px', marginBottom: '4px' }}>
                  {(() => {
                    const labels = [];
                    let lastMonth = -1;
                    let lastLabelX = -50;
                    const colWidth = 16;
                    weeks.forEach((week, i) => {
                      const firstDay = week[0];
                      const month = new Date(firstDay.date).getMonth();
                      const xPos = i * colWidth;
                      if (month !== lastMonth && xPos - lastLabelX >= 36) {
                        labels.push(
                          <span key={i} className="text-xs text-gray-500" style={{ position: 'absolute', left: `${xPos}px` }}>
                            {monthNames[month]}
                          </span>
                        );
                        lastLabelX = xPos;
                        lastMonth = month;
                      } else if (month !== lastMonth) {
                        lastMonth = month;
                      }
                    });
                    return labels;
                  })()}
                </div>
                
                {/* Day labels + grid */}
                <div className="flex gap-0" style={{ position: 'relative', paddingTop: '44px', marginTop: '-44px' }} onMouseLeave={() => setHoveredDay(null)}>
                  {/* Day of week labels */}
                  <div className="flex flex-col gap-0.5 mr-1 justify-end" style={{ width: '28px', paddingTop: '44px' }}>
                    {['', 'M', '', 'W', '', 'F', ''].map((label, i) => (
                      <div key={i} className="text-xs text-gray-400 flex items-center justify-end pr-1" style={{ height: '14px' }}>{label}</div>
                    ))}
                  </div>
                  
                  {/* Heatmap grid */}
                  <div className="flex gap-0.5" style={{ paddingTop: '44px' }}>
                    {weeks.map((week, wi) => (
                      <div key={wi} className="flex flex-col gap-0.5">
                        {week.map((day, di) => (
                          <div
                            key={di}
                            style={{ width: '14px', height: '14px' }}
                            className={`rounded-sm cursor-pointer ${getHeatColor(day.cardCount, day.isStudied, day.isFuture)} ${day.isToday ? 'ring-2 ring-blue-500' : ''} hover:ring-1 hover:ring-gray-400`}
                            onMouseEnter={(e) => {
                              const rect = e.target.getBoundingClientRect();
                              const container = e.target.closest('.flex.gap-0');
                              const parentRect = container.getBoundingClientRect();
                              const relX = rect.left - parentRect.left + rect.width / 2;
                              const relY = rect.top - parentRect.top;
                              const showBelow = di <= 1;
                              setHoveredDay({
                                ...day,
                                x: relX,
                                y: showBelow ? relY + rect.height + 6 : relY - 4,
                                showBelow
                              });
                            }}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                  
                  {/* Custom tooltip */}
                  {hoveredDay && (
                    <div 
                      className="absolute bg-gray-800 text-white text-xs rounded-md px-3 py-1.5 pointer-events-none shadow-lg"
                      style={{
                        left: `${Math.max(80, hoveredDay.x)}px`,
                        top: `${hoveredDay.y}px`,
                        transform: hoveredDay.showBelow ? 'translate(-50%, 0%)' : 'translate(-50%, -100%)',
                        whiteSpace: 'nowrap',
                        zIndex: 50
                      }}
                    >
                      <span className="font-semibold">
                        {new Date(hoveredDay.date + 'T12:00:00').toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                      <br />
                      {hoveredDay.isFuture 
                        ? 'Future' 
                        : hoveredDay.cardCount > 0 
                          ? `${hoveredDay.cardCount} card${hoveredDay.cardCount !== 1 ? 's' : ''} reviewed`
                          : hoveredDay.isStudied 
                            ? 'Studied'
                            : 'No activity'}
                      {hoveredDay.showBelow ? (
                        <div className="absolute left-1/2 bottom-full -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-800" />
                      ) : (
                        <div className="absolute left-1/2 top-full -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800" />
                      )}
                    </div>
                  )}
                </div>
                
                {/* Legend */}
                <div className="flex items-center gap-2 mt-3" style={{ marginLeft: '30px' }}>
                  <span className="text-xs text-gray-500">Less</span>
                  <div className="w-3 h-3 rounded-sm bg-gray-100" />
                  <div className="w-3 h-3 rounded-sm bg-green-200" />
                  <div className="w-3 h-3 rounded-sm bg-green-300" />
                  <div className="w-3 h-3 rounded-sm bg-green-400" />
                  <div className="w-3 h-3 rounded-sm bg-green-600" />
                  <span className="text-xs text-gray-500">More</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mastery Overview */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Overall Mastery</h3>
            
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 bg-green-50 rounded-xl">
                <div className="text-3xl font-bold text-green-600">{masteredCards}</div>
                <div className="text-sm text-gray-600 font-medium">Mastered</div>
                <div className="text-xs text-gray-400">{totalCards > 0 ? Math.round((masteredCards / totalCards) * 100) : 0}%</div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-xl">
                <div className="text-3xl font-bold text-orange-500">{learningCards}</div>
                <div className="text-sm text-gray-600 font-medium">Learning</div>
                <div className="text-xs text-gray-400">{totalCards > 0 ? Math.round((learningCards / totalCards) * 100) : 0}%</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <div className="text-3xl font-bold text-gray-400">{notStartedCards}</div>
                <div className="text-sm text-gray-600 font-medium">Not Started</div>
                <div className="text-xs text-gray-400">{totalCards > 0 ? Math.round((notStartedCards / totalCards) * 100) : 0}%</div>
              </div>
            </div>

            {/* Overall progress bar */}
            <div className="w-full bg-gray-100 rounded-full h-4 overflow-hidden flex mb-2">
              {masteredCards > 0 && (
                <div className="bg-green-500 h-4 transition-all" style={{ width: `${(masteredCards / totalCards) * 100}%` }} />
              )}
              {learningCards > 0 && (
                <div className="bg-orange-400 h-4 transition-all" style={{ width: `${(learningCards / totalCards) * 100}%` }} />
              )}
            </div>
            <p className="text-sm text-gray-500 text-center">{totalCards} total cards across {decks.length} deck{decks.length !== 1 ? 's' : ''}</p>
          </div>

          {/* Unique Characters */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Unique Characters</h3>
            <div className="text-center">
              <div className="text-5xl font-black text-red-600 mb-2">{uniqueCharCount}</div>
              <p className="text-sm text-gray-500">unique Chinese characters across all decks</p>
              <p className="text-xs text-gray-400 mt-1">(deduplicated across {totalCards} cards in {decks.length} deck{decks.length !== 1 ? 's' : ''})</p>
            </div>
          </div>

          {/* Deck Stats */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Deck Breakdown</h3>
            <div className="space-y-4">
              {decks.map(deck => {
                const deckTotal = deck.cards.length;
                const deckMastered = deck.cards.filter(c => (c.masteryStatus === 'mastered') || (c.known && !c.masteryStatus)).length;
                const deckLearning = deck.cards.filter(c => c.masteryStatus === 'learning' || (!c.masteryStatus && c.lastReviewed && !c.known)).length;
                const deckMasteredPct = deckTotal > 0 ? (deckMastered / deckTotal) * 100 : 0;
                const deckLearningPct = deckTotal > 0 ? (deckLearning / deckTotal) * 100 : 0;

                const needsReview = deck.cards.filter(card => {
                  if (!card.nextReview) return false;
                  return Date.now() >= card.nextReview;
                }).length;

                return (
                  <div key={deck.id} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold text-gray-800">{deck.name}</h4>
                      <div className="flex gap-3 text-sm">
                        <span className="text-green-600">{deckMastered} mastered</span>
                        <span className="text-orange-500">{deckLearning} learning</span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2 flex overflow-hidden">
                      {deckMasteredPct > 0 && (
                        <div className="bg-green-500 h-2 transition-all" style={{ width: `${deckMasteredPct}%` }} />
                      )}
                      {deckLearningPct > 0 && (
                        <div className="bg-orange-400 h-2 transition-all" style={{ width: `${deckLearningPct}%` }} />
                      )}
                    </div>
                    {needsReview > 0 && (
                      <div className="text-sm text-orange-600">
                        {needsReview} card{needsReview > 1 ? 's' : ''} need{needsReview === 1 ? 's' : ''} review
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // LEARN MODE VIEW
  if (currentView === 'learn' && selectedDeck) {
    // Show round completion screen
    if (roundComplete) {
      const totalCards = allLearnCards.length;
      const cardsCompleted = currentRound * 10;
      const hasMoreCards = cardsCompleted < totalCards;
      
      return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 p-6 flex items-center justify-center">
          <div className="bg-white rounded-2xl shadow-2xl p-12 max-w-2xl mx-auto text-center">
            <div className="text-6xl mb-6">🎉</div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Round {currentRound} Complete!</h2>
            <p className="text-xl text-gray-600 mb-8">
              Great job! You've mastered {Math.min(10, learnCards.length)} cards.
            </p>
            
            {hasMoreCards && (
              <div className="mb-8">
                <p className="text-lg text-gray-700 mb-2">
                  Progress: {cardsCompleted} / {totalCards} cards completed
                </p>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-purple-600 h-3 rounded-full transition-all"
                    style={{ width: `${(cardsCompleted / totalCards) * 100}%` }}
                  />
                </div>
              </div>
            )}
            
            <div className="space-y-4">
              {hasMoreCards ? (
                <>
                  <button
                    onClick={startNextRound}
                    className="w-full bg-purple-600 text-white px-8 py-4 rounded-lg hover:bg-purple-700 transition text-lg font-semibold"
                  >
                    Continue to Next 10 Cards →
                  </button>
                  <button
                    onClick={() => setCurrentView('home')}
                    className="w-full bg-gray-600 text-white px-8 py-4 rounded-lg hover:bg-gray-700 transition text-lg"
                  >
                    Back to Home (progress saved)
                  </button>
                  <button
                    onClick={() => {
                      setLearnProgress(prev => {
                        const updated = { ...prev };
                        delete updated[selectedDeck.id];
                        return updated;
                      });
                      startLearnMode(selectedDeck);
                    }}
                    className="w-full text-gray-500 hover:text-gray-700 transition text-sm py-2"
                  >
                    Start Over from Round 1
                  </button>
                </>
              ) : (
                <>
                  <div className="text-2xl mb-4">✅</div>
                  <p className="text-xl text-green-600 font-semibold mb-6">
                    Congratulations! You've completed all {totalCards} cards!
                  </p>
                  <button
                    onClick={() => setCurrentView('home')}
                    className="w-full bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition text-lg font-semibold"
                  >
                    Back to Home
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      );
    }
    
    // Show regular learn mode if we have cards
    if (learnCards.length > 0) {
    const currentCard = learnCards[currentLearnIndex];

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 p-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => setCurrentView('home')}
              className="text-gray-600 hover:text-gray-800 flex items-center gap-2"
            >
              ← Exit Learn Mode
            </button>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-purple-600">
                <Brain size={20} />
                <span className="font-medium">
                  {learnMode === 'multiple-choice' ? 'Multiple Choice' : 
                   learnMode === 'fill-blank' ? 'Fill in the Blank' : 'Written Answer'}
                </span>
              </div>
              <div className="text-gray-600">
                Round {currentRound}{learnMode === 'multiple-choice' ? 'a' : 'b'} • Card {currentLearnIndex + 1} / {learnCards.length}
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-purple-600 h-2 rounded-full transition-all"
                style={{ width: `${((currentLearnIndex + 1) / learnCards.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
            {/* Chinese Character */}
            <div className="text-center mb-8">
              <div className="text-7xl font-bold text-gray-800 mb-4">
                {currentCard.chinese}
              </div>
              <button
                onClick={() => speakChinese(currentCard.chinese)}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition flex items-center gap-2 mx-auto"
              >
                <Volume2 size={20} />
                Listen
              </button>
            </div>

            {/* Question based on mode */}
            {learnMode === 'multiple-choice' && !showAnswer && (
              <div>
                <p className="text-xl text-gray-700 mb-6 text-center">Select the correct meaning:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {multipleChoiceOptions.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedOption(option)}
                      className={`p-4 rounded-lg border-2 transition text-lg text-left flex items-center gap-3 ${
                        selectedOption === option
                          ? 'border-purple-600 bg-purple-50'
                          : 'border-gray-300 hover:border-purple-400'
                      }`}
                    >
                      <span className={`inline-flex items-center justify-center w-7 h-7 rounded-md text-sm font-bold flex-shrink-0 ${
                        selectedOption === option
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-200 text-gray-600'
                      }`}>{index + 1}</span>
                      {option}
                    </button>
                  ))}
                </div>
                <button
                  ref={(el) => { if (el && selectedOption) setTimeout(() => el.focus(), 50); }}
                  onKeyDown={(e) => { if (e.key === 'Enter' && selectedOption) { e.preventDefault(); checkAnswer(); } }}
                  onClick={checkAnswer}
                  disabled={!selectedOption}
                  className="w-full mt-6 bg-purple-600 text-white py-4 rounded-lg hover:bg-purple-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed text-lg font-medium"
                >
                  Check Answer (or press Enter)
                </button>
              </div>
            )}

            {(learnMode === 'fill-blank' || learnMode === 'written') && !showAnswer && (
              <div>
                <p className="text-xl text-gray-700 mb-6 text-center">
                  Type the pinyin pronunciation:
                </p>
                <input
                  type="text"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && userAnswer.trim()) {
                      checkAnswer();
                    }
                  }}
                  placeholder="e.g., nǐ hǎo or ni3 ha3o"
                  className="w-full px-6 py-4 text-xl border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 mb-4"
                  autoFocus
                />
                <p className="text-sm text-gray-500 mb-6 text-center">
                  Tip: Type with tone marks (nǐ hǎo) or numbers (ni3 ha3o)
                </p>
                <button
                  onClick={checkAnswer}
                  disabled={!userAnswer.trim()}
                  className="w-full bg-purple-600 text-white py-4 rounded-lg hover:bg-purple-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed text-lg font-medium"
                >
                  Check Answer (or press Enter)
                </button>
              </div>
            )}

            {/* Answer Result */}
            {showAnswer && (
              <div className={`p-6 rounded-lg ${answerResult === 'correct' ? 'bg-green-50' : 'bg-red-50'}`}>
                <div className="flex items-center gap-3 mb-4">
                  {answerResult === 'correct' ? (
                    <Check size={32} className="text-green-600" />
                  ) : (
                    <X size={32} className="text-red-600" />
                  )}
                  <h3 className={`text-2xl font-bold ${answerResult === 'correct' ? 'text-green-600' : 'text-red-600'}`}>
                    {answerResult === 'correct' ? 'Correct!' : 'Not quite...'}
                  </h3>
                </div>

                <div className="mb-4">
                  <p className="text-gray-700 text-lg mb-2">
                    <span className="font-semibold">Pinyin:</span> {currentCard.pinyin}
                  </p>
                  <p className="text-gray-700 text-lg">
                    <span className="font-semibold">Meaning:</span> {currentCard.english}
                  </p>
                </div>

                <button
                  ref={(el) => { if (el) setTimeout(() => el.focus(), 200); }}
                  onKeyDown={(e) => { if (e.key === 'Enter') nextLearnCard(); }}
                  onClick={nextLearnCard}
                  className="w-full bg-purple-600 text-white py-4 rounded-lg hover:bg-purple-700 transition text-lg font-medium"
                >
                  {currentLearnIndex < learnCards.length - 1 ? 'Next Question → (or press Enter)' : 'Finish Session (or press Enter)'}
                </button>
              </div>
            )}
          </div>

          {/* AI Example Sentences */}
          <ExamplePanel card={currentCard} />

          {/* Mastery Status */}
          <div className="text-center">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg shadow ${
              currentCard.masteryStatus === 'mastered' ? 'bg-green-50 text-green-700' :
              currentCard.masteryStatus === 'learning' ? 'bg-orange-50 text-orange-700' :
              'bg-gray-50 text-gray-600'
            }`}>
              <span className="text-sm font-medium">
                {currentCard.masteryStatus === 'mastered' ? '✅ Mastered' :
                 currentCard.masteryStatus === 'learning' ? '📖 Still Learning' :
                 '🆕 Not Started'}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
 } // <--- THIS BRACE WAS MISSING (Closes the "if (learnCards.length > 0)" block)
} // <--- THIS BRACE CLOSES THE "if (currentView === 'learn')" block
// MATCH GAME VIEW
  if (currentView === 'match') {
    // 1. SAFETY CHECK FIRST: If cards aren't ready, show loading and STOP here.
    if (!selectedDeck || !matchCards || matchCards.length === 0) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-blue-50">
          <p className="text-xl text-gray-600">Loading game data...</p>
        </div>
      );
    }
    
    // 2. ONLY calculate these once we know matchCards exists
    const allMatched = matchedPairs.length > 0 && matchedPairs.length === matchCards.length / 2;
    const displayTime = matchEndTime 
      ? (Math.floor((matchEndTime - matchStartTime) / 100) / 10).toFixed(1)
      : (matchLiveTime / 10).toFixed(1);
    const bestTime = bestMatchTimes[selectedDeck.id];
    const bestTimeDisplay = bestTime ? (bestTime / 10).toFixed(1) : null;
    const currentTimeTenths = matchEndTime ? Math.floor((matchEndTime - matchStartTime) / 100) : matchLiveTime;
    const isNewBest = allMatched && (!bestMatchTimes[selectedDeck.id] || currentTimeTenths <= bestMatchTimes[selectedDeck.id]);

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-2 sm:p-4 md:p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-4 sm:mb-6 md:mb-8">
            <button
              onClick={() => setCurrentView('home')}
              className="text-gray-600 hover:text-gray-800 flex items-center gap-2 font-semibold text-sm sm:text-base"
            >
              ← Exit Match Game
            </button>
            <div className="text-right">
              <div className="text-xl sm:text-2xl font-bold text-gray-800 font-mono">{displayTime}s</div>
              <div className="text-xs sm:text-sm text-gray-600">{matchedPairs.length} / {matchCards.length / 2} matched</div>
            </div>
          </div>

          {allMatched ? (
            <div className="bg-white rounded-2xl shadow-2xl p-16 text-center">
              <div className="text-8xl mb-6">{isNewBest ? '🏆' : '🎉'}</div>
              <h2 className="text-5xl font-bold text-gray-800 mb-4">
                {isNewBest ? 'New Best Time!' : 'Perfect Match!'}
              </h2>
              <p className="text-2xl text-gray-600 mb-2">
                Completed in <span className="font-bold text-blue-600 font-mono">{displayTime}</span> seconds
              </p>
              {bestTimeDisplay && (
                <p className="text-lg text-gray-500 mb-8">
                  Best time: <span className="font-bold text-yellow-600 font-mono">{bestTimeDisplay}s</span>
                </p>
              )}
              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => startMatchGame(selectedDeck)}
                  className="bg-blue-600 text-white px-10 py-4 rounded-xl font-semibold"
                >
                  Play Again
                </button>
                <button
                  onClick={() => setCurrentView('home')}
                  className="bg-gray-600 text-white px-10 py-4 rounded-xl font-semibold"
                >
                  Back to Home
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
                {matchCards.map(card => {
                  const isMatched = matchedPairs.includes(card.matchId);
                  const isSelected = selectedMatchCards.find(c => c.id === card.id);
                  const isWrongMatch = selectedMatchCards.length === 2 && isSelected && selectedMatchCards[0]?.matchId !== selectedMatchCards[1]?.matchId;

                  return (
                    <button
                      key={card.id}
                      onClick={() => selectMatchCard(card)}
                      disabled={isMatched}
                      className={`p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl text-center transition-all duration-200 transform ${
                        isMatched
                          ? 'bg-green-100 text-green-700 opacity-0 scale-95 pointer-events-none'
                          : isWrongMatch
                          ? 'bg-red-100 text-red-700'
                          : isSelected
                          ? 'bg-blue-600 text-white shadow-2xl scale-105'
                          : 'bg-white text-gray-800 shadow-xl hover:scale-105'
                      }`}
                      style={{ 
                        minHeight: 'clamp(80px, 15vw, 140px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <div className={card.type === 'chinese' ? 'text-2xl sm:text-3xl md:text-4xl font-bold' : 'text-sm sm:text-base md:text-xl font-medium'}>
                        {card.content}
                      </div>
                    </button>
                  );
                })}
            </div>
          )}
        </div>
      </div>
    );
  }

// PRACTICE TEST VIEW
  // TEST SETUP VIEW
  if (currentView === 'testSetup' && testSetupDeck) {
    const maxQ = testSetupDeck.cards.length;
    const anyEnabled = testConfig.trueFalse || testConfig.multipleChoice || testConfig.matching || testConfig.written || testConfig.typePinyin;

    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-6 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full relative">
          <button
            onClick={() => setCurrentView('home')}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
          >
            <X size={24} />
          </button>

          <div className="mb-6">
            <p className="text-gray-500 font-medium">{testSetupDeck.name}</p>
            <h2 className="text-3xl font-black text-gray-800">Set up your test</h2>
          </div>

          {/* Number of questions */}
          <div className="flex items-center justify-between py-4 border-b border-gray-100">
            <div>
              <span className="font-semibold text-gray-800">Questions</span>
              <span className="text-gray-400 ml-2 text-sm">(max {maxQ})</span>
            </div>
            <input
              type="number"
              min={1}
              max={maxQ}
              value={testConfig.numQuestions}
              onChange={(e) => setTestConfig({ ...testConfig, numQuestions: Math.max(1, Math.min(maxQ, parseInt(e.target.value) || 1)) })}
              className="w-20 text-center border border-gray-200 rounded-lg py-2 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Answer with */}
          <div className="flex items-center justify-between py-4 border-b border-gray-100">
            <span className="font-semibold text-gray-800">Answer with</span>
            <select
              value={testConfig.answerWith}
              onChange={(e) => setTestConfig({ ...testConfig, answerWith: e.target.value })}
              className="border border-gray-200 rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="english">English</option>
              <option value="chinese">Chinese/Pinyin</option>
              <option value="both">Both</option>
            </select>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 my-4" />

          {/* Question type toggles */}
          {[
            { key: 'trueFalse', label: 'True/False' },
            { key: 'multipleChoice', label: 'Multiple choice' },
            { key: 'matching', label: 'Matching' },
            { key: 'typePinyin', label: 'Type pinyin' },
            { key: 'written', label: 'Written (type English)' },
          ].map(({ key, label }) => (
            <div key={key} className="flex items-center justify-between py-3">
              <span className="text-gray-700 font-medium">{label}</span>
              <button
                onClick={() => setTestConfig({ ...testConfig, [key]: !testConfig[key] })}
                className={`w-12 h-7 rounded-full transition-all relative ${testConfig[key] ? 'bg-indigo-600' : 'bg-gray-300'}`}
              >
                <div className={`w-5 h-5 bg-white rounded-full absolute top-1 transition-all shadow ${testConfig[key] ? 'left-6' : 'left-1'}`} />
              </button>
            </div>
          ))}

          {/* Start button */}
          <button
            onClick={generateTest}
            disabled={!anyEnabled}
            className="w-full mt-6 bg-indigo-600 text-white py-4 rounded-xl hover:bg-indigo-700 transition font-bold text-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Start test
          </button>
        </div>
      </div>
    );
  }

  // TEST VIEW
  if (currentView === 'test') {
    if (!selectedDeck || !testQuestions || testQuestions.length === 0) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-indigo-50">
          <p className="text-xl text-gray-600">Preparing your test...</p>
        </div>
      );
    }
    
    // Calculate score
    const getScore = () => {
      let correct = 0;
      let total = 0;
      testQuestions.forEach((q, i) => {
        if (q.type === 'matchingSection') {
          // Matching sections: count each card as a question, scored by matchingMatched
          total += q.cards.length;
          q.cards.forEach(card => {
            if (matchingMatched.has(card.id)) correct++;
          });
        } else {
          total++;
          const ans = testAnswers[i];
          if (ans === null || ans === undefined) return;
          
          if (q.type === 'trueFalse') {
            if (ans === q.correctAnswer) correct++;
          } else if (q.type === 'mc') {
            if (ans === q.correctAnswer) correct++;
          } else if (q.type === 'written') {
            if (ans && ans.trim().toLowerCase() === q.correctAnswer.trim().toLowerCase()) correct++;
          } else if (q.type === 'typePinyin') {
            if (ans && normalizePinyin(ans) === normalizePinyin(q.correctAnswer)) correct++;
          }
        }
      });
      return { correct, total };
    };

    const { correct: correctAnswers, total: totalQuestions } = getScore();
    const score = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;
    const currentQuestion = testQuestions[currentTestIndex];

    if (showTestResults) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-6">
          <div className="max-w-4xl mx-auto">
            <button onClick={() => setCurrentView('home')} className="mb-6 text-gray-600 hover:text-gray-800">← Back to Home</button>
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center mb-6">
              <div className="text-6xl mb-4">{score >= 80 ? '🎉' : score >= 60 ? '👍' : '📚'}</div>
              <h2 className="text-3xl font-bold mb-4">Test Results</h2>
              <div className={`text-7xl font-black mb-4 ${score >= 80 ? 'text-green-600' : score >= 60 ? 'text-yellow-500' : 'text-red-500'}`}>{score}%</div>
              <p className="text-xl text-gray-600 mb-8">{correctAnswers} / {totalQuestions} correct</p>
              
              {/* Review answers */}
              <div className="text-left space-y-3 mb-8">
                {testQuestions.map((q, i) => {
                  if (q.type === 'matchingSection') {
                    return (
                      <div key={i} className="p-4 bg-gray-50 rounded-lg">
                        <div className="font-semibold text-gray-700 mb-1">Matching Section</div>
                        <div className="text-sm text-gray-600">
                          {q.cards.filter(c => matchingMatched.has(c.id)).length} / {q.cards.length} matched correctly
                        </div>
                      </div>
                    );
                  }
                  const ans = testAnswers[i];
                  let isCorrect = false;
                  if (q.type === 'trueFalse') isCorrect = ans === q.correctAnswer;
                  else if (q.type === 'mc') isCorrect = ans === q.correctAnswer;
                  else if (q.type === 'written') isCorrect = ans && ans.trim().toLowerCase() === q.correctAnswer.trim().toLowerCase();
                  else if (q.type === 'typePinyin') {
                    isCorrect = ans && normalizePinyin(ans) === normalizePinyin(q.correctAnswer);
                  }
                  return (
                    <div key={i} className={`p-4 rounded-lg ${isCorrect ? 'bg-green-50' : 'bg-red-50'}`}>
                      <div className="flex items-center gap-2 mb-1">
                        {isCorrect ? <Check size={16} className="text-green-600" /> : <X size={16} className="text-red-600" />}
                        <span className="font-bold text-lg">{q.card.chinese}</span>
                        <span className="text-gray-500 text-sm">({q.card.pinyin})</span>
                        <span className="ml-auto text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">
                          {q.type === 'trueFalse' ? 'T/F' : q.type === 'mc' ? 'MC' : q.type === 'written' ? 'Written' : 'Pinyin'}
                        </span>
                      </div>
                      <div className="text-sm text-gray-600">
                        Correct: <span className="font-medium text-green-700">{q.correctAnswer}</span>
                        {!isCorrect && ans && <span className="ml-3">Your answer: <span className="font-medium text-red-600">{ans}</span></span>}
                        {!isCorrect && !ans && <span className="ml-3 text-gray-400">No answer</span>}
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="flex gap-4 justify-center">
                <button onClick={() => { setCurrentView('testSetup'); }} className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition font-semibold">Retake Test</button>
                <button onClick={() => setCurrentView('home')} className="bg-gray-600 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition font-semibold">Return Home</button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Progress bar
    const progress = ((currentTestIndex + 1) / testQuestions.length) * 100;

    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <button onClick={() => setCurrentView('home')} className="text-gray-600 hover:text-gray-800">← Exit Test</button>
            <div className="text-gray-600 font-medium">Question {currentTestIndex + 1} of {testQuestions.length}</div>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
            <div className="bg-indigo-600 h-2 rounded-full transition-all" style={{ width: `${progress}%` }} />
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
            {/* TRUE/FALSE */}
            {currentQuestion.type === 'trueFalse' && (
              <div className="text-center">
                <div className="text-xs font-bold text-indigo-500 uppercase tracking-wider mb-4">True or False</div>
                <div className="text-5xl font-bold text-gray-800 mb-3">{currentQuestion.card.chinese}</div>
                <div className="text-lg text-gray-500 mb-2">{currentQuestion.card.pinyin}</div>
                <div className="text-2xl text-gray-700 mb-8 py-4 px-6 bg-gray-50 rounded-xl inline-block">
                  = "{currentQuestion.displayAnswer}"
                </div>
                <div className="flex gap-4 justify-center">
                  {['True', 'False'].map(opt => (
                    <button
                      key={opt}
                      onClick={() => { const a = [...testAnswers]; a[currentTestIndex] = opt; setTestAnswers(a); }}
                      className={`px-12 py-4 rounded-xl border-2 text-xl font-bold transition ${
                        testAnswers[currentTestIndex] === opt
                          ? opt === 'True' ? 'border-green-500 bg-green-50 text-green-700' : 'border-red-500 bg-red-50 text-red-700'
                          : 'border-gray-300 hover:border-indigo-400 text-gray-600'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* MULTIPLE CHOICE */}
            {currentQuestion.type === 'mc' && (
              <div className="text-center">
                <div className="text-xs font-bold text-indigo-500 uppercase tracking-wider mb-4">Multiple Choice</div>
                <div className="text-5xl font-bold text-gray-800 mb-3">{currentQuestion.card.chinese}</div>
                <div className="text-lg text-gray-500 mb-8">{currentQuestion.card.pinyin}</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentQuestion.options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => { const a = [...testAnswers]; a[currentTestIndex] = option; setTestAnswers(a); }}
                      className={`p-4 rounded-xl border-2 transition text-lg text-left flex items-center gap-3 ${
                        testAnswers[currentTestIndex] === option ? 'border-indigo-600 bg-indigo-50' : 'border-gray-300 hover:border-indigo-400'
                      }`}
                    >
                      <span className={`inline-flex items-center justify-center w-7 h-7 rounded-md text-sm font-bold flex-shrink-0 ${
                        testAnswers[currentTestIndex] === option ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-600'
                      }`}>{idx + 1}</span>
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* MATCHING SECTION */}
            {currentQuestion.type === 'matchingSection' && (
              <div>
                <div className="text-xs font-bold text-indigo-500 uppercase tracking-wider mb-4 text-center">Matching</div>
                <p className="text-gray-500 text-center mb-6">Tap a Chinese character, then tap its English meaning</p>
                <div className="grid grid-cols-2 gap-6">
                  {/* Chinese column */}
                  <div className="space-y-3">
                    {currentQuestion.cards.map(card => {
                      const isMatched = matchingMatched.has(card.id);
                      const isSelected = matchingSelected && matchingSelected.type === 'chinese' && matchingSelected.id === card.id;
                      return (
                        <button
                          key={'ch-' + card.id}
                          onClick={() => {
                            if (isMatched) return;
                            if (matchingSelected && matchingSelected.type === 'english') {
                              // Check match
                              if (matchingSelected.card.id === card.id) {
                                setMatchingMatched(prev => new Set([...prev, card.id]));
                                setMatchingSelected(null);
                              } else {
                                setMatchingWrong(card.id);
                                setTimeout(() => setMatchingWrong(null), 200);
                                setMatchingSelected(null);
                              }
                            } else {
                              setMatchingSelected({ type: 'chinese', id: card.id, card });
                            }
                          }}
                          disabled={isMatched}
                          className={`w-full p-4 rounded-xl border-2 text-xl font-bold transition-all duration-150 ${
                            isMatched ? 'border-green-300 bg-green-50 text-green-400 opacity-40 scale-95 pointer-events-none' :
                            isSelected ? 'border-indigo-600 bg-indigo-50 text-indigo-700' :
                            matchingWrong === card.id ? 'border-red-500 bg-red-100 text-red-600' :
                            'border-gray-300 hover:border-indigo-400 text-gray-800'
                          }`}
                        >
                          {card.chinese}
                        </button>
                      );
                    })}
                  </div>
                  {/* English column - shuffled */}
                  <div className="space-y-3">
                    {[...currentQuestion.cards].sort((a, b) => a.english.localeCompare(b.english)).map(card => {
                      const isMatched = matchingMatched.has(card.id);
                      const isSelected = matchingSelected && matchingSelected.type === 'english' && matchingSelected.id === card.id;
                      return (
                        <button
                          key={'en-' + card.id}
                          onClick={() => {
                            if (isMatched) return;
                            if (matchingSelected && matchingSelected.type === 'chinese') {
                              // Check match
                              if (matchingSelected.card.id === card.id) {
                                setMatchingMatched(prev => new Set([...prev, card.id]));
                                setMatchingSelected(null);
                              } else {
                                setMatchingWrong(card.id);
                                setTimeout(() => setMatchingWrong(null), 200);
                                setMatchingSelected(null);
                              }
                            } else {
                              setMatchingSelected({ type: 'english', id: card.id, card });
                            }
                          }}
                          disabled={isMatched}
                          className={`w-full p-4 rounded-xl border-2 transition-all duration-150 text-left ${
                            isMatched ? 'border-green-300 bg-green-50 text-green-400 opacity-40 scale-95 pointer-events-none' :
                            isSelected ? 'border-indigo-600 bg-indigo-50 text-indigo-700' :
                            matchingWrong === card.id ? 'border-red-500 bg-red-100 text-red-600' :
                            'border-gray-300 hover:border-indigo-400 text-gray-700'
                          }`}
                        >
                          {card.english}
                        </button>
                      );
                    })}
                  </div>
                </div>
                {matchingMatched.size >= currentQuestion.cards.length && (
                  <div className="text-center mt-6 text-green-600 font-bold text-lg">All matched!</div>
                )}
              </div>
            )}

            {/* TYPE PINYIN */}
            {currentQuestion.type === 'typePinyin' && (
              <div className="text-center">
                <div className="text-xs font-bold text-indigo-500 uppercase tracking-wider mb-4">Type the Pinyin</div>
                <div className="text-5xl font-bold text-gray-800 mb-3">{currentQuestion.card.chinese}</div>
                <div className="text-lg text-gray-400 mb-6">{currentQuestion.card.english}</div>
                <input
                  type="text"
                  value={testAnswers[currentTestIndex] || ''}
                  onChange={(e) => { const a = [...testAnswers]; a[currentTestIndex] = e.target.value; setTestAnswers(a); }}
                  placeholder="e.g., nǐ hǎo"
                  className="w-full max-w-md mx-auto px-6 py-4 text-xl border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-center"
                  autoFocus
                />
                <p className="text-sm text-gray-400 mt-3">Tone marks or numbers accepted</p>
              </div>
            )}

            {/* WRITTEN (type english) */}
            {currentQuestion.type === 'written' && (
              <div className="text-center">
                <div className="text-xs font-bold text-indigo-500 uppercase tracking-wider mb-4">Written Answer</div>
                <div className="text-5xl font-bold text-gray-800 mb-3">{currentQuestion.card.chinese}</div>
                <div className="text-lg text-gray-500 mb-6">{currentQuestion.card.pinyin}</div>
                <input
                  type="text"
                  value={testAnswers[currentTestIndex] || ''}
                  onChange={(e) => { const a = [...testAnswers]; a[currentTestIndex] = e.target.value; setTestAnswers(a); }}
                  placeholder="Type the English meaning"
                  className="w-full max-w-md mx-auto px-6 py-4 text-xl border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-center"
                  autoFocus
                />
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="flex justify-between">
            <button
              onClick={() => {
                setMatchingSelected(null);
                setCurrentTestIndex(Math.max(0, currentTestIndex - 1));
              }}
              disabled={currentTestIndex === 0}
              className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition disabled:bg-gray-300 disabled:cursor-not-allowed font-medium"
            >
              ← Previous
            </button>
            {currentTestIndex === testQuestions.length - 1 ? (
              <button onClick={() => setShowTestResults(true)} className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition font-bold">
                Finish Test
              </button>
            ) : (
              <button
                onClick={() => {
                  setMatchingSelected(null);
                  setCurrentTestIndex(currentTestIndex + 1);
                }}
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition font-medium"
              >
                Next →
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // CHARACTER WRITING PRACTICE VIEW
  if (currentView === 'writing' && selectedDeck) {
    // Show mode selection if no mode chosen yet
    if (!writingMode) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 p-6 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-2xl p-12 max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">Choose Practice Mode</h2>
            <p className="text-xl text-gray-600 mb-8 text-center">
              How would you like to practice writing?
            </p>
            <div className="space-y-4">
              {getSavedWritingSession(selectedDeck.id) && (() => {
                const s = getSavedWritingSession(selectedDeck.id);
                const modeNames = { practice10: 'Practice 10', practiceAll: 'Practice All', test: 'Test 10', testAll: 'Test All' };
                return (
                  <button
                    onClick={resumeWritingSession}
                    className="w-full bg-gradient-to-r from-pink-500 to-indigo-500 text-white px-8 py-6 rounded-lg hover:from-pink-600 hover:to-indigo-600 transition text-left ring-2 ring-pink-300"
                  >
                    <div className="text-2xl font-bold mb-2">▶ Resume Session</div>
                    <div className="text-sm opacity-90">
                      Continue your {modeNames[s.writingMode] || s.writingMode} session — card {s.currentIndex + 1} of {s.cardIds.length}
                    </div>
                  </button>
                );
              })()}
              <button
                onClick={startPractice10}
                className="w-full bg-pink-600 text-white px-8 py-6 rounded-lg hover:bg-pink-700 transition text-left"
              >
                <div className="text-2xl font-bold mb-2">📝 Practice 10</div>
                <div className="text-sm opacity-90">
                  Practice 10 random cards at a time. After completing, you can practice another 10 new cards.
                </div>
              </button>
              <button
                onClick={startPracticeAll}
                className="w-full bg-purple-600 text-white px-8 py-6 rounded-lg hover:bg-purple-700 transition text-left"
              >
                <div className="text-2xl font-bold mb-2">📚 Practice All ({selectedDeck.cards.length} cards)</div>
                <div className="text-sm opacity-90">
                  Practice all cards in this deck in one session. Includes shuffle button to randomize order.
                </div>
              </button>
              <button
                onClick={startWritingTest}
                className="w-full bg-orange-600 text-white px-8 py-6 rounded-lg hover:bg-orange-700 transition text-left"
              >
                <div className="text-2xl font-bold mb-2">🧪 Test 10</div>
                <div className="text-sm opacity-90">
                  Characters are hidden! Only pinyin and English are shown. Practice writing from memory, then reveal when ready.
                </div>
              </button>
              <button
                onClick={startWritingTestAll}
                className="w-full bg-amber-600 text-white px-8 py-6 rounded-lg hover:bg-amber-700 transition text-left"
              >
                <div className="text-2xl font-bold mb-2">🧪 Test All ({selectedDeck.cards.length} cards)</div>
                <div className="text-sm opacity-90">
                  Test yourself on all cards in the deck. Characters hidden, only pinyin and English shown.
                </div>
              </button>
            </div>
            <button
              onClick={() => setCurrentView('home')}
              className="w-full mt-6 bg-gray-600 text-white px-8 py-4 rounded-lg hover:bg-gray-700 transition"
            >
              ← Back to Home
            </button>
          </div>
        </div>
      );
    }

    // Show completion screen if session is complete (only for practice10 mode)
    if (writingSessionComplete && writingCards.length > 0) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 p-6 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-2xl p-12 max-w-2xl mx-auto text-center">
            <div className="text-6xl mb-6">🎉</div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Great Job!</h2>
            <p className="text-xl text-gray-600 mb-8">
              You've completed this writing practice session!
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => setCurrentView('home')}
                className="bg-gray-600 text-white px-8 py-4 rounded-lg hover:bg-gray-700 transition text-lg font-medium"
              >
                Finish
              </button>
              <button
                onClick={getNewWritingSet}
                className="bg-pink-600 text-white px-8 py-4 rounded-lg hover:bg-pink-700 transition text-lg font-medium"
              >
                Practice Next 10 →
              </button>
            </div>
          </div>
        </div>
      );
    }

    const currentCard = writingCards[currentWritingIndex];

    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 p-3 sm:p-6" style={{ userSelect: 'none', WebkitUserSelect: 'none', WebkitTouchCallout: 'none' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <button
              onClick={() => {
                // Flush any deferred localStorage write and trigger cloud sync before leaving
                flushDecksToStorage();
                if (currentUser && FIREBASE_ENABLED) saveToCloud(currentUser.uid);
                setCurrentView('home');
              }}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg flex items-center gap-2 text-sm sm:text-base font-semibold transition-all"
            >
              ← Home
            </button>
            <div className="flex items-center gap-4">
              <button
                onClick={shuffleWritingCards}
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition flex items-center gap-2"
              >
                🔀 {(writingMode === 'practiceAll' || writingMode === 'testAll') ? 'Shuffle' : 'New 10'}
              </button>
              <div className="text-gray-600">
                Character {currentWritingIndex + 1} of {writingCards.length}
              </div>
            </div>
          </div>

          <div className="mb-8">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-pink-600 h-2 rounded-full transition-all"
                style={{ width: `${((currentWritingIndex + 1) / writingCards.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Character to Practice */}
          <div className="bg-white rounded-xl shadow-xl p-3 sm:p-4 mb-1">
            <div className="text-center mb-1">
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                {(writingMode === 'test' || writingMode === 'testAll') ? 'Test Yourself:' : 'Practice Writing:'}
              </h3>
              {(writingMode === 'test' || writingMode === 'testAll') && !testRevealed ? (
                <div className="mb-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                  <div style={{ fontSize: '6rem', fontWeight: 'bold', color: '#d1d5db', lineHeight: 1.2, textAlign: 'center', width: 'auto' }}>
                    {currentCard.chinese.split('').map((_, i) => '?').join('')}
                  </div>
                </div>
              ) : (
                <div className="text-8xl font-bold text-gray-800 mb-4">
                  {currentCard.chinese}
                </div>
              )}
              <div className="text-lg text-red-600 mb-0.5">{userSettings.writing.showPinyin ? currentCard.pinyin : ''}</div>
              <div className="text-base text-gray-600 mb-1">{userSettings.writing.showEnglish ? currentCard.english : ''}</div>
              {/* ── All 6 action buttons in one row ── */}
              {currentCard && (() => {
                const chars = currentCard.chinese.split('');
                return (
                  <div className="relative">
                    <div className="flex flex-wrap justify-center gap-1.5 mt-3">
                      {/* Pronounce */}
                      <button
                        onClick={() => speakChinese(currentCard.chinese)}
                        className="bg-blue-600 text-white px-2.5 py-1.5 rounded-lg hover:bg-blue-700 transition flex items-center gap-1 text-xs font-semibold shadow"
                      >
                        <Volume2 size={12} />
                        Pronounce
                      </button>
                      {/* Stroke Order */}
                      <button
                        onClick={() => setShowStrokePanel(true)}
                        className="bg-rose-600 text-white px-2.5 py-1.5 rounded-lg hover:bg-rose-700 transition flex items-center gap-1 text-xs font-semibold shadow"
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                        Strokes
                      </button>
                      {/* Trace on Canvas */}
                      <button
                        onClick={() => { if (chars.length === 1) { drawCharOnCanvas(chars[0]); } else { setShowCanvasCharPicker(prev => !prev); } }}
                        className={`text-white px-2.5 py-1.5 rounded-lg transition flex items-center gap-1 text-xs font-semibold shadow ${canvasHanziChar ? 'bg-purple-700 hover:bg-purple-800' : 'bg-purple-600 hover:bg-purple-700'}`}
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                        {canvasHanziChar ? `Trace: ${canvasHanziChar}` : 'Trace'}
                      </button>
                      {/* Example Sentences */}
                      <button
                        onClick={(e) => { e.stopPropagation(); fetchExamples(currentCard, 'examples'); }}
                        className="bg-gradient-to-r from-rose-600 to-pink-600 text-white px-2.5 py-1.5 rounded-lg hover:from-rose-700 hover:to-pink-700 transition flex items-center gap-1 text-xs font-semibold shadow"
                      >
                        <MessageCircle size={12} />
                        Examples
                      </button>
                      {/* Grammar */}
                      <button
                        onClick={(e) => { e.stopPropagation(); fetchExamples(currentCard, 'grammar'); }}
                        className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-2.5 py-1.5 rounded-lg hover:from-violet-700 hover:to-purple-700 transition flex items-center gap-1 text-xs font-semibold shadow"
                      >
                        <Brain size={12} />
                        Grammar
                      </button>
                      {/* Related Words */}
                      <button
                        onClick={(e) => { e.stopPropagation(); fetchExamples(currentCard, 'related'); }}
                        className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-2.5 py-1.5 rounded-lg hover:from-amber-700 hover:to-orange-700 transition flex items-center gap-1 text-xs font-semibold shadow"
                      >
                        <BookOpen size={12} />
                        Related
                      </button>
                    </div>
                    {/* Character picker for multi-char trace */}
                    {showCanvasCharPicker && chars.length > 1 && (
                      <div className="absolute left-1/2 -translate-x-1/2 mt-1 bg-white border border-gray-200 rounded-xl shadow-xl p-2 z-50 flex gap-2 whitespace-nowrap">
                        <span className="text-xs text-gray-500 self-center">Pick:</span>
                        {chars.map((ch, i) => (
                          <button key={i} onClick={() => drawCharOnCanvas(ch)}
                            className="text-2xl font-bold text-gray-800 w-10 h-10 rounded-lg border-2 border-gray-200 hover:border-purple-500 hover:bg-purple-50 transition flex items-center justify-center">
                            {ch}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })()}
            </div>
          </div>

          {/* AI results panel */}
          <div className="mb-1">
            <ExamplePanel card={currentCard} hideButtons={true} />
          </div>

          {/* Drawing Canvas */}
          <div className="bg-white rounded-xl shadow-xl p-3 sm:p-4 mb-3">
            <h3 className="text-base font-bold text-gray-800 mb-1 text-center">
              Draw the character below:
            </h3>

            {/* Canvas */}
            <div className="mb-1">
              {canvasHanziChar && (
                <div className="text-center mb-2 text-sm font-semibold text-purple-700 flex items-center justify-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-purple-500 animate-pulse"/>
                  Tracing: <span className="text-xl">{canvasHanziChar}</span>
                  <span className="text-gray-400 font-normal">— draw over it to practice</span>
                </div>
              )}
              {/* Wrapper is position:relative so the absolute overlay stays locked to canvas on scroll */}
              <div className="relative mx-auto" style={{ width: '100%', maxWidth: '500px' }}>
                <canvas
                  ref={canvasRef}
                  className={`border-4 rounded-lg cursor-crosshair touch-none bg-white block w-full ${canvasHanziChar ? 'border-purple-400' : 'border-gray-300'}`}
                  style={{ height: 'auto', aspectRatio: '1', touchAction: 'none' }}
                />
                {/* HanziWriter draws into this div; position:absolute keeps it locked to canvas */}
                <div
                  id="hw-canvas-overlay-anchor"
                  ref={canvasOverlayRef}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    pointerEvents: 'none',
                    borderRadius: '6px',
                    overflow: 'hidden',
                  }}
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-3 justify-center mb-4">
              <button
                onClick={clearCanvas}
                className="bg-gray-600 text-white px-4 py-3 rounded-lg hover:bg-gray-700 transition text-sm sm:text-base sm:px-6"
              >
                Clear All
              </button>
              {canvasHanziChar && (
                <button
                  onClick={clearTracesOnly}
                  className="bg-purple-600 text-white px-4 py-3 rounded-lg hover:bg-purple-700 transition text-sm sm:text-base sm:px-6"
                >
                  Clear Traces
                </button>
              )}
              <button
                onClick={handleKnowCard}
                className="bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition flex items-center gap-1 sm:gap-2 text-sm sm:text-base sm:px-6"
              >
                <Check size={18} />
                I Know This
              </button>
              <button
                onClick={handleForgotCard}
                className="bg-red-600 text-white px-4 py-3 rounded-lg hover:bg-red-700 transition flex items-center gap-1 sm:gap-2 text-sm sm:text-base sm:px-6"
              >
                <X size={18} />
                I Forgot
              </button>
              {(writingMode === 'test' || writingMode === 'testAll') && (
                <button
                  onClick={() => setTestRevealed(prev => !prev)}
                  className={`${testRevealed ? 'bg-gray-500 hover:bg-gray-600' : 'bg-orange-500 hover:bg-orange-600'} text-white px-4 py-3 rounded-lg transition flex items-center gap-1 sm:gap-2 text-sm sm:text-base sm:px-6`}
                >
                  {testRevealed ? '🙈 Hide' : '👁 Reveal'}
                </button>
              )}
              <button
                onClick={undoWritingAction}
                disabled={writingUndoHistory.length === 0}
                className="bg-gray-600 text-white px-4 py-3 rounded-lg hover:bg-gray-700 transition flex items-center gap-1 sm:gap-2 text-sm sm:text-base sm:px-6 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                ↩ Undo
              </button>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-700 text-center">
                {(writingMode === 'test' || writingMode === 'testAll') ? (
                  <>💡 <strong>Test Mode:</strong> Try to write the character from memory using only the pinyin and English. Press "Reveal" to check your answer, then mark "I Know This" or "I Forgot".</>
                ) : (
                  <>💡 <strong>Tip:</strong> Practice writing, then click "I Know This" if you got it right or "I Forgot" if you need more practice. Cards you forget will come back soon!</>
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Floating Chat Button */}
        <ChatFAB />
        <ChatSidebar />

        {/* Stroke Order Panel */}
        {showStrokePanel && currentCard && (
          <HanziWriterPanel
            chinese={currentCard.chinese}
            onClose={() => setShowStrokePanel(false)}
          />
        )}
      </div>
    );
  }

  // ==========================================
  // AI TEST PRACTICE VIEW
  // ==========================================
  if (currentView === 'aiTestPractice') {
    const modeInfo = {
      xiaokao: { name: '小考 (Mini Quiz)', desc: 'Single lesson — construct sentences from given vocab/grammar', color: 'from-amber-500 to-orange-500', emoji: '📝' },
      quiz: { name: 'Weekly Quiz', desc: 'Multiple lessons — sentence construction + translation', color: 'from-blue-500 to-indigo-500', emoji: '📋' },
      essay: { name: 'Essay Practice', desc: 'Write a ≥80 character response using given vocab', color: 'from-purple-500 to-pink-500', emoji: '✍️' },
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-violet-50 p-4 sm:p-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <button onClick={() => { resetAiTest(); setCurrentView('home'); }} className="text-gray-600 hover:text-gray-800 flex items-center gap-2 font-semibold">← Home</button>
            <h1 className="text-2xl font-bold text-gray-800">AI Test Practice</h1>
            <div />
          </div>

          {/* Step 1: Select Mode */}
          {aiTestSetupStep === 'selectMode' && (
            <div className="space-y-3">
              <p className="text-gray-500 text-sm mb-4">Choose a practice mode that matches your CHI108 assessments:</p>
              {Object.entries(modeInfo).map(([mode, info]) => (
                <button key={mode} onClick={() => { setAiTestMode(mode); setAiTestSetupStep('selectDecks'); }}
                  className={`w-full text-left p-5 rounded-xl bg-gradient-to-r ${info.color} text-white hover:shadow-lg transition-all`}>
                  <div className="text-xl font-bold mb-1">{info.emoji} {info.name}</div>
                  <div className="text-sm opacity-90">{info.desc}</div>
                </button>
              ))}
            </div>
          )}

          {/* Step 2: Select Decks */}
          {aiTestSetupStep === 'selectDecks' && (
            <div>
              <div className="flex items-center gap-3 mb-4">
                <button onClick={() => setAiTestSetupStep('selectMode')} className="text-gray-500 hover:text-gray-700">← Back</button>
                <h2 className="font-bold text-gray-800">
                  {modeInfo[aiTestMode]?.emoji} {modeInfo[aiTestMode]?.name} — Select {aiTestMode === 'xiaokao' ? 'Deck' : 'Decks'}
                </h2>
              </div>
              <p className="text-sm text-gray-500 mb-4">
                {aiTestMode === 'xiaokao' ? 'Pick the lesson deck for this 小考:' : 'Pick one or more lesson decks to include:'}
              </p>
              <div className="space-y-2 mb-6">
                {decks.filter(d => d.cards.length > 0).map(deck => {
                  const isSelected = aiTestDecks.includes(deck.id);
                  return (
                    <button key={deck.id}
                      onClick={() => {
                        if (aiTestMode === 'xiaokao') {
                          setAiTestDecks([deck.id]);
                        } else {
                          setAiTestDecks(prev => isSelected ? prev.filter(id => id !== deck.id) : [...prev, deck.id]);
                        }
                      }}
                      className={`w-full text-left p-4 rounded-xl border-2 transition ${isSelected ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200 hover:border-indigo-300'}`}>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-gray-800">{deck.name}</div>
                          <div className="text-xs text-gray-400">{deck.cards.length} cards{deck.kewen ? ' · 课文 ✓' : ''}</div>
                        </div>
                        {isSelected && <Check size={20} className="text-indigo-600" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Quiz type selector (only for weekly quiz) */}
              {aiTestMode === 'quiz' && aiTestDecks.length > 0 && (
                <div className="mb-4 p-4 bg-blue-50 rounded-xl">
                  <div className="text-sm font-semibold text-blue-800 mb-2">Question Type</div>
                  <div className="flex gap-2">
                    {[
                      { id: 'mixed', label: '🔀 Mixed' },
                      { id: 'construction', label: '🏗️ Construction' },
                      { id: 'translation', label: '🔄 Translation' },
                    ].map(t => (
                      <button key={t.id}
                        onClick={() => setAiQuizType(t.id)}
                        className={`flex-1 py-2 rounded-lg text-xs font-medium transition ${aiQuizType === t.id ? 'bg-blue-600 text-white' : 'bg-white text-blue-700 border border-blue-200 hover:bg-blue-100'}`}>
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <button
                onClick={() => { setAiTestSetupStep('inProgress'); setAiTestQuestionNum(0); setAiTestScore([]); generateAiTestQuestion(); }}
                disabled={aiTestDecks.length === 0}
                className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white py-3 rounded-xl font-bold hover:from-indigo-700 hover:to-violet-700 transition disabled:opacity-40"
              >
                Start Practice
              </button>
            </div>
          )}

          {/* Step 3: In Progress */}
          {aiTestSetupStep === 'inProgress' && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm text-gray-500">
                  {modeInfo[aiTestMode]?.emoji} {modeInfo[aiTestMode]?.name} · Question {aiTestQuestionNum}
                </div>
                <button onClick={() => {
                  if (aiTestScore.length > 0) { setAiTestSetupStep('results'); }
                  else { resetAiTest(); setCurrentView('home'); }
                }} className="text-sm text-gray-400 hover:text-gray-600">End Practice</button>
              </div>

              {/* Loading question */}
              {aiTestLoading && !aiTestQuestion && (
                <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                  <div className="flex gap-1 justify-center mb-3">
                    {[0,1,2].map(i => (<div key={i} className="w-2 h-2 rounded-full bg-indigo-500" style={{ animation: `chatBounce 1.2s ease-in-out ${i*0.15}s infinite` }} />))}
                  </div>
                  <p className="text-gray-500">Generating question...</p>
                </div>
              )}

              {/* Question display */}
              {aiTestQuestion && (
                <div className="bg-white rounded-xl shadow-lg p-6 mb-4">
                  {/* Prompt */}
                  <div className="mb-4">
                    <div className="text-lg font-bold text-gray-800 mb-2" style={{ fontFamily: 'serif', lineHeight: 1.8 }}>
                      {aiTestQuestion.prompt}
                    </div>
                    {aiTestQuestion.promptEnglish && aiTestQuestion.promptEnglish !== aiTestQuestion.prompt && (
                      <div className="text-sm text-gray-500">{aiTestQuestion.promptEnglish}</div>
                    )}
                  </div>

                  {/* Items to use */}
                  {aiTestQuestion.items && aiTestQuestion.items.length > 0 && (
                    <div className="mb-4">
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                        {aiTestMode === 'essay' ? 'Incorporate at least 8 of these:' : aiTestMode === 'xiaokao' ? 'Pick at least 4 and use them:' : 'Use these in your answer:'}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {aiTestQuestion.items.map((item, i) => (
                          <span key={i} className="px-3 py-1.5 bg-indigo-50 text-indigo-700 rounded-lg text-sm font-medium border border-indigo-200">{item}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {aiTestQuestion.hint && !aiTestFeedback && (
                    <div className="text-xs text-gray-400 mb-3">💡 {aiTestQuestion.hint}</div>
                  )}

                  {/* Answer input */}
                  {!aiTestFeedback && (
                    <div>
                      {/* Input mode toggle (not for essay) */}
                      {aiTestMode !== 'essay' && (
                        <div className="flex gap-2 mb-3" style={{ userSelect: 'none', WebkitUserSelect: 'none' }}>
                          <button
                            onClick={() => setAiTestInputMode('type')}
                            className={`flex-1 py-2 rounded-lg text-sm font-medium transition ${aiTestInputMode === 'type' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                            style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
                          >
                            ⌨️ Type
                          </button>
                          <button
                            onClick={() => setAiTestInputMode('handwrite')}
                            className={`flex-1 py-2 rounded-lg text-sm font-medium transition ${aiTestInputMode === 'handwrite' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                            style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
                          >
                            ✍️ Handwrite
                          </button>
                        </div>
                      )}

                      {/* Typing input */}
                      {(aiTestInputMode === 'type' || aiTestMode === 'essay') && (
                        <textarea
                          value={aiTestAnswer}
                          onChange={e => setAiTestAnswer(e.target.value)}
                          placeholder={aiTestMode === 'essay' ? '写你的回答 (≥80 characters)...' : '写你的回答...'}
                          className="w-full p-4 border-2 border-gray-200 rounded-xl text-lg focus:outline-none focus:border-indigo-400 resize-none mb-2"
                          style={{ fontFamily: 'serif', lineHeight: 1.8, minHeight: aiTestMode === 'essay' ? '180px' : '100px', fontSize: '16px' }}
                        />
                      )}

                      {/* Handwriting canvas */}
                      {aiTestInputMode === 'handwrite' && aiTestMode !== 'essay' && (
                        <div className="mb-2">
                          <div className="border-2 border-gray-300 rounded-xl overflow-hidden mb-2" style={{ touchAction: 'none', position: 'relative', height: '480px', userSelect: 'none', WebkitUserSelect: 'none', WebkitTouchCallout: 'none', WebkitTapHighlightColor: 'transparent' }}>
                            {/* Background canvas: white + horizontal grid lines, never touched by drawing */}
                            <canvas
                              ref={aiTestBgCanvasRef}
                              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block', pointerEvents: 'none' }}
                            />
                            {/* Foreground canvas: transparent, receives all strokes and erasing */}
                            <canvas
                              ref={aiTestCanvasRef}
                              onPointerDown={aiTestCanvasPointerDown}
                              onPointerMove={aiTestCanvasPointerMove}
                              onPointerUp={aiTestCanvasPointerUp}
                              onPointerLeave={aiTestCanvasPointerUp}
                              onSelectStart={e => e.preventDefault()}
                              onDragStart={e => e.preventDefault()}
                              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', cursor: aiTestEraserOn ? 'cell' : 'crosshair', touchAction: 'none', userSelect: 'none', WebkitUserSelect: 'none', WebkitTouchCallout: 'none', WebkitTapHighlightColor: 'transparent', display: 'block' }}
                            />
                          </div>
                          <div className="flex gap-2 mb-2" style={{ userSelect: 'none', WebkitUserSelect: 'none' }}>
                            <button
                              onClick={() => { aiTestDrawCtrl.current.isErasing = false; setAiTestEraserOn(false); }}
                              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${!aiTestEraserOn ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-600'}`}
                              style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
                            >
                              ✏️ Pen
                            </button>
                            <button
                              onClick={() => { aiTestDrawCtrl.current.isErasing = true; setAiTestEraserOn(true); }}
                              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${aiTestEraserOn ? 'bg-pink-600 text-white' : 'bg-gray-100 text-gray-600'}`}
                              style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
                            >
                              🧹 Eraser
                            </button>
                            <button
                              onClick={clearAiTestCanvas}
                              className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-100 text-gray-600 hover:bg-gray-200 transition"
                              style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
                            >
                              🗑️ Clear
                            </button>
                            <button
                              onClick={recognizeHandwriting}
                              disabled={aiTestLoading}
                              className="flex-1 bg-gradient-to-r from-violet-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-violet-700 hover:to-purple-700 transition disabled:opacity-40 flex items-center justify-center gap-1"
                              style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
                            >
                              {aiTestLoading ? (
                                <React.Fragment>
                                  <div className="flex gap-1">{[0,1,2].map(i => (<div key={i} className="w-1 h-1 rounded-full bg-white" style={{ animation: `chatBounce 1.2s ease-in-out ${i*0.15}s infinite` }} />))}</div>
                                  Reading...
                                </React.Fragment>
                              ) : '🔍 Recognize Text'}
                            </button>
                          </div>
                          {aiTestAnswer && (
                            <div className="p-3 bg-indigo-50 rounded-lg mb-2">
                              <div className="text-xs font-semibold text-indigo-600 mb-1">Recognized text (editable):</div>
                              <textarea
                                value={aiTestAnswer}
                                onChange={e => setAiTestAnswer(e.target.value)}
                                className="w-full p-2 border border-indigo-200 rounded-lg text-lg focus:outline-none focus:border-indigo-400 resize-none bg-white"
                                style={{ fontFamily: 'serif', lineHeight: 1.6, minHeight: '60px', fontSize: '16px' }}
                              />
                            </div>
                          )}
                        </div>
                      )}

                      <div className="flex items-center justify-between" style={{ userSelect: 'none', WebkitUserSelect: 'none' }}>
                        <span className="text-xs text-gray-400" style={{ userSelect: 'none', WebkitUserSelect: 'none' }}>{aiTestAnswer.length} characters</span>
                        <button
                          onClick={gradeAiTestAnswer}
                          disabled={!aiTestAnswer.trim() || aiTestLoading}
                          className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:from-indigo-700 hover:to-violet-700 transition disabled:opacity-40 flex items-center gap-2"
                        >
                          {aiTestLoading ? (
                            <React.Fragment>
                              <div className="flex gap-1">{[0,1,2].map(i => (<div key={i} className="w-1.5 h-1.5 rounded-full bg-white" style={{ animation: `chatBounce 1.2s ease-in-out ${i*0.15}s infinite` }} />))}</div>
                              Grading...
                            </React.Fragment>
                          ) : 'Submit Answer'}
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Feedback */}
                  {aiTestFeedback && (
                    <div className="mt-4 space-y-3">
                      <div className={`text-center p-4 rounded-xl ${
                        (aiTestFeedback.score >= 8) ? 'bg-green-50 border border-green-200' :
                        (aiTestFeedback.score >= 5) ? 'bg-yellow-50 border border-yellow-200' :
                        'bg-red-50 border border-red-200'
                      }`}>
                        <div className="text-3xl font-bold mb-1">{aiTestFeedback.score}/10</div>
                        <div className="text-sm text-gray-600">
                          {aiTestFeedback.score >= 8 ? '🎉 Excellent!' : aiTestFeedback.score >= 5 ? '👍 Good effort!' : '💪 Keep practicing!'}
                        </div>
                      </div>

                      {aiTestFeedback.highlights && (
                        <div className="p-3 bg-green-50 rounded-lg">
                          <div className="text-xs font-semibold text-green-700 mb-1">✅ What you did well:</div>
                          <div className="text-sm text-green-800">{aiTestFeedback.highlights}</div>
                        </div>
                      )}

                      {aiTestFeedback.feedback && (
                        <div className="p-3 bg-blue-50 rounded-lg">
                          <div className="text-xs font-semibold text-blue-700 mb-1">📝 Feedback:</div>
                          <div className="text-sm text-blue-800">{aiTestFeedback.feedback}</div>
                        </div>
                      )}

                      {aiTestFeedback.corrected && (
                        <div className="p-3 bg-purple-50 rounded-lg">
                          <div className="text-xs font-semibold text-purple-700 mb-1">✍️ Corrected version:</div>
                          <div className="text-lg text-purple-900" style={{ fontFamily: 'serif', lineHeight: 1.8 }}>{aiTestFeedback.corrected}</div>
                        </div>
                      )}

                      <div className="flex gap-3 pt-2">
                        <button
                          onClick={() => { setAiTestQuestion(null); setAiTestFeedback(null); setAiTestAnswer(''); generateAiTestQuestion(); }}
                          className="flex-1 bg-gradient-to-r from-indigo-600 to-violet-600 text-white py-3 rounded-xl font-semibold hover:from-indigo-700 hover:to-violet-700 transition"
                        >
                          Next Question →
                        </button>
                        <button
                          onClick={() => setAiTestSetupStep('results')}
                          className="bg-gray-200 text-gray-700 px-4 py-3 rounded-xl font-semibold hover:bg-gray-300 transition"
                        >
                          Finish
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Step 4: Results */}
          {aiTestSetupStep === 'results' && (
            <div>
              <div className="bg-white rounded-xl shadow-lg p-6 mb-6 text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Practice Complete!</h2>
                <div className="text-4xl font-bold text-indigo-600 mb-1">
                  {aiTestScore.length > 0 ? (aiTestScore.reduce((sum, s) => sum + (Number(s.feedback?.score) || 0), 0) / aiTestScore.length).toFixed(1) : '—'}/10
                </div>
                <div className="text-sm text-gray-500">Average across {aiTestScore.length} question{aiTestScore.length !== 1 ? 's' : ''}</div>
              </div>

              <div className="space-y-3 mb-6">
                {aiTestScore.map((item, i) => (
                  <details key={i} className="bg-white rounded-xl shadow overflow-hidden">
                    <summary className="p-4 cursor-pointer hover:bg-gray-50 flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">Q{item.questionNum}: {item.question?.prompt?.substring(0, 50)}...</span>
                      <span className={`font-bold ${(item.feedback?.score >= 8) ? 'text-green-600' : (item.feedback?.score >= 5) ? 'text-yellow-600' : 'text-red-600'}`}>
                        {item.feedback?.score}/10
                      </span>
                    </summary>
                    <div className="px-4 pb-4 border-t border-gray-100 pt-3 text-sm space-y-2">
                      <div><strong>Your answer:</strong> <span style={{ fontFamily: 'serif' }}>{item.answer}</span></div>
                      {item.feedback?.corrected && <div><strong>Corrected:</strong> <span style={{ fontFamily: 'serif' }}>{item.feedback.corrected}</span></div>}
                      {item.feedback?.feedback && <div className="text-gray-600">{item.feedback.feedback}</div>}
                    </div>
                  </details>
                ))}
              </div>

              <div className="flex gap-3">
                <button onClick={() => { setAiTestSetupStep('inProgress'); setAiTestQuestion(null); setAiTestFeedback(null); setAiTestAnswer(''); generateAiTestQuestion(); }}
                  className="flex-1 bg-gradient-to-r from-indigo-600 to-violet-600 text-white py-3 rounded-xl font-bold transition">
                  Continue Practicing
                </button>
                <button onClick={() => { resetAiTest(); setCurrentView('home'); }}
                  className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-bold hover:bg-gray-300 transition">
                  Back to Home
                </button>
              </div>
            </div>
          )}
        </div>

        <style>{`
          @keyframes chatBounce { 0%, 60%, 100% { transform: translateY(0); opacity: 0.4; } 30% { transform: translateY(-6px); opacity: 1; } }
        `}</style>
        <ChatFAB />
        <ChatSidebar />
      </div>
    );
  }

  // ==========================================
  // STUDY GUIDES VIEW
  // ==========================================
  if (currentView === 'studyGuides') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50 p-4 sm:p-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <button onClick={() => setCurrentView('home')} className="text-gray-600 hover:text-gray-800 flex items-center gap-2 font-semibold">← Home</button>
            <h1 className="text-2xl font-bold text-gray-800">Study Guides</h1>
            <div />
          </div>

          {/* Generate new study guide */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <h2 className="font-bold text-gray-800 mb-3">Generate Study Guide</h2>
            <p className="text-sm text-gray-500 mb-4">Pick a deck and AI will create a comprehensive study guide based on its vocabulary{' '}and 课文 (if attached).</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {decks.filter(d => d.cards.length > 0).map(deck => (
                <button
                  key={deck.id}
                  onClick={() => generateStudyGuide(deck)}
                  disabled={studyGuideLoading}
                  className="text-left p-3 rounded-lg border border-gray-200 hover:border-rose-300 hover:bg-rose-50 transition disabled:opacity-50"
                >
                  <div className="font-semibold text-gray-800 text-sm">{deck.name}</div>
                  <div className="text-xs text-gray-400">{deck.cards.length} cards{deck.kewen ? ' · 课文 ✓' : ''}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Loading */}
          {studyGuideLoading && (
            <div className="bg-white rounded-xl shadow-lg p-8 mb-6 text-center">
              <div className="flex gap-1 justify-center mb-3">
                {[0,1,2].map(i => (
                  <div key={i} className="w-2 h-2 rounded-full bg-rose-500" style={{ animation: `chatBounce 1.2s ease-in-out ${i * 0.15}s infinite` }} />
                ))}
              </div>
              <p className="text-gray-500">AI is generating your study guide...</p>
              <p className="text-gray-400 text-xs mt-1">This may take 10-20 seconds</p>
            </div>
          )}

          {/* Preview unsaved guide */}
          {studyGuidePreview && (
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6 border-2 border-rose-200">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-bold text-gray-800">{studyGuidePreview.deckName}</h3>
                  <div className="text-xs text-rose-500">New — not yet saved</div>
                </div>
                <div className="flex gap-2">
                  <button onClick={saveStudyGuide} className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition text-sm font-medium flex items-center gap-1">
                    <Check size={14} /> Save
                  </button>
                  <button onClick={() => setStudyGuidePreview(null)} className="bg-gray-200 text-gray-600 px-3 py-2 rounded-lg hover:bg-gray-300 transition text-sm">
                    Discard
                  </button>
                </div>
              </div>
              <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed">
                {renderMarkdown(studyGuidePreview.content)}
              </div>
            </div>
          )}

          {/* Saved study guides */}
          {studyGuides.length > 0 ? (
            <div className="space-y-4">
              <h2 className="font-bold text-gray-800">Saved Guides ({studyGuides.length})</h2>
              {studyGuides.map(guide => (
                <details key={guide.id} className="bg-white rounded-xl shadow-lg overflow-hidden group">
                  <summary className="p-4 cursor-pointer hover:bg-gray-50 transition flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-800">{guide.deckName}</div>
                      <div className="text-xs text-gray-400">{new Date(guide.createdAt).toLocaleDateString()}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); deleteStudyGuide(guide.id); }}
                        className="text-gray-300 hover:text-red-500 transition p-1"
                        title="Delete"
                      >
                        <Trash2 size={14} />
                      </button>
                      <ChevronRight size={16} className="text-gray-400 group-open:rotate-90 transition-transform" />
                    </div>
                  </summary>
                  <div className="px-4 pb-4 border-t border-gray-100 pt-4">
                    <div className="text-sm text-gray-700 leading-relaxed">
                      {renderMarkdown(guide.content)}
                    </div>
                  </div>
                </details>
              ))}
            </div>
          ) : !studyGuideLoading && !studyGuidePreview && (
            <div className="text-center text-gray-400 py-12">
              <Brain size={40} className="mx-auto mb-3 opacity-30" />
              <p>No saved study guides yet.</p>
              <p className="text-sm mt-1">Generate one from a deck above!</p>
            </div>
          )}
        </div>

        <style>{`
          @keyframes chatBounce {
            0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
            30% { transform: translateY(-6px); opacity: 1; }
          }
        `}</style>

        <ChatFAB />
        <ChatSidebar />
      </div>
    );
  }

  // ── Sentence Writing Practice View ────────────────────────────────────────
  if (currentView === 'sentencePractice' && sentencePracticeDeck) {
    // No-kewen gate screen
    if (sentencePracticeDeck.noKewen) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50 p-6 flex items-center justify-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
            <div className="text-5xl mb-4">📄</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">No 课文 attached</h2>
            <p className="text-gray-500 mb-4 leading-relaxed">
              This deck doesn't have a 课文 reading text attached yet. To use Sentence Writing, you need the full deck JSON with 课文 included.
            </p>
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 mb-6 text-left">
              <p className="text-sm font-semibold text-teal-800 mb-2">📚 CHI 108 students:</p>
              <p className="text-sm text-teal-700 leading-relaxed">
                Download the full decks JSON (with 课文 attached) from the Google Drive folder linked on the home screen, then use <strong>Import / Export → Import Decks from File</strong> to replace your current deck.
              </p>
              <p className="text-sm text-teal-600 mt-2 leading-relaxed">
                Or tap <strong>"Add 课文"</strong> on the deck card to paste the reading text manually.
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => { setSentencePracticeDeck(null); setCurrentView('home'); }}
                className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
              >← Back</button>
              <button
                onClick={() => {
                  const deck = sentencePracticeDeck.deck;
                  setSentencePracticeDeck(null);
                  setCurrentView('home');
                  setKewenEditDeck(deck);
                  setKewenEditText('');
                  setKewenViewMode('edit');
                }}
                className="flex-1 bg-teal-600 text-white py-3 rounded-xl font-semibold hover:bg-teal-700 transition"
              >+ Add 课文</button>
            </div>
          </div>
        </div>
      );
    }

    const deck = sentencePracticeDeck.deck;
    const currentSentence = sentenceQueue[sentenceIndex] || '';
    const translation = sentenceTranslations[currentSentence];
    const totalSentences = sentenceQueue.length;
    const progress = totalSentences > 0 ? ((sentenceIndex + 1) / totalSentences) * 100 : 0;

    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50 p-4 sm:p-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => { setSentencePracticeDeck(null); setCurrentView('home'); window.speechSynthesis?.cancel(); }}
              className="text-gray-600 hover:text-gray-800 flex items-center gap-2 font-semibold"
            >← Home</button>
            <div className="text-center">
              <h1 className="text-lg font-bold text-gray-800">课文 Sentence Writing</h1>
              <p className="text-xs text-gray-400">{deck.name}</p>
            </div>
            <button
              onClick={shuffleSentences}
              className="text-sm bg-teal-100 hover:bg-teal-200 text-teal-700 px-3 py-1.5 rounded-lg font-medium transition flex items-center gap-1"
              style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
            >🔀 Shuffle</button>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
            <div className="bg-teal-500 h-2 rounded-full transition-all" style={{ width: `${progress}%` }} />
          </div>
          <div className="text-xs text-gray-400 text-right mb-4">{sentenceIndex + 1} / {totalSentences}</div>

          {/* Sentence card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-4">

            {/* English translation */}
            <div className="mb-5">
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">English</div>
              {sentenceTransLoading ? (
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <div className="flex gap-1">{[0,1,2].map(i => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-teal-400" style={{ animation: `chatBounce 1.2s ease-in-out ${i*0.15}s infinite` }} />
                  ))}</div>
                  Fetching translations...
                </div>
              ) : (
                <p className="text-base text-gray-700 leading-relaxed">{translation || '—'}</p>
              )}
            </div>

            {/* Chinese sentence reveal */}
            <div className="mb-5">
              <div className="flex items-center justify-between mb-2">
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Chinese</div>
                <div className="flex gap-2" style={{ userSelect: 'none', WebkitUserSelect: 'none' }}>
                  <button
                    onClick={() => speakChinese(currentSentence)}
                    className="text-xs bg-teal-50 hover:bg-teal-100 text-teal-700 px-2.5 py-1 rounded-lg border border-teal-200 transition font-medium flex items-center gap-1"
                    style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
                  >🔊 Pronounce</button>
                  <button
                    onClick={() => setSentenceRevealed(r => !r)}
                    className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-2.5 py-1 rounded-lg transition font-medium"
                    style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
                  >{sentenceRevealed ? '🙈 Hide' : '👁 Reveal'}</button>
                </div>
              </div>
              {sentenceRevealed ? (
                <p className="text-xl leading-relaxed text-gray-800 p-3 bg-teal-50 rounded-xl border border-teal-100" style={{ fontFamily: 'serif' }}>
                  {currentSentence}
                </p>
              ) : (
                <div className="h-10 bg-gray-100 rounded-xl flex items-center px-4">
                  <span className="text-gray-400 text-sm">Hidden — write it first, then reveal to check</span>
                </div>
              )}
            </div>

            {/* Input mode toggle */}
            <div className="flex gap-2 mb-3" style={{ userSelect: 'none', WebkitUserSelect: 'none' }}>
              <button
                onClick={() => setSentenceInputMode('type')}
                className={`flex-1 py-2 rounded-lg text-sm font-medium transition ${sentenceInputMode === 'type' ? 'bg-teal-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
              >⌨️ Type</button>
              <button
                onClick={() => setSentenceInputMode('handwrite')}
                className={`flex-1 py-2 rounded-lg text-sm font-medium transition ${sentenceInputMode === 'handwrite' ? 'bg-teal-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
              >✍️ Handwrite</button>
            </div>

            {/* Typing textarea */}
            {sentenceInputMode === 'type' && (
              <textarea
                value={sentenceAnswer}
                onChange={e => setSentenceAnswer(e.target.value)}
                placeholder="写出这个句子..."
                className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-teal-400 resize-none text-gray-800"
                style={{ fontFamily: 'serif', lineHeight: 1.8, minHeight: '120px', fontSize: '18px' }}
              />
            )}

            {/* Handwriting canvas */}
            {sentenceInputMode === 'handwrite' && (
              <div className="mb-2">
                <div
                  className="border-2 border-gray-300 rounded-xl overflow-hidden mb-2"
                  style={{ touchAction: 'none', position: 'relative', height: '640px', userSelect: 'none', WebkitUserSelect: 'none', WebkitTouchCallout: 'none', WebkitTapHighlightColor: 'transparent' }}
                >
                  <canvas
                    ref={sentenceBgCanvasRef}
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block', pointerEvents: 'none' }}
                  />
                  <canvas
                    ref={sentenceCanvasRef}
                    onPointerDown={sentenceCanvasPointerDown}
                    onPointerMove={sentenceCanvasPointerMove}
                    onPointerUp={sentenceCanvasPointerUp}
                    onPointerLeave={sentenceCanvasPointerUp}
                    onSelectStart={e => e.preventDefault()}
                    onDragStart={e => e.preventDefault()}
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', cursor: sentenceEraserOn ? 'cell' : 'crosshair', touchAction: 'none', userSelect: 'none', WebkitUserSelect: 'none', WebkitTouchCallout: 'none', WebkitTapHighlightColor: 'transparent', display: 'block' }}
                  />
                </div>
                <div className="flex gap-2" style={{ userSelect: 'none', WebkitUserSelect: 'none' }}>
                  <button
                    onClick={() => { sentenceDrawCtrl.current.isErasing = false; setSentenceEraserOn(false); }}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition ${!sentenceEraserOn ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-600'}`}
                    style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
                  >✏️ Pen</button>
                  <button
                    onClick={() => { sentenceDrawCtrl.current.isErasing = true; setSentenceEraserOn(true); }}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition ${sentenceEraserOn ? 'bg-teal-600 text-white' : 'bg-gray-100 text-gray-600'}`}
                    style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
                  >🧹 Eraser</button>
                  <button
                    onClick={clearSentenceCanvas}
                    className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-100 text-gray-600 hover:bg-gray-200 transition"
                    style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
                  >🗑️ Clear</button>
                </div>
              </div>
            )}

            {/* I Forgot / I Know This */}
            <div className="flex gap-3 mt-5" style={{ userSelect: 'none', WebkitUserSelect: 'none' }}>
              <button
                onClick={sentenceForgot}
                className="flex-1 bg-gradient-to-r from-red-400 to-red-500 text-white py-3 rounded-xl font-semibold hover:from-red-500 hover:to-red-600 transition-all"
                style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
              >😓 I Forgot</button>
              <button
                onClick={advanceSentence}
                className="flex-1 bg-gradient-to-r from-teal-500 to-teal-600 text-white py-3 rounded-xl font-semibold hover:from-teal-600 hover:to-teal-700 transition-all"
                style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
              >✓ I Know This</button>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes chatBounce {
            0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
            30% { transform: translateY(-6px); opacity: 1; }
          }
        `}</style>
        <ChatFAB />
        <ChatSidebar />
      </div>
    );
  }

  return null;
};

        // Render the app
        const root = ReactDOM.createRoot(document.getElementById('root'));

        const AppWithToast = () => {
          const [toast, setToast] = React.useState(false);
          const timerRef = React.useRef(null);

          // Expose a global trigger so ChineseLearningApp can fire it
          React.useEffect(() => {
            window.__showEduroamToast = () => {
              setToast(true);
              if (timerRef.current) clearTimeout(timerRef.current);
              timerRef.current = setTimeout(() => setToast(false), 9000);
            };
            return () => { delete window.__showEduroamToast; };
          }, []);

          return (
            <React.Fragment>
              <ChineseLearningApp />
              {toast && (
                <div style={{
                  position: 'fixed', bottom: 24, left: '50%', transform: 'translateX(-50%)',
                  zIndex: 9999, maxWidth: 420, width: 'calc(100% - 32px)',
                  background: '#1c1a0e', border: '1px solid rgba(251,191,36,0.5)',
                  borderRadius: 14, padding: '12px 16px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                  display: 'flex', alignItems: 'flex-start', gap: 10,
                  animation: 'toastSlideUp 0.25s ease',
                }}>
                  <span style={{ fontSize: 18, flexShrink: 0, marginTop: 1 }}>⚠️</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ color: '#fbbf24', fontWeight: 700, fontSize: 13, marginBottom: 3 }}>
                      AI unavailable — on eduroam?
                    </div>
                    <div style={{ color: '#d4b96a', fontSize: 12, lineHeight: 1.5 }}>
                      eduroam blocks Puter.js. Fix: switch to <strong style={{color:'#fde68a'}}>hotspot</strong>, use a <strong style={{color:'#fde68a'}}>VPN</strong>, or change your <strong style={{color:'#fde68a'}}>DNS</strong> (e.g. 8.8.8.8).
                    </div>
                  </div>
                  <button onClick={() => setToast(false)}
                    style={{ background: 'none', border: 'none', color: '#888', cursor: 'pointer', fontSize: 16, padding: '0 0 0 4px', flexShrink: 0, lineHeight: 1 }}>✕</button>
                </div>
              )}
              <style>{`
                @keyframes toastSlideUp {
                  from { opacity: 0; transform: translateX(-50%) translateY(12px); }
                  to   { opacity: 1; transform: translateX(-50%) translateY(0); }
                }
              `}</style>
            </React.Fragment>
          );
        };

        root.render(<AppWithToast />);
