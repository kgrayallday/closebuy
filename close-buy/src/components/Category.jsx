import React from 'react';
import './Category.css';

function Category(props) {
  const { listings } = props

  return (
    <div className='category-parent'>
        {listings()}     
    </div>
  );
}

export default Category;