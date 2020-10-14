import handleResult from './handlers';

window.SpeechRecognition = window.SpeechRecognition ||
window.webkitSpeechRecognition;

function start() {
  if(!('SpeechRecognition' in window)) {
    console.log('Sorry your browser does not support Speech Recognition');
    return;
  }
  console.log('Starting...');
  const recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.onresult = handleResult;
  recognition.start();
  
}

start();