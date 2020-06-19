import React from "react";
import "./AppButton.scss";

const AppButton = (props) => {
  const { text, imageSource, onPress } = props;

  return (
    <div id="app-button">
      <button className="app-button" type="button" onClick={onPress}>
        <div className="button-style">
          <figure>
            <img alt="" src={imageSource} />
            <figcaption className="subtitle-4">{text}</figcaption>
          </figure>
        </div>
      </button>
    </div>
  );
};

export default AppButton;
