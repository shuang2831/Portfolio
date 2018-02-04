import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import Radium, {StyleRoot} from 'radium';
import SlideShow from '../SlideShow/SlideShow';
import TechBoxes from '../TechBoxes/TechBoxes';
import Iphone from '../../images/iphone.png'

class PhoneImage extends Component {
  render() {
    var styles = {
      innerContainer: {
        objectFit: 'contain',
        width: '3em',

      }
    }
    return (

        <img style={this.props.style} src={this.props.innerImage} />

    );
  }
}

export default PhoneImage;
