import React, { useState } from "react";

// Styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronCircleLeft,
    faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import "styles/about.scss";

// Data
import { audioMetadata } from "audio/metadata.js";

const HomePage = () => {
    const [isForward, setDirection] = useState(true);
    const [tracks, setTracks] = useState(audioMetadata);

    console.log(tracks);

    return (
        <main id="home">
            <div className="columns">
                <div className="column is-four-fifths song">
                    {tracks.map((track) => (
                        <div>
                            <div>{track.title}</div>
                            <div>By: {track.artist}</div>
                        </div>
                    ))}
                </div>
                <div className="column arrow">
                    <FontAwesomeIcon
                        size="7x"
                        className="enter-icon"
                        icon={
                            isForward
                                ? faChevronCircleRight
                                : faChevronCircleLeft
                        }
                    />
                    <i
                        id="track-arrow"
                        data-direction="forward"
                        className="fal fa-chevron-circle-right fa-7x"></i>
                </div>
            </div>
            <div className="columns">
                <div id="controls" className="column is-3 is-offset-9">
                    <img
                        id="sound-wave"
                        src="./assets/images/sound_waves.gif"
                        alt="sound wave"
                    />
                    <div id="track-count-display">
                        <div id="numerator"></div>
                        <div id="denominator"></div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default HomePage;
