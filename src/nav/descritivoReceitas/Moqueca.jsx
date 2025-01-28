import React from "react";
import Footer from "../../components/Footer";
import Receita from "../../components/Receita";
import moqueca from "../../imgs/picturesGaleira/moqueca.jpg";

export default function Moqueca(){
    return(
        <React.Fragment>
            <Receita 
                data='29 de setembro de 2024' 
                autor='William Araújo' 
                titulo='Moqueca Capixaba' 
                imagem={moqueca}
                receita={
                <>
                    <p><strong>Ingredientes:</strong></p>
                    <ul>
                        <li>1,5 kg de peixe fresco (robalo, badejo ou dourado) cortado em postas</li>
                        <li>Suco de 1 limão</li>
                        <li>Sal e pimenta-do-reino a gosto</li>
                    </ul>
                    <p><strong>Legumes e Temperos:</strong></p>
                    <ul>
                        <li>2 tomates grandes em rodelas</li>
                        <li>2 cebolas grandes em rodelas</li>
                        <li>1 pimentão verde em rodelas</li>
                        <li>1 pimentão vermelho em rodelas</li>
                        <li>2 dentes de alho picados</li>
                        <li>1 maço de coentro fresco picado (reserve uma parte para finalizar)</li>
                        <li>1 maço de cebolinha picada</li>
                        <li>2 colheres (sopa) de azeite de oliva</li>
                        <li>2 colheres (sopa) de azeite de urucum (ou óleo de urucum, para dar cor)</li>
                    </ul>
                    <p><strong>Para o caldo:</strong></p>
                    <ul>
                        <li>200ml de água</li>
                        <li>1 colher (chá) de colorau (opcional, para intensificar a cor)</li>
                    </ul>
                    <p><strong>Modo de Preparo:</strong></p>
                    <ol>
                        <li>
                            <strong>Preprar o peixe:</strong><br />
                            Lave as postas de peixe com água e limão.<br />
                            Tempere com sal, pimenta-do-reino e um pouco de alho. Deixe marinar por 20 minutos.<br /><br />
                        </li>
                        <li>
                            <strong>Montar a moqueca:</strong><br />
                            Em uma panela de barro (ou uma panela funda convencional), espalhe uma colher de azeite de oliva e outra de azeite de urucum no fundo.<br />
                            Monte camadas alternadas de cebola, tomate, pimentão e peixe. Repita até acabar os ingredientes.<br />
                            Salpique cebolinha e coentro entre as camadas.<br /><br />
                        </li>
                        <li>
                            <strong>Adicionar o caldo</strong><br />
                            Misture a água com o colorau (se desejar) e despeje delicadamente na panela pelas bordas para não desarrumar as camadas.<br />
                            Regue com o restante dos azeites.<br /><br />
                        </li>
                        <li>
                            <strong>Cozinhar</strong><br />
                            Leve ao fogo médio com a panela tampada.<br />
                            Cozinhe por 20 a 25 minutos, ou até que o peixe esteja macio e cozido. Não mexa para evitar quebrar as postas.<br /><br />
                        </li>
                        <li>
                            <strong>Finalizar</strong><br />
                            Ajuste o sal e finalize com mais coentro picado.<br />
                            Sirva na própria panela de barro para manter a tradição.
                        </li>
                    </ol>
                </>

                } />
            <Footer />
        </React.Fragment>
    );
}