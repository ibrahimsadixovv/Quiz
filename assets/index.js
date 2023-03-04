const timerDisplay = document.querySelector('.timer-display');
const text = document.querySelector('.start-p');
const startBtn = document.querySelector('.start-btn');
const questionDiv = document.querySelector('.question');
const questionDiv1 = document.querySelector('.question1');
const questionDiv2 = document.querySelector('.question2');
const questionDiv3 = document.querySelector('.question3');
const questionDiv4 = document.querySelector('.question4');
const questionDiv5 = document.querySelector('.question5');
const questionDiv6 = document.querySelector('.question6');
const questionDiv7 = document.querySelector('.question7');
const questionDiv8 = document.querySelector('.question8');
const questionDiv9 = document.querySelector('.question9');
const questionDiv10 = document.querySelector('.question10');



const submitBtn = document.querySelector('.btn1');
const submitBtn2 = document.querySelector('.btn2');
const submitBtn3 = document.querySelector('.btn3');
const submitBtn4 = document.querySelector('.btn4');
const submitBtn5 = document.querySelector('.btn5');
const submitBtn6 = document.querySelector('.btn6');
const submitBtn7 = document.querySelector('.btn7');
const submitBtn8 = document.querySelector('.btn8');
const submitBtn9 = document.querySelector('.btn9');
const submitBtn10 = document.querySelector('.btn10');

const answerInput = document.querySelector('.input1');
const answerInput2 = document.querySelector('.input2');
const answerInput3 = document.querySelector('.input3');
const answerInput4 = document.querySelector('.input4');
const answerInput5 = document.querySelector('.input5');
const answerInput6 = document.querySelector('.input6');
const answerInput7 = document.querySelector('.input7');
const answerInput8 = document.querySelector('.input8');
const answerInput9 = document.querySelector('.input9');
const answerInput10 = document.querySelector('.input10');

const neticeDiv = document.querySelector(".netice")

const stopBtn = document.querySelector('.btn10');

const  mohtesem = document.querySelector('.mohtesem')
const  ela = document.querySelector('.ela')
const  yaxsi = document.querySelector('.yaxsi')

const  trButton = document.querySelector('.tr-button')


trButton.addEventListener('click', function() {

  const tr = document.querySelectorAll('.tr');
  for(let i = 0; i < tr.length; i++) {
    tr[i].style.display = 'flex';
  }
  
  const az = document.querySelectorAll('.az');
  for(let i = 0; i < az.length; i++) {
    az[i].style.display = 'none';
  }
  
});


let seconds = 0;
let minutes = 0;

function updateDisplay() {
  timerDisplay.innerHTML = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  
  if (!stop) {
    seconds++;
  }
   if (seconds === 60) {
    seconds=0;
    minutes++;
  }
  else if (stop) {
    seconds+=0
  }
 
}


let intervalId;

function showQuestion() {
  intervalId = setInterval(updateDisplay, 1000);
  questionDiv.style.display = "flex";
  timerDisplay.style.display = "flex";
  text.style.display = "none";
  this.style.display="none"
  startBtn.removeEventListener('click', showQuestion);
}

startBtn.addEventListener('click', showQuestion);


var stop = false
stopBtn.addEventListener('click', function() {
  
 if (!stop) {
 
  console.log("done")
  stop=true
 }
 
});


submitBtn.addEventListener('click', function() {
  let answer1 = ["mars","merih"];
  const joker1=true
  if (answer1.includes(answerInput.value.trim().toLowerCase())) {
    console.log("Answer 1 is correct!");
    questionDiv1.style.display = "none";
    questionDiv2.style.display = "flex";
    joker1=false
  } 
 
});

