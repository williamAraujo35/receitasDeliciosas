import React from "react";
import './Receita.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Receita(props){
    return(
        <div className="containterReceita">
            <div className="dateAndAutor">{`${props.data} - Escrito por ${props.autor}`}</div>
            <div className="titleReceita">{props.titulo}</div>
            <div><img className="imagemReceita" src={props.imagem} alt={props.titulo}/></div>
            <div className="receitaComida">{props.receita}</div>
        </div>

    );
}