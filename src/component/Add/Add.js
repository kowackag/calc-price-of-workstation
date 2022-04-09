import React from 'react';
import PropTypes from 'prop-types';
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import StyledApp from './Add.styled';


const Add = ({children, onClick}) => {
    return (
        <StyledApp>
            <FontAwesomeIcon onClick={onClick} icon={faSquarePlus}/>
        </StyledApp>
    )
}

Add.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func
}

export default Add;