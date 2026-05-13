const enterScreen = document.getElementById('enter-screen');
const music = new Audio('stuff/music.mp3');
music.loop = true;

enterScreen.addEventListener('click', () => {
  enterScreen.classList.add('hidden');
  music.play();
});
