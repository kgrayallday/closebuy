import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryButton.css';

function CategoryButton(props) {
  const { linkTerm } = props;

  return(
    <div className="button_container">
      <Link to={`/product/category/${linkTerm}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
      <button className="category_button">Show All</button>
      </Link>
    </div>
  )

}

export default CategoryButton;