import React, {useState} from 'react';

import {ItemContext, UpdateContext} from './context';
import { useStorage } from './Hooks';
import WorkstationForm from './WorkstationForm/WorkstationForm';

import StyledApp from './App.styled';

const App = () => {
  const init = {
    componentList: [],   
  }

  const [getItem, setItem] = useStorage();

  let fromLocalStorage = getItem('data');
  if (fromLocalStorage === null) {
    fromLocalStorage = init; 
  }

  const [data, setData] = useState(fromLocalStorage);
  const {componentList} = data;
  const updateComponentList = (component, action) => {
    switch (action) {
      case 'add': {
        const updatedData = {
          componentList: [...componentList, component],
        }
        setData(updatedData);
        setItem(updatedData, 'data')
      }
    }
  }

  return (
    <ItemContext.Provider value={data}>
      <UpdateContext.Provider value={updateComponentList}>
        <StyledApp>
          <h1>Konfigurator stanowiska komputerowego</h1>
          <div>
            <div>
              <WorkstationForm/>
              <section style={{backgroundColor: "rgb(54,54,54)", color: "white"}}>Podsumowanie</section>
            </div>
            <section style={{backgroundColor: "rgb(10,8,110)", color: "white"}}>Suma:</section>
          </div>
        </StyledApp>
      </UpdateContext.Provider>
    </ItemContext.Provider>
  );
}

export default App;