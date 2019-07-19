import React, { PureComponent } from "react";

class PhoneImage extends PureComponent {
  render() {
    var styles = {
      innerContainer: {
        objectFit: "contain",
        width: "3em"
      }
    };
    return <img style={this.props.style} src={this.props.innerImage} />;
  }
}

export default PhoneImage;
