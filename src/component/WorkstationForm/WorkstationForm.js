import React, {useState, useEffect, useContext} from 'react';
import {v4 as uuid} from 'uuid'
import {UpdateContext} from '../context.js';
import {loadProductsFromAPI} from '../../api/DataAPI';

import Dropdown from '../Dropdown/Dropdown.js';
import Input from '../Input/Input.js';
import Submit from '../Submit/Submit';

import StyledWorkstationForm from './WorkstationForm.styled.js';

const WorkstationForm = () => {
    const init = {
        id: uuid(),
        category: '',
        type: '',
        model: '',
        price: '',
        info: ''
    }

    const [state, setState] =  useState(init);
    const {id, category, type, model, price, info} = state;
    const [products, setProducts] = useState({});
   
    useEffect(() => {loadProductsFromAPI().then(item=>item).then(data=>setProducts(data))},[]);

    const updateComponentList = useContext(UpdateContext)

    const changeValue = e => {
        e.preventDefault(); 
        setState({...state, [e.target.name]: e.target.value})
    }

    const setValue = e => {
        e.preventDefault();
        console.log(e.target)
        setState({...state, category: e.target.dataset.code})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setState(init);
        updateComponentList(state, 'add')
    }

    const inputFields = [
        {name: 'type', value: type, type: 'string', description: 'Typ'},
        {name: 'model', value: model, type: 'string', description: 'Model'},
        {name: 'price', value: price, type: 'number', description: 'Cena'},
        {name: 'info', value: info, type: 'textarea', description: 'Uwagi'}
    ]

    return (
        <StyledWorkstationForm onSubmit={handleSubmit}>
            <label>Kategoria</label>
            <Dropdown 
                name="category" 
                value={category} 
                categ={products.category ? products.category : []} 
                onChange={setValue}
            />
            <div>
                {inputFields.map(({name, value, type, description})=>(
                    <div key={name}>
                        <label htmlFor={name}>{description}</label>
                        <Input 
                            id={name} 
                            type={type} 
                            name={name} 
                            value={value} 
                            onChange={changeValue}
                        />
                    </div>
                ))}
            </div>
            <Submit type="submit">Dodaj</Submit>
        </StyledWorkstationForm>
    )
}

export default WorkstationForm;