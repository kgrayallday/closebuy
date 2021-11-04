import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { findFavorite } from "../helpers/selectors";
import "./ProductCard.css";

function ProductCard(props) {
  const [ selected, setSelected ] = useState(false)
  const { 
    id,
    title,
    description,
    url,
    images,
    price,
    category,
    domain,
    favoritesData,
    saveFavourite,
    deleteFavorite } = props;

  // Example solution. If listing has zero images, push close-buy logo image or placeholder image into array.
  if (images.length === 0) {
    images.push("https://github.com/kgrayallday/closebuy/blob/development/close-buy/public/images/closebuy-nopic-yellow.png?raw=truehttps://picsum.photos/400/600");
  }

  // Serves up listing data to App.jsx to send a PUT request to Favourites DB.
  const select = function() {
    const domain_id = id
    const listing = {domain_id, title, description, url, images, price, category, domain}
    saveFavourite(listing)
  };

  // Serves up listing data to App.jsx to send a Delete request to Favourites DB.
  const deSelect = function() {
    const domain_id = id
    const listing = {domain_id, title, description, url, images, price, category, domain}
    deleteFavorite(listing)
  };

  // checks if id is listed in current favoritesData array. Renders star styling.
  useEffect(() => {
    if (findFavorite(favoritesData, id) === false) {
      setSelected(false);
    } else {
      setSelected(true);
    }
  }, [select, deSelect]);


  return (
      <div className="product_container" style={{ backgroundImage: `url(${images[0]})` }}>
        <div className="product_container__price">
          <span> <i className="fa-solid fa-dollar-sign"></i> {price} </span>
        </div>
        {selected ? 
        <div className='fav_pin_sel' ><i className="fas fa-star" onClick={deSelect}></i></div> : 
        <div className='fav_pin_unsel'><i className="fas fa-star" onClick={select}></i></div>}

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
              )}
              {domain === "kijiji" && (
                <img
                  src="https://www.techjunkie.com/wp-content/uploads/2019/05/kijiji-logo.png"
                  alt="domain"
                />
              )}
              {domain === "google" && (
                <img
                  src="https://github.com/kgrayallday/closebuy/blob/development/close-buy/public/images/google.jpg?raw=true"
                  alt="domain"
                />
              )}
              {domain === "ebay" && (
                <img
                  src="https://github.com/kgrayallday/closebuy/blob/development/close-buy/public/images/ebay.jpg?raw=true"
                  alt="domain"
                />
              )}
                            {domain === "etsy" && (
                <img
                  src="https://github.com/kgrayallday/closebuy/blob/design/close-buy/public/images/etsy.png?raw=true"
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
