import React from 'react';
import PropTypes from 'prop-types';

import StyledSubmit from './Submit.styled';

const Submit = ({children}) => {
    return( 
        <StyledSubmit>{children}</StyledSubmit>
    )
}

Submit.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Submit;