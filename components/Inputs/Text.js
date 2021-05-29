import React from 'react';
import PropTypes from 'prop-types';

function Text({
  disabled,
  className,
  name, 
  value,  
  placeholder,
  handleChangeInput,
}) {
  return (
    <input
      disabled={disabled}
      className={className}
      type="text"
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={(e) => {
        let res = e.target.value;
        handleChangeInput(res);
      }}
    />
  );
}

Text.defaultProps = {
  disabled: false,
  className: '',
  name: '',
  placeholder: '',  
};

Text.propTypes = {
  disabled: PropTypes.bool,
  className: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  placeholder: PropTypes.string,
  handleChangeInput: PropTypes.func.isRequired,
};

export default Text;
