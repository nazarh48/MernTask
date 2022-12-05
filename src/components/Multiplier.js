import React, { useContext } from 'react'
import myContext from '../context/myContext'
const Multiplier = () => {
  const context = useContext(myContext);
  const{myData} = context;

  const multiData = -5;
  return (
    <div>
      <h3>Multiplier</h3>
      <p>{`${multiData} * ${myData}`}</p>
      <p>{multiData*myData}</p>
    </div>
  )
}

export default Multiplier
