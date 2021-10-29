import React from 'react';
import { Link } from 'react-router-dom';

function CategoryButton(props) {
  const { linkTerm } = props;

  return(
    <Link to={`/product/category/${linkTerm}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
      <button>{linkTerm}</button>
    </Link>
  )

}

export default CategoryButton;