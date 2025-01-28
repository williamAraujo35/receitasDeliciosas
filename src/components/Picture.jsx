import React from "react";
import './Picture.css';

export default function Picture(props){
    return(
        <img className="picture" src={props.img} alt={props.nomeImg}/>
    );
}