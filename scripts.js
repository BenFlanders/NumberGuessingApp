const msgEl = document.getElementById('msg');
// const randomNum = getRandomNumber();
// console.log('Number: ', randomNum);

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; 

let recognition = new window.SpeechRecognition();

recognition.start();

recognition.addEventListener('result', onSpeak);


function onSpeak(e){
    const msg = e. results[0][0].transcript;
    // writeMessage(msg);
    // checkNumber(msg);
}













