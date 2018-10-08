import React from 'react';

const toLogoUrl = (props) => '/../img/pisceshome_logo.png'

const Logo = (props) => (
  <img className="main-logo"
        alt="Page logo"
        src={toLogoUrl(props)}
        style={props.style}/>
)

export default Logo;
