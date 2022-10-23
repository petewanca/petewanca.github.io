import React from "react";
import { Link } from "gatsby";

// Styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphonesAlt } from "@fortawesome/free-solid-svg-icons";
import "styles/index.scss";

const IndexPage = () => (
    <main className="enter">
        <div>
            <h1>Pete Wanca</h1>
            <h2>
                Mixing & Mastering
                <br />
                Engineer
            </h2>
        </div>
        <div>
            <FontAwesomeIcon
                size="3x"
                className="enter-icon"
                icon={faHeadphonesAlt}
            />
            <p>To enhance your experience,</p>
            <p>please turn on your sound.</p>
        </div>
        <Link className="enter-btn" to="/home">
            ENTER
        </Link>
    </main>
);

export default IndexPage;