import React, { Component } from 'react';
import './AboutBlock.css'; 
import Flexbox from 'flexbox-react';
import hShot from '../../images/faceshot.jpg';


class AboutBlock extends Component {
  render() {
    var styles = {
      about: {
        maxWidth: '800px',
        color: 'white',
        zIndex: 25,
        position: 'relative',
        fontFamily: 'Open sans, sans-serif',
        fontSize: '1.3em',
        lineHeight: '2em',
        marginLeft: this.props.isMobile? '' : '2em',
      }
    }
    return (
      <Flexbox flexDirection="column" className="bottomContainer">
        <Flexbox className="aboutTitle"> About </Flexbox>
        <Flexbox flexDirection={this.props.isMobile? "column" : "row" } justifyContent="center">
          <Flexbox >
            <img src={hShot} className="faceImg" alt="face"/>
          </Flexbox>
          <Flexbox class="aboutContainer" flexDirection="row">
            <Flexbox style={styles.about}>
              I'm a designer and devloper, constantly trying too bridge the gap between creating flexible yet engaging human experiences with
              the use of the latest up and coming tech. My experiences range from being a student, full stack dev, and designer, to roles such
              as tech lead, architect, and teacher. As a firm believer of servant leadership and quiet empathy, I aspire every day to further
              maximise the potential of myself and those around me. Previously I graduated from Northwestern University and am now a Technical
              Analyst at Solstice. Contact me if you'd like to know more!
            </Flexbox>
          </Flexbox>
          </Flexbox>
      </Flexbox>
    );
  }
}

export default AboutBlock;
