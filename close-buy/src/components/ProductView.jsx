import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

function ProductView() {
  const params = useParams();
  const history = useHistory();

  return(
    <h2>Product View #{params.id}</h2>
  );
}

export default ProductView;
