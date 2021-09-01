import React from "react";
import Tilty from "react-tilty";
import "./Logo.css";
import facialRecognition from "./facial-recognition.gif";

function Logo() {
  return (
    <div className="ee ma4 mt0">
      <Tilty className="br2 h4 w4" scale={1.1} max={55}>
        <div>
          <img
            className="centerImg logo shadow-5"
            src={facialRecognition}
            alt="facialRecognition"
          />
        </div>
      </Tilty>
    </div>
  );
}

export default Logo;
