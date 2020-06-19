import React, { Component } from "react";
import "./AppMenuBar.scss";

export default class AppMenuBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title, children } = this.props;
    return (
      <div>
        <div className="app-launcher-panel">
          <h4 className="title subtitle-1">{title}</h4>
          <div className="apps">{children}</div>
        </div>
      </div>
    );
  }
}
