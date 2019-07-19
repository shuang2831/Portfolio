import React, { PureComponent } from "react";
import "./SocialIcons.css";
import LinkedIn from "react-icons/lib/fa/linkedin-square";
import GitHub from "react-icons/lib/fa/github-square";
import Twitter from "react-icons/lib/fa/twitter-square";
import Mail from "react-icons/lib/md/email";
import Flexbox from "flexbox-react";

class Socialicons extends PureComponent {
  render() {
    return (
      <Flexbox className="Icon-block" align-self="center">
        <a
          href="mailto: shuang2831@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <Mail className="Icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/stan-huang-69550783"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <LinkedIn className="Icon" />
        </a>
        <a
          href="https://github.com/shuang2831"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <GitHub className="Icon" />
        </a>
        <a
          href="https://twitter.com/lookmomimachair?lang=en"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <Twitter className="Icon" />
        </a>
      </Flexbox>
    );
  }
}

export default Socialicons;
