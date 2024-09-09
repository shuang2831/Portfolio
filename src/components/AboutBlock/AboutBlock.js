import React, { PureComponent } from "react";
import "./AboutBlock.css";
import Flexbox from "flexbox-react";
import hShot from "../../images/faceshot.jpg";

class AboutBlock extends PureComponent {
  render() {
    var styles = {
      about: {
        maxWidth: "800px",
        color: "white",
        zIndex: 25,
        position: "relative",
        fontFamily: "Open sans, sans-serif",
        fontSize: "1.3em",
        lineHeight: "2em",
        marginLeft: this.props.isMobile ? "" : "2em"
      }
    };
    return (
      <Flexbox flexDirection="column" className="bottomContainer">
        <Flexbox className="aboutTitle"> About </Flexbox>
        <Flexbox
          flexDirection={this.props.isMobile ? "column" : "row"}
          justifyContent="center"
        >
          <Flexbox>
            <img src={hShot} className="faceImg" alt="face" />
          </Flexbox>
          <Flexbox class="aboutContainer" flexDirection="row">
            <Flexbox style={styles.about}>
              I'm a developer, constantly trying too bridge the gap between
              creating flexible yet engaging human experiences with the use of
              the latest up and coming tech. Contact me if you'd like to know
              more!
            </Flexbox>
          </Flexbox>
        </Flexbox>
      </Flexbox>
    );
  }
}

export default AboutBlock;
