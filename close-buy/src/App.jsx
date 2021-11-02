import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Loading from './components/Loading';
import Splash from './components/Splash';
import Search from './components/Search';
import Navbar from './components/Navbar';
import About from './components/About';
import Login from './components/Login';
import ProductCard from './components/ProductCard';
import CategoryButton from './components/CategoryButton';
import Category from './components/Category';
import ProductFocus from './components/ProductFocus';
import Favorites from './components/Favorites';
import { filterData } from './helpers/selectors';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

//  ************************************
// Main application component starts here
//  ************************************

function App() {
  const [ state, setState ] = useState({
    loading: false,
    queryTerm: "",
    userId: 1,
    favoritesData: [],
    apiData: []
  });

  // Provides search term string from Search.jsx & updates state.
  const saveFn = function(searchTerm) {
    const queryTerm = searchTerm;
    const loading = true;
    setState(prev => ({...prev, queryTerm, loading}))
  };

  // STRETCH - Function serves up Listing data to use via PUT to Server DB.
  const saveFavourite = function(listingData) {
    const newFavotite = listingData;
    const favoritesData = [...state.favoritesData, newFavotite];
    setState(prev => ({...prev, favoritesData}));
  };

  // Main axios data function
  const fetchData = function() {
    // const url = `api/products?q=${state.queryTerm}`;
    const url = `api/products/craigslist?q=${state.queryTerm}`;
    
    axios.get(url)
    .then((response) => {
       const apiData = response.data;
       const loading = false;
       setState(prev => ({...prev, loading, apiData }))
    })
  };

  // STRETCH - Function retrives Favoruites listings via server-DB.
  const fetchFavorites = function () {
    const url = `api/favourites?userId=${state.userId}`

    axios.get(url)
    .then((response) => {
      const favoritesData = response.data;
      setState(prev => ({...prev, favoritesData}))
      console.log("Favorites Response data ....", favoritesData)
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

  // Renders individual productCards with API response data.
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
        saveFavourite={saveFavourite}
        />
      )
    });

    const settings = {
      className: 'slider',
      infinite: true,
      arrows: true,
      centerMode: true,
      centerPadding: '20px', /* 50px is default */
      draggable: true, /* true is default */
      lazyLoad: 'progressive', /* ondemand or progressive - may be useful for many results */
      slidesToShow: 4

    }

  return (
    <div>
      <Router>

      <Navbar userid={state.userId}/>
      {/* <Splash /> */}
      

      <Switch>
        <Route path="/loading">
          <Loading message={"....Loading Results!"}/>
        </Route>

        <Route path="/splash">
          <Splash />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/favorites">
          <Favorites favoriteListings={() => renderProducts(state.favoritesData)}/>
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
          <ProductFocus />
        </Route>

        <Route path="/">
        {state.loading ? <Loading message={".....Surfing!"} /> : <Search onSave={saveFn} /> }

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
