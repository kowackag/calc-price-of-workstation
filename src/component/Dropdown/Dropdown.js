import React, {useState} from 'react';
import StyledDropdown from './Dropdown.styled';

const Dropdown = ({name, value, categ, onChange}) => {
    
    const [isActive, setIsActive] = useState(false);
    const [isFocus, setIsFocus] = useState(false);
    const [isOnMouse, setIsOnMouse] = useState(false);
       
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
                name={name} 
                value={value || ""} 
                onFocus={()=> {
                setIsFocus(true)}} 
                onBlur={handleOnBlur} 
                readOnly={true}
            />
            <label></label> 
            <ul onMouseOver={()=>setIsOnMouse(true)} onMouseLeave={handleOnMouseLeave}>
                {categ.map(el=><li key={el} data-code={el} name={name} onClick={onChange}>{el}</li>)} 
            </ul>
        </StyledDropdown>
    )
}

export default Dropdown;
