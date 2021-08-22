import React from "react";
import "./FaceRecognition.css";

function FaceRecognition({ imageToDetect, faceBorderBoxes }) {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img
          id="image"
          src={imageToDetect}
          alt=""
          width="500px"
          height="auto"
        />
        {faceBorderBoxes
          ? faceBorderBoxes.map((borderBox) => (
              <div
                key={borderBox.id}
                className="bounding-box"
                style={{
                  top: borderBox.topRow,
                  right: borderBox.rightCol,
                  left: borderBox.leftCol,
                  bottom: borderBox.bottomRow,
                }}
              />
            ))
          : null}
      </div>
    </div>
  );
}

export default FaceRecognition;
