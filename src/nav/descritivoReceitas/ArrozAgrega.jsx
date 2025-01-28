import React from "react";
import Footer from "../../components/Footer";
import Arroz from "../../imgs/picturesGaleira/arrozAgrega.jpg";
import Receita from "../../components/Receita";


export default function ArrozAgrega(){
    return(
        <React.Fragment>
             <Receita 
                        data='21 de setembro de 2024' 
                        autor='William Araújo' 
                        titulo='Arroz Agrega' 
                        imagem={Arroz} 
                        receita={
            <>
                        
                <strong>Ingredientes:</strong><br /><br />
                <p>Base do arroz:</p>
                <ul>
                    <li>2 xícaras de arroz branco</li>
                    <li>4 xícaras de água quente</li>
                    <li>1 cebola média picada</li>
                    <li>2 colheres (sopa) de óleo ou azeite</li>
                    <li>Sal a gosto</li>
                </ul>
                <p>Complementos:</p>
                <ul>
                    <li>200g de linguiça calabresa fatiada</li>
                    <li>100g de bacon em cubos</li>
                    <li>1 cenoura média ralada</li>
                    <li>1 pimentão vermelho pequeno picado</li>
                    <li>1 lata de milho verde (escorrido)</li>
                    <li>1 lata de ervilha (escorrida)</li>
                    <li>100g de azeitonas verdes fatiadas</li>
                    <li>100g de passas (opcional)</li>
                    <li>1 maço de cheiro-verde (salsinha e cebolinha) picado</li>
                </ul>
                <p>Finalização:</p>
                <ul/>
                    <li>50g de queijo parmesão ralado (opcional)</li><br /><br />
                <p><strong>Modo de Preparo:</strong></p>
                <ol>
                    <li>
                        <strong>Preparo do arroz:</strong><br/>
                        Em uma panela grande, aqueça o óleo ou azeite.<br/>
                        Refogue o alho e a cebola até dourarem levemente.<br/>
                        Acrescente o arroz e refogue por 2-3 minutos, mexendo bem.<br/>
                        Adicione a água quente e o sal. Cozinhe em fogo baixo com a panela semi-tampada até a água secar. Reserve.<br/><br/>
                    </li>
                    <li>
                        <strong>Preparar os complementos:</strong><br/>
                        Em uma frigideira grande, frite o bacon até dourar. Retire e reserve.<br />
                        Na mesma gordura, doure a linguiça calabresa. Retire e reserve.<br />
                        Adicione a cenoura, o pimentão e refogue até ficarem levemente macios.<br /><br />
                    </li>
                    <li>
                        <strong>Misturar os ingredientes:</strong><br/>
                        Em uma tigela grande (ou na panela do arroz), misture o arroz cozido com o bacon, a linguiça, a cenoura refogada, o milho, a ervilha, as azeitonas e as passas, se estiver usando.<br />
                        Mexa delicadamente para incorporar os ingredientes sem amassar o arroz.<br /><br /> 
                    </li>
                    <li>
                        <strong>Finalização:</strong><br/>
                        Transfira o arroz para uma travessa.<br />
                        Polvilhe o cheiro-verde e o queijo parmesão ralado por cima.<br />
                        Sirva quente.
                    </li>
                </ol>                       
            </>
        } 
        />
            <Footer />
        </React.Fragment>
    );
}