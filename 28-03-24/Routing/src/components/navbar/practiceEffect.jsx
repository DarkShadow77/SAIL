import { useEffect, useState } from "react";

const PracticeEffect = () => {
    const [count, setCount] = useState(0)
    const [multiply, setMultiply] = useState(10)
    useEffect(()=>{
        setTimeout(() => {
            return setCount(count +1)
        }, 1000)}
    , [multiply])

    return (<>
        <h1 style={{ textAlign: "center" }}>{count}</h1>
        <h1 style={{ textAlign: "center" }}>Multiplication result: {multiply}</h1>
        <button onClick={()=>setMultiply(multiply *2)}>Trigger</button>
    </>);
}

export default PracticeEffect;