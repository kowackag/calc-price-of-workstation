import React from 'react';
import PropTypes from 'prop-types';


import StyledButton from './Button.styled';

const Button = ({id, onClick, children}) => {
    return( 
        <StyledButton data-id={id} onClick={onClick}>{children}</StyledButton>
    )
}

Button.propTypes = {
    id: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
}

export default Button;