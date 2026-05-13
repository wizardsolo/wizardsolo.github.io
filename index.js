const enterScreen = document.getElementById('enter-screen');
const bgVideo = document.getElementById('tungtungtuffer');
const music = new Audio('stuff/music.mp3');
music.loop = true;

enterScreen.addEventListener('click', () => {
  enterScreen.classList.add('hidden');
  bgVideo.play();
  bgVideo.classList.add('visible');
  music.play();
});
