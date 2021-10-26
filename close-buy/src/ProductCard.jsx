import React from 'react';
import './ProductCard.css';

function ProductCard() {

  return(
    <div className="product_container">
      <div className="container__info">
        <span><i class="fa-solid fa-dollar-sign"></i>200</span>
        {/* <span><i class="fa-solid fa-dollar-sign"></i>200</span> */}
        {/* <span><i class="fa-solid fa-dollar-sign"></i>200</span> */}
      </div>
      <div className="container__profile">
        <img
        src='https://www.kindpng.com/picc/m/559-5595091_craigslist-centralized-network-of-online-communities-logo-hd.png'
        alt="product"
        />
        <div className="container__profile__text">
          <h2>Couch Probably</h2>
          <p>This is where you would have a description about your pullout couch</p>
        </div>
      </div>
    </div>

  );
}

export default ProductCard;