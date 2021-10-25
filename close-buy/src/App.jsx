import React from 'react';
import axios from 'axios';
import './App.css';
import Splash from './Splash';
import Search from './Search';

/* possible different color schemes */
const themes = {
  pinkBlue: {
    primary: 'pink',
    secondary: 'blue'
  },
  pinkTeal: {
    primary: 'pink',
    secondary: 'teal'
  },
  bluePink: {
    primary: 'blue',
    secondary: 'pink'
  },
  yellowOrange: {
    primary: 'yellow',
    secondary: 'orange'
  },
  
}

const currentTheme = themes.pinkTeal;

const _testShowSplash = true;

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
      {/* <Splash /> */}
      <Search />
      {/* <Categories /> */}
      {/* <Category /> */}

    </div>
  );
}

export default App;
