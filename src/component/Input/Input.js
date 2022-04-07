import React from 'react';
import PropTypes from 'prop-types';

import StyledInput from './Input.styled';

const Input = ({onChange, name, value, type}) => {
    return(
        <StyledInput type={type} name={name} value={value} onChange={onChange}/>
    ) 
}

Input.propTypes = {
    type: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string,
}

export default Input;
