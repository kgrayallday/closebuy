import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Splash from './Splash';
import Loading from './components/Loading';
import Search from './Search';
import Navbar from './Navbar';
import About from './components/About';
import CategoryButton from './components/CategoryButton';
import Category from './components/Category';
import ProductCard from './ProductCard';
import ProductView from './components/ProductView';
import { filterData } from './helpers/selectors';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



// Testing Data ********** Remove once API is working.
// const product = [
//   {
//     domain_id: 1098,
//     domain: 'craigslist',
//     category: 'green',
//     url: 'http://theurl.com',
//     images: [
//         "https://images.craigslist.org/00u0u_jtbfp6fBxlRz_0CI0t2_600x450.jpg", 
//         "https://images.craigslist.org/00z0z_iF4jdUcxzYUz_0CI0t2_600x450.jpg"
//     ],
//     location: '(Port Moody tricities/pitt/maple )',
//     price: 700,
//     description: 'this is the desc',
//     title: 'Free Recliner Couch',
//     post_date: '10/22/2021'
//   },
//   {
//     domain_id: 1234,
//     domain: 'craigslist',
//     category: 'green',
//     url: 'http://theurl.com',
//     images: [],
//     location: '(Port Moody tricities/pitt/maple )',
//     price: 500,
//     description: 'this is the desc',
//     title: 'Couch',
//     post_date: '10/22/2021'
//   },
//   {
//     domain_id: 5678,
//     domain: 'kujiji',
//     category: 'green',
//     url: 'http://theurl.com',
//     images: [
//       "https://images.craigslist.org/00u0u_jtbfp6fBxlRz_0CI0t2_600x450.jpg", 
//       "https://images.craigslist.org/00z0z_iF4jdUcxzYUz_0CI0t2_600x450.jpg"
//     ],
//     location: 'vancouver',
//     price: 800,
//     description: 'this is the desc',
//     title: 'Another Couch',
//     post_date: '10/22/2021'
//   },
//   {
//     domain_id: 111213,
//     domain: 'kujiji',
//     category: 'green',
//     url: 'http://theurl.com',
//     images: [
//       "https://images.craigslist.org/00u0u_jtbfp6fBxlRz_0CI0t2_600x450.jpg", 
//       "https://images.craigslist.org/00z0z_iF4jdUcxzYUz_0CI0t2_600x450.jpg"
//     ],
//     location: 'vancouver',
//     price: 1000,
//     description: 'this is the desc',
//     title: 'Couch',
//     post_date: '10/22/2021'
//   },
//   {
//     domain_id: 112233,
//     domain: 'etsy',
//     category: 'blue',
//     url: 'http://theurl.com',
//     images: [
//       "https://images.craigslist.org/00u0u_jtbfp6fBxlRz_0CI0t2_600x450.jpg", 
//       "https://images.craigslist.org/00z0z_iF4jdUcxzYUz_0CI0t2_600x450.jpg"
//     ],
//     location: 'vancouver',
//     price: 900,
//     description: 'this is the desc',
//     title: 'Another Couch',
//     post_date: '10/22/2021'
//   },
//   {
//     domain_id: 8765,
//     domain: 'etsy',
//     category: 'blue',
//     url: 'http://theurl.com',
//     images: [
//       "https://images.craigslist.org/00u0u_jtbfp6fBxlRz_0CI0t2_600x450.jpg", 
//       "https://images.craigslist.org/00z0z_iF4jdUcxzYUz_0CI0t2_600x450.jpg"
//     ],
//     location: 'vancouver',
//     price: 1000,
//     description: 'this is the desc',
//     title: 'Another Couch',
//     post_date: '10/22/2021'
//   },
//   {
//     domain_id: 33333,
//     domain: 'ebay',
//     category: 'blue',
//     url: 'http://theurl.com',
//     images: [
//       "https://images.craigslist.org/00u0u_jtbfp6fBxlRz_0CI0t2_600x450.jpg", 
//       "https://images.craigslist.org/00z0z_iF4jdUcxzYUz_0CI0t2_600x450.jpg"
//     ],
//     location: 'vancouver',
//     price: 90,
//     description: 'this is the desc',
//     title: 'Broken Couch',
//     post_date: '10/22/2021'
//   }, 
//   {
//     domain_id: 11000,
//     domain: 'google',
//     category: 'yellow',
//     url: 'http://theurl.com',
//     images: [
//       "https://images.craigslist.org/00u0u_jtbfp6fBxlRz_0CI0t2_600x450.jpg", 
//       "https://images.craigslist.org/00z0z_iF4jdUcxzYUz_0CI0t2_600x450.jpg"
//     ],
//     location: 'vancouver',
//     price: 100,
//     description: 'this is the desc',
//     title: 'Another Couch',
//     post_date: '10/22/2021'
//   }
// ];
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

  // Main axios data function
  const fetchData = function() {
    const url = `api/products?q=${state.queryTerm}`;
    
    axios.get(url)
    .then((response) => {
       const apiData = response.data;
       setState(prev => ({...prev, apiData }));
    })
  };

  // [] within useEffect states this will cleanUp once a search term has been entered by user.
  useEffect(() => {
    fetchData();
  }, [state.queryTerm]);

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
        domain={listing.domain}
        />
      )
    });

    const settings = {
      className: 'slider',
      infinite: true,
      arrows: true,
      centerMode: true,
      centerPadding: '50px', /* 50px is default */
      draggable: true, /* true is default */
      lazyLoad: 'ondemand', /* ondemand or progressive - may be useful for many results */
      /* responsive: - takes an array of breakpoints and settings */
      slidesToShow: 3, /* currently not working, likely due to css */
      autoplay: true,

    }

  return (
    <div>
      <Router>

      <Navbar />
      {/* <Splash /> */}

      <Switch>

        <Route path="/loading">
          <Loading message={"....Loading Results!"}/>
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/product/category/green">
          <Category listings={() => renderProducts(greenData)}/>
        </Route>

        <Route path="/product/category/blue">
          <Category listings={() => renderProducts(blueData)}/>
        </Route>

        <Route path="/product/category/yellow">
          <Category listings={() => renderProducts(yellowData)}/>
        </Route>

        <Route path={`/product/:id`}>
          <ProductView />
        </Route>

        <Route path="/">
          <Search onSave={saveFn} />

          <CategoryButton linkTerm={"green"}/>
          <Slider {...settings} >
            {renderProducts(greenData)}
          </Slider>

          <CategoryButton linkTerm={"blue"}/>
          <Slider {...settings} >
            {renderProducts(blueData)}
          </Slider>

          <CategoryButton linkTerm={"yellow"}/>
          <Slider {...settings}>
            {renderProducts(yellowData)}
          </Slider>
        </Route>
      </Switch>

      </Router>
    </div>
  );
}

export default App;
