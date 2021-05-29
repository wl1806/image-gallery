import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import Layout from '../Layout';
import styles from './ImagesGallery.module.css'
function ImagesGallery(props){
    const { images } = props
    return (
        <Fragment>
            <section className={styles['container']}>
                {images.map(image=>{
                    return (
                        <div key={image._id}>
                            <image>
                                
                            </image>
                        </div>
                    )
                })}
            </section>
        </Fragment>
    )
}

ImagesGallery.defaultProps = {
    
  };
  
ImagesGallery.propTypes = {

};

export default ImagesGallery;
