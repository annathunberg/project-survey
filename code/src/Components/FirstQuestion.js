import React from "react";
import ImageComponent from "./FirstImg";

// lägg till en key till labels?

const FirstQuestion = ({ radioChecked, setRadiochecked }) => {
  //const [radioChecked, setRadiochecked] = useState("");
  return (
    <div className="QuestionContainer">
      <p>Do you watch Rupaul's Drag Race?</p>
      <div className="radioForm">
        <form onSubmit={(event) => event.preventDefault()}>
          <label>
            <input
              type="radio"
              value="yes"
              onChange={(event) => setRadiochecked(event.target.value)}
              checked={radioChecked === "yes"}
            />
            Yes!
          </label>
          <label>
            <input
              type="radio"
              value="no"
              onChange={(event) => setRadiochecked(event.target.value)}
              checked={radioChecked === "no"}
            />
            No, I have bad taste.
          </label>
        </form>
      </div>
      <ImageComponent />
    </div>
  );
};

export default FirstQuestion;
