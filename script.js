const EXERCISES = [
    {
        name: "1. Respiration consciente",
        desc: "Assis ou allongé. Inspirez par le nez en gonflant le ventre, soufflez lentement.",
        tip: "Ressentez l'air frais qui entre, le calme qui s'installe.",
        duration: 45,
        speech: "Commencez par une respiration consciente. Inspirez le calme, expirez les tensions.",
        svg: `<svg viewBox="0 0 100 100" width="100%" height="100%"><circle cx="50" cy="50" r="35" fill="#c5a059" opacity="0.1"><animate attributeName="r" values="30;38;30" dur="5s" repeatCount="indefinite"/></circle><circle cx="50" cy="50" r="2" fill="#c5a059"/></svg>`
    },
    {
        name: "2. Bascule du bassin",
        desc: "Allongé, genoux pliés. Plaquez le bas du dos au sol, puis relâchez.",
        tip: "Un massage interne pour libérer vos lombaires.",
        duration: 45,
        speech: "Bascule du bassin. Pressez doucement le bas du dos contre le sol en soufflant.",
        svg: `<svg viewBox="0 0 100 100" width="100%" height="100%"><path d="M20 60 Q 50 40, 80 60" fill="none" stroke="#c5a059" stroke-width="2" stroke-linecap="round"><animate attributeName="d" values="M20 60 Q 50 40, 80 60; M20 60 Q 50 58, 80 60; M20 60 Q 50 40, 80 60" dur="4s" repeatCount="indefinite"/></path></svg>`
    },
    {
        name: "3. Chat / Vache",
        desc: "À quatre pattes. Arrondissez le dos, puis creusez-le doucement.",
        tip: "Fluidifiez votre colonne vertébrale comme de l'eau.",
        duration: 50,
        speech: "Position du Chat et de la Vache. Enroulez et déroulez votre colonne vertébrale.",
        svg: `<svg viewBox="0 0 100 100" width="100%" height="100%"><path d="M20 50 Q 50 20, 80 50" fill="none" stroke="#c5a059" stroke-width="2" stroke-linecap="round"><animate attributeName="d" values="M20 50 Q 50 20, 80 50; M20 40 Q 50 70, 80 40; M20 50 Q 50 20, 80 50" dur="6s" repeatCount="indefinite"/></path></svg>`
    },
    {
        name: "4. Bird Dog",
        desc: "À quatre pattes. Tendez bras et jambe opposés. Alternez.",
        tip: "Cherchez la longueur, pas la hauteur.",
        duration: 50,
        speech: "L'Oiseau Chien. Tendez un bras et la jambe opposée pour stabiliser le dos.",
        svg: `<svg viewBox="0 0 100 100" width="100%" height="100%"><line x1="20" y1="50" x2="80" y2="50" stroke="#c5a059" stroke-width="2" stroke-dasharray="4 4"/><circle cx="50" cy="50" r="3" fill="#2c2c2c"/></svg>`
    },
    {
        name: "5. Ouverture des hanches",
        desc: "Un pas en avant, un genou au sol. Avancez doucement le bassin.",
        tip: "Libérez le psoas, le muscle de l'âme.",
        duration: 50,
        speech: "Ouverture des hanches. Étirez le psoas pour libérer le bas du dos.",
        svg: `<svg viewBox="0 0 100 100" width="100%" height="100%"><path d="M30 70 L 50 70 L 70 40 L 70 20" fill="none" stroke="#c5a059" stroke-width="2" stroke-linecap="round"/></svg>`
    },
    {
        name: "6. Pont fessier",
        desc: "Allongé, montez le bassin vers le ciel. Contractez doucement.",
        tip: "Réveillez la force de votre base.",
        duration: 45,
        speech: "Le pont fessier. Montez le bassin en douceur.",
        svg: `<svg viewBox="0 0 100 100" width="100%" height="100%"><path d="M15 70 L 50 40 L 85 70" fill="none" stroke="#c5a059" stroke-width="2" stroke-linecap="round"><animate attributeName="d" values="M15 70 L 50 70 L 85 70; M15 70 L 50 40 L 85 70; M15 70 L 50 70 L 85 70" dur="5s" repeatCount="indefinite"/></path></svg>`
    },
    {
        name: "7. Rotation thoracique",
        desc: "À quatre pattes, main derrière la tête. Coude vers le ciel.",
        tip: "Ouvrez votre cœur et votre souffle.",
        duration: 50,
        speech: "Rotation thoracique. Ouvrez le haut du dos.",
        svg: `<svg viewBox="0 0 100 100" width="100%" height="100%"><path d="M50 70 L 80 30" fill="none" stroke="#c5a059" stroke-width="2" stroke-linecap="round"><animateTransform attributeName="transform" type="rotate" from="0 50 70" to="-45 50 70" dur="4s" repeatCount="indefinite" alternate="yes"/></path></svg>`
    },
    {
        name: "8. Étirement Ischios",
        desc: "Allongé, tendez une jambe vers le ciel doucement.",
        tip: "De la douceur derrière les jambes, sans forcer.",
        duration: 45,
        speech: "Étirement de l'arrière des cuisses. Allez-y très doucement.",
        svg: `<svg viewBox="0 0 100 100" width="100%" height="100%"><line x1="30" y1="75" x2="70" y2="75" stroke="#ccc" stroke-width="1"/><line x1="50" y1="75" x2="50" y2="35" stroke="#c5a059" stroke-width="2"><animate attributeName="x2" values="50;60;50" dur="4s" repeatCount="indefinite"/></line></svg>`
    },
    {
        name: "9. Ouverture épaules",
        desc: "Entrelacez vos doigts derrière le dos. Ouvrez la poitrine.",
        tip: "Dégagez le poids du monde de vos épaules.",
        duration: 40,
        speech: "Ouverture des épaules. Grandissez-vous.",
        svg: `<svg viewBox="0 0 100 100" width="100%" height="100%"><path d="M50 40 Q 30 60, 50 85" fill="none" stroke="#c5a059" stroke-width="2"/><circle cx="50" cy="30" r="6" fill="#2c2c2c"/></svg>`
    },
    {
        name: "10. Respiration finale",
        desc: "Fermez les yeux. Levez les bras, puis relâchez tout.",
        tip: "Souriez. Vous êtes prêt.",
        duration: 40,
        speech: "Dernière respiration. Vous êtes parfaitement réveillé.",
        svg: `<svg viewBox="0 0 100 100" width="100%" height="100%"><circle cx="50" cy="50" r="15" fill="#c5a059" opacity="0.3"><animate attributeName="r" values="10;25;10" dur="4s" repeatCount="indefinite"/></circle></svg>`
    }
];

