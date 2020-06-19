import { storiesOf } from "@storybook/react";
import React, { useState } from "react";
import AppMenuBar, { AppButton } from "../lib/AppMenuBar.es";

// ? Assets
const scienceImg = require("./assets/science.svg");
const researchImg = require("./assets/science-2.svg");
const flaskImg = require("./assets/flask.svg");
const microorganismImg = require("./assets/microorganism.svg");
const experimentsImg = require("./assets/experiment.svg");
const laboratoryImg = require("./assets/laboratory.svg");
// ? Grayscale Assets
const scienceGrayImg = require("./assets/science-grayscale.svg");
const researchGrayImg = require("./assets/science-2-grayscale.svg");
const flaskGrayImg = require("./assets/flask-grayscale.svg");
const microorganismGrayImg = require("./assets/microorganism-grayscale.svg");
const experimentsGrayImg = require("./assets/experiment-grayscale.svg");
const laboratoryGrayImg = require("./assets/laboratory-grayscale.svg");

const AppMenuBarContainer = (props) => {
  // ? Props
  const {
    flaskOnPress,
    scienceOnPress,
    researchOnPress,
    laboratoryOnPress,
    experimentsOnPress,
    microorganismOnPress,
  } = props;
  // ? States
  const [scienceImageSource, setScienceImageSource] = useState(scienceImg);
  const [researchImageSource, setResearchImageSource] = useState(
    researchGrayImg
  );
  const [flaskImageSource, setFlaskImageSource] = useState(flaskImg);
  const [microorganismImageSource, setMicroorganismImageSource] = useState(
    microorganismGrayImg
  );
  const [experimentsImageSource, setExperimentsImageSource] = useState(
    experimentsImg
  );
  const [laboratoryImageSource, setLaboratoryImageSource] = useState(
    laboratoryGrayImg
  );

  const handleScienceOnPress = () => {
    if (scienceImageSource === scienceGrayImg)
      setScienceImageSource(scienceImg);
    else setScienceImageSource(scienceGrayImg);
    // ? Optional scienceOnPress functionality
    scienceOnPress && scienceOnPress();
  };

  const handleResearchOnPress = () => {
    if (researchImageSource === researchGrayImg)
      setResearchImageSource(researchImg);
    else setResearchImageSource(researchGrayImg);
    // ? Optional researchOnPress functionality
    researchOnPress && researchOnPress();
  };

  const handleFlaskOnPress = () => {
    if (flaskImageSource === flaskGrayImg) setFlaskImageSource(flaskImg);
    else setFlaskImageSource(flaskGrayImg);
    // ? Optional flaskOnPress functionality
    flaskOnPress && flaskOnPress();
  };

  const handleMicroorganismOnPress = () => {
    if (microorganismImageSource === microorganismGrayImg)
      setMicroorganismImageSource(microorganismImg);
    else setMicroorganismImageSource(microorganismGrayImg);
    // ? Optional microorganismOnPress functionality
    microorganismOnPress && microorganismOnPress();
  };

  const handleExperimentsOnPress = () => {
    if (experimentsImageSource === experimentsGrayImg)
      setExperimentsImageSource(experimentsImg);
    else setExperimentsImageSource(experimentsGrayImg);
    // ? Optional experimentsOnPress functionality
    experimentsOnPress && experimentsOnPress();
  };

  const handleLaboratoryOnPress = () => {
    if (laboratoryImageSource === laboratoryGrayImg)
      setLaboratoryImageSource(laboratoryImg);
    else setLaboratoryImageSource(laboratoryGrayImg);
    // ? Optional laboratoryOnPress functionality
    laboratoryOnPress && laboratoryOnPress();
  };

  return (
    <AppMenuBar title="Laboratory Apps">
      <AppButton
        text="Science"
        imageSource={scienceImageSource}
        onPress={handleScienceOnPress}
      />
      <AppButton
        text="Research"
        imageSource={researchImageSource}
        onPress={handleResearchOnPress}
      />
      <AppButton
        text="Flask"
        imageSource={flaskImageSource}
        onPress={handleFlaskOnPress}
      />
      <AppButton
        text="Laboratory"
        imageSource={laboratoryImageSource}
        onPress={handleLaboratoryOnPress}
      />
      <AppButton
        text="Experiments"
        imageSource={experimentsImageSource}
        onPress={handleExperimentsOnPress}
      />
      <AppButton
        text="Micro Organism"
        imageSource={microorganismImageSource}
        onPress={handleMicroorganismOnPress}
      />
    </AppMenuBar>
  );
};

storiesOf("AppMenuBar", module).add("Component with title", () => (
  <AppMenuBarContainer />
));
