import React from 'react';

const SingleFeature = ({ image, title, description }) => (
  <div className='SingleFeature'>
    <figure className='SingleFeature-figure'>
      <img src={image} alt={title} />
    </figure>
    <h3 className='SingleFeature-title'>{title}</h3>
    <p className='SingleFeature-description'>{description}</p>
  </div>
);

export default SingleFeature;
