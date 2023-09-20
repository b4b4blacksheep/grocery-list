import React, { useState, useRef } from 'react';
import GroceryListCard from './component/GroceryListCard';
import GroceryNavbar from './component/GroceryNavbar';
import GroceryFooter from './component/GroceryFooter';
import './tailwind.css';

function App() {
  const [listOfGroceryLists, setListOfGroceryLists] = useState([]);

  const removeList = (index) => {
    const newList = [...listOfGroceryLists];
    newList.splice(index, 1);
    setListOfGroceryLists(newList);
  };
  
  const addNewList = () => {
    setListOfGroceryLists([...listOfGroceryLists, []]);
  };

  return (
    <>
    <GroceryNavbar />
    <div className="flex flex-col items-center p-4">
      <h1 className="text-3xl mb-4">Grocery Lists</h1>
      <button onClick={addNewList} className="bg-orange-600 hover:bg-orange-500 text-white font-bold py-2 px-4 my-3 rounded-full">
        + New List
      </button>
      <div className="flex flex-wrap justify-center">
        {listOfGroceryLists.map((groceryList, index) => (
          <div key={index} className="m-4">
          <GroceryListCard 
            key={index} 
            listIndex={index} 
            listOfGroceryLists={listOfGroceryLists} 
            setListOfGroceryLists={setListOfGroceryLists}
            removeList={removeList} 
          />
          </div>
        ))}
      </div>
      <GroceryFooter />
    </div>
    </>
  );
}

export default App;
