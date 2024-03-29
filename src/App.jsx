import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
import Footer from './components/Footer';
import { filterData, updateFavorites } from './helpers/selectors';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

//  ************************************
// Main application component starts here
//  ************************************

function App() {
  // set state for the app
  const [ state, setState ] = useState({
    loading: false,
    splash: true,
    queryTerm: "couch",
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

  const deleteFavorite = function(listingData) {
    const id = listingData.domain_id
    const favoritesData = updateFavorites(state.favoritesData, id);
    setState(prev => ({...prev, favoritesData}));
  };

  // Main axios data function
  const fetchData = function() {
    const url = `api/products?q=${state.queryTerm}`;
    
    axios.get(url)
    .then((response) => {
       const apiData = response.data;
       const loading = false;
       const splash = false;
       setState(prev => ({...prev, splash, loading, apiData }))
    })
  };

  // STRETCH - Function retrives Favoruites listings via server-DB.
  const fetchFavorites = function () {
    const url = `api/favourites?userId=${state.userId}`

    axios.get(url)
    .then((response) => {
      const favoritesData = response.dat
      setState(prev => ({...prev, favoritesData}))
    })
  };

  // [] within useEffect states this will cleanUp once a search term has been entered by user.
  useEffect(() => { fetchData(); }, [state.queryTerm]);

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
          deleteFavorite={deleteFavorite}
          favoritesData={state.favoritesData}
        />
      )
    });

    const settings = {
      className: 'slider',
      infinite: false,
      arrows: true,
      centerMode: false,
      centerPadding: '30px', /* 50px is default */
      draggable: true, /* true is default */
      lazyLoad: 'progressive', /* ondemand or progressive - may be useful for many results */
      slidesToShow: 5,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    }

  // for splash it should cover the whole screen and exclude navbar
  // {state.splash ? <Splash /> : { basically everything below vvv }
  return (
    <div>
      <Router>

        <Navbar userid={state.userId}/>

          <Switch>
            <Route path="/loading">
              <Loading message={"....Loading Results!"}/>
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/favorites">
              <Favorites favoriteListings={() => renderProducts(state.favoritesData)}/>
              <Footer />
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
              {state.splash ?
                <Splash /> : state.loading ? 
                <Loading message={"...surfing" } /> : 
                <Search onSave={saveFn} /> 
              }
              <div className='green-zone'>
                <div className='toprow'>
                  <CategoryButton linkTerm={"green"}/>
                  <h1> Neighbourly </h1>
                </div>
                  <Slider {...settings} > {renderProducts(greenData)} </Slider>
              </div>

              <div className='blue-zone'>
                <div className='toprow'>
                  <CategoryButton linkTerm={"blue"}/>
                  <h1> Craft and Community </h1>
                </div>
                  <Slider {...settings} > {renderProducts(blueData)} </Slider>
              </div>

              <div className='yellow-zone'>
                <div className='toprow'>
                  <CategoryButton linkTerm={"yellow"} />
                  <h1> Retail </h1>
                </div>
                <Slider {...settings} > {renderProducts(yellowData)} </Slider>
              </div>

          <Footer />
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