const QUOTES = [
    "La paix commence par un souffle.",
    "Ce matin est une page blanche, écrivez-la avec douceur.",
    "Prendre soin de son corps, c'est honorer sa maison.",
    "La fluidité du corps amène la clarté de l'esprit.",
    "Le calme est le berceau de la force.",
    "Aujourd'hui, avancez à votre propre rythme."
];

let currentExerciseIndex = 0;
let exerciseTimerInterval = null;
let timeLeft = 0;
let isPaused = false;
let isTransitioning = false;
let wakeLock = null;
let cachedVoice = null;

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
        if (confirm("Arrêter la séance ?")) {
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

function speakText(text) {
    if (!settings.voiceEnabled || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "fr-FR";
    utterance.rate = 0.75; 
    if (!cachedVoice) {
        const voices = window.speechSynthesis.getVoices();
        cachedVoice = voices.find(v => v.lang.includes("fr") && 
            (v.name.toLowerCase().includes("amelie") || v.name.toLowerCase().includes("aurelie") || v.name.toLowerCase().includes("siri") || v.name.toLowerCase().includes("premium")));
    }
    if (cachedVoice) utterance.voice = cachedVoice;
    window.speechSynthesis.speak(utterance);
}

if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = () => {
        const voices = window.speechSynthesis.getVoices();
        if (!cachedVoice) cachedVoice = voices.find(v => v.lang.includes("fr") && (v.name.toLowerCase().includes("amelie") || v.name.toLowerCase().includes("aurelie")));
    };
}

function startPreparationCountdown() {
    showScreen("screen-prepare");
    let count = 3;
    const countDisplay = document.getElementById("countdown-display");
    speakText("Préparez-vous. Trouvez votre souffle.");
    const countdownInterval = setInterval(() => {
        count--;
        if (count > 0) countDisplay.textContent = count;
        else if (count === 0) { countDisplay.textContent = "—"; speakText("C'est parti."); }
        else { clearInterval(countdownInterval); startWorkoutSession(); }
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
    document.getElementById("workout-progress-fill").style.width = `${((index+1) / EXERCISES.length) * 100}%`;
    document.getElementById("workout-exercise-counter").textContent = `${index + 1} / ${EXERCISES.length}`;
    isPaused = false;
    document.getElementById("btn-pause").textContent = "Pause";
    speakText(ex.speech);
    startExerciseTimer();
}

function startTransitionToNext() {
    if (currentExerciseIndex >= EXERCISES.length - 1) { finishWorkoutSession(); return; }
    isTransitioning = true;
    clearInterval(exerciseTimerInterval);
    currentExerciseIndex++;
    const nextEx = EXERCISES[currentExerciseIndex];
    document.getElementById("ex-name").textContent = `Suivant : ${nextEx.name}`;
    document.getElementById("ex-desc").textContent = "Installez-vous sereinement...";
    document.getElementById("ex-tip").textContent = "";
    timeLeft = 12; 
    document.getElementById("ex-timer").textContent = timeLeft;
    speakText(`Transition. Prochain exercice : ${nextEx.name}.`);
    exerciseTimerInterval = setInterval(() => {
        if (!isPaused) {
            timeLeft--;
            document.getElementById("ex-timer").textContent = timeLeft;
            if (timeLeft <= 0) { clearInterval(exerciseTimerInterval); loadExercise(currentExerciseIndex); }
        }
    }, 1000);
}

function startExerciseTimer() {
    clearInterval(exerciseTimerInterval);
    exerciseTimerInterval = setInterval(() => {
        if (!isPaused) {
            timeLeft--;
            document.getElementById("ex-timer").textContent = timeLeft;
            if (timeLeft <= 0) { clearInterval(exerciseTimerInterval); startTransitionToNext(); }
        }
    }, 1000);
}

function togglePause() {
    isPaused = !isPaused;
    document.getElementById("btn-pause").textContent = isPaused ? "Reprendre" : "Pause";
    speakText(isPaused ? "Pause" : "C'est reparti");
}

function forceNextExercise() {
    clearInterval(exerciseTimerInterval);
    if (isTransitioning) loadExercise(currentExerciseIndex);
    else if (currentExerciseIndex < EXERCISES.length - 1) startTransitionToNext();
    else finishWorkoutSession();
}

function previousExercise() {
    if (currentExerciseIndex > 0) { clearInterval(exerciseTimerInterval); currentExerciseIndex--; loadExercise(currentExerciseIndex); }
}

function stopWorkoutSession() { clearInterval(exerciseTimerInterval); releaseWakeLock(); }

function finishWorkoutSession() {
    stopWorkoutSession();
    updateUserStreaks();
    document.getElementById("congrats-quote").textContent = `« ${QUOTES[Math.floor(Math.random() * QUOTES.length)]} »`;
    speakText("Séance terminée. Bonne journée.");
    showScreen("screen-congrats");
    updateHomeStatsDisplay();
}

function updateUserStreaks() {
    const today = new Date().toISOString().split('T')[0];
    historyData.totalRoutines += 1;
    if (historyData.lastSessionDate !== today) {
        historyData.currentStreak = (historyData.lastSessionDate === new Date(Date.now() - 864e5).toISOString().split('T')[0]) ? historyData.currentStreak + 1 : 1;
        if (historyData.currentStreak > historyData.bestStreak) historyData.bestStreak = historyData.currentStreak;
    }
    historyData.lastSessionDate = today;
    saveDataToStorage();
}

function updateHomeStatsDisplay() {
    document.getElementById("stat-current-streak").textContent = historyData.currentStreak;
    document.getElementById("stat-total-routines").textContent = historyData.totalRoutines;
}

async function requestWakeLock() { if ('wakeLock' in navigator) try { wakeLock = await navigator.wakeLock.request('screen'); } catch (e) {} }
function releaseWakeLock() { if (wakeLock) { wakeLock.release().then(() => wakeLock = null); } }