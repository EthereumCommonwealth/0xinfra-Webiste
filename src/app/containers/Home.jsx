import React from 'react';
import { hot } from 'react-hot-loader';
import Layout from '../components/commons/Layout';
import Header from '../components/commons/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';

const Home = ({ match }) => {
  return (
    <Layout className='Home' match={match}>
      <Header />
      <Hero />
      <Features />
    </Layout>
  );
}

export default hot(module)(Home);
