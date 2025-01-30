// Audio elements
const backgroundMusic = document.getElementById("background-music");
const timerSound = document.getElementById("timer-sound");
const correctSound = document.getElementById("correct-sound");
const wrongSound = document.getElementById("wrong-sound");
let startbtn = document.getElementById("start-btn");
let msgWinner = document.getElementById('Win');
let firstsound = document.getElementById('firstquestionsonu');
let finalscores = document.getElementById('finalscore')

const questions = [
  {question: "भारत का राष्ट्रीय फूल कौन सा है?", 
   options: [" गुलाब", " सूरजमुखी", "कमल", " गेंदा"], 
   correct: 2
 },
   
  {question: "भारत का राष्ट्रीय पशु कौन सा है?", 
   options: ["हाथी", " शेर", " बाघ", " भालू"], 
   correct: 2
 },
   
  {question: "भारत का पहला प्रधानमंत्री कौन था?", 
   options: [" महात्मा गांधी", " जवाहरलाल नेहरू", " इंदिरा गांधी", " सरदार पटेल"], 
  correct: 1
 },
   
  {question: "गांधी जी का जन्मदिन कब मनाया जाता है?", 
   options: ["15 अगस्त", "2 अक्टूबर", "26 जनवरी", " 14 नवंबर"], 
 correct: 1
 },
   
  {question: "भारत का सबसे बड़ा राज्य क्षेत्रफल के अनुसार कौन सा है?", 
   options: [" महाराष्ट्र", " उत्तर प्रदेश", "राजस्थान",  "मध्य प्रदेश"], 
      correct: 2
    },
   
  {question: "ताजमहल किसने बनवाया था?", 
   options: [" अकबर", " शाहजहां", " बाबर", " औरंगजेब"], 
 correct: 1
 },
   
  {question: "भारत का राष्ट्रीय गान 'जन गण मन' किसने लिखा था?", 
   options: [" महात्मा गांधी", " रवींद्रनाथ टैगोर", " बंकिम चंद्र चट्टोपाध्याय", " सुभाष चंद्र बोस"], 
    correct: 1
 },
   
  {question: "भारत की आजादी कब हुई थी?", 
   options: [" 26 जनवरी 1950", " 15 अगस्त 1947", " 2 अक्टूबर 1947", " 1 अप्रैल 1947"], 
     correct: 1
 },
   
  {question: "चंद्रग्रहण किस कारण से होता है?", 
   options: [" सूर्य के सामने चंद्रमा आना", "पृथ्वी की छाया चंद्रमा पर पड़ना", " चंद्रमा का टूटना", " सूर्य की रोशनी चंद्रमा तक न पहुंचना"], 
        correct: 1
 },
   
  {question: "भारत का राष्ट्रीय खेल कौन सा है?", 
   options: [" क्रिकेट", " हॉकी", " फुटबॉल", " कबड्डी"], 
   correct: 1
 },
   
  {question: "विटामिन D का मुख्य स्रोत क्या है?", 
   options: [" दूध", "मछली", " सूर्य की रोशनी", "हरी सब्जियां"], 
 correct: 2
 },
   
  {question: "भारत का राष्ट्रीय पक्षी कौन सा है?", 
   options: [" मोर", " तोता", " कौआ", "हंस"], 
    correct: 0
 },
   
  {question: "पानीपत का तीसरा युद्ध किस वर्ष हुआ था?", 
   options: [" 1526", " 1761", " 1857", " 1947"], 
 correct: 1
 },
   
  {question: "भारतीय रुपया का प्रतीक चिन्ह किस वर्ष लागू हुआ?", 
   options: [" 2008", " 2010", " 2012", " 2014"], 
  correct: 1
 },
   
  {question: "संविधान सभा के अध्यक्ष कौन थे?", 
   options: ["डॉ. राजेंद्र प्रसाद", " बी.आर. अंबेडकर", " जवाहरलाल नेहरू", "महात्मा गांधी"], 
      correct: 0
   },
   
  {question: "सौरमंडल का सबसे बड़ा ग्रह कौन सा है?", 
   options: [" पृथ्वी", " बृहस्पति", "शनि", "मंगल"], 
      correct: 1
 },
   
  {question: "दुनिया की सबसे ऊंची पर्वत चोटी कौन सी है?", 
   options: [" कंचनजंघा", " माउंट एवरेस्ट", " नंगा पर्वत", " धौलागिरी"], 
     correct: 1
 },
   
  {question: "कंप्यूटर का मस्तिष्क किसे कहा जाता है?", 
   options: [" CPU", " मॉनिटर", " कीबोर्ड", " माउस"], 
   correct: 0
 },
   
  {question: "भारत में पहला परमाणु परीक्षण कहाँ हुआ?", 
   options: [" राजस्थान", " गुजरात", " महाराष्ट्र", " ओडिशा"], 
   correct: 0
 },
   
  {question: "भारत में कुल कितने राज्य हैं?", 
   options: ["28", " 29", " 30", " 27"], 
   correct: 0
 },
   
  {question: "गौतम बुद्ध का जन्म कहाँ हुआ था?", 
   options: ["नेपाल", " भारत", " चीन", "जापान"], 
   correct: 0
 },
   
  {question: "ओलंपिक खेल कितने वर्षों में होते हैं?", 
   options: [" 2", " 3", " 4", " 5"], 
   correct: 2
 },
   
  {question: "कौन सा ग्रह लाल ग्रह के नाम से जाना जाता है?", 
   options: ["बुध", " मंगल", "शनि", "शुक्र"], 
   correct: 1
 },
   
  {question: "महात्मा गांधी ने भारत लौटने के बाद पहला सत्याग्रह कहाँ शुरू किया?", 
   options: [" चंपारण", "अहमदाबाद", " खेड़ा", " वर्धा"], 
   correct: 0
 },
   
  {question: "भारत में किस नदी को 'गंगा की सहायक नदी' कहा जाता है?", 
   options: ["ब्रह्मपुत्र", "यमुना", "गोदावरी", " कावेरी"], 
   correct: 1
 },
   
  {question: "भारतीय राष्ट्रीय कांग्रेस की स्थापना कब हुई?", 
   options: [" 1875", "1885", "1890", " 1905"], 
   correct: 1
 },
   
  {question: "किस शहर को 'पिंक सिटी' कहा जाता है?", 
   options: [" दिल्ली", " जयपुर", " उदयपुर", " जोधपुर"], 
   correct: 1
 },
   
  {question: "भारत का पहला उपग्रह कौन सा था?", 
   options: [" भास्कर", " आर्यभट्ट", "रोहिणी", " इनसैट"], 
   correct: 1
 },
   
  {question: "संयुक्त राष्ट्र दिवस कब मनाया जाता है?", 
   options: ["24 अक्टूबर", " 10 दिसंबर", "15 अगस्त", "26 जनवरी"], 
   correct: 0
 },
]
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 60;


