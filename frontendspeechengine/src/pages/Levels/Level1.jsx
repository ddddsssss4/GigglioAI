import React from 'react'
import Navbar from '../../components/common/Header/Navbar'
import Level1Comp from "../../components/core/LevelsComp/Level1Comp"

const Level1 = () => {
  return (
    <div className='w-full'>
      <Navbar></Navbar>

      <div >
        <Level1Comp></Level1Comp>
        hello
      </div>
    </div>
  )
}

export default Level1