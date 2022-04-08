import React, {useState} from 'react';

import {ItemContext, UpdateContext} from './context';
import { useStorage } from './Hooks';
import WorkstationForm from './WorkstationForm/WorkstationForm';
import WorkstationTable from './WorkstationTable/WorkstationTable';
import WorkstationSection from './WorkstationSection/WorkstationSection';

import StyledApp from './App.styled';

const App = () => {
  const init = []

  const [getItem, setItem] = useStorage();

  let fromLocalStorage = getItem('data');
  if (fromLocalStorage === null) {
    fromLocalStorage = init; 
  }

  const [data, setData] = useState(fromLocalStorage);
  console.log(data)

  const updateComponentList = (element, action) => {
    if (action === 'add') {
        const updatedData = [...data, element];
        setData(updatedData);
        setItem(updatedData, 'data');
    } else if (action === 'remove') {
        const updatedData = data.filter(item=>item.id !== element);
        setData(updatedData);
        setItem(updatedData, 'data')
    }
  }

  return (
    <ItemContext.Provider value={data}>
      <UpdateContext.Provider value={updateComponentList}>
        <StyledApp>
          <h1>Konfigurator stanowiska komputerowego</h1>
          <div>
              <WorkstationForm/>
              <section style={{width: "40%", padding: "0 9rem", backgroundColor: "rgb(10,8,110)", color: "white"}}>Suma:</section>
          </div>  
          <WorkstationSection/>
        </StyledApp>
      </UpdateContext.Provider>
    </ItemContext.Provider>
  );
}

export default App;