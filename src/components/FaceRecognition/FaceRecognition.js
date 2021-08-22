import React from "react";
import "./FaceRecognition.css";

function FaceRecognition({ imageToDetect, faceBorderBox }) {
  console.log("faceborderbod", faceBorderBox);
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
        {faceBorderBox ? (
          <div
            className="bounding-box"
            style={{
              top: faceBorderBox.topRow,
              right: faceBorderBox.rightCol,
              left: faceBorderBox.leftCol,
              bottom: faceBorderBox.bottomRow,
            }}
          ></div>
        ) : null}
      </div>
    </div>
  );
}

export default FaceRecognition;
