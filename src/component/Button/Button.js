import React from 'react';
import PropTypes from 'prop-types';


import StyledButton from './Button.styled';

const Button = ({ name, id, onClick, children, notAnimated}) => {
    return( 
        <StyledButton aria-label={name} data-id={id} onClick={onClick} notAnimated={notAnimated}>{children}</StyledButton>
    )
}

Button.propTypes = {
    id: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
}

export default Button;