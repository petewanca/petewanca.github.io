// GLOBAL VARIABLES
const mainEl = document.getElementsByTagName("main");
const enterEl = document.getElementById("enter");
const homeEl = document.getElementById("home");
const navEl = document.getElementById("nav");
const songTitleEl = document.getElementById("song-title");
const songArtistEl = document.getElementById("song-artist");
const numerator = document.getElementById("numerator");
const denominator = document.getElementById("denominator");
const trackArrowEl = document.getElementById("track-arrow");

homeEl.style.display = "none";
navEl.style.display = "none";

const enterBtn = document.getElementById("enter-btn");

const soundWaveGraphic = document.getElementById("sound-wave");

// FUNCTIONS
handleNumeratorDisplay = () => {
    numerator.textContent = currentTrackNumber + 1;
};

// FUNCTION CALLS
// Enter Site Button
enterBtn.addEventListener("click", () => {
    enterEl.style.display = "none";
    navEl.style.display = "flex";
    homeEl.style.display = "flex";
    audioPlayer.play();
});

// Audio Player
let currentTrackNumber = 0;
const audioPlayer = new Audio();
const audioSrc = document.createElement("source");
audioSrc.src = `./assets/audio/${audioMetadata[currentTrackNumber].filename}`;
audioSrc.type = "audio/mpeg";
audioPlayer.autoplay = true;
audioPlayer.loop = true;
audioPlayer.volume = 0.75;
audioPlayer.append(audioSrc);
mainEl[0].append(audioPlayer);

// Track Display
songTitleEl.textContent = audioMetadata[currentTrackNumber].title;
songArtistEl.textContent = audioMetadata[currentTrackNumber].artist;
numerator.textContent = currentTrackNumber + 1;
denominator.textContent = audioMetadata.length;

// Sound Graphic Controls
soundWaveGraphic.addEventListener("click", (event) => {
    if (event.target.getAttribute("data-play") !== null) {
        soundWaveGraphic.removeAttribute("data-play");
        soundWaveGraphic.src = "./assets/images/sound_stop.png";
        audioPlayer.pause();
    } else {
        soundWaveGraphic.setAttribute("data-play", "");
        soundWaveGraphic.src = "./assets/images/sound_waves.gif";
        audioPlayer.play();
    }
});

// Change Track Control
trackArrowEl.addEventListener("click", (event) => {
    // handleNumeratorDisplay(event.target.dataset);
    const { direction } = event.target.dataset;

    if (direction === "forward") {
        currentTrackNumber++;
        if (currentTrackNumber === audioMetadata.length - 1) {
            trackArrowEl.classList.remove("fa-chevron-circle-right");
            trackArrowEl.classList.add("fa-chevron-circle-left");
            trackArrowEl.setAttribute("data-direction", "backward");
        }
    } else if (direction === "backward") {
        currentTrackNumber--;
        if (currentTrackNumber === 0) {
            trackArrowEl.classList.remove("fa-chevron-circle-left");
            trackArrowEl.classList.add("fa-chevron-circle-right");
            trackArrowEl.setAttribute("data-direction", "forward");
        }
    }

    handleNumeratorDisplay();
});
