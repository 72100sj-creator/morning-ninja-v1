const EXERCISES = [
    {
        name: "1. Respiration consciente",
        desc: "Assis ou allongé. Inspirez par le nez en gonflant le ventre, soufflez lentement par la bouche.",
        tip: "Posez les mains sur votre ventre pour ressentir le mouvement du calme.",
        duration: 45,
        speech: "Commencez par une respiration consciente. Inspirez le calme, expirez les tensions.",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "2. Bascule du bassin",
        desc: "Allongé sur le dos, genoux pliés. Plaquez doucement le bas du dos au sol, puis relâchez.",
        tip: "Mouvement très léger, idéal pour masser et libérer les lombaires.",
        duration: 45,
        speech: "Bascule du bassin. Pressez doucement le bas du dos contre le sol en soufflant.",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "3. Chat / Vache",
        desc: "À quatre pattes. Arrondissez le dos en regardant vos genoux, puis creusez-le doucement en ouvrant la poitrine.",
        tip: "Ne forcez pas sur le creux. Bougez au rythme de votre respiration.",
        duration: 50,
        speech: "Position du Chat et de la Vache. Enroulez et déroulez votre colonne vertébrale.",
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "4. Bird Dog (Oiseau-Chien)",
        desc: "À quatre pattes. Tendez le bras droit devant et la jambe gauche derrière en gardant le dos bien droit. Changez de côté.",
        tip: "Cherchez à vous grandir plutôt qu'à monter les membres trop haut.",
        duration: 50,
        speech: "L'Oiseau Chien. Tendez un bras et la jambe opposée pour stabiliser le dos.",
        image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "5. Ouverture des hanches",
        desc: "Un genou à terre, faites un pas en avant. Avancez doucement le bassin pour étirer l'avant de la cuisse. Alternez à mi-temps.",
        tip: "Gardez le buste bien droit et fier, respirez tranquillement.",
        duration: 50,
        speech: "Ouverture des hanches. Étirez le psoas pour libérer les tensions du bas du dos.",
        image: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "6. Pont fessier",
        desc: "Allongé sur le dos, montez le bassin vers le ciel en poussant sur vos pieds. Alignez genoux, hanches et épaules.",
        tip: "Contractez légèrement les fessiers en haut sans cambrer excessivement.",
        duration: 45,
        speech: "Le pont fessier. Montez le bassin en douceur pour réveiller l'arrière du corps.",
        image: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "7. Rotation thoracique",
        desc: "À quatre pattes, posez une main derrière la tête. Amenez le coude vers le ciel en tournant le haut du dos, puis revenez.",
        tip: "Suivez le mouvement du coude avec votre regard. Changez de côté à votre rythme.",
        duration: 50,
        speech: "Rotation thoracique. Ouvrez le haut du dos pour libérer la respiration.",
        image: "https://images.unsplash.com/photo-1591228127791-8e2eaef098d3?auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "8. Étirement des ischio-jambiers",
        desc: "Allongé sur le dos, attrapez l'arrière d'une cuisse avec vos mains et tendez doucement la jambe vers le ciel.",
        tip: "Gardez le pied souple. L'étirement doit être progressif et ne jamais faire mal.",
        duration: 45,
        speech: "Étirement de l'arrière des cuisses. Allez-y très doucement, sans à-coups.",
        image: "https://images.unsplash.com/photo-1510832428577-cef512ef7a09?auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "9. Ouverture des épaules",
        desc: "Debout ou à genoux, entrelacez vos doigts derrière le dos. Ouvrez la poitrine et reculez doucement les épaules.",
        tip: "Sentez l'ouverture du cœur et l'espace qui se crée au niveau des clavicules.",
        duration: 40,
        speech: "Ouverture des épaules et de la poitrine. Grandissez-vous et respirez.",
        image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "10. Respiration finale",
        desc: "Fermez les yeux. Prenez une grande inspiration en levant les bras au ciel, puis relâchez tout en soufflant.",
        tip: "Souriez. Votre corps est maintenant réveillé, disponible et prêt.",
        duration: 40,
        speech: "Terminez par une grande inspiration en montant les bras au ciel. Votre corps est parfaitement réveillé.",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=500&q=80"
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
let wakeLock = null;

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
    document.getElementById("btn-next").addEventListener("click", nextExercise);
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

function speakText(text) {
    if (!settings.voiceEnabled || !('speechSynthesis' in window)) return;
    
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "fr-FR";
    utterance.rate = 0.85;
    
    const voices = window.speechSynthesis.getVoices();
    let selectedVoice = voices.find(v => v.lang.includes("fr") && 
        (v.name.toLowerCase().includes("google") || 
         v.name.toLowerCase().includes("siri") || 
         v.name.toLowerCase().includes("amelie") || 
         v.name.toLowerCase().includes("aurelie") || 
         v.name.toLowerCase().includes("premium")));
         
    if (!selectedVoice) {
        selectedVoice = voices.find(v => v.lang.includes("fr"));
    }
    if (selectedVoice) {
        utterance.voice = selectedVoice;
    }
    window.speechSynthesis.speak(utterance);
}

if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = () => {};
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
    requestWakeLock();
    showScreen("screen-workout");
    loadExercise(currentExerciseIndex);
}

// MISE À JOUR ICI : injection d'une balise IMG à la place du SVG avec styles pour le rendu
function loadExercise(index) {
    if (index < 0 || index >= EXERCISES.length) return;
    const ex = EXERCISES[index];
    
    document.getElementById("ex-name").textContent = ex.name;
    document.getElementById("ex-desc").textContent = ex.desc;
    document.getElementById("ex-tip").textContent = ex.tip;
    
    // Remplacement du SVG par l'image Unsplash
    document.getElementById("ex-illustration").innerHTML = `<img src="${ex.image}" alt="${ex.name}" style="width:100%; height:100%; object-fit:cover; border-radius:12px; box-shadow:0 4px 12px rgba(0,0,0,0.15);">`;
    
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

function startExerciseTimer() {
    clearInterval(exerciseTimerInterval);
    exerciseTimerInterval = setInterval(() => {
        if (!isPaused) {
            timeLeft--;
            document.getElementById("ex-timer").textContent = timeLeft;
            if (timeLeft <= 0) {
                clearInterval(exerciseTimerInterval);
                nextExercise();
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

function nextExercise() {
    clearInterval(exerciseTimerInterval);
    if (currentExerciseIndex < EXERCISES.length - 1) {
        currentExerciseIndex++;
        loadExercise(currentExerciseIndex);
    } else {
        finishWorkoutSession();
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