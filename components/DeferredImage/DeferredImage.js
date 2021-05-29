import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function DeferredImage({
  src,
  ...otherProps
}) {
  
  return (
    <LazyLoadImage
      src={src}
      {...otherProps}
    />
  )
}

DeferredImage.defaultProps = {
  
};

DeferredImage.propTypes = {
  src: PropTypes.string.isRequired,
};

export default DeferredImage;
