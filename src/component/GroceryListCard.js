import React, { useState } from 'react';
import { MdOutlineRemoveCircleOutline, MdRemoveRedEye } from 'react-icons/md';
import GroceryListModal from './GroceryListModal';


function GroceryListCard({ listIndex, listOfGroceryLists, setListOfGroceryLists, removeList }) {

	const [item, setItem] = useState('');
	const [isEditing, setIsEditing] = useState(false);
	const [listName, setListName] = useState(`Grocery List ${listIndex + 1} - ${new Date().toLocaleDateString()}`);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const addItem = () => {
    const newList = [...listOfGroceryLists];
    newList[listIndex] = [...newList[listIndex], item];
    setListOfGroceryLists(newList);
    setItem('');
  };

  const removeItem = (itemIndex) => {
    const newList = [...listOfGroceryLists];
    newList[listIndex].splice(itemIndex, 1);
    setListOfGroceryLists(newList);
  };

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="border p-4 rounded mb-4 w-full pb-5 max-w-md rounded-lg relative" style={{ backgroundColor: "#f7fafc"}}>
      <button onClick={() => removeList(listIndex)} className="absolute top-0 right-0 p-2">X</button>
      {isEditing ? (
        <input
          type="text"
          value={listName}
          onChange={(e) => setListName(e.target.value)}
          onBlur={toggleEditing}
          autoFocus
          className="text-lg mb-2 border p-2 rounded"
        />
      ) : (
        <h2 className="mb-2 cursor-pointer" onClick={toggleEditing}>
          {listName}
        </h2>
      )}
      <input
        type="text"
        placeholder="Grocery Item"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        maxLength={25}
        className="border p-2 rounded mb-2"
      />
      <button 
        onClick={addItem} 
        disabled={!item} 
        className={`bg-orange-600 hover:bg-orange-500 mx-3 text-white font-bold py-2 px-4 my-3 rounded-full ${!item && 'opacity-50 cursor-not-allowed'}`}
      >
        Add Item
      </button>
      <table className="mt-4 w-full">
        <thead>
          <tr>
            <th className="border p-2">Grocery List</th>
          </tr>
        </thead>
        <tbody>
          {listOfGroceryLists[listIndex].map((item, index) => (
            <tr key={index}>
              <td className="border p-1">
                <div className="flex items-center">
                  <span className="mr-2">{item}</span>
                  <button onClick={() => removeItem(index)} className="ms-auto text-red-500">
                    <MdOutlineRemoveCircleOutline size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {listOfGroceryLists[listIndex].length > 0 && (
        <div className="flex items-center">
          <button onClick={toggleModal} className="ms-auto pt-3 text-gray-700">
            <MdRemoveRedEye size={24} title="View List" />
          </button>
        </div>
      )}

      <GroceryListModal
        isOpen={isModalOpen}
        closeModal={toggleModal}
        list={listOfGroceryLists[listIndex]}
      />
    </div>
  );
}

export default GroceryListCard;