import React, { Component } from 'react';
import './LandingDiv.css';
import logo from '../../logo.svg'
import Solstice from '../../images/solstice.svg'
import StanHeader from '../StanHeader/StanHeader';
import SocialIcons from '../SocialIcons/SocialIcons';
import CurrentlyPreviously from '../CurrentlyPreviously/CurrentlyPreviously';
import Flexbox from 'flexbox-react';
import InOutGreeting from '../InOutGreeting/InOutGreeting';
import FadeCircle from '../FadeCircle/FadeCircle';

class LandingDiv extends Component {
  render() {
    var indents = [];
    for (var i = 0; i < 1; i++) {
      indents.push(<FadeCircle letterIndex={i} leftPosition={4*i + 'em'}/>);
    }
    return (
      <Flexbox class="introduction" align-items="center" justify-content="center">
        {/* {indents} */}
        <StanHeader 
          projects={this.props.projects}
          about={this.props.about}
          contact={this.props.contact}
        />
        <div className="container">
          <header className="Landing-text" > 
            <InOutGreeting />
            I'm Stan Huang, a developer and designer in the Chicago area. Check out some of my projects below.
            <SocialIcons/>
          </header>
        </div>
        

    </Flexbox>
    );
  }
}

export default LandingDiv;
