import React, {useState, useContext} from 'react';

import {ItemContext, UpdateContext} from '../context.js';

import StyledWorkstationSection from './WorkstationSection.styled';

import WorkstationTable from '../WorkstationTable/WorkstationTable.js';

import Checkbox from '../Checkbox/Checkbox.js';


const WorkstatnionSection = () => {
    
    const componentsList = useContext(ItemContext);
    const [text, setText] = useState('')
    const [isSorted, setIsSorted] = useState(false);

    return (
        <StyledWorkstationSection>
            <h2>Wybrane komponenty:</h2>
            {!componentsList.length ?
            <p>Brak wybranych elementów zestawu</p>
            : <> 
                <input onChange={e=>setText(e.target.value)}/>
                <div> 
                    <label htmlFor="sorted">Sortuj wg kategorii</label>
                    <input id="sorted" type="checkbox" onClick={(()=>setIsSorted(!isSorted))}/>
                </div>
                <WorkstationTable isSorted={isSorted} text={text}/>
            </>}
        </StyledWorkstationSection>
    )
}


export default WorkstatnionSection; 