import React, { useContext } from 'react'
import myContext from '../context/myContext'

const Divider = () => {
  const context = useContext(myContext);
  const{myData} = context;

  const divData = 21;
  return (
    <div>
      <h3>Divider</h3>
      <p>{`${divData} * ${myData}`}</p>
      <p>{divData/myData}</p>
      
    </div>
  )
}

export default Divider
