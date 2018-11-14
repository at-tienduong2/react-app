import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'semantic-ui-react'

class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    urlImg: PropTypes.string.isRequired,
    bgClass: PropTypes.string.isRequired
  };

  onClick = () => {
    const { urlImg, onClick } = this.props;
    onClick(urlImg);
  }

  render() {
    const { 
      onClick,
      props: {
        activeTab,
        urlImg,
        bgClass
      },
    } = this;


    let className = 'tab-list-item';

    if (activeTab === urlImg) {
      className += ' tab-list-active';
    }

    return (
      <li 
        className={className}
        onClick={onClick}>
        <div className={bgClass}>
          <Image src={urlImg} />
        </div>
      </li>
    );
  }
}


export default Tab;
