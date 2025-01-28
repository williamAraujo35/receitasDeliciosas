import React from "react";
import Footer from "../../components/Footer";
import Receita from "../../components/Receita";
import panqueca from "../../imgs/picturesGaleira/panquecaCarne.jpg";

export default function PanquecaCarne(){
    return(
        <React.Fragment>
            <Receita 
                data='30 de novembro de 2024' 
                autor='William Araújo' 
                titulo='Panqueca de Carne' 
                imagem={panqueca}
                receita={
                    <>
                <strong>Ingredientes:</strong><br /><br />
                <p>Para a massa:</p>
                <ul>
                    <li>2 ovos</li>
                    <li>1 xícara de leite</li>
                    <li>1 xícara de farinha de trigo</li>
                    <li>1 colher (sopa) de óleo ou manteiga derretida</li>
                    <li>1 pitada de sal</li>
                    <li>Óleo ou manteiga para untar a frigideira</li>
                </ul>
                <p>Para o recheio:</p>
                <ul>
                    <li>500g de carne moída</li>
                    <li>1 cebola média picada</li>
                    <li>2 dentes de alho picados</li>
                    <li>2 tomates sem pele e sem sementes picados</li>
                    <li>2 colheres (sopa) de óleo ou azeite</li>
                    <li>Sal e pimenta-do-reino a gosto</li>
                    <li>1 colher (chá) de colorau ou páprica (opcional)</li>
                    <li>Cheiro-verde picado (salsinha e cebolinha) a gosto</li>
                </ul>
                <p>Para o molho:</p>
                <ul>
                    <li>2 colheres (sopa) de manteiga</li>
                    <li>2 colheres (sopa) de farinha de trigo</li>
                    <li>500ml de leite</li>
                    <li>1 xícara de molho de tomate pronto</li>
                    <li>Sal, pimenta-do-reino e noz-moscada a gosto</li>
                    <li>Queijo parmesão ralado para finalizar</li>
                </ul>
                <p><strong>Modo de Preparo:</strong></p>
                <ol>
                    <li>
                        <strong>Preparar a massa:</strong><br />
                        No liquidificador, bata os ovos, o leite, a farinha de trigo, o óleo e o sal até obter uma massa lisa e homogênea.<br />
                        Aqueça uma frigideira antiaderente e unte levemente com óleo ou manteiga.<br />
                        Despeje uma concha pequena de massa na frigideira, espalhando uniformemente. Cozinhe até as bordas começarem a soltar e vire para dourar o outro lado.<br />
                        Repita até terminar a massa. Reserve as panquecas.<br /><br />
                    </li>
                    <li>
                        <strong>Preparar o recheio:</strong><br />
                        Em uma panela, aqueça o óleo e refogue a cebola e o alho até dourarem.<br />
                        Adicione a carne moída e cozinhe até perder a cor rosada.<br />
                        Acrescente os tomates, o sal, a pimenta e o colorau. Cozinhe até que o tomate se desmanche e o recheio fique bem seco.<br />
                        Finalize com cheiro-verde picado e reserve.<br /><br />
                    </li>
                    <li>
                        <strong>Preparar o molho:</strong><br />
                        Derreta a manteiga em uma panela e acrescente a farinha, mexendo bem para formar um roux (base do molho).<br />
                        Adicione o leite aos poucos, mexendo sempre para não empelotar. Cozinhe até engrossar.<br />
                        Misture o molho de tomate e tempere com sal, pimenta e noz-moscada.<br />
                        Deixe ferver por 2 minutos e desligue.<br /><br />
                    </li>
                    <li>
                        <strong>Montar as panquecas:</strong><br />
                        Coloque uma porção do recheio no centro de cada panqueca, enrole e disponha em um refratário.<br />
                        Cubra com o molho preparado e polvilhe queijo parmesão por cima.<br /><br />
                    </li>
                    <li>
                        <strong>Assar:</strong><br />
                        Leve ao forno preaquecido a 180°C por 15 minutos, ou até dourar levemente.<br /><br />
                    </li>
                </ol>
            </>
                } />
            <Footer />
        </React.Fragment>
    );
}