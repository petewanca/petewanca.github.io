import React, { useState } from "react";
import PropTypes from "prop-types";

// Styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleRight,
  faArrowAltCircleLeft,
} from "@fortawesome/free-regular-svg-icons";

import * as audioPlayerStyle from "./AudioPlayerDisplay.module.scss";

const AudioPlayerDisplay = ({
  tracks,
  currentTrackNo,
  currentTrack,
  dispatch,
}) => (
  <div className={`${audioPlayerStyle.audioPlayerContainer}`}>
    <div className={`${audioPlayerStyle.trackDetailsContainer}`}>
      <div className="title is-1">{currentTrack.title}</div>
      <div className="subtitle is-3">by {currentTrack.artist}</div>
    </div>
    <div>
      {currentTrackNo !== 0 && (
        <FontAwesomeIcon
          onClick={() => dispatch({ type: "AUDIO_PLAYER_BACKWARD" })}
          className={`${audioPlayerStyle.playerControl}`}
          size="6x"
          icon={faArrowAltCircleLeft}
        />
      )}
      {currentTrackNo !== tracks.length - 1 && (
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

AudioPlayerDisplay.propTypes = {
  tracks: PropTypes.array,
  currentTrackNo: PropTypes.number,
  currentTrack: PropTypes.object,
  dispatch: PropTypes.func,
};

export default AudioPlayerDisplay;
