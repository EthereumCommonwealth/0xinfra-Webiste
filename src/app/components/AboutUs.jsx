import React from 'react'
import SectionHeading from './commons/SectionHeading';
import { Element } from 'react-scroll';

const AboutUs = () => (
  <Element className='AboutUs' name='about'>
    <div className='AboutUs-content container'>
      <SectionHeading title='About us' />
      <div className='AboutUs-bottom'>
        <div className='AboutUs-bottom-left'>
          <figure className='AboutUs-bottom-figure'>
            <img src='/image/about.svg' alt='About Us' />
          </figure>
        </div>
        <div className='AboutUs-bottom-right'>
          <p className='AboutUs-description'>
            {`
              Our world-class infrastructure will ensure that your decentralized
              application scales to meet the demand of your users. Your product's
              success is our number one priority.
            `}
          </p>
        </div>
      </div>
    </div>
  </Element>
);

export default AboutUs;
