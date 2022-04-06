import React, {useState} from 'react';

const WorkstationForm = () => {

    const [state, setState] =  useState({});


    const changeValue = e => {
        e.preventDefault(); 
        setState({...state, [e.target.name]: e.target.value})
    }
    const selectProd = () => {
        console.log("select")
    }


    const handleSubmit = () => {
        console.log('sss')
    }

    
    const inputFields = [
        {name: 'type', value: 'type', type: 'string', description: 'Typ'},
        {name: 'model', value: 'type', type: 'string', description: 'Model'},
        {name: 'price', value: 'price', type: 'number', description: 'Cena'}
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
                    <input id={name} type={type} name={name} value={value} onChange={changeValue} onSelect={selectProd}/>
                </div >
            ))}
            <button>Dodaj</button>
        </form>
    )
}


export default WorkstationForm;