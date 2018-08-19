import React from 'react';

const Hero = () => (
  <section className='Hero'>
    <div className='Hero-content container'>
      <div className='Hero-content-left'>
        <h1 className='Hero-title'>
          Your Access to the Ethereum network
        </h1>
        <p className='Hero-description'>
          {`
            Our easy to use API and developer tools provide secure, reliable, and
            scalable access to Ethereum. We provide the infrastructure for your
            decentralized applications so you can focus on the features.
          `}
        </p>
        <a href='/' className='btn btn-blue'>
          Get Started
        </a>
      </div>
      <div className='Hero-content-right'>
        <div className='Hero-feature'>
          <strong className='Hero-feature-number'>
            <span className='Hero-feature-number-white'>+</span>
            50
          </strong>
          <p className='Hero-feature-description'>millions requests per day</p>
        </div>
        <div className='Hero-feature'>
          <strong className='Hero-feature-number'>
            <span className='Hero-feature-number-white'>+</span>
            15 000
          </strong>
          <p className='Hero-feature-description'>unique users per day </p>
        </div>
        <div className='Hero-feature'>
          <strong className='Hero-feature-number'>
            <span className='Hero-feature-number-white'>~</span>
            1 000
          </strong>
          <p className='Hero-feature-description'>transactions processed in CLO and ETC</p>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
