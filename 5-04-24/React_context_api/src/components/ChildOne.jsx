import React, { useContext } from 'react'
import GrandChildOne from './GrandChildOne'
import { MyContext, useContextHook } from '../AppContext'


const ChildOne = ({greet}) => {
   const {data} = useContextHook()
    console.log(data);
  return (
    <div>
        {/* <p>{data.greeting}</p> */}
        <h2>Hello from Child One</h2>
        {/* <h3>{greet}</h3> */}
        <GrandChildOne/>
    </div>
  )
}

export default ChildOne