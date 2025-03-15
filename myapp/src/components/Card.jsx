import React from "react";
import './Style.css';

const Card = (props) =>{
    return (
      <div className="container">
          <input  type="text" onChange={(e)=>{props.SetName(e.target.value)}}></input>
          <p>Name: {props.name}</p>
      </div>
    );
}


export default Card;