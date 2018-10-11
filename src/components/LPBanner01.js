import React from 'react'

const toBannerUrl = (props) => 
  props.banner ? './../img/slide_1.jpg'
               :  './../img/slide_2.jpg'

const LPbanner01 = (props) => (
  <div className="lp-banner-01">
    <img className="banner"
         alt="lp-banner"
         src={toBannerUrl(props)}
        /> 
  </div>

)

export default LPbanner01;