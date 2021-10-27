import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Splash from './Splash';
import Search from './Search';
import Navbar from './Navbar';
import ProductCard from './ProductCard';
import { filterData } from './helpers/selectors';

//  ************************************
// Main application component starts here
//  ************************************

function App() {
  const [ state, setState ] = useState({
    queryTerm: "",
    apiData: []
  });

  // Provides search term string from Search.jsx
  function saveFn(searchTerm) {
    const queryTerm = searchTerm
    setState(prev => ({...prev, queryTerm}))
  };

  // Function queries craigslist with search term string.
  const craigslistData = (term) => {
    const url = `api/products/craigslist?q=${term}`;

    axios.get(url)
    .then((response) => {
      console.log("Craigslist data example", response.data);
    })
  };

  // Run function once queryterm has been saved.
  useEffect(() => {
    craigslistData(state.queryTerm)
  }, [state.queryTerm]);

  return (
    <div>
      <Navbar />
      {/* <Splash /> */}
      <Search onSave={saveFn} />
      {/* <Categories /> */}
      <ProductCard />
      {/* <Category productArray={productArray} /> */}

    </div>
  );
}

export default App;
