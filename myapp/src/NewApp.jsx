import React from "react";
// const Welcome  = (props)=>{
//     return(
//         <>
//             {props};
//         </>
//     )
// }

// const NewApp =()=>{
//     return(
//         <>
//             <Welcome>
//                 <h1>Hello!</h1>
//                 <p>Welcome to React</p>
//             </Welcome>
//         </>
//     )
// }

// export default NewApp;

const element = React.createElement("button",{
    className:"btn",
    onClick:()=>alert("Clicked"),
},
"Click Me"
)

export default element;