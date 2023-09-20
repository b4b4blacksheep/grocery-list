import React from 'react';

function GroceryForm({ item, setItem, addItem }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Add an item"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        className="border p-2 rounded mb-2"
      />
      <button onClick={addItem} className="bg-blue-500 text-white p-2 rounded">
        Add Item
      </button>
    </div>
  );
}

export default GroceryForm;
