import React, {useState, useEffect, useContext} from 'react';
import {v4 as uuid} from 'uuid'

import {UpdateContext, UpdateCategoryContext} from '../context.js';
import {loadProductsFromAPI} from '../../api/DataAPI';
import {validateData} from './../../validateData';

import Dropdown from '../Dropdown/Dropdown.js';
import Search from '../Search/Search';
import Add from '../Add/Add';
import Input from '../Input/Input.js';
import Submit from '../Submit/Submit';
import Error from '../Error/Error.js';

import StyledWorkstationForm, {Container} from './WorkstationForm.styled.js';


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
    const [newCategory, setNewCategory] = useState('');
    const [err, setErr] = useState({});

    const [productsList, setProductsList] = useState([]); 

    useEffect(() => {
        loadProductsFromAPI('products')
            .then(item=>item)
            .then(data=>setProductsList(data));       
    },[]);

    const [typeList, setTypeList] = useState([]);
    const [modelList, setModelList] = useState([]);


    useEffect(() => {
        const copyList = category ?
        productsList.filter(item => item.category === category).map(({type}) => type) :
        productsList.map(({type}) => type)
        const uniqList = copyList.filter((c, index) => copyList.indexOf(c) === index);
        setTypeList(uniqList);
    }, [category, type, productsList]);

    useEffect(() => {
        const copyList = type ?
        productsList.filter(item => item.type === type && item.category === category).map(({model}) => model) :
        productsList.map(({model}) => model)
        const uniqList = copyList.filter((c, index) => copyList.indexOf(c) === index);
        setModelList(uniqList);
    }, [type, model, category, productsList]);


    useEffect(() => {
        const price = productsList.find(item => item.type === type && item.model === model) ? productsList.find(item => item.type === type && item.model === model).price : '';
        setState({...state,price: price})
        }, [type, model, productsList]);

        useEffect(() => {
            loadProductsFromAPI('categories')
                .then(item => item)
                .then(data => setCategories([...data, newCategory]));
        }, [newCategory]);

    const updateComponentList = useContext(UpdateContext);
    const updateCategories = useContext(UpdateCategoryContext);

    useEffect(() => {
        updateCategories(categories)
    },[updateCategories, categories]);

    const changeValue = e => {
        e.preventDefault(); 
        setState({...state, [e.target.name]: e.target.value})
    }
    
    const setValue = e => {
        e.preventDefault();
        setState({...state, [e.target.dataset.name]: e.target.dataset.code})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateData(state);
        setErr(errors);
        if (Object.keys(errors).length === 0) {
            updateComponentList(state, 'add');
            setState(init);
        }
    }

    const inputFields = [
        {name: 'price', value: price, type: 'number', step:".01", description: 'Cena', min: 0, unit: "PLN", err: err.price},
        {name: 'info', value: info, type: 'textarea', description: 'Uwagi'}
    ]

    return (
        <StyledWorkstationForm onSubmit={handleSubmit}>
            <label>Kategoria</label>
            <Dropdown 
                name="category" 
                value={category} 
                items={categories} 
                setValue={setValue}
                err={err.category}
            /> 
            <Add setNewCategory={setNewCategory}/>
            <Container>
                <div> 
                <label>Nazwa</label>
                <Search 
                    name="type" 
                    value={type} 
                    items={typeList ? typeList : []} 
                    isMutable={true}
                    setValue={setValue}
                    onChange={changeValue}
                    err={err.type}
                />    
                </div>
                <div>
                <label >Opis</label>
                <Search 
                    name="model" 
                    value={model} 
                    items={modelList ? modelList : []} 
                    isMutable={true}
                    setValue={setValue}
                    onChange={changeValue}
                    err={err.model}
                />   
                </div>  
            </Container>
            <Container>
                {inputFields.map(({name, value, type, description, min, unit, step, err})=>(
                    <div key={name}>
                        <label htmlFor={name}>{description}</label>
                        <Input 
                            id={name} 
                            type={type} 
                            name={name} 
                            value={value} 
                            min={min}
                            unit={unit}
                            step={step}
                            onChange={changeValue}
                        />
                        {err && <Error err={err}/>}
                    </div>
                ))}
            </Container>
            <Submit type="submit">Dodaj</Submit>
        </StyledWorkstationForm>
    )
}

export default WorkstationForm;