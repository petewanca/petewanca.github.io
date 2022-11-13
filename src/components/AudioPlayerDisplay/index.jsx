import React, { useState } from "react";
import PropTypes from "prop-types";

// Context
import { useAudioPlayer } from "context/audioPlayerContext";

// Styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleRight,
  faArrowAltCircleLeft,
} from "@fortawesome/free-regular-svg-icons";

import * as audioPlayerStyle from "./AudioPlayerDisplay.module.scss";

const AudioPlayerDisplay = (props) => {
  const { state, dispatch } = useAudioPlayer();

  return (
    <div className={`${audioPlayerStyle.audioPlayerContainer}`}>
      <div className={`${audioPlayerStyle.trackDetailsContainer}`}>
        <div className="title is-1">{state.currentTrack.title}</div>
        <div className="subtitle is-3">by {state.currentTrack.artist}</div>
      </div>
      <div>
        {state.currentTrackNo !== 0 && (
          <FontAwesomeIcon
            onClick={() => dispatch({ type: "AUDIO_PLAYER_BACKWARD" })}
            className={`${audioPlayerStyle.playerControl}`}
            size="6x"
            icon={faArrowAltCircleLeft}
          />
        )}
        {state.currentTrackNo !== state.tracks.length - 1 && (
          <FontAwesomeIcon
            onClick={() => dispatch({ type: "AUDIO_PLAYER_FORWARD" })}
            className={`${audioPlayerStyle.playerControl} pl-3`}
            size="6x"
            icon={faArrowAltCircleRight}
          />
        )}
      </div>
    </div>
  );
};

AudioPlayerDisplay.propTypes = {};

export default AudioPlayerDisplay;
