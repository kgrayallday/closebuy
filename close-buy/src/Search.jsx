import React from 'react';
import './Search.css';

function Search() {
  // const something = {/* something */}

  return (
    <div className="search">
      <form action="/" method="GET" className="form">
        <input type="search" placeholder="Surf!" className="surf-field" />
        <button type="submit" className="surf-button">
        <i className="fas fa-search"></i>
        </button>
      </form>
    </div>
  )
}

export default Search;