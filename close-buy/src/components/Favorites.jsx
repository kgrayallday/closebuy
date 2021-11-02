import React from 'react';
import { useHistory } from 'react-router-dom';
import './Category.css';

function Favorites(props) {
  const { favoriteListings } = props;
  const history = useHistory();

  return(
    <div className='category-parent'>
    <h2>Favourties page!</h2>
    <button className="return-button" onClick={() => history.goBack()}
    >Return To Search</button>
    <div className='category-child'>
      {favoriteListings()}
    </div>
    </div>
  )
};

export default Favorites