function showQuestion() {
  const questionEl = document.getElementById("question");
  const optionsEl = document.querySelectorAll(".option");
  const currentQuestion = questions[currentQuestionIndex];

  questionEl.textContent = currentQuestion.question;
  optionsEl.forEach((button, index) => {
    button.textContent = currentQuestion.options[index];
  });

  resetTimer();
}

function checkAnswer(selectedIndex) {
  const currentQuestion = questions[currentQuestionIndex];
  clearInterval(timer);

  if (selectedIndex === currentQuestion.correct) {
    score += 50;
    updateScore();
    correctSound.play();
    msgWinner.textContent = "सही जवाब है आपका"
    
  } else {
    wrongSound.play();
     finalscores.textContent = `Game Over is = ${score}`
     finalscores.style.color = "blue",
     finalscores.style.fontStyle = "blod"
    resetGame();
    resetTimer()
   
    msgWinner.textContent = "गलत जवाब हैं आपका "; 
  }

  nextQuestion();
}

function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    alert("Game Over! Your final score is: "+ score);
    stopBackgroundMusic();
    resetGame();
  }
}

function resetTimer() {
  timeLeft = 60;
  document.getElementById("timer").textContent = timeLeft;
  clearInterval(timer);
  timer = setInterval(updateTimer, 1000);
  timerSound.play();
}

function updateTimer() {
  timeLeft--;
  document.getElementById("timer").textContent = timeLeft;

  if (timeLeft === 0) {
    clearInterval(timer);
    timerSound.pause();
    wrongSound.play();
    alert("Time's up! Moving to the next question.");
    nextQuestion();
  }
}

function updateScore() {
  document.getElementById("score").textContent = score;
}

function resetGame() {
  currentQuestionIndex = 0;
  score = 0;
  updateScore();
  showQuestion();
}

function startBackgroundMusic() {
  backgroundMusic.volume = 1; // Lower volume for background music
  backgroundMusic.play();
}

function stopBackgroundMusic() {
  backgroundMusic.pause();
  
}
function stopTimersong(){
    timerSound.pause();
} 
function playTimersong(){
  timerSound.play();
} 
function firstquestionsonud(){
  firstsound.play()

}
// Start background music when the page loads
 startbtn.addEventListener('click', ()=>{
    startBackgroundMusic()

    setTimeout(()=>{
      firstquestionsonud()
    },12000)

    setTimeout(()=>{
      showQuestion()
    },15000)
    
    
 })
