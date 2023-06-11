const audio = document.getElementById('audio');

document.addEventListener('click', playSoundClick);
document.addEventListener('keypress', playSoundKeypress);

function playSoundClick(e) {
  if (e.target.parentElement.classList.contains('key') && !e.target.classList.contains('key-name')) {
    audioName = `${e.target.nextElementSibling.textContent}.wav`;
    playSound(audioName);
    addKeyEffect(e.target.parentElement);
  }
}

function addKeyEffect(el) {
  el.classList.add('playing');
  setTimeout(() => {
    el.classList.remove('playing');
  }, 100);
}

function playSound(audioName) {
  audio.src = `sounds/${audioName}`;
  audio.currentTime = 0;
  audio.play();
}

function playSoundKeypress(e) {
  switch (e.key) {
    case 'a':
    case 'A':
      playSound('clap.wav');
      addKeyEffect(document.getElementById('a'));
      break;
    case 's':
    case 'S':
      playSound('hihat.wav');
      addKeyEffect(document.getElementById('s'));
      break;
    case 'd':
    case 'D':
      playSound('kick.wav');
      addKeyEffect(document.getElementById('d'));
      break;
    case 'f':
    case 'F':
      playSound('openhat.wav');
      addKeyEffect(document.getElementById('f'));
      break;
    case 'g':
    case 'G':
      playSound('boom.wav');
      addKeyEffect(document.getElementById('g'));
      break;
    case 'h':
    case 'H':
      playSound('ride.wav');
      addKeyEffect(document.getElementById('h'));
      break;
    case 'j':
    case 'J':
      playSound('snare.wav');
      addKeyEffect(document.getElementById('j'));
      break;
    case 'k':
    case 'K':
      playSound('tom.wav');
      addKeyEffect(document.getElementById('k'));
      break;
    default:
      break;
  }
}
