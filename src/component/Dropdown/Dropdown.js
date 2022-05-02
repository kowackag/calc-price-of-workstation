import React, {useState} from 'react';
import propTypes from 'prop-types';

import Error from './../Error/Error';

import StyledDropdown from './Dropdown.styled';

const Dropdown = ({id, name, value, items, setValue, err, isMutable}) => {
    const [isActive, setIsActive] = useState(false);
    const [isFocus, setIsFocus] = useState(false);
    const [isOnMouse, setIsOnMouse] = useState(false);
    
    const copyItems = isMutable ? items.filter(el=>el.toUpperCase().includes(value.toUpperCase())) : items;

    const handleOnBlur = () => {
        setIsFocus(false);
        isOnMouse || setIsActive(false);
    }

    const handleOnMouseLeave = () => {
        setIsOnMouse(false);
        isFocus || setIsActive(false)
    } 

    return(
        <StyledDropdown active={isActive} onClick={()=>setIsActive(!isActive)}>
            <input 
                id={id}
                name={name} 
                value={value || ""} 
                onFocus={()=> {
                setIsFocus(true)}} 
                onBlur={handleOnBlur} 
                readOnly={true}
            />
            <> {err && <Error err={err}/>}</>
            <ul onMouseOver={()=>setIsOnMouse(true)} onMouseLeave={handleOnMouseLeave}>
                {copyItems.map(el=><li key={el} data-code={el} data-name={name} onClick={setValue}>{el}</li>)} 
            </ul>
        </StyledDropdown>
    )
}

Dropdown.propTypes = {
    setValue: propTypes.func,
    onChange: propTypes.func,
}
export default Dropdown;