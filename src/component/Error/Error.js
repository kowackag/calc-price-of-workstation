import React from 'react';
import PropTypes from 'prop-types';

import StyledError from './Error.styled'

const Error = ({err}) => {
    return (
        <StyledError>{err}</StyledError>
    )
}

Error.propTypes = {
    err : PropTypes.node
}

export default Error;