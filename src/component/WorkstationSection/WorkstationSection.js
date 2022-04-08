import React, {useState, useContext} from 'react';

import {ItemContext} from '../context.js';
import WorkstationTable from '../WorkstationTable/WorkstationTable.js';

import Input from '../Input/Input.js';
import StyledWorkstationSection from './WorkstationSection.styled';

const WorkstationSection = () => {
    
    const componentsList = useContext(ItemContext);
    const [text, setText] = useState('')
    const [isSorted, setIsSorted] = useState(false);

    return (
        <StyledWorkstationSection>
            <h2>Wybrane komponenty:</h2>
            {!componentsList.length ?
            <p>Brak wybranych elementów zestawu</p>
            : <> 
                <Input onChange={e=>setText(e.target.value)} placeholder="Szukaj"/>
                <div className="sorted-block"> 
                    <label htmlFor="sorted">Sortuj wg kategorii</label>
                    <input id="sorted" type="checkbox" onClick={(()=>setIsSorted(!isSorted))}/>
                </div>
                <WorkstationTable isSorted={isSorted} text={text}/>
            </>}
        </StyledWorkstationSection>
    )
}


export default WorkstationSection; 