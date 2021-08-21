import React from "react";
import "./ImageLinkForm.css";

function ImageLinkForm({ url, setUrl, onSubmit }) {
  return (
    <div>
      <p className="f3 ph5">
        Paste an image and we'll recognize the faces within it. Give it a try!
      </p>
      <div>
        <div className="form center pa4 br3 shadow-5">
          <input
            className="f4 pa2 w-70 center"
            type="text"
            value={url}
            onChange={(event) => {
              setUrl(event.target.value);
            }}
          />
          <button
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple mh0"
            onClick={() => onSubmit()}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;
