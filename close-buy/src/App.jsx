import React from 'react';
import axios from 'axios';
import './App.css';
import Splash from './Splash';
import Search from './Search';
import Navbar from './Navbar';
import ProductCard from './ProductCard';

function App() {

  // const fetchData = () => {
  //   axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
  //   .then((response) => {
  //     // handle success
  //     console.log("Full response data --- ", response.data) // The entire response from the API
  //     console.log("Response data message --- ", response.data.message) // Just the message
  //   }) 
  // }

  return (
    <div>
      <Navbar />
      {/* <Splash /> */}
      <Search />
      {/* <Categories /> */}
      <ProductCard />
      {/* <Category productArray={productArray} /> */}

    </div>
  );
}

export default App;
