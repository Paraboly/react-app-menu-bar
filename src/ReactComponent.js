import React from "react";
import PropTypes from "prop-types";

const ReactComponent = (props) => {
  const { title } = props;
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

ReactComponent.propTypes = {
  title: PropTypes.string,
};

ReactComponent.defaultProps = {
  title: "ReactComponent Library Boilerplate",
};

export default ReactComponent;
