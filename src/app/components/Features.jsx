import React from 'react'
import SectionHeading from './commons/SectionHeading';
import { Element } from 'react-scroll';
import SingleFeature from './SingleFeature';

const Features = () => (
  <Element className='Features' name='features'>
    <div className='Features-content container'>
      <SectionHeading
        title='Main features'
        description='Ethereum infrastructure at you  fingertips'
      />
      <p className='Features-description'>
        {`
          Our world-class infrastructure will ensure that your decentralized
          application scales to meet the demand of your users. Your product's
          success is our number one priority.
        `}
      </p>
      <div className='Features-list'>
        <SingleFeature
          image='/image/features/tls-endpoints.svg'
          title='TLS-Enabled endpoints'
          description='Public endpoints for the Ethereum Mainnet and all testnet networks'
        />
        <SingleFeature
          image='/image/features/tls-gateway.svg'
          title='TLS-Enabled IPFS Gateway'
          description='Decentralized storage with custom reliability features'
        />
        <SingleFeature
          image='/image/features/portable-interface.svg'
          title='Portable Ethereum interface'
          description='Compatible with the standard JSON-RPC API and popular web3 libraries'
        />
        <SingleFeature
          image='/image/features/multi-content.svg'
          title='Multi-client Backend'
          description='Both Geth and Parity for robustness and resiliency'
        />
        <SingleFeature
          image='/image/features/custom-instalations.svg'
          title='Custom installations'
          description='Private infrastructure deployments for your organization'
        />
      </div>
    </div>
  </Element>
);

export default Features;
