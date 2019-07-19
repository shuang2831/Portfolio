import React, { PureComponent } from "react";
import "./StanHeader.css";
import logo from "../../images/logoFill.svg";
import Flexbox from "flexbox-react";

class StanHeader extends PureComponent {
  render() {
    return (
      <Flexbox
        element="header"
        className="App-header"
        flexDirection="row"
        justify-content="space-between"
      >
        <img src={logo} className="App-logo" alt="logo" />
        <Flexbox flexWrap="wrap" className="Header-links">
          <button className="Header-link" onClick={this.props.projects}>
            Projects
          </button>
          <button className="Header-link" onClick={this.props.about}>
            About
          </button>
          <button className="Header-link" onClick={this.props.contact}>
            Contact
          </button>
          <a
            className="Header-link"
            href={require("../../StanHuang_MyResume.pdf")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </Flexbox>
      </Flexbox>
    );
  }
}

export default StanHeader;
