import React, {useState, useRef, useContext} from 'react';
import PropTypes from 'prop-types';
import { useReactToPrint } from 'react-to-print';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from "@fortawesome/free-solid-svg-icons";

import {CategoryContext, ItemContext, UpdateContext} from '../context.js';

import Button from './../Button/Button'
import EditableComponent from '../EditableComponent/EditableComponent.js';
import SortBlock from '../SortBlock/SortBlock.js';

import StyledWorkstationTable from './WorkstationTable.styled';

const WorkstationTable = ({isCategorised, text}) => {
    
    const componentsList = useContext(ItemContext);
    const categories = useContext(CategoryContext);
    const updateContext = useContext(UpdateContext);
    const [editableComponent, setEditableComponent] = useState(null);
    const [sortedWay, setSortedWay] = useState('');

    const filteredComponentList = componentsList.filter(({type, model, category})=>type.includes(text) || model.includes(text) || category.includes(text));
        
    const sortComponentList = (arr, element) => {
        const sortUp = (property) => (a,b) => {
            return a[property].toString().localeCompare(b[property].toString());
        }
        const sortDown = (property) => (a,b) => {
            return b[property].toString().localeCompare(a[property].toString());
        }
        switch (element.type) {
            case "up": {
                return arr.sort(sortUp(element.name))
            }
            case "down": {
                return arr.sort(sortDown(element.name))
            }
            default: {
                return arr;
            }
        }
    }

    const sortedComponentList = sortComponentList(filteredComponentList, sortedWay);

    const deleteItem = e => {
        e.preventDefault();
        const id =  e.target.dataset.id;
        updateContext(id, 'remove')
    }

    const updateItem = (e, item) => {
        e.preventDefault();
        setEditableComponent(item);
    }

    const sortUp = (e) => {
        e.preventDefault();
        setSortedWay({ ...sortedWay,
            name: e.currentTarget.dataset.name,
            type: "up"
        })
    }

    const sortDown = (e) => {
        e.preventDefault();
        setSortedWay({ ...sortedWay, 
            name: e.currentTarget.dataset.name,
            type: "down"
        })
    }

    const getSumPriceByCategory = (arr, cat) => {
        return arr.filter(({category})=>category === cat).reduce((sum,{price})=>sum+Number(price),0).toFixed(2)
    }

    const getSumPrice = (arr) => {
        return arr.reduce((sum,{price})=>sum+Number(price),0).toFixed(2)
    }

    const columnsNames = [
        {name: "type", desc: "Nazwa"},
        {name: "model", desc: "Opis"},
        {name: "category", desc: "Kategoria"},
        {name: "price", desc: "Cena"},
        {name: ""}
    ]

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });

    return (
        <>     
            <Button name="print" onClick={handlePrint} notAnimated={true}><FontAwesomeIcon icon={faPrint}/></Button>
            <StyledWorkstationTable ref={componentRef}>
                <table >
                    <thead>
                        <tr>
                            {columnsNames.map(({name, desc})=><th key={name}><div><p>{desc}</p>{name&&<SortBlock sortUp={sortUp} sortDown={sortDown} name={name}/>}</div> </th>)}
                        </tr>
                    </thead>
                    <tbody>
                    {isCategorised ? categories.map((cat,ind)=>(
                        <React.Fragment key={ind}>
                            {cat && <tr> 
                                <th colSpan="3">{cat}</th>
                                <th colSpan="2">{`${getSumPriceByCategory(componentsList, cat)} PLN`}</th>
                            </tr>}
                            {sortedComponentList.filter(({category})=>category === cat)
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
                            </React.Fragment>)) 
                        : sortedComponentList
                            .map((item)=>(
                                <tr key={item.id} >
                                    <td>{item.type}</td>
                                    <td>{item.model}</td>
                                    <td>{item.category}</td>
                                    <td>{`${item.price} PLN`}</td>
                                    <td>{<>
                                            <Button onClick={deleteItem} id={item.id}>usuń</Button>
                                            <Button onClick={e=>updateItem(e, item)} id={item.id}>zmień</Button>                                
                                        </>
                                    }</td>
                                </tr>))}
                    </tbody>
                    <tfoot>
                        <tr> 
                            <td colSpan="2">Łączny koszt</td>
                            <td></td>
                            <td colSpan="2">{`${getSumPrice(componentsList)} PLN`}</td>
                        </tr>
                        <tr> 
                            <td colSpan="4">{`Ilość pozycji: ${componentsList.length}`}</td>
                        </tr>
                    </tfoot>
                </table>
                {editableComponent && <EditableComponent content={editableComponent} setEditableComponent={setEditableComponent}/>}
            </StyledWorkstationTable>
        </>
    )
}

WorkstationTable.propTypes = {
    isCategorised: PropTypes.bool.isRequired
}

export default WorkstationTable; 