// GLOBAL VARIABLES
const mainEl = document.getElementsByTagName("main");
const enterEl = document.getElementById("enter");
const homeEl = document.getElementById("home");
const navEl = document.getElementById("nav");
const homeLink = document.getElementById("home-link");
const aboutLink = document.getElementById("about-link");
const contactLink = document.getElementById("contact-link");
const aboutEl = document.getElementById("about");
const aboutToContactLink = document.getElementById("about-to-contact");
const contactEl = document.getElementById("contact");
const songTitleEl = document.getElementById("song-title");
const songArtistEl = document.getElementById("song-artist");
const numerator = document.getElementById("numerator");
const denominator = document.getElementById("denominator");
const trackArrowEl = document.getElementById("track-arrow");

homeEl.style.display = "none";
navEl.style.display = "none";
enterEl.style.display = "block";
aboutEl.style.display = "none";
contactEl.style.display = "none";

const enterBtn = document.getElementById("enter-btn");
const soundWaveGraphic = document.getElementById("sound-wave");

// Audio Player
let currentTrackNumber = 0;
let isPlaying = true;
let audioPlayer = document.createElement("audio");
audioPlayer.type = "audio/mpeg";
audioPlayer.loop = true;
audioPlayer.volume = 0.75;

// FUNCTIONS
handleNumeratorDisplay = () => {
    numerator.textContent = currentTrackNumber + 1;
};

handleSongDisplay = () => {
    songTitleEl.textContent = audioMetadata[currentTrackNumber].title;
    songArtistEl.textContent = `by ${audioMetadata[currentTrackNumber].artist}`;
};

loadTrack = trackIndex => {
    // Load a new track
    isPlaying ? audioPlayer.autoplay = true : audioPlayer.autoplay = false;
    audioPlayer.src = `./assets/audio/${audioMetadata[trackIndex].filename}`;
    audioPlayer.load();

    // Update track details
    handleSongDisplay();
    handleNumeratorDisplay();
};

playPauseTrack = () => {
    // Switch between playing and pausing
    // depending on the current state
    if (!isPlaying) playTrack();else pauseTrack();
};

playTrack = () => {
    // Play the loaded track
    audioPlayer.play();
    isPlaying = true;

    // Replace stop png with playing gif
    soundWaveGraphic.src = "./assets/images/sound_waves.gif";
};

pauseTrack = () => {
    // Pause the loaded track
    audioPlayer.pause();
    isPlaying = false;

    // Replace playing gif with stop png
    soundWaveGraphic.src = "./assets/images/sound_stop.png";
};

// FUNCTION CALLS

// NAVIGATION
// Enter Site Button
enterBtn.addEventListener("click", () => {
    enterEl.style.display = "none";
    navEl.style.display = "flex";
    homeEl.style.display = "flex";
    mainEl[0].style.height = "75vh";
    audioPlayer.play();
});

// Home
homeLink.addEventListener("click", () => {
    homeEl.style.display = "flex";
    aboutEl.style.display = "none";
    contactEl.style.display = "none";
    contactLink.classList.remove("active");
    aboutLink.classList.remove("active");
});

// About
aboutLink.addEventListener("click", () => {
    pauseTrack();
    homeEl.style.display = "none";
    aboutEl.style.display = "flex";
    aboutLink.classList.add("active");
    contactEl.style.display = "none";
    contactLink.classList.remove("active");
});

// Contact
contactLink.addEventListener("click", () => {
    pauseTrack();
    homeEl.style.display = "none";
    aboutEl.style.display = "none";
    aboutLink.classList.remove("active");
    contactEl.style.display = "flex";
    contactLink.classList.add("active");
});

aboutToContactLink.addEventListener("click", () => {
    homeEl.style.display = "none";
    aboutEl.style.display = "none";
    aboutLink.classList.remove("active");
    contactEl.style.display = "flex";
    contactLink.classList.add("active");
});

// Track Display
denominator.textContent = audioMetadata.length;

// Change Track Control
trackArrowEl.addEventListener("click", event => {
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
    handleSongDisplay();
    loadTrack(currentTrackNumber);
});

soundWaveGraphic.addEventListener("click", () => {
    playPauseTrack();
});

// Track Display
handleNumeratorDisplay();
handleSongDisplay();
loadTrack(currentTrackNumber);