import React, { createContext, useReducer } from "react";

// Data
import { audioMetadata } from "audio/metadata.js";

const AudioPlayerContext = createContext();

const initialState = {
  isPlaying: false,
  tracks: audioMetadata,
  currentTrackNo: 0,
  currentTrack: audioMetadata[0],
};

function audioPlayerReducer(state, action) {
  switch (action.type) {
    case "AUDIO_PLAYER_CONTROL": {
      return { ...state, isPlaying: !state.isPlaying };
    }
    case "AUDIO_PLAYER_FORWARD": {
      const newValue = state.currentTrackNo + 1;
      return {
        ...state,
        currentTrackNo: newValue,
        currentTrack: state.tracks[newValue],
      };
    }
    case "AUDIO_PLAYER_BACKWARD": {
      const newValue = state.currentTrackNo - 1;
      return {
        ...state,
        currentTrackNo: newValue,
        currentTrack: state.tracks[newValue],
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function AudioPlayerProvider({ children }) {
  const [state, dispatch] = useReducer(audioPlayerReducer, initialState);

  const value = { state, dispatch };
  return (
    <AudioPlayerContext.Provider value={value}>
      {children}
    </AudioPlayerContext.Provider>
  );
}

function useAudioPlayer() {
  const context = React.useContext(AudioPlayerContext);
  if (context === undefined) {
    throw new Error(
      "useAudioPlayer must be used within an AudioPlayerProvider"
    );
  }
  return context;
}

export { AudioPlayerProvider, useAudioPlayer };
