import React from "react";
import PropTypes from "prop-types";

import pausedImg from "images/sound_stop.png";
import playingGif from "images/sound_waves.gif";

import * as audioPlayerControlsStyle from "./AudioPlayerControls.module.scss";

const AudioPlayerControls = ({
  isPlaying,
  tracks,
  currentTrackNo,
  dispatch,
}) => (
  <div className={`${audioPlayerControlsStyle.container}`}>
    {isPlaying ? (
      <img
        src={playingGif}
        alt="Gif of sound waves to indicate audio is playing."
      />
    ) : (
      <img
        src={pausedImg}
        alt="Image of sound waves to indicate audio is paused."
      />
    )}
    <div>
      <div>{currentTrackNo}</div>
      <hr />
      <div>{tracks.length}</div>
    </div>
  </div>
);

AudioPlayerControls.propTypes = {
  isPlaying: PropTypes.bool,
  tracks: PropTypes.array,
  currentTrackNo: PropTypes.number,
  dispatch: PropTypes.func,
};

export default AudioPlayerControls;
