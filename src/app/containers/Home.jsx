import React from 'react';
import { hot } from 'react-hot-loader';
import Layout from '../components/commons/Layout';
import Header from '../components/commons/Header';
import Footer from '../components/commons/Footer';
import Hero from '../components/Hero';
import Features from '../components/Features';
import WhoIsUsing from '../components/WhoIsUsing';
import AboutUs from '../components/AboutUs';
import Team from '../components/Team';

const Home = ({ match }) => {
  return (
    <Layout className='Home' match={match}>
      <Header />
      <Hero />
      <Features />
      <WhoIsUsing />
      <AboutUs />
      <Team />
      <Footer />
    </Layout>
  );
}

export default hot(module)(Home);
