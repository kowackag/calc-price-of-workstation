import React, {useState, useEffect, useContext} from 'react';
import {v4 as uuid} from 'uuid';

import {UpdateContext} from '../context.js';
import {loadProductsFromAPI} from '../../api/DataAPI';

import Input from '../Input/Input.js';

import StyledWorkstationForm from './WorkstationForm.styled.js';

const WorkstationForm = () => {
    const init = {
        id: uuid(),
        category: '',
        type: '',
        model: '',
        price: '',
        price: ''
    }

    const [state, setState] =  useState(init);
    const {type, model, price, info} = state;
    const [products, setProducts] = useState({});

    useEffect(() => {loadProductsFromAPI().then(item=>item).then(data=>setProducts(data))},[]);

    const updateComponentList = useContext(UpdateContext)

    const changeValue = e => {
        e.preventDefault(); 
        setState({...state, [e.target.name]: e.target.value})
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
            <label>Kategoria
                <select name="category" onChange={changeValue}>
                    <option></option>
                    <option value="netbook">komputer</option>
                    <option value="offLineEquipm">urządzenia peryferyjne</option>
                    <option value="software">oprogramowanie</option>
                    <option value="other">inne</option>
                </select>
            </label>
            <div>
                {inputFields.map(({name, value, type, description})=>(
                    <div key={name}>
                        <label htmlFor={name}>{description}</label>
                        <Input id={name} type={type} name={name} value={value} onChange={changeValue}/>
                    </div >
                ))}
            </div>
            <button>Dodaj</button>
        </StyledWorkstationForm>
    )
}


export default WorkstationForm;