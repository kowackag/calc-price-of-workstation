import React, {useEffect, useState, useContext} from 'react';

import {ItemContext, UpdateContext} from '../context.js';
import {loadProductsFromAPI} from '../../api/DataAPI';

import Button from './../Button/Button'

import StyledWorkstationTable from './WorkstationTable.styled';


const WorkstationTable = () => {
    
    const componentsList = useContext(ItemContext);
    const updateContext = useContext(UpdateContext);
    
    const columnsNames = ["Nazwa", "Model", "Kategoria", "Cena", "Uwagi", ""]

    const [categories, setCategories] = useState([]);
   
    useEffect(() => {
        loadProductsFromAPI('categories')
            .then(item=>item)
            .then(data=>setCategories(data))
    },[]);

    const [isSorted, setIsSorted] = useState(false);


    const deleteItem = e => {
        e.preventDefault();
        const id =  e.target.dataset.id;
        updateContext(id, 'remove')
    }

    const updateItem = e => {
        e.preventDefault();
        const id =  e.target.dataset.id;
        updateContext(id, 'update')
    }

    const getSumPriceByCategory = (arr, cat) => {
        return arr.filter(({category})=>category === cat).reduce((sum,{price})=>sum+Number(price),0).toFixed(2)
    }


    const Components = () => {
        return categories.map((cat,ind)=>(
            <React.Fragment key={ind}>
                {componentsList.filter(({category})=>category === cat)
                .map(({id, type, model, category, price, info})=>(
                <tr key={id}>
                    <td>{type}</td>
                    <td>{model}</td>
                    <td>{category}</td>
                    <td>{`${price} PLN`}</td>
                    <td>{info}</td>
                    <td>{
                        <>
                            <Button onClick={deleteItem} id={id}>usuń</Button>
                            <Button onClick={updateItem} id={id}>usuń</Button>                                
                        </>
                    }</td>
                </tr>))}
            </React.Fragment>)
        )
    }

    const SortedComponents = () => {
        return categories.map((cat,ind)=>(
            <React.Fragment key={ind}>
                <tr>
                    <th>{cat}</th>
                    <th colSpan="4"></th>  
                    <th>{`${getSumPriceByCategory(componentsList, cat)} PLN`}</th>
                </tr>
                {componentsList.filter(({category})=>category === cat)
                .map(({id, type, model, price, info})=>(
                <tr key={id}>
                    <td>{type}</td>
                    <td>{model}</td>
                    <td>{`${price} PLN`}</td>
                    <td>{info}</td>
                    <td>{
                        <>
                            <Button onClick={deleteItem} id={id}>usuń</Button>
                            <Button onClick={updateItem} id={id}>usuń</Button>                                
                        </>
                    }</td>
                </tr>))}
            </React.Fragment>)
        )
    }

     
    return (
        <StyledWorkstationTable>
            <h2>Wybrane komponenty:</h2>
            <table>
                <thead>
                    <tr>
                        {columnsNames.map((name,ind)=><th key={ind}>{name}</th>)}
                        <th></th>
                    </tr>
                </thead>
                <tbody>{isSorted === true ? <SortedComponents/> : <Components/>}</tbody>
                <tfoot>
                    <tr> 
                        <td colSpan="5">Łączny koszt</td>
                        <td>777 PLN</td>
                    </tr>
                </tfoot>
            </table>
        </StyledWorkstationTable>
    )
}


export default WorkstationTable; 