import React, {useContext} from 'react'
import myContext from '../context/myContext'

const Substraction = () => {
  const context = useContext(myContext);
  const{myData} = context;
  const subData = 4
  return (
    <div>
      <h3>Substraction</h3>
      
      <p>{`${subData} - ${myData}`}</p>
      <p>{subData-myData}</p>
    </div>
    
  )
}

export default Substraction
