import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import Layout from '../Layout';
import { landingPageImage } from '../../utils/constant'
import ImagesGallery from '../ImagesGallery'
import styles from './Homepage.module.css'

function HomepageComponent(props){
    const [imageNameFilter, setImageNameFilter] = useState('')
    const images = landingPageImage
        .filter(image=>!imageNameFilter || image.name.indexOf(imageNameFilter)>-1)
        .sort((a,b)=> a.name - b.name)

    return (
        <Fragment>
            <Layout>
                <div className={styles['container']}>
                    <ImagesGallery
                        images={images}
                    />
                </div>
            </Layout>
        </Fragment>
    )
}

HomepageComponent.defaultProps = {
    
  };
  
HomepageComponent.propTypes = {

};

export default HomepageComponent;
