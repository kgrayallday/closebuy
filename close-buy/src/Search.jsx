import React, { useState } from 'react';
import './Search.css';


function Search(props) {
  const [term, setTerm] = useState("");
  const { onSave } = props;

  const saveForm = () => {
    onSave(term)
    setTerm("")
  }

  return (
    <div className="search">
      <form action="/" className="form" onSubmit={event => event.preventDefault()}>
        <input 
        type="search" 
        id="search-value" 
        name="search-value" 
        placeholder="Surf!" 
        className="surf-field"
        value={term}
        onChange={(event) => setTerm(event.target.value)}/>
        <button type="submit" className="surf-button" onClick={saveForm}>
        <i className="fas fa-search"></i>
        </button>
      </form>
    </div>
  )
}

export default Search;