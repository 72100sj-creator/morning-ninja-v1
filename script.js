const EXERCISES = [
    {
        name: "1. Respiration consciente",
        desc: "Assis ou allongé. Inspirez par le nez en gonflant le ventre, soufflez lentement par la bouche.",
        tip: "Posez les mains sur votre ventre pour ressentir le mouvement du calme.",
        duration: 45,
        speech: "Commencez par une respiration consciente. Inspirez le calme, expirez les tensions.",
        svg: `<svg viewBox="0 0 100 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#4a90e2" />
                    <stop offset="100%" stop-color="#50e3c2" />
                </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="35" fill="url(#grad1)" opacity="0.15"/>
            <circle cx="50" cy="50" r="22" fill="none" stroke="url(#grad1)" stroke-width="3" stroke-linecap="round">
                <animate attributeName="r" values="16;28;16" dur="4s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.4;1;0.4" dur="4s" repeatCount="indefinite"/>
            </circle>
            <circle cx="50" cy="50" r="6" fill="url(#grad1)"/>
        </svg>`
    },
    {
        name: "2. Bascule du bassin",
        desc: "Allongé sur le dos, genoux pliés. Plaquez doucement le bas du dos au sol, puis relâchez.",
        tip: "Mouvement très léger, idéal pour masser et libérer les lombaires.",
        duration: 45,
        speech: "Bascule du bassin. Pressez doucement le bas du dos contre le sol en soufflant.",
        svg: `<svg viewBox="0 0 100 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#ff9f43" />
                    <stop offset="100%" stop-color="#ff6b6b" />
                </linearGradient>
            </defs>
            <path d="M15 75 C 35 75, 45 55, 85 75" fill="none" stroke="#e0e0e0" stroke-width="3" stroke-linecap="round"/>
            <path d="M25 75 C 40 75, 50 62, 75 75" fill="none" stroke="url(#grad2)" stroke-width="5" stroke-linecap="round">
                <animate attributeName="d" values="M25 75 C 40 75, 50 62, 75 75; M25 75 C 40 75, 50 74, 75 75; M25 75 C 40 75, 50 62, 75 75" dur="4s" repeatCount="indefinite"/>
            </path>
            <circle cx="50" cy="68" r="4" fill="#ff6b6b">
                <animate attributeName="cy" values="65;74;65" dur="4s" repeatCount="indefinite"/>
            </circle>
        </svg>`
    },
    {
        name: "3. Chat / Vache",
        desc: "À quatre pattes. Arrondissez le dos en regardant vos genoux, puis creusez-le doucement en ouvrant la poitrine.",
        tip: "Ne forcez pas sur le creux. Bougez au rythme de votre respiration.",
        duration: 50,
        speech: "Position du Chat et de la Vache. Enroulez et déroulez votre colonne vertébrale.",
        svg: `<svg viewBox="0 0 100 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#1dd1a1" />
                    <stop offset="100%" stop-color="#10ac84" />
                </linearGradient>
            </defs>
            <path d="M20 65 Q 50 40, 80 65" fill="none" stroke="url(#grad3)" stroke-width="5" stroke-linecap="round">
                <animate attributeName="d" values="M20 65 Q 50 40, 80 65; M20 60 Q 50 75, 80 60; M20 65 Q 50 40, 80 65" dur="5s" repeatCount="indefinite"/>
            </path>
            <line x1="30" y1="63" x2="30" y2="82" stroke="#48dbfb" stroke-width="4" stroke-linecap="round"/>
            <line x1="70" y1="63" x2="70" y2="82" stroke="#48dbfb" stroke-width="4" stroke-linecap="round"/>
        </svg>`
    },
    {
        name: "4. Bird Dog (Oiseau-Chien)",
        desc: "À quatre pattes. Tendez le bras droit devant et la jambe gauche derrière en gardant le dos bien droit. Changez de côté.",
        tip: "Cherchez à vous grandir plutôt qu'à monter les membres trop haut.",
        duration: 50,
        speech: "L'Oiseau Chien. Tendez un bras et la jambe opposée pour stabiliser le dos.",
        svg: `<svg viewBox="0 0 100 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#a55eea" />
                    <stop offset="100%" stop-color="#4b7bec" />
                </linearGradient>
            </defs>
            <rect x="35" y="52" width="30" height="6" rx="3" fill="#20bf6b"/>
            <path d="M15 55 L 35 55 M 65 55 L 85 55" fill="none" stroke="url(#grad4)" stroke-width="4" stroke-linecap="round">
                <animate attributeName="stroke-width" values="4;2;4" dur="4s" repeatCount="indefinite"/>
            </path>
            <line x1="42" y1="58" x2="42" y2="78" stroke="#ccc" stroke-width="4" stroke-linecap="round"/>
            <line x1="58" y1="58" x2="58" y2="78" stroke="#ccc" stroke-width="4" stroke-linecap="round"/>
        </svg>`
    },
    {
        name: "5. Ouverture des hanches",
        desc: "Un genou à terre, faites un pas en avant. Avancez doucement le bassin pour étirer l'avant de la cuisse. Alternez à mi-temps.",
        tip: "Gardez le buste bien droit et fier, respirez tranquillement.",
        duration: 50,
        speech: "Ouverture des hanches. Étirez le psoas pour libérer les tensions du bas du dos.",
        svg: `<svg viewBox="0 0 100 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#ff4757" />
                    <stop offset="100%" stop-color="#ff6b81" />
                </linearGradient>
            </defs>
            <path d="M25 75 L 50 75 L 75 45 L 75 25" fill="none" stroke="url(#grad5)" stroke-width="5" stroke-linecap="round"/>
            <circle cx="75" cy="16" r="6" fill="#ffa502"/>
            <circle cx="50" cy="75" r="3" fill="#fff"/>
        </svg>`
    },
    {
        name: "6. Pont fessier",
        desc: "Allongé sur le dos, montez le bassin vers le ciel en pushing sur vos pieds. Alignez genoux, hanches et épaules.",
        tip: "Contractez légèrement les fessiers en haut sans cambrer excessivement.",
        duration: 45,
        speech: "Le pont fessier. Montez le bassin en douceur pour réveiller l'arrière du corps.",
        svg: `<svg viewBox="0 0 100 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="grad6" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#2ed573" />
                    <stop offset="100%" stop-color="#7bed9f" />
                </linearGradient>
            </defs>
            <path d="M15 75 L 50 75 L 85 75" fill="none" stroke="#e0e0e0" stroke-width="2"/>
            <path d="M15 75 L 50 50 L 85 75" fill="none" stroke="url(#grad6)" stroke-width="5" stroke-linecap="round">
                <animate attributeName="d" values="M15 75 L 50 75 L 85 75; M15 75 L 50 48 L 85 75; M15 75 L 50 75 L 85 75" dur="4s" repeatCount="indefinite"/>
            </path>
        </svg>`
    },
    {
        name: "7. Rotation thoracique",
        desc: "À quatre pattes, posez une main derrière la tête. Amenez le coude vers le ciel en tournant le haut du dos, puis revenez.",
        tip: "Suivez le mouvement du coude avec votre regard. Changez de côté à votre rythme.",
        duration: 50,
        speech: "Rotation thoracique. Ouvrez le haut du dos pour libérer la respiration.",
        svg: `<svg viewBox="0 0 100 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="grad7" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#1e90ff" />
                    <stop offset="100%" stop-color="#70a1ff" />
                </linearGradient>
            </defs>
            <line x1="25" y1="65" x2="75" y2="65" stroke="#ccc" stroke-width="4" stroke-linecap="round"/>
            <path d="M50 65 L 75 35" fill="none" stroke="url(#grad7)" stroke-width="5" stroke-linecap="round">
                <animateTransform attributeName="transform" type="rotate" from="0 50 65" to="-40 50 65" dur="3s" repeatCount="indefinite" alternate="yes"/>
            </path>
            <circle cx="50" cy="65" r="4" fill="#ff4757"/>
        </svg>`
    },
    {
        name: "8. Étirement des ischio-jambiers",
        desc: "Allongé sur le dos, attrapez l'arrière d'une cuisse avec vos mains et tendez doucement la jambe vers le ciel.",
        tip: "Gardez le pied souple. L'étirement doit être progressif et ne jamais faire mal.",
        duration: 45,
        speech: "Étirement de l'arrière des cuisses. Allez-y très doucement, sans à-coups.",
        svg: `<svg viewBox="0 0 100 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="grad8" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#ffa502" />
                    <stop offset="100%" stop-color="#ff7f50" />
                </linearGradient>
            </defs>
            <line x1="15" y1="75" x2="75" y2="75" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
            <line x1="45" y1="75" x2="45" y2="30" stroke="url(#grad8)" stroke-width="5" stroke-linecap="round">
                <animate attributeName="x2" values="45;58;45" dur="4s" repeatCount="indefinite"/>
            </line>
        </svg>`
    },
    {
        name: "9. Ouverture des épaules",
        desc: "Debout ou à genoux, entrelacez vos doigts derrière le dos. Ouvrez la poitrine et reculez doucement les épaules.",
        tip: "Sentez l'ouverture du cœur et l'espace qui se crée au niveau des clavicules.",
        duration: 40,
        speech: "Ouverture des épaules et de la poitrine. Grandissez-vous et respirez.",
        svg: `<svg viewBox="0 0 100 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="grad9" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#3742fa" />
                    <stop offset="100%" stop-color="#f1f2f6" />
                </linearGradient>
            </defs>
            <circle cx="50" cy="28" r="7" fill="#3742fa"/>
            <path d="M50 35 Q 30 48, 50 78" fill="none" stroke="url(#grad9)" stroke-width="5" stroke-linecap="round"/>
            <path d="M50 35 Q 70 42, 58 55" fill="none" stroke="#2ed573" stroke-width="4" stroke-linecap="round"/>
        </svg>`
    },
    {
        name: "10. Respiration finale",
        desc: "Fermez les yeux. Prenez une grande inspiration en levant les bras au ciel, puis relâchez tout en soufflant.",
        tip: "Souriez. Votre corps est maintenant réveillé, disponible et prêt.",
        duration: 40,
        speech: "Terminez par une grande inspiration en montant les bras au ciel. Votre corps est parfaitement réveillé.",
        svg: `<svg viewBox="0 0 100 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="grad10" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#ffd32a" />
                    <stop offset="100%" stop-color="#ff9f43" />
                </linearGradient>
            </defs>
            <circle cx="50" cy="55" r="16" fill="url(#grad10)" opacity="0.8">
                <animate attributeName="r" values="12;20;12" dur="4s" repeatCount="indefinite"/>
            </circle>
            <path d="M15 45 Q 50 15, 85 45" fill="none" stroke="#ffaf40" stroke-width="3" stroke-dasharray="5 5"/>
        </svg>`
    }
];

