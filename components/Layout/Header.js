import React, { Fragment, useState, useEffect } from 'react';
import styles from './Header.module.css'
import PropTypes from 'prop-types';

function Header(props){
    const { children } = props

    return (
        <Fragment>
            <header className={styles['header-container']}>
                {children}
            </header>
        </Fragment>

    )
}

Header.defaultProps = {
    
  };
  
Header.propTypes = {
    children: PropTypes.element,
};

export default Header;

