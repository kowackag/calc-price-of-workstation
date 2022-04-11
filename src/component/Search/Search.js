import React, {useState} from 'react';
import propTypes from 'prop-types';

import Error from './../Error/Error';

import StyledSearch from './Search.styled';

const Search = ({name, value, items, setValue, onChange, err, isMutable}) => {
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
        <StyledSearch active={isActive} onClick={()=>setIsActive(!isActive)}>
            <input value={value || ""} name={name}  onFocus={()=> {
                setIsFocus(true)}} onBlur={handleOnBlur} onChange={isMutable ? onChange:null} readOnly={isMutable ? false: true}/>
                <label></label> 
                <> {err && <Error err={err}/>}</>
                <ul onMouseOver={()=>setIsOnMouse(true)} onMouseLeave={handleOnMouseLeave}>
                    {copyItems.map(el=><li key={el} onClick={setValue} value={el} data-code={el} data-name={name}>{el}</li>)} 
                </ul>
        </StyledSearch>
    )
}

Search.propTypes = {
    setValue: propTypes.func,
    onChange: propTypes.func,
}

export default Search;