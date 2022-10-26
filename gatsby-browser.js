import "@fontsource/nunito-sans";
import "@fontsource/nunito-sans/900.css";
import "@fontsource/nunito-sans/200.css";
import "@fortawesome/react-fontawesome";
import "@fortawesome/free-brands-svg-icons";
import "./src/styles/global.scss";

import React from "react";

import { AudioPlayerProvider } from "./src/context/audioPlayerContext";

export const wrapRootElement = ({ element }) => <AudioPlayerProvider>{element}</AudioPlayerProvider>;
