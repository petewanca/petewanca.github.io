import React, { useState } from "react";

// Custom Components
import NavBar from "components/NavBar";
import AudioPlayer from "components/AudioPlayer";

// Style
import "styles/home.scss";

const HomePage = () => (
  <div className="container">
    <NavBar />
    <main className="is-flex is-align-content-flex-start">
      <AudioPlayer />
    </main>
  </div>
);

export default HomePage;
