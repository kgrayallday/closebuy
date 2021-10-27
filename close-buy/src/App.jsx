import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Splash from './Splash';
import Search from './Search';
import Navbar from './Navbar';
import ProductCard from './ProductCard';
import { filterData } from './helpers/selectors';


// Testing Data ********** Remove once API is working.
const product = [
  {
    domain_id: 1098,
    domain: 'craigslist',
    category: 'green',
    url: 'http://theurl.com',
    images: [
        "https://images.craigslist.org/00u0u_jtbfp6fBxlRz_0CI0t2_600x450.jpg", 
        "https://images.craigslist.org/00z0z_iF4jdUcxzYUz_0CI0t2_600x450.jpg"
    ],
    location: '(Port Moody tricities/pitt/maple )',
    price: 700,
    description: 'this is the desc',
    title: 'Free Recliner Couch',
    post_date: '10/22/2021'
  },
  {
    domain_id: 1234,
    domain: 'craigslist',
    category: 'green',
    url: 'http://theurl.com',
    images: [
        "https://images.craigslist.org/00u0u_jtbfp6fBxlRz_0CI0t2_600x450.jpg", 
        "https://images.craigslist.org/00z0z_iF4jdUcxzYUz_0CI0t2_600x450.jpg"
    ],
    location: '(Port Moody tricities/pitt/maple )',
    price: 500,
    description: 'this is the desc',
    title: 'Couch',
    post_date: '10/22/2021'
  },
  {
    domain_id: 5678,
    domain: 'kujiji',
    category: 'green',
    url: 'http://theurl.com',
    images: [
      "https://images.craigslist.org/00u0u_jtbfp6fBxlRz_0CI0t2_600x450.jpg", 
      "https://images.craigslist.org/00z0z_iF4jdUcxzYUz_0CI0t2_600x450.jpg"
    ],
    location: 'vancouver',
    price: 800,
    description: 'this is the desc',
    title: 'Another Couch',
    post_date: '10/22/2021'
  },
  {
    domain_id: 111213,
    domain: 'kujiji',
    category: 'green',
    url: 'http://theurl.com',
    images: [
      "https://images.craigslist.org/00u0u_jtbfp6fBxlRz_0CI0t2_600x450.jpg", 
      "https://images.craigslist.org/00z0z_iF4jdUcxzYUz_0CI0t2_600x450.jpg"
    ],
    location: 'vancouver',
    price: 1000,
    description: 'this is the desc',
    title: 'Couch',
    post_date: '10/22/2021'
  },
  {
    domain_id: 112233,
    domain: 'etsy',
    category: 'blue',
    url: 'http://theurl.com',
    images: [
      "https://images.craigslist.org/00u0u_jtbfp6fBxlRz_0CI0t2_600x450.jpg", 
      "https://images.craigslist.org/00z0z_iF4jdUcxzYUz_0CI0t2_600x450.jpg"
    ],
    location: 'vancouver',
    price: 900,
    description: 'this is the desc',
    title: 'Another Couch',
    post_date: '10/22/2021'
  },
  {
    domain_id: 8765,
    domain: 'etsy',
    category: 'blue',
    url: 'http://theurl.com',
    images: [
      "https://images.craigslist.org/00u0u_jtbfp6fBxlRz_0CI0t2_600x450.jpg", 
      "https://images.craigslist.org/00z0z_iF4jdUcxzYUz_0CI0t2_600x450.jpg"
    ],
    location: 'vancouver',
    price: 1000,
    description: 'this is the desc',
    title: 'Another Couch',
    post_date: '10/22/2021'
  },
  {
    domain_id: 112233,
    domain: 'ebay',
    category: 'blue',
    url: 'http://theurl.com',
    images: [
      "https://images.craigslist.org/00u0u_jtbfp6fBxlRz_0CI0t2_600x450.jpg", 
      "https://images.craigslist.org/00z0z_iF4jdUcxzYUz_0CI0t2_600x450.jpg"
    ],
    location: 'vancouver',
    price: 90,
    description: 'this is the desc',
    title: 'Broken Couch',
    post_date: '10/22/2021'
  }, 
  {
    domain_id: 11000,
    domain: 'google',
    category: 'yellow',
    url: 'http://theurl.com',
    images: [
      "https://images.craigslist.org/00u0u_jtbfp6fBxlRz_0CI0t2_600x450.jpg", 
      "https://images.craigslist.org/00z0z_iF4jdUcxzYUz_0CI0t2_600x450.jpg"
    ],
    location: 'vancouver',
    price: 100,
    description: 'this is the desc',
    title: 'Another Couch',
    post_date: '10/22/2021'
  }
];
// ************************


//  ************************************
// Main application component starts here
//  ************************************

function App() {
  const [ state, setState ] = useState({
    queryTerm: "",
    apiData: []
  });

  // Provides search term string from Search.jsx & updates state.
  const saveFn = function(searchTerm) {
    const queryTerm = searchTerm
    setState(prev => ({...prev, queryTerm}))
  };

  const fetchData = function() {
    // const url = `api/products/${state.queryTerm}`; // Will change to one close-buy-server endpoint.
    const url = 'api/data'
    axios.get(url)
    .then((response) => {
      //  const apiData = response.data;
      //  setState(prev => ({...prev, apiData }));
      const apiData = product;
      setState(prev => ({...prev, apiData }));
      console.log("Response equals", response.data);
      console.log("The API state date equals....", state.apiData);
    })
  };

  // [] within useEffect states this will cleanUp once a search term has been entered by user.
  useEffect(() => {
    fetchData();
  }, [state.queryTerm]);

  // const blueProducts = blueData.map((listing) => {

  // Example filterfunction for API response from ./helpers
  const greenData = filterData(state.apiData, "green");
  const blueData = filterData(state.apiData, "blue");
  const yellowData = filterData(state.apiData, "yellow");

  const renderProducts = (array) => array.map((listing) => {
      return (
        <ProductCard
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
      <h2>Green Products</h2>
      {renderProducts(greenData)}
      {/* <Category productArray={productArray} /> */}
      <h2>Blue Products</h2>
      {renderProducts(blueData)}
      <h2>Yellow Products</h2>
      {renderProducts(yellowData)}
    </div>
  );
}

export default App;
