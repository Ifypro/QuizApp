const quizData = [
    {
        question: "What is the most popular programming for web development?",
        a:"Python",
        b:"php",
        c:"JavaScript",
        d:"Java",
        correct: 'c'
    },
    {
        question: "Full meaning of DRY?",
        a:"Don't reply yet",
        b:"Donot Shop",
        c:"JavaScript Notation",
        d:"Don't repeat Yourself",
        correct: 'd'
    },
    {
        question: "What is the Best Stack for web development?",
        a:"PERN STACK",
        b:"MERN STACK",
        c:"LAMP STACK",
        d:"RERM STACK",
        correct: 'b'
    },
    {
        question: "Which Technology is currently Making alot of Hype?",
        a:"Blockchain Technology",
        b:"CGI",
        c:"Game Development",
        d:"Virtual Reality (VR)",
        correct: 'a'
    },
    {
        question: "HTML Stands for?",
        a:"How The Multiverse locates",
        b:"Hypertext Markup Language",
        c:"JavaScript Object Notation",
        d:"High Trend media leverage",
        correct: 'b'
    }
];


const questionEl = document.getElementById('question'),
    container = document.querySelector(".quiz-container"),
    answersEl = document.querySelectorAll('.answer'),
       a_text = document.getElementById('a_text'),
       b_text = document.getElementById('b_text'),
       c_text = document.getElementById('c_text'),
       d_text = document.getElementById('d_text'),
       subBTN = document.getElementById('btn');


//CurrentQuestion index
let currentQuestion = 0;
//Current score value
let score = 0;

loadQuizData()

function loadQuizData(){
    //deselect option before another question
    deselectOption()
    const currentQuiz = quizData[currentQuestion];
    questionEl.innerHTML = currentQuiz.question;
    a_text.innerHTML = currentQuiz.a;
    b_text.innerHTML = currentQuiz.b;
    c_text.innerHTML = currentQuiz.c;
    d_text.innerHTML = currentQuiz.d;
}


//Getting a particular selected answer
function getSelected(){
    let answer = undefined;
    answersEl.forEach(answerEl =>{        
        if(answerEl.checked){
            answer = answerEl.id;
        }
    })

    return answer;
}


//Deselecting answer
function deselectOption(){
    answersEl.forEach(answerEl =>{
        return answerEl.checked = false;
    })
}


//Loading Quiz Data Click Event
subBTN.addEventListener('click', ()=>{        
    let answer = getSelected();
    if(answer){
        if(answer === quizData[currentQuestion].correct){
            score++
        }
        currentQuestion++
        if(currentQuestion < quizData.length){            
            loadQuizData()
        }else{
            container.innerHTML = `
            <div class="pop">
                <h2>Congratulations Dev, You'v answered All the Available questions</h2>
                <h1>SCORE: ${score} / ${quizData.length}</h1>
                <button onclick="location.reload()">REPLAY</button>
            </div>
            `
        }
    }
})
