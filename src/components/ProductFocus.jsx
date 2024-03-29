import React, { useEffect } from 'react';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import './ProductFocus.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ProductView() {
  const params = useParams(); // provides url params id.
  const history = useHistory(); // helpful for going back to product cards view
  const location = useLocation(); // Must keep, this is where props data comes from.

  console.log("Product params", params) // debuggin to check url params
  console.log("Current state", location.props) // debuggin to check location.props

  const pfSettings = {
    className: 'pf-slider',
    infinite: false,
    arrows: true,
    dots: true,
    centerMode: true,
    centerPadding: '20px', /* 50px is default */
    draggable: true, /* true is default */
    /* responsive: - takes an array of breakpoints and settings */
    slidesToShow: 1, /* currently not working, likely due to css */
    slidesToScroll: 1,
  }

  const imagesArray = location.props.images.map((url, index) => {
    return <div className='pf-image'><img key={index} src={url} className='pf-image' alt='product'></img></div>
  })

  return(
    <div>
      <h2 className='pf-h2'>post origin: {location.props.domain}</h2>
      <div className='product-container'>
          
          <Slider {...pfSettings}>
              {imagesArray}
          </Slider>

          <div className='pf-description'>
            <div className='pf-desc-item pf-desc-title'>{location.props.title}</div>
            <div className='pf-desc-item pf-desc-url'><a href={location.props.url} target="_blank" >Visit Link </a></div>
            <div className='pf-desc-item pf-desc-desc'>{location.props.description}</div>
 
          </div>

        </div>
    </div>
    
  );
}

export default ProductView;
