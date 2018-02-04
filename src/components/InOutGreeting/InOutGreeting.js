import React, {Component} from 'react';
import { shake } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

import './InOutGreeting.css';

class InOutGreeting extends Component {
  
  constructor(props) {
    super(props);
    this.state = 
    {
      greetings: {
        0: "Hello!",
        1: "Bonjour!",
        2: "你好！",
        3: "Hola!",
        4: "Aloha!",
      },
      index:  Math.floor(Math.random()*5),
      maxIndex: 4
    };

    // setInterval(() => {
    //   this.setState(previousState => {
    //     let newIndex = this.state.index + 1;
    //     if (newIndex > this.state.maxIndex){
    //       newIndex = 0;
    //     }
    //     return { index: newIndex };
    //   });
    // }, 3000);
  }

  render() {
  

    return (
    <StyleRoot>
      <div className="Greeting">
      {this.state.greetings[this.state.index]}
      </div>
    </StyleRoot>
    )
  }
}

export default InOutGreeting;
