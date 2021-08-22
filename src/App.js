import React, { useState } from "react";
import Particles from "react-particles-js";
import "./App.css";
import Navigation from "./components/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Clarifai from "clarifai";

//You must add your own API key here from Clarifai.
const app = new Clarifai.App({
  apiKey: "6eeb3aa9a5504ead9e7280d680dc3224",
});

function App() {
  const [url, setUrl] = useState("");
  const [imageToDetect, setImageToDetect] = useState("");
  const [faceBorderBox, setFaceBorderBox] = useState(null);

  function calculateFaceCoordinates(boundingBox) {
    const image = document.getElementById("image");
    const imageWidth = image.width;
    const imageHeight = image.height;
    console.log("width:", imageWidth, "height", imageHeight);
    const coordinates = {
      leftCol: boundingBox.left_col * imageWidth,
      rightCol: imageWidth - boundingBox.right_col * imageWidth,
      topRow: boundingBox.top_row * imageHeight,
      bottomRow: imageHeight - boundingBox.bottom_row * imageHeight,
    };
    setFaceBorderBox(coordinates);
  }

  // function drawFacialBorderBox(coordinates) {
  //   console.log(coordinates);
  //   setFaceBorderBox(coordinates);
  // }

  function onSubmit() {
    console.log("clicked");
    setImageToDetect(url);
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, url)
      .then((response) => {
        console.log(
          response.outputs[0].data.regions[0].region_info.bounding_box
          // response
        );
        calculateFaceCoordinates(
          response.outputs[0].data.regions[0].region_info.bounding_box
        );
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="App">
      <Particles className="particles" params={particleOptions} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm url={url} setUrl={setUrl} onSubmit={onSubmit} />
      <FaceRecognition
        imageToDetect={imageToDetect}
        faceBorderBox={faceBorderBox}
      />
    </div>
  );
}

const particleOptions = {
  particles: {
    number: {
      value: 275,
      density: {
        enable: true,
        value_area: 1900,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};

export default App;
