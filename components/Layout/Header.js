import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function Header({props}){
    const { children } = props

    return (
        <Fragment>
            <header>
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

