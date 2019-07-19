import React, { PureComponent } from "react";
import Flexbox from "flexbox-react";

class TechBoxes extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var boxes = [];
    for (var i = 0; i < this.props.techArray.length; i++) {
      boxes.push(
        <div key={i} style={this.props.boxStyle}>
          {this.props.techArray[i]}
        </div>
      );
    }

    return <Flexbox style={this.props.style}>{boxes}</Flexbox>;
  }
}

export default TechBoxes;
