import React, { useState } from 'react'
import MyContext from './myContext'
const MyContextState = (props) => {

    const [myData, setMyData] = useState(0) 

    const getData = (data)=>{
        setMyData(data)
    }
  return (
    <MyContext.Provider value={{myData, getData}}>
        {props.children}
    </MyContext.Provider>
  )
}

export default MyContextState