submitBtn2.addEventListener('click', function() {

  let answer2 = ["das kapital","das capital"];
  

  if (answer2.includes(answerInput2.value.trim().toLowerCase())) {
    console.log("Answer 2 is correct!");
    questionDiv2.style.display = "none";
    questionDiv3.style.display = "flex";
  } 
  
});



  submitBtn3.addEventListener('click', function() {
    let answer3 = ["mesopotamiya", "mezopotamiya","mezopotamya","mesopotamiya"];
  
    if (answer3.includes(answerInput3.value.trim().toLowerCase())) {
      console.log("Answer 3 is correct!");
      questionDiv3.style.display = "none";
      questionDiv4.style.display = "flex";
    } 
    
  });

  submitBtn4.addEventListener('click', function() {
    let answer4 = ["jack london","cek london","cek landın"];
    
    if (answer4.includes(answerInput4.value.trim().toLowerCase())) {
      console.log("Answer 4 is correct!");
      questionDiv4.style.display = "none";
      questionDiv5.style.display = "flex";
    } 
    
  });
  
  submitBtn5.addEventListener('click', function() {
    let answer5 = ["epistemologiya","epistemoloji"];
  
    if (answer5.includes(answerInput5.value.trim().toLowerCase())) {
      console.log("Answer 5 is correct!");
      questionDiv5.style.display = "none";
      questionDiv6.style.display = "flex";
    } 
   
  });

  submitBtn6.addEventListener('click', function() {
    let answer6 = ["yaqub", "yagub","yakub","yakup"];
  
    if (answer6.includes(answerInput6.value.trim().toLowerCase())) {
      console.log("Answer 6 is correct!");
      questionDiv6.style.display = "none";
      questionDiv7.style.display = "flex";
    } 
   
  });
  submitBtn7.addEventListener('click', function() {
    let answer7 = ["hubble","hubble qanunu","habıl","hubble kanunu"];
  
    if (answer7.includes(answerInput7.value.trim().toLowerCase())) {
      console.log("Answer 7 is correct!");
      questionDiv7.style.display = "none";
      questionDiv8.style.display = "flex";
    } 
   
  });

  submitBtn8.addEventListener('click', function() {
    let answer8 = ["ülgen","ulgen","uelgen","bai-ülgen","bai ülgen"," bay ülgen", "bai ulgen"];
    
    if (answer8.includes(answerInput8.value.trim().toLowerCase())) {
      console.log("Answer 8 is correct!");
      questionDiv8.style.display = "none";
      questionDiv9.style.display = "flex";
    } 
    
  });
  
  submitBtn9.addEventListener('click', function() {
    let answer9= ["antonio vivaldi","vivaldi", "antonyo vivaldi"];
  
    if (answer9.includes(answerInput9.value.trim().toLowerCase())) {
      console.log("Answer 9 is correct!");
      questionDiv9.style.display = "none";
      questionDiv10.style.display = "flex";
    } 
 
  });

  submitBtn10.addEventListener('click', function() {

    let answer10 = ["rafael santi","rafael","rafaello","raphael","raffaello","raffaello sanzio da urbino"];
  
    if (answer10.includes(answerInput10.value.trim().toLowerCase())) {
      console.log("Answer 10 is correct!");
      questionDiv10.style.display = "none";
      neticeDiv.style.display = "flex";
      timerDisplay.style.display="none"
     document.querySelector(".neticeTimer").innerHTML = document.querySelector(".timer-display").innerHTML
     if (document.querySelector(".timer-display").innerHTML.substring(1, 2) <=3) {
      mohtesem.style.display = "flex";
     } else if (document.querySelector(".timer-display").innerHTML.substring(1, 2) <= 6 && document.querySelector(".timer-display").innerHTML.substring(1, 2) >3 )  {
      ela.style.display = "flex";
     } 
     else if (document.querySelector(".timer-display").innerHTML.substring(1, 2) < 10 && document.querySelector(".timer-display").innerHTML.substring(1, 2) > 6 ) {
      yaxsi.style.display = "flex";
     } 
    } 
  });


  function linkto() {
    if (document.querySelector(".timer-display").innerHTML.substring(1, 2) > 0) {
      console.log("Redirecting to gif.html");
      window.location.href = "./finish.html";
    }
  }
  
  setInterval(linkto, 602800);







  answerInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitBtn.click();
    }
  });
  
  answerInput2.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitBtn2.click();
    }
  });
  
  answerInput3.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitBtn3.click();
    }
  });
  
  answerInput4.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitBtn4.click();
    }
  });
  
  answerInput5.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitBtn5.click();
    }
  });
  
  answerInput6.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitBtn6.click();
    }
  });
  answerInput7.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitBtn7.click();
    }
  });
  
  answerInput8.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitBtn8.click();
    }
  });
  
  answerInput9.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitBtn9.click();
    }
  });
  
  answerInput10.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitBtn10.click();
    }
  });
