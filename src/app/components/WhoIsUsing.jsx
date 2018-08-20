import React from 'react';
import SectionHeading from './commons/SectionHeading';

const WhoIsUsing = () => (
  <section className='WhoIsUsing'>
    <div className='WhoIsUsing-content container'>
      <SectionHeading
        title='Who is using'
      />
      <div className='WhoIsUsing-list'>
        <div className='WhoIsUsing-element'>
          <a href='https://www.myetherwallet.com/' target='_blank'>
            <figure className='WhoIsUsing-element-figure'>
              <img src='/image/using/my-ether-wallet.svg' alt='My Ether Wallet' />
            </figure>
          </a>
        </div>
        <div className='WhoIsUsing-element'>
          <a href='https://www.myetherwallet.com/' target='_blank'>
            <figure className='WhoIsUsing-element-figure'>
              <img src='/image/using/my-crypto.svg' alt='My Crypto' />
            </figure>
          </a>
        </div>
        <div className='WhoIsUsing-element'>
          <a href='https://www.myetherwallet.com/' target='_blank'>
            <figure className='WhoIsUsing-element-figure'>
              <img src='/image/using/guarda.svg' alt='Guarda' />
            </figure>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default WhoIsUsing;
