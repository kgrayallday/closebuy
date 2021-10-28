import React, { useEffect } from 'react';
import { useParams, useHistory, useLocation } from 'react-router-dom';

function ProductView() {
  const params = useParams(); // provides url params id.
  const history = useHistory(); // helpful for going back to product cards view
  const location = useLocation(); // Must keep, this is where props data comes from.

  console.log("Product params", params) // debuggin to check url params
  console.log("Current state", location.props) // debuggin to check location.props

  return(
    <div>
    <h2>Product View #{params.id}</h2>
    <span></span>
    <li>{location.props.id}</li>
    <li>{location.props.title}</li>
    <li>{location.props.domain}</li>
    <li>{location.props.url}</li>
    <li>{location.props.description}</li>
    <li>{location.props.category}</li>
    <li>{location.props.images}</li>
    </div>
    
  );
}

export default ProductView;
