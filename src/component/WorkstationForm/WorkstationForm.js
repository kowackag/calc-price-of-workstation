import React, {useState, useEffect, useContext} from 'react';
import {v4 as uuid} from 'uuid';

import {ItemContext, UpdateContext} from '../context.js';
import {loadProductsFromAPI} from '../../api/DataAPI';

const WorkstationForm = () => {
    const init = {
        id: uuid(),
        category: '',
        type: '',
        model: '',
        price: ''
    }

    const [state, setState] =  useState(init);
    const {type, model, price} = state;
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
        updateComponentList()
    }

    
    const inputFields = [
        {name: 'type', value: type, type: 'string', description: 'Typ'},
        {name: 'model', value: model, type: 'string', description: 'Model'},
        {name: 'price', value: price, type: 'number', description: 'Cena'}
    ]


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Kategoria</label>
                <select>
                    <option></option>
                    <option>komputer</option>
                    <option>urządzenia peryferyjne</option>
                    <option>oprogramowanie</option>
                    <option>inne</option>
                </select>
            </div>
            
            {inputFields.map(({name, value, type, description})=>(
                <div key={name}>
                    <label htmlFor={name}>{description}</label>
                    <input id={name} type={type} name={name} value={value} onChange={changeValue}/>
                </div >
            ))}
            <button>Dodaj</button>
        </form>
    )
}


export default WorkstationForm;