const QUOTES = [
    "La meilleure journée commence par quelques minutes pour soi.",
    "Chaque matin est une nouvelle opportunité.",
    "La mobilité est un investissement pour toute la journée.",
    "Le secret pour avancer, c'est de commencer en douceur.",
    "Un pas après l'autre, vous construisez un corps plus fort et souple.",
    "Écouter son corps est la plus belle preuve de bienveillance.",
    "Le calme matinal prépare la force du jour.",
    "La régularité bat l'intensité. Bravo pour aujourd'hui.",
    "Prendre soin de son dos, c'est préserver sa liberté de bouger.",
    "Votre corps vous remercie déjà pour ce moment de douceur.",
    "Le mouvement, c'est la vie. La fluidité, c'est le bien-être.",
    "Commencer la journée dans le calme permet de traverser la tempête avec sérénité.",
    "Chaque réveil est un lever de soleil intérieur.",
    "La souplesse de l'esprit commence par la mobilité du corps.",
    "Offrez à votre corps la fluidité qu'il mérite.",
    "Un réveil paisible annonce une journée claire.",
    "Rien n'est plus puissant qu'une habitude douce pratiquée avec constance.",
    "Cultivez le calme, la force suivra naturellement.",
    "Aujourd'hui, offrez-vous le droit d'avancer à votre rythme.",
    "Votre bien-être est votre priorité absolue ce matin.",
    "Un esprit serein dans un corps délié.",
    "Faites de votre matinée un sanctuaire de tranquillité.",
    "La santé s'entretient par de petits gestes quotidiens.",
    "Soyez fier d'avoir pris ces quelques minutes pour vous.",
    "Le matin est la page blanche de votre journée. Écrivez-la bien.",
    "La mobilité protège, la rigidité fragilise. Restez fluide.",
    "Respirez, bougez, vivez pleinement.",
    "La paix commence au moment où vous décidez de prendre soin de vous.",
    "Un corps réveillé en douceur est prêt pour toutes les aventures.",
    "Que votre journée soit aussi fluide et agréable que votre routine."
];

