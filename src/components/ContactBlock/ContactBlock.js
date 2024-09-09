import React, { PureComponent } from "react";
import "./ContactBlock.css";
import Flexbox from "flexbox-react";

class ContactBlock extends PureComponent {
  render() {
    return (
      <Flexbox flexDirection="column" className="contactContainer">
        <Flexbox
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="center"
          style={{
            color: "white",
            fontSize: "1.5em",
            fontFamily: " 'Roboto', sans-serif"
          }}
        >
          <a
            className="contact-link"
            href="mailto: shuang2831@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>
          ||
          <a
            className="contact-link"
            href="https://www.linkedin.com/in/stan-huang-69550783"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          ||
          <a
            className="contact-link"
            href="https://github.com/shuang2831"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          ||
          <a
            className="contact-link"
            href={require("../../StanHuang_Resume-7.pdf")}
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

export default ContactBlock;
