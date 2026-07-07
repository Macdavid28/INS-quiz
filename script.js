// Database of questions extracted directly from the provided source document
const questionDB = [
    {
        question: "What is the primary purpose of system analysis?",
        options: ["Coding software", "Identifying user requirements", "Testing programs", "Marketing software"],
        answer: "Identifying user requirements",
        explanation: "System analysis focuses primarily on identifying and understanding what the users need the system to do. [cite: 1, 2]"
    },
    {
        question: "A Joint Application Development (JAD) session involves:",
        options: ["Only programmers", "Only managers", "Stakeholders working together", "Only users"],
        answer: "Stakeholders working together",
        explanation: "A JAD session is a collaborative approach that involves all relevant stakeholders working together to gather requirements. [cite: 1]"
    },
    {
        question: "The first phase of the Waterfall model is:",
        options: ["Design", "Testing", "Requirement Analysis", "Maintenance"],
        answer: "Requirement Analysis",
        explanation: "The Waterfall model is linear and sequential, beginning with Requirement Analysis before moving to design and coding. [cite: 1]"
    },
    {
        question: "SDLC stands for:",
        options: ["Software Design Life Cycle", "System Development Life Cycle", "System Design and Logic Cycle", "Software Development Logical Cycle"],
        answer: "System Development Life Cycle",
        explanation: "SDLC is the acronym for System Development Life Cycle, the fundamental process for planning, creating, testing, and deploying an information system. [cite: 5]"
    },
    {
        question: "Which requirement describes system behavior?",
        options: ["Functional requirement", "Non-functional requirement", "Security policy", "Maintenance requirement"],
        answer: "Functional requirement",
        explanation: "Functional requirements describe what the system should do or its behaviors, such as generating reports. [cite: 6, 7]"
    },
    {
        question: "Security is classified as:",
        options: ["Functional requirement", "Non-functional requirement", "User requirement", "Technical requirement"],
        answer: "Non-functional requirement",
        explanation: "Security, along with criteria like response time and reliability, is considered a non-functional requirement. [cite: 7]"
    },
    {
        question: "The bridge between users and developers is:",
        options: ["Tester", "Programmer", "Systems Analyst", "Network Engineer"],
        answer: "Systems Analyst",
        explanation: "The Systems Analyst acts as the crucial communication bridge translating user needs into technical specifications for developers. [cite: 7]"
    },
    {
        question: "A feasibility study evaluates:",
        options: ["Project viability", "Coding standards", "User interfaces", "Testing tools"],
        answer: "Project viability",
        explanation: "A feasibility study is conducted to evaluate whether a project is viable economically, technically, and operationally. [cite: 10]"
    },
    {
        question: "DFD stands for:",
        options: ["Data Flow Diagram", "Database Function Diagram", "Data File Diagram", "Design Flow Diagram"],
        answer: "Data Flow Diagram",
        explanation: "DFD stands for Data Flow Diagram, which is utilized to visually represent data movement through a system. [cite: 11, 12]"
    },
    {
        question: "Which symbol represents a process in a DFD?",
        options: ["Rectangle", "Circle", "Triangle", "Diamond"],
        answer: "Circle",
        explanation: "In DFD notation, a circle is traditionally used to represent a process that transforms data. [cite: 13]"
    },
    {
        question: "ERD stands for:",
        options: ["Entity Relationship Diagram", "Electronic Record Diagram", "Entity Report Design", "Event Relationship Design"],
        answer: "Entity Relationship Diagram",
        explanation: "ERD stands for Entity Relationship Diagram, used to model database structure and data relationships. [cite: 14]"
    },
    {
        question: "System prototyping means:",
        options: ["Final implementation", "Preliminary model creation", "Testing only", "Documentation only"],
        answer: "Preliminary model creation",
        explanation: "Prototyping involves creating a preliminary model of a system to gain better user feedback early in development. [cite: 16]"
    },
    {
        question: "Corrective maintenance fixes:",
        options: ["Bugs", "New features", "Performance", "Documentation"],
        answer: "Bugs",
        explanation: "Corrective maintenance specifically targets and fixes bugs and errors discovered in the software. [cite: 18]"
    },
    {
        question: "Risk management involves:",
        options: ["Ignoring risks", "Identifying and controlling risks", "Deleting requirements", "Avoiding users"],
        answer: "Identifying and controlling risks",
        explanation: "Risk management is the systematic process of identifying, assessing, and controlling potential project risks. [cite: 19]"
    },
    {
        question: "A scalable system can:",
        options: ["Handle increased workload", "Prevent upgrades", "Reduce users", "Remove databases"],
        answer: "Handle increased workload",
        explanation: "Scalability refers to a system's ability to seamlessly grow and handle increased workload and demand. [cite: 23]"
    },
    {
        question: "Parallel changeover means:",
        options: ["Old and new systems run together", "Immediate replacement", "Partial replacement", "Pilot use"],
        answer: "Old and new systems run together",
        explanation: "In a parallel changeover, both the old and new systems are run simultaneously to minimize transition risks. [cite: 23]"
    },
    {
        question: "Which UML diagram models activities?",
        options: ["Activity Diagram", "ERD", "DFD", "Flowchart"],
        answer: "Activity Diagram",
        explanation: "The Activity Diagram is the specific UML diagram utilized to model workflow sequences and activities. [cite: 26, 27]"
    },
    {
        question: "SRS stands for:",
        options: ["Software Requirement Specification", "System Reporting Service", "Software Resource System", "Service Requirement Software"],
        answer: "Software Requirement Specification",
        explanation: "SRS stands for Software Requirement Specification, the foundational document defining project requirements. [cite: 28, 29]"
    }
];

