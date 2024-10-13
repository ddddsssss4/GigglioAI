
import React, { useState } from 'react';
import LevelBox from '../../common/LevelBox';

const Level1Comp = ({ params }) => {
  const [clickedLetters, setClickedLetters] = useState([]);
  const [showDialog, setShowDialog] = useState(false);
  const [selectedLetter, setSelectedLetter] = useState('');
  const [clickedLevel, setClickedLevel] = useState([]);
  const [levelArray, setLevelArray] = useState([]);

  const userid = 1;

  const handleClick = (letter) => {
    setClickedLetters(() => {
      const newLetters = [letter];
      console.log(newLetters);
      return newLetters;
    });
    setSelectedLetter(letter);
    setShowDialog(true);
  };

  const closeDialog = () => {
    setShowDialog(false);
    setSelectedLetter('');
  };

  const level = 1;

  const handleLevel = (index) => {
    const subLevel = { level, subLevel: index + 1 };
    setClickedLevel(() => {
      console.log([level, index + 1]);
      setLevelArray((prevArray) => [subLevel]);
      return [level, index + 1];
    });
  };

  console.log("Updated level array: ", levelArray);

  const letters = ['A', 'B', 'C', 'D', 'E', 'F'];

  return (
    <div className='w-full h-screen overflow-y-auto p-4 mt-20'>
      <h1 className='text-black text-[37px]'>
        LEVEL 1
      </h1>
      <div className='grid grid-cols-5 gap-16 mx-auto text-black mt-4'>
        {letters.map((letter, index) => (
          <div
            key={index}
            onClick={() => { handleClick(letter); handleLevel(index); }}
            className='px-12 py-4 gradientcolor2 flex items-center justify-center text-[50px] w-[40%] rounded-xl font-bold cursor-pointer text-center hover:opacity-70'
          >
            {letter}
          </div>
        ))}
      </div>

      {showDialog && (
        <LevelBox 
          closeDialog={closeDialog} 
          letter={selectedLetter.charAt(0)} 
          levelArray={levelArray} 
          userid={userid}
        />
      )}
    </div>
  );
};

export default Level1Comp;
