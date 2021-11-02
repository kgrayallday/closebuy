import React from 'react';

function Favorites(props) {
  const { favoriteListings } = props;

  return(
    <div>
    <h2>Favourties page!</h2>
      {favoriteListings()}
    </div>
  )
};

export default Favorites