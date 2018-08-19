import React from 'react';
import { hot } from 'react-hot-loader';
import Layout from '../components/commons/Layout';
import Header from '../components/commons/Header';
import Hero from '../components/Hero';

const Home = ({ match }) => {
  return (
    <Layout className='Home' match={match}>
      <Header />
      <Hero />
    </Layout>
  );
}

export default hot(module)(Home);
