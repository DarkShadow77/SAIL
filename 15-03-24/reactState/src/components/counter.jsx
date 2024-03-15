import React, { useState } from 'react';


const Counter = () => {

    const [{count, name}, setState] = useState({count: 1, name: "Adeshina David"})

    return (
        <>
            <h2>Hello my name is {name} and I am Counting: Count Number is - {count}</h2>
            <button onClick={()=> setState({count: count +1, name: `Shalipopi${count}` })
            }>Increase Count</button>
        </>
    );
}
 
export default Counter;