import React, { PureComponent } from "react";
import "./LandingDiv.css";
import StanHeader from "../StanHeader/StanHeader";
import SocialIcons from "../SocialIcons/SocialIcons";
import Flexbox from "flexbox-react";
import InOutGreeting from "../InOutGreeting/InOutGreeting";
import FadeCircle from "../FadeCircle/FadeCircle";

class LandingDiv extends PureComponent {
  render() {
    var indents = [];
    for (var i = 0; i < 1; i++) {
      indents.push(<FadeCircle letterIndex={i} leftPosition={4 * i + "em"} />);
    }
    var styles = {
      container: {
        width: "90%",
        maxWidth: "100vw",
        marginRight: "auto",
        marginLeft: "auto",
        paddingTop: "0em",
        marginTop: this.props.isMobile ? "10em" : ""
      }
    };
    return (
      <Flexbox
        className="introduction"
        align-items="center"
        justify-content="center"
      >
        {/* {indents} */}
        <StanHeader
          projects={this.props.projects}
          about={this.props.about}
          contact={this.props.contact}
        />
        <div style={styles.container}>
          <header className="Landing-text">
            {!this.props.isMobile && <InOutGreeting />}
            I'm Stan Huang, a developer in the Boston area. Check out some of my
            projects below.
            <SocialIcons />
          </header>
        </div>
      </Flexbox>
    );
  }
}

export default LandingDiv;
