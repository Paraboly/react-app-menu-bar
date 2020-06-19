import { storiesOf } from "@storybook/react";
import React from "react";
import ReactComponent from "../lib/ReactComponent.es";

const ReactComponentContainer = () => (
  // ? States (Just an example)
  // const [title, setTitle] = useState(deadpoolQuotes[0]);

  <div>
    <ReactComponent title="Bad Deadpool... Good Deadpool!" />
  </div>
);
storiesOf("ReactComponent", module).add("ReactComponent", () => (
  <ReactComponentContainer />
));