// App State Variables
let shuffledQuestions = [];
let currentQuestionIndex = 0;
let correctCount = 0;
let wrongCount = 0;

// DOM Elements
const screens = {
    landing: document.getElementById('landing-page'),
    quiz: document.getElementById('quiz-page'),
    results: document.getElementById('results-page')
};

const UI = {
    startBtn: document.getElementById('start-btn'),
    retakeBtn: document.getElementById('retake-btn'),
    nextBtn: document.getElementById('next-btn'),
    correctCountText: document.getElementById('correct-count'),
    wrongCountText: document.getElementById('wrong-count'),
    leftCountText: document.getElementById('left-count'),
    progressText: document.getElementById('progress-text'),
    progressFill: document.getElementById('progress-fill'),
    questionText: document.getElementById('question-text'),
    optionsContainer: document.getElementById('options-container'),
    feedbackContainer: document.getElementById('feedback-container'),
    explanationText: document.getElementById('explanation-text')
};

// Utility: Fisher-Yates Shuffle
function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Navigation
function showScreen(screenKey) {
    Object.values(screens).forEach(s => s.classList.remove('active'));
    Object.values(screens).forEach(s => s.classList.add('hidden'));
    screens[screenKey].classList.remove('hidden');
    screens[screenKey].classList.add('active');
}

// Initialization
function startQuiz() {
    shuffledQuestions = shuffleArray(questionDB);
    currentQuestionIndex = 0;
    correctCount = 0;
    wrongCount = 0;

    updateStats();
    loadQuestion();
    showScreen('quiz');
}

// Render Question
function loadQuestion() {
    UI.feedbackContainer.classList.add('hidden');
    UI.optionsContainer.innerHTML = '';

    const currentQ = shuffledQuestions[currentQuestionIndex];
    UI.questionText.textContent = currentQ.question;

    // Update Progress
    const questionNumber = currentQuestionIndex + 1;
    const totalQuestions = shuffledQuestions.length;
    UI.progressText.textContent = `Question ${questionNumber} of ${totalQuestions}`;
    UI.progressFill.style.width = `${(questionNumber / totalQuestions) * 100}%`;

    // Shuffle options
    const shuffledOptions = shuffleArray(currentQ.options);

    shuffledOptions.forEach(option => {
        const btn = document.createElement('button');
        btn.classList.add('option-btn');
        btn.textContent = option;
        btn.addEventListener('click', () => handleAnswer(btn, option, currentQ.answer, currentQ.explanation));
        UI.optionsContainer.appendChild(btn);
    });
}

// Handle Answer Selection
function handleAnswer(selectedBtn, selectedText, correctText, explanation) {
    // Lock all options
    const allOptions = UI.optionsContainer.querySelectorAll('.option-btn');
    allOptions.forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === correctText) {
            btn.classList.add('correct');
        }
    });

    // Check correctness
    if (selectedText === correctText) {
        correctCount++;
        UI.explanationText.innerHTML = `<strong>Correct!</strong> ${explanation}`;
    } else {
        wrongCount++;
        selectedBtn.classList.add('wrong');
        UI.explanationText.innerHTML = `<strong>Incorrect.</strong> ${explanation}`;
    }

    updateStats();
    UI.feedbackContainer.classList.remove('hidden');
}

// Update Header Stats
function updateStats() {
    const total = shuffledQuestions.length;
    const left = total - (correctCount + wrongCount);

    UI.correctCountText.textContent = correctCount;
    UI.wrongCountText.textContent = wrongCount;
    UI.leftCountText.textContent = left;
}

// Advance to Next Question or Results
function handleNext() {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

// Calculate and Display Results
function showResults() {
    const total = shuffledQuestions.length;
    const percentage = Math.round((correctCount / total) * 100);

    document.getElementById('res-total').textContent = total;
    document.getElementById('res-correct').textContent = correctCount;
    document.getElementById('res-wrong').textContent = wrongCount;
    document.getElementById('res-score').textContent = `${percentage}%`;

    const msgEl = document.getElementById('performance-message');
    if (percentage >= 90) msgEl.textContent = "Excellent!";
    else if (percentage >= 75) msgEl.textContent = "Great Job!";
    else if (percentage >= 50) msgEl.textContent = "Good Effort!";
    else msgEl.textContent = "Keep Practicing!";

    showScreen('results');
}

// Event Listeners
UI.startBtn.addEventListener('click', startQuiz);
UI.nextBtn.addEventListener('click', handleNext);
UI.retakeBtn.addEventListener('click', startQuiz);
