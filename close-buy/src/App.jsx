import React from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const fetchData = () => {
    axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      console.log("Full response data --- ", response.data) // The entire response from the API
      console.log("Response data message --- ", response.data.message) // Just the message
    }) 
  }

  return (
    <div>
      <header>CloseBuy</header>
      <button onClick={fetchData()} >
          Fetch Data
        </button>        
    </div>
  );
}

export default App;
