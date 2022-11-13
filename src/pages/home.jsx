import React, { useState } from "react";

// Context
import { useAudioPlayer } from "context/audioPlayerContext";

// Custom Components
import NavBar from "components/NavBar";
import AudioPlayerDisplay from "components/AudioPlayerDisplay";

// Style
import "styles/home.scss";

const HomePage = () => {
  const { state, dispatch } = useAudioPlayer();

  return (
    <div className="container">
      <NavBar />
      <main className="is-flex is-align-content-flex-start">
        <AudioPlayerDisplay
          tracks={state.tracks}
          currentTrackNo={state.currentTrackNo}
          currentTrack={state.currentTrack}
          dispatch={dispatch}
        />
      </main>
    </div>
  );
};

export default HomePage;
