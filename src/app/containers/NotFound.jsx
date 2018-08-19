import React from 'react';
import Header from '../components/commons/Header';

const NotFound = ({ match }) => (
  <div>
    <Header />
    <div className='container'>
      <div className='NotFound'>
        <h1>404</h1>
        <h4>Page not found</h4>
        <h5>Try from our <a href='/'>home page</a></h5>
      </div>
    </div>
  </div>
);

export default NotFound;
