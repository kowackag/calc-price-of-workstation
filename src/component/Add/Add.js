import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import StyledApp from './Add.styled';


const Add = ({setNewCategory}) => {
    
    const [isActive, setIsActive] = useState(false);
    return (
        <StyledApp active={isActive}>
            { isActive 
            ?  <>
                    <input onChange={(e)=>setNewCategory(e.target.value)}/>
                    <FontAwesomeIcon onClick={()=>setIsActive(!isActive)} icon={faSquarePlus}/>
                </> 
            : <FontAwesomeIcon onClick={()=>setIsActive(!isActive)} icon={faSquarePlus}/>}    
        </StyledApp>
    )
}

Add.propTypes = {
    setNewCategory: PropTypes.func.isRequired
}

export default Add;