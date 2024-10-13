import React from 'react';
import AzureRecorder from './Azure/AzureRecorder';


const LevelBox = ({ closeDialog, letter, levelArray, userid }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[500]">
      <div className="bg-white px-6 py-4 rounded-lg shadow-xl w-[40rem] min-h-[26rem]">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-extrabold text-center">Practice</h1>
          <button
            className="text-red-500 hover:text-red-700 font-bold text-base border-red-500 border-2 rounded-lg px-2 py-1"
            onClick={closeDialog}
          >
            X
          </button>
        </div>
        <AzureRecorder letter={letter} levelArray={levelArray} userid={userid} onClose={closeDialog} />
      </div>
    </div>
  );
};

export default LevelBox;