let currentExerciseIndex = 0;
let exerciseTimerInterval = null;
let timeLeft = 0;
let isPaused = false;
let isTransitioning = false;
let wakeLock = null;
let cachedVoice = null; // Mémoire tampon pour bloquer la voix féminine d'iOS

let settings = { voiceEnabled: true };
let historyData = { totalRoutines: 0, currentStreak: 0, bestStreak: 0, lastSessionDate: "" };

document.addEventListener("DOMContentLoaded", () => {
    loadDataFromStorage();
    setupEventListeners();
    updateHomeStatsDisplay();
});

function loadDataFromStorage() {
    const savedSettings = localStorage.getItem("morning_ninja_settings");
    if (savedSettings) {
        settings = JSON.parse(savedSettings);
        document.getElementById("toggle-voice").checked = settings.voiceEnabled;
    }
    const savedHistory = localStorage.getItem("morning_ninja_history");
    if (savedHistory) {
        historyData = JSON.parse(savedHistory);
    }
}

function saveDataToStorage() {
    localStorage.setItem("morning_ninja_settings", JSON.stringify(settings));
    localStorage.setItem("morning_ninja_history", JSON.stringify(historyData));
}

function showScreen(screenId) {
    document.querySelectorAll(".screen").forEach(screen => screen.classList.remove("active"));
    const target = document.getElementById(screenId);
    if (target) {
        target.classList.add("active");
        window.scrollTo(0, 0);
    }
}

