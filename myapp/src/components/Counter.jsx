import React,{useState} from "react";

const Count = ()=>{
    const [count,SetCount] = useState(0);
    return(
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={()=>{SetCount(count+1)}}>Click+</button>
            <button onClick={()=>{SetCount(count-1)}}>Click-</button>
            <button onClick={()=>{SetCount(0)}}>Reset</button>
        </div>
    )
}


export default Count;