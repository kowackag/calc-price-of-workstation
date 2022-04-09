import React, {useState, useContext} from 'react';

import {ItemContext} from '../context.js';
import WorkstationTable from '../WorkstationTable/WorkstationTable.js';

import Input from '../Input/Input.js';
import StyledWorkstationSection from './WorkstationSection.styled';

const WorkstationSection = () => {
    
    const componentsList = useContext(ItemContext);
    const [text, setText] = useState('')
    const [isCategorised, setIsCategorised] = useState(false);

    return (
        <StyledWorkstationSection>
            <h2>Wybrane komponenty:</h2>
            {!componentsList.length ?
            <p>Brak wybranych elementów zestawu</p>
            : <> 
                <Input onChange={e=>setText(e.target.value)} placeholder="Szukaj"/>
                <div className="sorted-block"> 
                    <label htmlFor="sorted">Szereguj wg kategorii</label>
                    <input id="sorted" type="checkbox" onClick={(()=>setIsCategorised(!isCategorised))}/>
                </div>
                <WorkstationTable isCategorised={isCategorised} text={text}/>
            </>}
        </StyledWorkstationSection>
    )
}


export default WorkstationSection; 