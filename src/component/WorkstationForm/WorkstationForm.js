import React, {useState, useEffect, useContext} from 'react';
import {v4 as uuid} from 'uuid'

import {UpdateContext} from '../context.js';
import {loadProductsFromAPI} from '../../api/DataAPI';
import {validateData} from './../../validateData';

import Dropdown from '../Dropdown/Dropdown.js';
import Add from '../Add/Add';
import Input from '../Input/Input.js';
import Submit from '../Submit/Submit';
import Error from '../Error/Error.js';

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
    const {category, type, model, price, info} = state;
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState();

    const [err, setErr] = useState({});

    // const kat = products && Object.keys(products);

    const {
        category: errCategory,
        type: errType,
        model: errModel,
        price: errPrice
    } = err;


    useEffect(() => {
        loadProductsFromAPI('categories')
            .then(item=>item)
            .then(data=>setCategories(data))
    },[]);

 
    // useEffect(() => {
    //     loadProductsFromAPI()
    //         .then(item=>item)
    //         .then(data=>setProducts(data))
    // },[]);


    const updateComponentList = useContext(UpdateContext)

    const changeValue = e => {
        e.preventDefault(); 
        setState({...state, [e.target.name]: e.target.value})
    }
    
    const setValue = e => {
        e.preventDefault();
        setState({...state, category: e.target.dataset.code})
    }

    const addCategory = () => {
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateData(state);
        setErr(errors);
        console.log(err)
        if (Object.keys(errors).length === 0) {
            console.log('opfdate')
            updateComponentList(state, 'add');
            setState(init);
        }
    }

    const inputFields = [
        {name: 'type', value: type, type: 'string', description: 'Nazwa', err: errType},
        {name: 'model', value: model, type: 'string', description: 'Opis', err: errModel},
        {name: 'price', value: price, type: 'number', step:".01", description: 'Cena', min: 0, err: errPrice},
        {name: 'info', value: info, type: 'textarea', description: 'Uwagi'}
    ]

    return (
        <StyledWorkstationForm onSubmit={handleSubmit}>
            <label>Kategoria</label>
            <Dropdown 
                name="category" 
                value={category} 
                categ={categories ? categories : []} 
                onChange={setValue}
                err={errCategory}
            /> 
            <Add onClick={addCategory}/>
            <div>
                {inputFields.map(({name, value, type, description, min, step, err})=>(
                    <div key={name}>
                        <label htmlFor={name}>{description}</label>
                        <Input 
                            id={name} 
                            type={type} 
                            name={name} 
                            value={value} 
                            min={min}
                            step={step}
                            onChange={changeValue}
                        />
                        {err && <Error err={err}/>}
                    </div>
                ))}
            </div>
            <Submit type="submit">Dodaj</Submit>
        </StyledWorkstationForm>
    )
}

export default WorkstationForm;