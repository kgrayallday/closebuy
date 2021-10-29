import React, { useEffect } from 'react';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import './ProductView.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ProductView() {
  const params = useParams(); // provides url params id.
  const history = useHistory(); // helpful for going back to product cards view
  const location = useLocation(); // Must keep, this is where props data comes from.

  console.log("Product params", params) // debuggin to check url params
  console.log("Current state", location.props) // debuggin to check location.props

  const settings = {
    className: 'product-slider',
    infinite: false,
    arrows: true,
    centerMode: true,
    centerPadding: '50px', /* 50px is default */
    draggable: true, /* true is default */
    lazyLoad: 'ondemand', /* ondemand or progressive - may be useful for many results */
    /* responsive: - takes an array of breakpoints and settings */
    slidesToShow: 1, /* currently not working, likely due to css */
    autoplay: false,
  }

  return(
    <div>
      <h2>Product View #{params.id}</h2>
      <div className='product-container'>
        <Slider {...settings}>
          <div className='product-img-container'>
            <img className='product-image' alt='product' src={location.props.images[0]}></img>
          </div>
        </Slider>
        <div className='product-description'>
          <li>{location.props.id}</li>
          <li>{location.props.title}</li>
          <li>{location.props.domain}</li>
          <li>{location.props.url}</li>
          <li>{location.props.description}</li>
          <li>{location.props.category}</li>
        </div>
        
      </div>
    </div>
    
  );
}

export default ProductView;
