import React, { Fragment, useState, useEffect } from 'react';
import styles from './Header.module.css'
import PropTypes from 'prop-types';

function Header(props){
    const { children, classNames } = props

    return (
        <Fragment>
            <header className={[styles['header-container'],...classNames].join(' ')}>
                <div className={[styles['header-buttons']]}>
                    {children}
                    <nav style={{alignSelf:'center'}}>
                        <a style={{margin:'5px'}} href="#">
                            Home
                        </a>
                        <a style={{margin:'5px'}} href="#">
                            Login
                        </a>
                    </nav>
                </div>
            </header>
        </Fragment>

    )
}

Header.defaultProps = {
    classNames: []
};
  
Header.propTypes = {
    classNames: PropTypes.array,
    children: PropTypes.element,
};

export default Header;

