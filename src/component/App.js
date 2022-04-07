import React, {useState, useContext} from 'react';

import {ItemContext, UpdateContext} from './context';
import { useStorage } from './Hooks';
import WorkstationForm from './WorkstationForm/WorkstationForm';


const App = () => {
  const init = {
    elementList: [],   
  }

  const [getItem, setItem] = useStorage();

  let fromLocalStorage = getItem('data');
  if (fromLocalStorage === null) {
        fromLocalStorage = init; 
  }
  const [data, setData] = useState(fromLocalStorage)

  const updateComponentList = () => {
    console.log('update')
  }

  return (
    <ItemContext.Provider value={data}>
      <UpdateContext.Provider value={updateComponentList}>
        <h1>Konfigurator stanowiska komputerowego</h1>
        <WorkstationForm/>
      </UpdateContext.Provider>
    </ItemContext.Provider>
  );
}

export default App;
