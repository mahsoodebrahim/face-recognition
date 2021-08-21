import React from "react";

function FaceRecognition({ imageToDetect }) {
  return (
    <div className="center">
      {imageToDetect ? (
        <img
          src={imageToDetect}
          alt=""
          width="500px"
          height="auto"
          className="mv4"
        />
      ) : null}
    </div>
  );
}

export default FaceRecognition;