function setupEventListeners() {
    document.getElementById("btn-start").addEventListener("click", () => {
        initAudioIOS();
        startPreparationCountdown();
    });
    document.getElementById("btn-settings-open").addEventListener("click", () => showScreen("screen-settings"));
    document.getElementById("toggle-voice").addEventListener("change", (e) => {
        settings.voiceEnabled = e.target.checked;
        saveDataToStorage();
    });
    document.getElementById("btn-reset-data").addEventListener("click", () => {
        if (confirm("Voulez-vous vraiment effacer tout votre historique ?")) {
            historyData = { totalRoutines: 0, currentStreak: 0, bestStreak: 0, lastSessionDate: "" };
            saveDataToStorage();
            updateHomeStatsDisplay();
            alert("Données réinitialisées.");
        }
    });
    document.getElementById("btn-settings-close").addEventListener("click", () => showScreen("screen-home"));
    document.getElementById("btn-pause").addEventListener("click", togglePause);
    document.getElementById("btn-next").addEventListener("click", forceNextExercise);
    document.getElementById("btn-prev").addEventListener("click", previousExercise);
    document.getElementById("btn-stop").addEventListener("click", () => {
        if (confirm("Arrêter la séance en cours ? VOS PROGRÈS NE SERONT PAS SAUVÉS.")) {
            stopWorkoutSession();
            showScreen("screen-home");
        }
    });
    document.getElementById("btn-home-return").addEventListener("click", () => showScreen("screen-home"));
}

function initAudioIOS() {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance("");
        window.speechSynthesis.speak(utterance);
    }
}

