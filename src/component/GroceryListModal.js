import React from 'react';
import jsPDF from 'jspdf';

const GroceryListModal = ({ isOpen, closeModal, list }) => {
  if (!isOpen) {
    return null;
  }

  const generatePDF = () => {
    const doc = new jsPDF();

    doc.text("Grocery List Summary", 10, 10);
    
    list.forEach((item, index) => {
      doc.text(item, 10, 20 + (index * 10));
    });

    doc.save("Grocery_List_Summary.pdf");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-black">
      <div className="bg-white p-6 rounded-lg w-1/2">
        <button onClick={closeModal} className="float-right">Close</button>
        <h2 className="text-2xl mb-4 sm:text-xl">Grocery List Summary</h2>
        <ul>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button onClick={generatePDF} className="bg-orange-600 hover:bg-orange-500 text-white font-bold py-2 px-4 my-3 rounded-full">Save as PDF</button>
      </div>
    </div>
  );
};

export default GroceryListModal;
