import React , {useState,useEffect} from "react";

const MyEffect = ()=>{
    const [count,setCount] = useState(0);

    useEffect(()=>{
        // setCount(count+1);
    })

    return(
        <>
            <button onClick={()=>{setCount(count+1)}}>Click</button>
            <br/>
            <h3>Count: {count}</h3>
        </>
    )
}



export default MyEffect;