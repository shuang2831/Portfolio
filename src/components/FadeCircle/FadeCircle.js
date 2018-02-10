import React, {Component} from 'react';
import Radium, {StyleRoot} from 'radium';
import {Circle,} from 'react-shapes';

class FadeCircle extends Component {

  constructor(props) {
    super(props);
    this.state = 
    {
      left: Math.floor(Math.random() * window.innerWidth-30),
      top: Math.floor(Math.random() * window.innerHeight-30),
      colors: {
        // 0: '#f1e4c5',
        // 1: '#e9f1f4',
        // 2: '#e0aa82',
        // 3: '#d9bb8d',
        0: '#34ACBF',
        1: '#3C516E',
        2: '#F76C5E',
        3: '#7C77B9',
        4: '#3bc971',
        5: '#e12b26',
        6: '#E7E393',
      },
      index:Math.floor(Math.random()*7),
      indexLetter:Math.floor(Math.random()*8),
      greetings: {
        0: "Hello!",
        1: "Bonjour!",
        2: "你好！",
        3: "Hola!",
        4: "Aloha!",
      },
      welcome: {
        0: "Javscript",
        1: "React Native",
        2: "Java",
        3: "Mobile",
        4: "Web",
        5: "Unity",
        6: "Blender",
        7: "Swift",
      },
    };
    setTimeout(() => {
      // the code in here will run some time in the future
      setInterval(() => {
        this.setState(previousState => {
          return {
            left: Math.random() * window.innerWidth,
            top: Math.random() * document.body.scrollHeight,
            index: Math.floor(Math.random()*4),
            indexLetter: Math.floor(Math.random()*8),
          };
        });
      }, 5000);
    }, (this.props.letterIndex*1000));
  }
  
  render() {
    var circleKF =  Radium.keyframes(
      { 
        '0%': { opacity: 0,
          // transform: 'translate(0,0em)'
              },
        '50%': { opacity: 0.85,},
        '100%': { opacity: 0, 
          //transform: 'translate(0em, -20em)'
        },
      }, 'fade'
    );
    
    var styles = {
      elementToFadeInAndOut: {
    
        animation: 'fade 5s ' + (this.props.letterIndex) + 's infinite',
        animationName: circleKF, 
        position: 'absolute',
        opacity: 0,
        rotation: 90,
        zIndex: 0,
      },
      lanternLetter: {
        color: 'rgba(0, 0, 0, 0.7)',
        zIndex: 1,
        position: 'absolute',
        left: this.state.welcome[this.props.letterIndex] !== "!" ? '0.5em' : '0.7em',
        top: '-0.5em',
        fontFamily: 'Asap, sans-serif',
        fontSize: '2.5em',
        textAlign: 'center',
      }
    
    }
    return (
    <StyleRoot>
 
      <div style={[
          styles.elementToFadeInAndOut,
          {
            left: this.state.left,
            top: this.state.top,
          }
        ]}>
        {/* <h1 style={styles.lanternLetter}>{this.state.welcome[this.props.letterIndex]}</h1> */}
      
        .
          {/* <div style={{color: this.state.colors[this.state.index], fontFamily: 'Asap, sans-serif', fontSize: '2.5em',
        textAlign: 'center',}}>
            {this.state.welcome[this.state.indexLetter]}
          </div> */}
          <Circle r={100} fill={{color: this.state.colors[this.state.index]}} stroke={{color:'#FFFFFF'}} strokeWidth={0} >
          
          </Circle>
       
      </div>

    </StyleRoot>
    )
  }
}



export default FadeCircle;
