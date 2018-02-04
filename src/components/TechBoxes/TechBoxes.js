import React, {Component} from 'react';
import { slideInLeft, slideOutUp } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import {Rectangle, Circle, Ellipse, Line, Polyline, CornerBox, Triangle} from 'react-shapes';
import Flexbox from 'flexbox-react';

class TechBoxes extends Component {

  constructor(props) {
    super(props);
    this.state = 
    {

    }
  }
  
  render() {  
    
    var styles = {
      box: {
        
        borderRadius: '5px',
        marginTop: '0.2em',
        marginBottom: '0.2em',
        marginLeft: '0.4em',
        marginRight: '0.4em',
        padding: '0.5em',

        backgroundColor: '#4250ae',
        color: 'white',
      }
    }

    var boxes = [];
    for (var i = 0; i < this.props.techArray.length; i++) {
      boxes.push(<div style={ this.props.boxStyle}>{this.props.techArray[i]}</div>);
    }

    return (
      <Flexbox style={this.props.style}>
        {boxes}
      </Flexbox>
    )
  }

}



export default TechBoxes;
