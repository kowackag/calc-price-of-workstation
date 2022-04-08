import React, {useState, useContext} from 'react';

import {UpdateContext} from '../context.js';

import Input from '../Input/Input';
import Submit from '../Submit/Submit.js';

import StyledEditableComponent from './EditableComponent.styled'

const EditableComponent = ({content, setEditableComponent}) => {
    const updateContext = useContext(UpdateContext);

    const [updatedComponent, setUpdatedComponent] = useState(content);
  
    const changeValue = e => {
        e.preventDefault(); 
        setUpdatedComponent({...updatedComponent, [e.target.name]: e.target.value})
    }

    const saveComponent = e => {
        e.preventDefault(); 
        setUpdatedComponent({...updatedComponent, [e.target.name]: e.target.value})
        updateContext(updatedComponent, 'update');
        setEditableComponent(null)
    }


  return (
         <StyledEditableComponent> 
            <form onSubmit={saveComponent}> 
                <div>
                    <label htmFor="type">Typ</label> 
                    <Input id="type" name="type" value={updatedComponent.type} onChange={changeValue}/>                           
                </div>
                <div>
                    <label>Model</label>
                    <Input name="model" value={updatedComponent.model} onChange={changeValue}/>
                </div>
                <div>
                    <label>Kategoria</label>  
                    <Input name="category" value={updatedComponent.category} onChange={changeValue}/>                      
                </div>
                <div>
                    <label>Cena</label>   
                    <Input type="number" name="price" value={updatedComponent.price} onChange={changeValue}/>                    
                </div>
                <Submit>zapisz</Submit>      
            </form>
         </StyledEditableComponent>
  )
}

export default EditableComponent;