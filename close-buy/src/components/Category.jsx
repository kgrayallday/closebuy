import React from 'react';
import { useHistory } from 'react-router-dom';
import './Category.css';

function Category(props) {
  const { listings } = props;
  const history = useHistory();

  return (
    <div className='category-parent'>
        <button className="return-button" onClick={() => history.goBack()}
        > ◁ Return To Search</button>
      <div className="category-child">
        {listings()}
      </div>
    </div>
  );
}

export default Category;