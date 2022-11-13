import React, { useState } from "react";

// Custom Components
import NavBar from "components/NavBar";
import AudioPlayerDisplay from "components/AudioPlayerDisplay";

// Style
import "styles/home.scss";

const HomePage = () => (
  <div className="container">
    <NavBar />
    <main className="is-flex is-align-content-flex-start">
      <AudioPlayerDisplay />
    </main>
  </div>
);

export default HomePage;
