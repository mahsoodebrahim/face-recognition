import React from "react";
import Tilty from "react-tilty";
import "./Logo.css";
import facialRecognition from "./facial-recognition.gif";

function Logo() {
  return (
    <div className="ee ma4 mt0">
      <Tilty className="tilt br2 shadow-2 h4 w4" scale={1.1} max={55}>
        <div>
          <img
            className="centerImg logo"
            src={facialRecognition}
            alt="facialRecognition"
          />
        </div>
      </Tilty>
    </div>
  );
}

export default Logo;
