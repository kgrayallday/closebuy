import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import ProductView from './components/ProductView';
import './ProductCard.css';

function ProductCard(props) {
  const {id, title, description, url, images, price, category, domain} = props

  // Example solution. If listing has zero images, push close-buy logo image or placeholder image into array.
  if (images.length === 0) {
    images.push("https://picsum.photos/400/600");
  };

  return(
    <div className="product_container" style={{backgroundImage: `url(${images[0]})` }}>
      
      <div className="product_container__price">
        <span><i className="fa-solid fa-dollar-sign"></i>{price}</span>
      </div>
      <div className="fav_pin_unsel"><i class="fas fa-thumbtack"></i></div>
      <div className="fav_pin_sel"><i class="fas fa-thumbtack"></i></div>
      <div className="product_container__description">
        {domain === "craigslist" && <img
        src='https://www.kindpng.com/picc/m/559-5595091_craigslist-centralized-network-of-online-communities-logo-hd.png'
        alt="domain"
        />}
        <div className="product_container__description__text">
          <h2>{title}</h2>
          <Link to={{
            pathname: `/product/${id}`,
            props: { id, title, description, url, images, price, category, domain}}}
            style={{ color: 'inherit', textDecoration: 'inherit'}}>
          <button>Product View</button>
          </Link>
        </div>
      </div>


    </div>

  );
}

export default ProductCard;

