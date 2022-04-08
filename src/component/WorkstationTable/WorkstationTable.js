import React, {useEffect, useState, useContext} from 'react';
import PropTypes from 'prop-types';

import {ItemContext, UpdateContext} from '../context.js';
import {loadProductsFromAPI} from '../../api/DataAPI';

import Button from './../Button/Button'
import EditableComponent from '../EditableComponent/EditableComponent.js';

import StyledWorkstationTable from './WorkstationTable.styled';


const WorkstationTable = ({isSorted, text}) => {
    
    const componentsList = useContext(ItemContext);
    const updateContext = useContext(UpdateContext);
    
    const columnsNames = ["Nazwa", "Model", "Kategoria", "Cena", ""]

    const [categories, setCategories] = useState([]);
   
    useEffect(() => {
        loadProductsFromAPI('categories')
            .then(item=>item)
            .then(data=>setCategories(data))
    },[]);

    const [editableComponent, setEditableComponent] = useState(null)

    const deleteItem = e => {
        e.preventDefault();
        const id =  e.target.dataset.id;
        updateContext(id, 'remove')
    }

    const updateItem = (e, item) => {
        e.preventDefault();
        setEditableComponent(item);
        updateContext(editableComponent, 'update');
    }

    const getSumPriceByCategory = (arr, cat) => {
        return arr.filter(({category})=>category === cat).reduce((sum,{price})=>sum+Number(price),0).toFixed(2)
    }

    const getSumPrice = (arr) => {
        return arr.reduce((sum,{price})=>sum+Number(price),0).toFixed(2)
    }


    return (
        <>
            <StyledWorkstationTable>
                <table>
                    <thead>
                        <tr>
                            {columnsNames.map((name,ind)=><th key={ind}>{name}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                    {categories.map((cat,ind)=>(
                        <React.Fragment key={ind}>
                            {isSorted && <tr>
                                <th colSpan="3">{cat}</th>
                                <th></th>  
                                <th>{`${getSumPriceByCategory(componentsList, cat)} PLN`}</th>
                            </tr>}
                            {componentsList.filter(({type, model})=>type.includes(text)|| model.includes(text))
                            .filter(({category})=>category === cat)
                            .map((item)=>(
                            
                            <tr key={item.id} >
                                <td>{item.type}</td>
                                <td>{item.model}</td>
                                <td>{item.category}</td>
                                <td>{`${item.price} PLN`}</td>
                                <td>{
                                    <>
                                        <Button onClick={deleteItem} id={item.id}>usuń</Button>
                                        <Button onClick={e=>updateItem(e, item)} id={item.id}>zmień</Button>                                
                                    </>
                                }</td>
                            </tr>))}
                        </React.Fragment>)
                    )}
                    </tbody>
                    <tfoot>
                        <tr> 
                            <td colSpan="4">Łączny koszt</td>
                            <td>{`${getSumPrice(componentsList)} PLN`}</td>
                        </tr>
                    </tfoot>
                </table>
                {editableComponent && <EditableComponent content={editableComponent} setEditableComponent={setEditableComponent}/>}
            </StyledWorkstationTable>
        </>
    )
}

WorkstationTable.propTypes = {
    isSorted: PropTypes.bool.isRequired
}

export default WorkstationTable; 