const quizData = [
    {
        question: "What does PHP stand for?",
        a: " Personal Hypertext Processor",
        b: " Personal ",
        c: " Private Home Page",
        d: " PHP: Hypertext Preprocessor",
        correct: "d",
    },
    {
        question: "How do you get information from a form that is submitted using the 'get' method?",
        a: "$_GET[];",
        b: "<&>...</&>",
        c: "Request.QueryString;",
        d: "Request.Form;",
        correct: "a",
    },
    {
        question: "How do you write Hello World; in PHP",
        a: "'Hello World';",
        b: "echo 'Hello World';",
        c: "Document.Write('Hello World');",
        d: "print('Hello world')",
        correct: "b",
    },
    {
        question: "All variables in PHP start with which symbol?",
        a: "!",
        b: "&",
        c: "$",
        d: ".",
        correct: "c",
    },
]

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0


loadQuiz()

function loadQuiz(){
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerHTML = currentQuizData.question
    a_text.innerHTML = currentQuizData.a 
    b_text.innerHTML = currentQuizData.b
    c_text.innerHTML = currentQuizData.c 
    d_text.innerHTML = currentQuizData.d 
}

function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}


function getSelected(){
    let answer 

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    console.log(answer)

    if(answer){
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})