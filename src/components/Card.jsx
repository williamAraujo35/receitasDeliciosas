import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.css';
import { Link } from "react-router";

export default function Card(props){
    return(
        <div className="artigo">
            <img className="img" src={props.imagem} alt={props.titulo} />
            <span className="date">{props.data}</span>
            <div className="titleCard">{props.titulo}</div>
            <div className="textCard">{props.descricao}</div>
            <Link to={props.titulo}><span className="plusRead">Leia mais</span></Link>
        </div>
    );
}