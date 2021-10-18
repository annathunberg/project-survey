import React, { Component } from "react";

class ImageComponent extends Component {
  render() {
    return (
      <div>
        <iframe
          title="summaryimg"
          src="https://giphy.com/embed/3KNV9PuUxqPcvcXgHZ"
          width="240"
          height="135"
        ></iframe>
        <p>
          <a
            className="imgLink"
            href="https://giphy.com/gifs/rupaulsdragrace-season-13-drag-race-rpdr-3KNV9PuUxqPcvcXgHZ"
          >
            via GIPHY
          </a>
        </p>
      </div>
    );
  }
}

export default ImageComponent;
