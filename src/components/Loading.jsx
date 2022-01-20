import React from 'react';
import './Loading.css';

function Loading(props) {
  const { message } = props;

  return (
    <main className="loading__card--status">
      <img
        className="loading-image"
        src="images/loading.png"
        alt="loading"
      />
      <h1 className="loading__card-text--semi-bold">{message}</h1>
    </main>
  );
}

export default Loading;