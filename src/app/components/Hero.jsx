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
        Stats here
      </div>
    </div>
  </section>
);

export default Hero;
