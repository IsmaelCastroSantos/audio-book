const btnPlayPause = document.getElementById("play-pause");
const btnNext = document.getElementById("next");
const btnBack = document.getElementById("back");
const chapterName = document.getElementById("chapter");
const audio = document.getElementById("audio-chapter");

const chapter = 10;
let playing = false;
let currentTrack = 1;

function playTrack() {
  audio.play();
  btnPlayPause.classList.remove("bi-play-circle-fill");
  btnPlayPause.classList.add("bi-pause-circle-fill");
}

function pauseTrack() {
  audio.pause();
  btnPlayPause.classList.remove("bi-pause-circle-fill");
  btnPlayPause.classList.add("bi-play-circle-fill");
}

function playOrPause() {
  if (playing === false) {
    playTrack();
    playing = true;
  } else {
    pauseTrack();
    playing = false;
  }
}

function changeName() {
  chapterName.innerText = `Seção ${currentTrack}`;
}

function nextTrack() {
  if (currentTrack === chapter) {
    currentTrack = 1;
  } else {
    currentTrack += 1;
  }

  audio.src = `./books/dom-casmurro/${currentTrack}.mp3`;
  playTrack();
  playing = true;
  changeName();
}

function backTrack() {
  if (currentTrack === 1) {
    currentTrack = chapter;
  } else {
    currentTrack -= 1;
  }

  audio.src = `./books/dom-casmurro/${currentTrack}.mp3`;
  playTrack();
  playing = true;
  changeName();
}

btnPlayPause.addEventListener("click", playOrPause);
btnNext.addEventListener("click", nextTrack);
btnBack.addEventListener("click", backTrack);
