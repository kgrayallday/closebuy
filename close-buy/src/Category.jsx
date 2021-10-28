import React from 'react';
import './Category.css';
import Navbar from './Navbar';

function Category() {
  // if categoryActive = true ?
  // use greenData blueData filter function

  const category = 'Green'

  return(
    <div>
      <Navbar />
      <div class='category-container' >
        <h1 class='category' >{category}</h1>
        {/* list of products goes here */}
      </div>
    </div>
  )
}

export default Category;