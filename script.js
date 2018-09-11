
function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.card[data-key= "${e.keyCode}"]`);
  if (!audio) return; //stop running function
  audio.currentTime = 0; //rewind to the start
  audio.play();
  key.classList.add("card-active");
}

function removeTransition(e) {
  if (e.propertyName !== "background-color") return; //skip it if it's not a transition
  this.classList.remove("card-active");
}

const keys = document.querySelectorAll(".card");

keys.forEach(key => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);
