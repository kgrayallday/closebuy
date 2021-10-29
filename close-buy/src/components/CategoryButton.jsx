import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryButton.css';

function CategoryButton(props) {
  const { linkTerm } = props;

  return(
    <Link to={`/product/category/${linkTerm}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
      <div className="button_container">
      <button className="category_button">Expand View</button>
      </div>
    </Link>
  )

}

export default CategoryButton;