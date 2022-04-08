import React from 'react';

import StyledCheckbox from './Checkbox.styled';

const Checkbox = ({name, onClick}) => {
    return( 
           <StyledCheckbox>
     
        <input id={name} type="checkbox" name={name} onClick={onClick}/>
        <label htmlFor={name}/>
        </StyledCheckbox>
    )
}

export default Checkbox;