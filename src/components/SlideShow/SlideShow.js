import React, {Component} from 'react';
import { slideInLeft, slideOutUp } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import {Rectangle, Circle, Ellipse, Line, Polyline, CornerBox, Triangle} from 'react-shapes';
import Flexbox from 'flexbox-react';

class SlideShow extends Component {

  constructor(props) {
    super(props);
    this.state = 
    {
      photos: props.photos,
      maxIndex: props.photos.length,
      index: 0,
      colors: [],
    };

    // for (var i = 0; i < this.state.maxIndex; i++) {
    //   this.state.colors.push(<Circle r={5} style={styles.circle}/>);
    // }
    setTimeout(() => {
      // the code in here will run some time in the future
      setInterval(() => {
        this.setState(previousState => {
          let newIndex = this.state.index + 1;
          if (newIndex >= this.state.maxIndex){
            newIndex = 0;
          }
          return { index: newIndex };
        });
      }, 5000);
    }, 5000);
  }
  
  render() {  
    var styles = {
      circles: {
        marginTop: '1em',
      }
    }
    var indents = [];
    for (var i = 0; i < this.state.maxIndex; i++) {
        indents.push(
        <div key={i} style={{marginRight: '0.5em'}}> 
          <Circle r={3} fill={ (this.state.index === i) ? {color: this.props.chosenColor} : {color:'#d8d8d8'} } /> 
        </div>);
    }
    return (
      <Flexbox flexDirection="column" alignItems="center">
    <img onClick={this.nextPic.bind(this)} src={this.state.photos[this.state.index]} style={this.props.style}/>
      <Flexbox style={styles.circles}>
        {indents}
      </Flexbox>
    </Flexbox>
    )
  }

  nextClick(idx){
    this.setState({
      index: idx 
    });
  }

  nextPic(){
    this.setState(previousState => {
      let newIndex = this.state.index + 1;
      if (newIndex >= this.state.maxIndex){
        newIndex = 0;
      }
      return { index: newIndex };
    });
  }
}



export default SlideShow;
