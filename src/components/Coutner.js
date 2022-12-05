import React, { useContext, useEffect, useState } from 'react'
import myContext from '../context/myContext'

const Coutner = () => {
    const context = useContext(myContext);
    const {myData, getData} = context
    const [data, setData] = useState(0)
    
    const increment = ()=>{
        
        // console.log(data1)
        setData(data+1)
    }

    const decrement = ()=>{
        
        // console.log(data1)
        setData(data-1)
    }
    useEffect(()=>{
      getData(data)

    })
    console.log(myData)
   
    
  return (
    <div>
      <button onClick={increment}>+</button>
      <p>{data}</p>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default Coutner
