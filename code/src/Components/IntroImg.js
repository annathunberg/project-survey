import React, { Component } from "react";

class ImageComponent extends Component {
  render() {
    return (
      <div>
        <iframe
          title="introimg"
          src="https://giphy.com/embed/2sdHCTZZeQIm0Qxb7r"
          width="240"
          height="135"
          allowFullScreen
        ></iframe>
        <p className="giphyText">
          <a
            className="imgLink"
            href="https://giphy.com/gifs/rupaulsdragrace-episode-14-rupauls-drag-race-2sdHCTZZeQIm0Qxb7r"
          >
            via GIPHY
          </a>
        </p>
      </div>
    );
  }
}

export default ImageComponent;
