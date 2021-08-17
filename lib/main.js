const mainEl = document.getElementsByTagName("main");
const soundWaveGraphic = document.getElementById("sound-wave");

const audioPlayer = new Audio();
const audioSrc = document.createElement("source");
audioSrc.src = `./assets/audio/${audioMetadata[0].filename}`;
audioSrc.type = "audio/mpeg";
audioPlayer.autoplay = true;
audioPlayer.loop = true;
audioPlayer.volume = 0.75;
audioPlayer.append(audioSrc);
mainEl[0].append(audioPlayer);

soundWaveGraphic.addEventListener("click", event => {
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