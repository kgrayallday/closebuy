import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Splash from './Splash';
import Search from './Search';
import Navbar from './Navbar';
import ProductCard from './ProductCard';

function App() {
  // loading state for splash screen
  const [ loading, setLoading ] = useState(true);

  // change the loading state after displaying splash for 2 seconds
  useEffect(() => {
    setTimeout(() => setLoading(false), 2500)
  }, [])



  const [ queryTerm, setQueryTerm ] = useState("");

  // Provides search term string from Search.jsx
  function saveFn(searchTerm) {
    setQueryTerm(searchTerm)
  };

  // Function queries craigslist with search term string.
  const craigslistData = (queryTerm) => {
    const url = `api/products/craigslist?q=${queryTerm}`;


    axios.get(url)
    .then((response) => {
      console.log("Craigslist data example", response.data);
    })
  };

  // Run function once queryterm has been saved.
  useEffect(() => {
    craigslistData(queryTerm)
  }, [queryTerm]);

  return (
    <div>
      {loading === false ? (
        <div>
          <Navbar />
          {/* <Splash /> */}
          <Search onSave={saveFn} />
          {/* <Categories /> */}
          <ProductCard />
          {/* <Category productArray={productArray} /> */}
        </div>
      ) : (
        <Splash />
      )}
    </div>
  );
}

export default App;
