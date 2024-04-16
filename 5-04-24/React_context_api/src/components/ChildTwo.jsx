import React from 'react'
import GrandChildTwo from './GrandChildTwo'
import ChildOne from './ChildOne'

const ChildTwo = ({greet}) => {
    // const greeting = 'Good day'
  return (
    <div>
        <h2>Hello from Child Two</h2>
        <GrandChildTwo greet={greet}/>
        {/* <ChildOne greet={greeting}/> */}
    </div>
  )
}

export default ChildTwo