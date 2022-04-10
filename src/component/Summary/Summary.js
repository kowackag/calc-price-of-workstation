import React, {useContext, useState} from 'react';

import { ItemContext} from '../context';
import {saveOrdersAPI} from './../../api/DataAPI'

import Button from '../Button/Button';
import Input from '../Input/Input';

import StyledSummary from './Summary.styled';
import { validateSummary } from '../../validateData';
import Error from '../Error/Error';

const Summary = () => { 
    
    const componentsList = useContext(ItemContext);
    const init = {
        performer: '',
        info: ''
    }
    const [data, setData] = useState(init);
    const {performer, info} = data;

    const [err, setErr] = useState({});
    const {performer: errPerformer} = err;

    const changeValue = e => {
        e.preventDefault(); 
        setData({...data, [e.target.name]: e.target.value})
    }

    const sentOrder = (e) => {
        e.preventDefault();
        const errors = validateSummary(data);
        setErr(errors);
        if (Object.keys(errors).length === 0) {
            saveOrdersAPI({...data, components: componentsList});
            setData(init);
        }
    }

    return (
        <StyledSummary>
            <h2>Wysyłanie zamówienia:</h2>
            <form onSubmit={sentOrder}>
                <div>
                    <Input name="performer" value={performer} onChange={changeValue} placeholder="wykonawca"/> 
                   {errPerformer && <Error err={errPerformer}/> }
                </div>
                <div>
                    <Input type="textarea" name="info" value={info} onChange={changeValue} placeholder="uwagi"/>
                </div>
                <div>
                    <Button type="button">Wyślij</Button>
                </div>
            </form>
        </StyledSummary>
    )
}

export default Summary;