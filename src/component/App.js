import React, {useState} from 'react';

import {ItemContext, UpdateContext, UpdateCategoryContext, CategoryContext} from './context';
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

  let categFromLS = getItem('categories');
  if (categFromLS === null) {
    categFromLS = init; 
  }
  const [data, setData] = useState(fromLocalStorage);
  const [categories, setCategories] = useState(categFromLS);

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

  const updateCategories = (element) => { 
      setCategories(element);
      setItem(element, 'categories')
  }

  return (
    <ItemContext.Provider value={data}>
      <UpdateContext.Provider value={updateComponentList}>
        <CategoryContext.Provider value={categories}>

        
        <UpdateCategoryContext.Provider value={updateCategories}>
          <StyledApp>
            <h1>Konfigurator stanowiska komputerowego</h1>
            <div>
                <WorkstationForm/>
                <Summary/>
            </div>  
            <WorkstationSection/>
          </StyledApp>
          
        </UpdateCategoryContext.Provider>
        </CategoryContext.Provider>
      </UpdateContext.Provider>
    </ItemContext.Provider>
  );
}

export default App;