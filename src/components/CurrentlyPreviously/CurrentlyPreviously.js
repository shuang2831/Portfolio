import React, { Component } from 'react';
import './CurrentlyPreviously.css';
import Flexbox from 'flexbox-react';


class CurrentlyPreviously extends Component {
  render() {
    return (
    <Flexbox flexDirection="row" justify-content="space-between">
				<Flexbox  flexDirection="column"> Currently: 
          <img src={this.props.currentLogo} className="imageLogo" />  
        </Flexbox>

        <Flexbox  flexDirection="column" style={{marginLeft: 50, height: 20}}> Previously: 
          <img src={this.props.previousLogo} className="imageLogo"/> 
        </Flexbox>

    </Flexbox>
    );
  }
}

export default CurrentlyPreviously;
