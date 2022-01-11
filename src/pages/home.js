import React, { useState } from "react";

// Styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronCircleLeft,
    faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import "styles/home.scss";

// Images
import { StaticImage } from "gatsby-plugin-image";

// Data
import { audioMetadata } from "audio/metadata.js";

const HomePage = () => {
    const [isForward, setDirection] = useState(true);
    const [tracks, setTracks] = useState(audioMetadata);

    return (
        <main className="home">
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
                </div>
            </div>
            <div className="columns">
                <div className="controls" className="column is-3 is-offset-9">
                    <StaticImage
                        src="../images/sound_waves.gif"
                        alt="track controls"
                    />
                    <div className="track-count-display">
                        <div className="numerator"></div>
                        <div className="denominator"></div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default HomePage;
