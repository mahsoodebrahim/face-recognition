import React, { useState } from "react";
import Particles from "react-particles-js";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import SignIn from "./components/SignIn/SignIn";
import Register from "./components/Register/Register";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";

function App() {
  const [url, setUrl] = useState("");
  const [imageToDetect, setImageToDetect] = useState("");
  const [faceBorderBoxes, setFaceBorderBoxes] = useState([]);
  const [route, setRoute] = useState("SignIn");
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    entries: 0,
    joined: "",
  });

  function loadUser(data) {
    setUser({
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined,
    });
  }

  function calculateFaceCoordinates(response) {
    const image = document.getElementById("image");
    const imageWidth = image.width;
    const imageHeight = image.height;

    return response.outputs[0].data.regions.map((region) => {
      const boundingBox = region.region_info.bounding_box;
      return {
        leftCol: boundingBox.left_col * imageWidth,
        rightCol: imageWidth - boundingBox.right_col * imageWidth,
        topRow: boundingBox.top_row * imageHeight,
        bottomRow: imageHeight - boundingBox.bottom_row * imageHeight,
        id: region.id,
      };
    });
  }

  function drawFacialBorderBox(boundingBoxes) {
    setFaceBorderBoxes(boundingBoxes);
  }

  function onPictureSubmit() {
    setFaceBorderBoxes([]); // reset all the boundary boxes
    setImageToDetect(url); // set image url as image to detect for the FaceRecognition component
    fetch("http://localhost:3000/imageAPI", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: url,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Update the userEntriesCount
        fetch("http://localhost:3000/image", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: user.id,
          }),
        })
          .then((response) => response.json())
          .then((userEntriesCount) => {
            loadUser({ ...user, entries: userEntriesCount });
          });

        drawFacialBorderBox(calculateFaceCoordinates(data));
      })
      .catch((err) => console.log(err));
  }

  function onRouteChange(navigationRoute) {
    setRoute(navigationRoute);
    navigationRoute === "Home" ? setIsSignedIn(true) : setIsSignedIn(false);
  }

  function signOut() {
    setRoute("SignIn");
    setIsSignedIn(false);
    setUser({
      id: "",
      name: "",
      email: "",
      entries: 0,
      joined: "",
    });
    setUrl("");
    setImageToDetect("");
    setFaceBorderBoxes([]);
  }

  return (
    <div className="App">
      <Particles className="particles" params={particleOptions} />
      <Navigation
        onRouteChange={onRouteChange}
        isSignedIn={isSignedIn}
        signOut={signOut}
      />
      {route === "Home" ? (
        <>
          <Logo />
          <Rank userName={user.name} userEntries={user.entries} />
          <ImageLinkForm
            url={url}
            setUrl={setUrl}
            onPictureSubmit={onPictureSubmit}
          />
          <FaceRecognition
            imageToDetect={imageToDetect}
            faceBorderBoxes={faceBorderBoxes}
          />
        </>
      ) : route === "SignIn" ? (
        <SignIn onRouteChange={onRouteChange} loadUser={loadUser} />
      ) : (
        <Register onRouteChange={onRouteChange} loadUser={loadUser} />
      )}
    </div>
  );
}

const particleOptions = {
  particles: {
    number: {
      value: 100,
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
        mode: "remove",
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
