import React, { useState } from "react";
import PropTypes from "prop-types";

// Context
import { useAudioPlayer } from "context/audioPlayerContext";

// Styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight, faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";
import * as audioPlayerStyle from "./AudioPlayer.module.scss";

const AudioPlayer = (props) => {
  const [isForward, setDirection] = useState(true);
  const { state, dispatch } = useAudioPlayer();

  return (
    <div className={`${audioPlayerStyle.audioPlayerContainer}`}>
      <div className={`${audioPlayerStyle.trackDetailsContainer}`}>
        <div className="title is-1">{state.currentTrack.title}</div>
        <div className="subtitle is-3">by {state.currentTrack.artist}</div>
      </div>
      <FontAwesomeIcon className={`${audioPlayerStyle.playerControl}`} size="6x" icon={faArrowAltCircleRight} />
    </div>
  );
};

AudioPlayer.propTypes = {};

export default AudioPlayer;
