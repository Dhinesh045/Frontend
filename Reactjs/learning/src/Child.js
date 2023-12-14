import React, { useContext } from 'react'
import { GlobalVariable } from './Theme'
import './Child.css';

function Child() {
    const getVal=useContext(GlobalVariable)
  return (
    <div>
        <p id='child'>this is from HomeJs</p>
        <p id='child1'>{getVal.age}</p>
        <p id='child1'>{getVal.name}</p>
    </div>
  )
}

export default Child