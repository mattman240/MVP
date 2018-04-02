window.addEventListener('keydown', (event) => {
  const audio = document.querySelector(`audio[data-sound="${event.keyCode}"]`);
  if(!audio) return;
  const key = document.querySelector(`.key[data-sound="${event.keyCode}"]`);
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', transitionEnd));

})
function transitionEnd() {
  this.classList.remove('playing');
}