// CORRECTION ICI : La fonction recherche et mémorise la voix féminine pour empêcher le bug iOS
function speakText(text) {
    if (!settings.voiceEnabled || !('speechSynthesis' in window)) return;
    
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "fr-FR";
    utterance.rate = 0.75; // Rythme lent et relaxant
    
    if (!cachedVoice) {
        const voices = window.speechSynthesis.getVoices();
        cachedVoice = voices.find(v => v.lang.includes("fr") && 
            (v.name.toLowerCase().includes("amelie") || 
             v.name.toLowerCase().includes("aurelie") || 
             v.name.toLowerCase().includes("siri") ||
             v.name.toLowerCase().includes("premium") ||
             v.name.toLowerCase().includes("google")));
             
        if (!cachedVoice) {
            cachedVoice = voices.find(v => v.lang.includes("fr") && 
                (v.name.toLowerCase().includes("chantal") || v.name.toLowerCase().includes("audrey")));
        }
        if (!cachedVoice) {
            cachedVoice = voices.find(v => v.lang.includes("fr"));
        }
    }
    
    if (cachedVoice) {
        utterance.voice = cachedVoice;
    }
    window.speechSynthesis.speak(utterance);
}

if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = () => {
        const voices = window.speechSynthesis.getVoices();
        if (!cachedVoice) {
            cachedVoice = voices.find(v => v.lang.includes("fr") && 
                (v.name.toLowerCase().includes("amelie") || 
                 v.name.toLowerCase().includes("aurelie") ||
                 v.name.toLowerCase().includes("siri")));
        }
    };
}

function startPreparationCountdown() {
    showScreen("screen-prepare");
    let count = 3;
    const countDisplay = document.getElementById("countdown-display");
    const textDisplay = document.getElementById("countdown-text");
    
    countDisplay.textContent = count;
    textDisplay.textContent = "Trouvez votre position, respirez.";
    speakText("Préparez-vous. Respire profondément.");

    const countdownInterval = setInterval(() => {
        count--;
        if (count > 0) {
            countDisplay.textContent = count;
        } else if (count === 0) {
            countDisplay.textContent = "🌅";
            textDisplay.textContent = "C'est parti !";
            speakText("C'est parti.");
        } else {
            clearInterval(countdownInterval);
            startWorkoutSession();
        }
    }, 1200);
}

function startWorkoutSession() {
    currentExerciseIndex = 0;
    isPaused = false;
    isTransitioning = false;
    requestWakeLock();
    showScreen("screen-workout");
    loadExercise(currentExerciseIndex);
}

function loadExercise(index) {
    if (index < 0 || index >= EXERCISES.length) return;
    const ex = EXERCISES[index];
    
    isTransitioning = false;
    document.getElementById("ex-name").textContent = ex.name;
    document.getElementById("ex-desc").textContent = ex.desc;
    document.getElementById("ex-tip").textContent = ex.tip;
    document.getElementById("ex-illustration").innerHTML = ex.svg;
    
    timeLeft = ex.duration;
    document.getElementById("ex-timer").textContent = timeLeft;
    
    const progressPercent = (index / EXERCISES.length) * 100;
    document.getElementById("workout-progress-fill").style.width = `${progressPercent}%`;
    document.getElementById("workout-exercise-counter").textContent = `${index + 1} / ${EXERCISES.length}`;
    
    isPaused = false;
    document.getElementById("btn-pause").textContent = "⏸️ Pause";
    
    speakText(ex.speech);
    startExerciseTimer();
}

function startTransitionToNext() {
    if (currentExerciseIndex >= EXERCISES.length - 1) {
        finishWorkoutSession();
        return;
    }

    isTransitioning = true;
    clearInterval(exerciseTimerInterval);
    
    currentExerciseIndex++;
    const nextEx = EXERCISES[currentExerciseIndex];
    
    document.getElementById("ex-name").textContent = `Prochain : ${nextEx.name}`;
    document.getElementById("ex-desc").textContent = "Mise en place... Prenez votre position.";
    document.getElementById("ex-tip").textContent = "Profitez de ces quelques secondes pour respirer.";
    document.getElementById("ex-illustration").innerHTML = nextEx.svg;
    
    timeLeft = 5; // Pause de transition de 5 secondes
    document.getElementById("ex-timer").textContent = timeLeft;
    
    speakText(`Attention, prochain exercice : ${nextEx.name}. Mettez-vous en place.`);
    
    exerciseTimerInterval = setInterval(() => {
        if (!isPaused) {
            timeLeft--;
            document.getElementById("ex-timer").textContent = timeLeft;
            if (timeLeft <= 0) {
                clearInterval(exerciseTimerInterval);
                loadExercise(currentExerciseIndex);
            }
        }
    }, 1000);
}

