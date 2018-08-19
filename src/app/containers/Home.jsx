import React from 'react';
import { hot } from 'react-hot-loader';
import Layout from '../components/commons/Layout';

const Home = ({ match }) => {
  return (
    <Layout className='Home' match={match}>
      <div>
        0XInfra Site
      </div>
    </Layout>
  );
}

export default hot(module)(Home);
