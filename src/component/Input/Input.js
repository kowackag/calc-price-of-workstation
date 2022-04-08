import React from 'react';
import PropTypes from 'prop-types';

import StyledInput from './Input.styled';

const Input = ({onChange, name, value, type, min, step, placeholder}) => {
    return(
        <StyledInput type={type} name={name} value={value} onChange={onChange} min={min} step={step} placeholder={placeholder}/>
    ) 
}

Input.propTypes = {
    type: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string,
    value: PropTypes.string
}

export default Input;
