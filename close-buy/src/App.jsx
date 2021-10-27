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

  // Provides search term string from Search.jsx & updates state.
  function saveFn(searchTerm) {
    const queryTerm = searchTerm
    setState(prev => ({...prev, queryTerm}))
  };

  // [] within useEffect states this will cleanUp once a search term has been entered by user.
  useEffect(() => {
    // const url = `api/products/${state.queryTerm}`; // Will change to one close-buy-server endpoint.
    
    axios.get(url)
    .then((response) => {
      console.log("Craigslist data example", response.data);
    })
  }, []); // Array is blank so request is only asked once. Add a state change in here to use axios.get.

  // Example filterfunction for API response from ./helpers
  const greenData = filterData(state.apiData, "green");
  const greenCategory = greenData.map((listing) => {

    return (
      <Category 
      key={listing.domain_id}
      id={listing.domain_id}
      title={listing.title}
      description={listing.description}
      url={listing.url}
      images={listing.images}
      price={listing.price}
      category={listing.category}
      />
    )
  });


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