function startExerciseTimer() {
    clearInterval(exerciseTimerInterval);
    exerciseTimerInterval = setInterval(() => {
        if (!isPaused) {
            timeLeft--;
            document.getElementById("ex-timer").textContent = timeLeft;
            if (timeLeft <= 0) {
                clearInterval(exerciseTimerInterval);
                startTransitionToNext();
            }
        }
    }, 1000);
}

function togglePause() {
    isPaused = !isPaused;
    const btn = document.getElementById("btn-pause");
    if (isPaused) {
        btn.textContent = "▶️ Reprendre";
        speakText("Session en pause.");
    } else {
        btn.textContent = "⏸️ Pause";
        speakText("C'est reparti.");
    }
}

function forceNextExercise() {
    clearInterval(exerciseTimerInterval);
    if (isTransitioning) {
        loadExercise(currentExerciseIndex);
    } else {
        if (currentExerciseIndex < EXERCISES.length - 1) {
            startTransitionToNext();
        } else {
            finishWorkoutSession();
        }
    }
}

function previousExercise() {
    if (currentExerciseIndex > 0) {
        clearInterval(exerciseTimerInterval);
        currentExerciseIndex--;
        loadExercise(currentExerciseIndex);
    }
}

function stopWorkoutSession() {
    clearInterval(exerciseTimerInterval);
    releaseWakeLock();
}

function finishWorkoutSession() {
    stopWorkoutSession();
    updateUserStreaks();
    const randomQuote = QUOTES[Math.floor(Math.random() * QUOTES.length)];
    document.getElementById("congrats-quote").textContent = `« ${randomQuote} »`;
    speakText("Routine terminée. Bravo et excellente journée.");
    showScreen("screen-congrats");
    updateHomeStatsDisplay();
}

function updateUserStreaks() {
    const todayStr = getTodayDateString();
    const lastSession = historyData.lastSessionDate;
    historyData.totalRoutines += 1;
    
    if (lastSession === "") {
        historyData.currentStreak = 1;
    } else if (lastSession === todayStr) {
        // Déjà fait aujourd'hui
    } else if (lastSession === getYesterdayDateString()) {
        historyData.currentStreak += 1;
    } else {
        historyData.currentStreak = 1;
    }
    
    if (historyData.currentStreak > historyData.bestStreak) {
        historyData.bestStreak = historyData.currentStreak;
    }
    historyData.lastSessionDate = todayStr;
    saveDataToStorage();
}

function updateHomeStatsDisplay() {
    document.getElementById("stat-current-streak").textContent = historyData.currentStreak;
    document.getElementById("stat-best-streak").textContent = historyData.bestStreak;
    document.getElementById("stat-total-routines").textContent = historyData.totalRoutines;
    
    const last = historyData.lastSessionDate;
    if (last === "") {
        document.getElementById("stat-last-session").textContent = "Dernière séance : Aucune";
    } else {
        const parts = last.split("-");
        document.getElementById("stat-last-session").textContent = `Dernière séance : ${parts[2]}/${parts[1]}/${parts[0]}`;
    }
}

function getTodayDateString() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function getYesterdayDateString() {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

async function requestWakeLock() {
    if ('wakeLock' in navigator) {
        try { wakeLock = await navigator.wakeLock.request('screen'); } catch (err) {}
    }
}

function releaseWakeLock() {
    if (wakeLock !== null) {
        wakeLock.release().then(() => wakeLock = null);
    }
}