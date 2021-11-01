import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard(props) {
  const { id, title, description, url, images, price, category, domain, saveFavourite } =
    props;

  // Example solution. If listing has zero images, push close-buy logo image or placeholder image into array.
  if (images.length === 0) {
    images.push("https://picsum.photos/400/600");
  }

  // Servers up listing data to App.jsx to send a PUT request to Favourites DB.
  const select = function() {
    const listing = {id, title, description, url, images, price, categroy, domain}
    saveFavourite(listing)
  };

  return (
      <div className="product_container" style={{ backgroundImage: `url(${images[0]})` }}>
        <div className="product_container__price">
          <span> <i className="fa-solid fa-dollar-sign"></i> {price} </span>
        </div>
        <div className="fav_pin_unsel">
          <i class="fas fa-star"></i>
        </div>
        <div className="fav_pin_sel">
          <i className="fas fa-star"></i>
        </div>

        <Link 
          to={{ pathname: `/product/${id}`,
          props: { id, title, description, url, images, price, category, domain }}}
          style={{ color: "inherit", textDecoration: "inherit" }}>

            <div className="product_container__description">
              {domain === "craigslist" && (
                <img
                  src="https://www.kindpng.com/picc/m/559-5595091_craigslist-centralized-network-of-online-communities-logo-hd.png"
                  alt="domain"
                />
              )}{domain === "kijiji" && (
                <img
                  src="https://www.techjunkie.com/wp-content/uploads/2019/05/kijiji-logo.png"
                  alt="domain"
                />
              )}

              <div className="product_container__description__text">
                <h2>{title}</h2>
              </div>
            </div>

        </Link>
        
      </div>
    
  );
}

export default ProductCard;
