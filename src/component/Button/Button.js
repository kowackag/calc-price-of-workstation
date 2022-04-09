import React from 'react';
import PropTypes from 'prop-types';


import StyledButton from './Button.styled';

const Button = ({id, onClick, children, notAnimated}) => {
    return( 
        <StyledButton data-id={id} onClick={onClick} notAnimated={notAnimated}>{children}</StyledButton>
    )
}

Button.propTypes = {
    id: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
}

export default Button;