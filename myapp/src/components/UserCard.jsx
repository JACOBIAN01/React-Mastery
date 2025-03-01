import React from "react";
import photo from "../assets/image.png";
import '../components/UserCard.css';
const UserCard = (props)=>{
    return(
        <>
            <div className="user-container">
                <p id="title">{props.title}</p>
                <img id="user-img" src={photo}></img>
                <p id="user-desc">{props.desc}</p>
            </div>
        </>
    )
}


export default UserCard;