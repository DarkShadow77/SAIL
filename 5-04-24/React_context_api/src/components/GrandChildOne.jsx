import React, { useContext } from 'react'
import { MyContext, useContextHook } from '../AppContext'

const GrandChildOne = () => {
    const {greeting} = useContext(MyContext)
    // const {greeting} = useContextHook()
  return (
    <div> 
        <p>{`${greeting} GrandChild one`}</p>
        {/* <h5>{greeting}</h5> */}
        Hello from Grand Child One
    </div>
  )
}

export default GrandChildOne