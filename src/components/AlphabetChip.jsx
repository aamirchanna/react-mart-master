import React from 'react';

function AlphabetChip({ category, onClick, isChosen }) {
  return (
    <div
      className={`p-2 cursor-pointer hover:bg-gray-200 border-gray-400 px-4 rounded-md ${
        isChosen ? "bg-black text-white" : "bg-white text-black"
      }`}
      onClick={onClick}
    >
      <h1>{category.name}</h1> {/* Render the letter */}
    </div>
  );
}

export default AlphabetChip;
