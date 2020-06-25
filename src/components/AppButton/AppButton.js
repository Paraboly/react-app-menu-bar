import React from "react";
/**
 * ? Local Imports
 */
import "./AppButton.scss";
import styles from "./AppButton.style";

const AppButton = (props) => {
  const {
    text,
    imageSource,
    appButtonStyle,
    figureStyle,
    textStyle,
    onPress,
  } = props;

  return (
    <div id="app-button">
      <button
        type="button"
        onClick={onPress}
        className="app-button"
        style={appButtonStyle || styles.appButtonStyle}
      >
        <div className="button-style">
          <div className="figure-style" style={figureStyle}>
            <img alt="" src={imageSource} />
            <figcaption className="subtitle-4" styles={textStyle}>
              {text}
            </figcaption>
          </div>
        </div>
      </button>
    </div>
  );
};

export default AppButton;
