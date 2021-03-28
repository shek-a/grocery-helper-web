import React, { useCallback, useState, useEffect } from 'react';
import { getCategories } from './api/categoryService';
import { getAllGroceries, getGroceriesByCategory } from './api/groceryService';
import AddGrocery from './components/addGrocery';
import Groceries from './components/groceries';
import Search from './components/search';
import { SEARCH_ALL } from './Constants';
import './App.css';

const App = () => {

  const [groceries, setGroceries] = useState([]);
  const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchAllCategories();
        refreshAllGroceries();
    }, []);

  const fetchAllCategories = useCallback(() => {
    getCategories().then(
      response => {
          setCategories(response.data);
      }
    );
  }, []);

  const fetchGroceriesByCategory = useCallback((category) => {
    (category === SEARCH_ALL) ?
    refreshAllGroceries() :
      getGroceriesByCategory(category).then(
        response => {
            setGroceries(response.data);
        }
      );
  }, []);

const refreshAllGroceries = () => {
  getAllGroceries().then(
      response => {
          setGroceries(response.data);
      }
  );
};

  return (
    <React.Fragment>
        <h1 className="Title">Grocery Store</h1>
        <Search categories={categories} fetchGroceriesByCategory={fetchGroceriesByCategory}/>
        <AddGrocery categories={categories} refreshAllGroceries={refreshAllGroceries} />
        <Groceries groceries={groceries} categories={categories} refreshAllGroceries={refreshAllGroceries} setGroceries={setGroceries} />
    </React.Fragment>
  );
}

export default App;
