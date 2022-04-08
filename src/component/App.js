import React, {useState} from 'react';

import {ItemContext, UpdateContext} from './context';
import { useStorage } from './Hooks';

import WorkstationForm from './WorkstationForm/WorkstationForm';
import WorkstationSection from './WorkstationSection/WorkstationSection';
import Summary from './Summary/Summary';

import StyledApp from './App.styled';

const App = () => {
  const init = []

  const [getItem, setItem] = useStorage();

  let fromLocalStorage = getItem('data');
  if (fromLocalStorage === null) {
    fromLocalStorage = init; 
  }

  const [data, setData] = useState(fromLocalStorage);

  const updateComponentList = (element, action) => {
    if (action === 'add') {
        const updatedData = [...data, element];
        setData(updatedData);
        setItem(updatedData, 'data');
    } else if (action === 'remove') {
        const updatedData = data.filter(item=>item.id !== element);
        setData(updatedData);
        setItem(updatedData, 'data')
    } else if (action === 'update') {
        const updatedData = data.map(item => {
          if(item.id === element.id) {
            return element
          } else {
            return item
          }})
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
              <Summary/>
          </div>  
          <WorkstationSection/>
        </StyledApp>
      </UpdateContext.Provider>
    </ItemContext.Provider>
  );
}

export default App;