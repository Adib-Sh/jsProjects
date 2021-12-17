const quizData = [
    {
        question: 'In New Zealand what is it illegal to fly in a hot air balloon with?',
        a: 'A dog',
        b: 'A bicycle',
        c: 'A violin',
        d: 'A rooster',
        correct: 'd',
    },

    {
        question: 'What is the term for a group of owls?',
        a: 'Parliament',
        b: 'Terror',
        c: 'Confusion',
        d: 'Blessing',
        correct: 'a',
    },

    {
        question: 'IThe average person in the US opens what 13 times per day?',
        a: 'Front door',
        b: 'Refrigerator',
        c: 'A can of soda',
        d: 'A window',
        correct: 'b',
    },

    {
        question: 'What is the length of New Zealand’s 90 Mile Beach?',
        a: '90 miles',
        b: '77 miles',
        c: '90 km',
        d: '55 km',
        correct: 'd',
    },

    {
        question: 'What are you afraid of if you are Syngenesophobic?',
        a: 'Syringes',
        b: 'Genetically modified crops',
        c: 'Relatives',
        d: 'Snakes',
        correct: 'c',
    }
]
const answerEls = document.querySelectorAll(".answer")
const quiz = document.getElementById("quiz")
let answer = undefined; 
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit")

let currentQuiz = 0;
let score = 0;
loadQuiz();

function loadQuiz(){
    deselsectAnswers();
    
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerHTML = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected(){
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
};

function deselsectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    })
    return answer;
};

submitBtn.addEventListener('click', () => {
    
    const answer = getSelected();
    if (answer){
        if (answer === quizData[currentQuiz].correct){
            score++
        }
        currentQuiz ++;
        if (currentQuiz < quizData.length){
                loadQuiz();
        } else {
            quiz.innerHTML = 
            `<h2>The Quiz is Over! You Answered Correctly at ${score} Out of ${quizData.length} Questions</h2>
            <button class="reloadBtn" onclick="location.reload()">Reload Quiz</button></button>`
        }
    }   
})
