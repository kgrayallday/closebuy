import React from 'react';
import './Search.css';

function Search() {
  // const something = {/* something */}

  return (
    <div class="search">
      <form action="/" method="GET" class="form">
        <input type="search" placeholder="Surf!" class="surf-field" />
        <button type="submit" class="surf-button">
        <i class="fas fa-search"></i>
        </button>
      </form>
    </div>
  )
}

export default Search;