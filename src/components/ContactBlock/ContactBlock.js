import React, { Component } from 'react';
import './ContactBlock.css'; 
import Flexbox from 'flexbox-react';


class ContactBlock extends Component {
  render() {
    return (
      <Flexbox flexDirection="column" className="contactContainer">
        <Flexbox flexDirection="row" justifyContent="center" style={{color: 'white', fontSize: '1.5em', fontFamily: " 'Roboto', sans-serif"}}>
          <a className="contact-link" href="mailto: shuang2831@gmail.com" target="_blank">Email</a>
          ||
          <a className="contact-link" href="https://www.linkedin.com/in/stan-huang-69550783" target="_blank">LinkedIn</a>
          ||
          <a className="contact-link" href="https://github.com/shuang2831" target="_blank">Github</a>
          ||
          <a className="contact-link" href="https://twitter.com/lookmomimachair?lang=en" target="_blank">Twitter</a>
        </Flexbox>
      </Flexbox>
    );
  }
}

export default ContactBlock;
