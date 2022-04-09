import React from 'react';
import PropTypes from 'prop-types';
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import StyledSortBlock from './SortBlock.styled';


const SortBlock = ({sortUp, sortDown, name}) => {
    return (
        <StyledSortBlock>
            <div data-name={name} onClick={sortUp}>
                <FontAwesomeIcon   icon={faCaretUp}/>
            </div>
            <div data-name={name} onClick={sortDown}>
               <FontAwesomeIcon name={name} onClick={sortDown} icon={faCaretDown}/>  
            </div>
        </StyledSortBlock>
    )
}

SortBlock.propTypes = {
    sortUp: PropTypes.func.isRequired,
    sortDown: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired
}

export default SortBlock;