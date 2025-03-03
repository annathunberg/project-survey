import React from "react";
import ImageComponent from "Components/ThirdImg";

const ThirdQuestion = ({ fundamentalInput, setFundamentalInput }) => {
  return (
    <div className="container">
      <div className="contentWrapper">
        <form>
          <div className="inputForm">
            <label htmlFor="textInput">Reading is what? </label>
            <input
              id="textInput"
              placeholder="fundamental!"
              type="text"
              value={fundamentalInput}
              onChange={(event) => setFundamentalInput(event.target.value)}
            />
          </div>
        </form>
        <ImageComponent />
      </div>
    </div>
  );
};

export default ThirdQuestion;
