import React, {useEffect, useState, useContext} from 'react';

import {ItemContext} from '../context.js';
import {loadProductsFromAPI} from '../../api/DataAPI';

import StyledWorkstationTable from './WorkstationTable.styled';


const WorkstationTable = () => {
    
    const componentsList = useContext(ItemContext);
    const columnsNames = ["Typ", "Model", "Cena", "Uwagi"]

    const [categories, setCategories] = useState([]);
   
    useEffect(() => {
        loadProductsFromAPI('categories')
            .then(item=>item)
            .then(data=>setCategories(data))
    },[]);


    const getSumPriceByCategory = (arr, cat) => {
       return arr.filter(({category})=>category === cat).reduce((sum,{price})=>sum+Number(price),0).toFixed(2)
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
                <tbody>{categories.map(cat=>(
                    <>
                        <tr>
                            <th>{cat}</th>
                            <th colSpan="3"></th>  
                            <th>{`${getSumPriceByCategory(componentsList, cat)} PLN`}</th>
                        </tr>
                        {componentsList.filter(({category})=>category === cat)
                        .map(({id, type, model, price, info})=>(
                        <tr key={id}>
                            <td>{type}</td>
                            <td>{model}</td>
                            <td>{price}</td>
                            <td>{info}</td>
                            <td>{<button>usuń</button>}</td>
                        </tr>))}
                    </>)
                )}
                </tbody>
                <tfoot>
                    <tr> 
                        <td colSpan="4">Łączny koszt</td>
                        <td>777 PLN</td>
                    </tr>
                </tfoot>
            </table>
        </StyledWorkstationTable>
    )
}


export default WorkstationTable; 