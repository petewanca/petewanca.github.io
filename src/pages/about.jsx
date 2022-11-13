import React from "react";
import { Link } from "gatsby";

// Custom Components
import NavBar from "components/NavBar";
import headshot from "images/headshot.jpeg";

// Style
import "styles/about.scss";

const AboutPage = () => (
  <div className="container">
    <NavBar />
    <main>
      <div className="columns">
        <div className="headshotContainer column">
          <img src={headshot} alt="Headshot of Pete Wanca smiling" />
        </div>
        <div className="bio column">
          <h1>Pete Wanca</h1>
          <hr />
          You've written and recorded your music and now you're ready for the final stages of production: Mixing and
          Mastering. This can be the difference between your vision being executed correctly or ruining the art you've
          poured yourself into.
          <br />
          <br />
          With thousands of songs added to iTunes and Spotify every day, nobody wants a song that's going to distort,
          sound different than you intend, or be manipulated by a site's limiting and volume normalization (common
          practice on the world's most popular streaming services).
          <br />
          <br />I will work with you as a musician first and an engineer second to understand your vision for your art
          and ensure you get the best possible result. Want to have work you can be proud to share with the world? If
          yes, click the button below and let's see if we're a good match to work together.
          <Link to="/contact">
            <h2>Let's talk!</h2>
          </Link>
        </div>
      </div>
    </main>
  </div>
);

export default AboutPage;
