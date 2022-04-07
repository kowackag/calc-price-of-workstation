import React from 'react';
import StyledError from './Error.styled'

const Error = ({err}) => {
    return (
        <StyledError>{err}</StyledError>
    )
}

export default Error;