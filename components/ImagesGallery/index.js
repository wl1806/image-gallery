import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import Layout from '../Layout';
import styles from './ImagesGallery.module.css'
import DeferredImage from '../DeferredImage/DeferredImage';
function ImagesGallery(props){
    const { images } = props
    return (
        <Fragment>
            <section className={styles['gallery-container']}>
                {images.map(image=>{
                    return (
                        <div 
                            className={styles['gallery-item']}
                            key={image._id}>
                            <DeferredImage
                                src={image.src}
                                alt={image.name}
                                className={styles['gallery-image']}
                                title={image.name}
                            />
                        </div>
                    )
                })}
            </section>
        </Fragment>
    )
}

ImagesGallery.defaultProps = {
    images:[]
};
  
ImagesGallery.propTypes = {
    images: PropTypes.array
};

export default ImagesGallery;
