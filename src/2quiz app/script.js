const quizdata =[
    {
        question:'which is the oldest spoken language in India?' ,
        a:'Hindi',
        b:'Sanskrit',
        c:'Tamil',
        d:'Telugu',
        correct:'c'
    },{
        question:'what is the most used programming language in 2019 ?',
        a:'Java',
        b:'C',
        c:'Python',
        d:'JavaScript',
        correct:'d'
    },{
        question: 'which is the first language in the world ?',
        a:'English',
        b:'spanish',
        c:'Tamil',
        d:'French',
        correct:'c'
    },{
        question:'what is the most spoken language in the world ?',
        a:'Chinese',
        b:'Spanish',
        c:'English',
        d:'Hindi',
        correct:'a'
    },{
        question:'what year is JavaScript launched ?',
        a:'2018',
        b:'2017',
        c:'2015',
        d:'none of the above',
        correct:'d'
    }
]
const questionEl = document.getElementById('question');
const ans_a = document.getElementById('a-text');
const ans_b = document.getElementById('b-text');
const ans_c = document.getElementById('c-text');
const ans_d = document.getElementById('d-text');

const submit_btn = document.getElementById('submit');
const ansElmts = document.querySelectorAll(".answer");

const quiz = document.getElementById('quiz');

let currQue=0;
let score = 0;
loadQuiz();

function loadQuiz() {
    deSelectAns();
    const currQuizdata = quizdata[currQue];
    questionEl.innerText = currQuizdata.question;
    ans_a.innerText = currQuizdata.a;
    ans_b.innerText = currQuizdata.b;
    ans_c.innerText = currQuizdata.c;
    ans_d.innerText = currQuizdata.d;

}
function selectedAnswer(){
    
    let answer = undefined;
    ansElmts.forEach((ansEl) => {
        if(ansEl.checked){
            answer = ansEl.id}
    })
    return answer;
}
function deSelectAns() {
    ansElmts.forEach((ansEl) => {
        ansEl.checked = false;
    })
}

submit_btn.addEventListener("click",()=>{
    const ans = selectedAnswer();
    //console.log(ans);
    if(ans){
        if(ans === (quizdata[currQue].correct)){
            score++;
        }
        currQue++;
        if (currQue < quizdata.length) {
            loadQuiz();
        }
        else {
            quiz.innerHTML = `<h3> U have answered ${score}/${quizdata.length} correctly</h3>
            <button onclick = "location.reload()">Reload</button>`
        }
    }

})

