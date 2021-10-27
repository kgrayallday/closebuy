import React from 'react';
import './ProductCard.css';

function ProductCard() {

  return(
    <div className="product_container">
      
      <div className="product_container__price">
        <span><i className="fa-solid fa-dollar-sign"></i>200</span>
      </div>
      <div className="fav_pin_unsel"><i class="fas fa-thumbtack"></i></div>
      <div className="fav_pin_sel"><i class="fas fa-thumbtack"></i></div>


      <div className="product_container__description">
        <img
        src='https://www.kindpng.com/picc/m/559-5595091_craigslist-centralized-network-of-online-communities-logo-hd.png'
        alt="domain"
        />
        <div className="product_container__description__text">
          <h2>Couch Probably</h2>
          <p>This is where you would have a description about your pullout couch</p>
        </div>
      </div>
    </div>

  );
}

export default ProductCard;

