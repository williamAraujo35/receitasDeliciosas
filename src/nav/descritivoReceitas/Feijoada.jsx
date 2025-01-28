import React from "react";
import './Feijoada.css';
import Footer from "../../components/Footer";
import Receita from "../../components/Receita";
import feijoada from '../../imgs/picturesGaleira/feijoada.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Feijoada(){
    return(
        <React.Fragment>
            <Receita 
            data='04 de agosto de 2024' 
            autor='William Araújo' 
            titulo='Feijoada de Porco' 
            imagem={feijoada} 
            receita={
                <>
                <strong>Ingredientes:</strong><br /><br />
                <p>Carnes de porco:</p>
                <ul>
                    <li>500g de feijão preto</li>
                    <li>1 pé de porco</li>
                    <li>1 orelha de porco</li>
                    <li>1 rabo de porco</li>
                    <li>400g de costelinha de porco</li>
                    <li>200g de bacon em cubos</li>
                </ul>
                <p>Carnes adicionais:</p>
                <ul>
                    <li>200g de linguiça calabresa fatiada</li>
                    <li>200g de paio fatiado</li>
                    <li>200g de carne-seca (charque ou jabá)</li>
                </ul>
                <p>Temperos e aromáticos:</p>
                <ul>
                    <li>2 folhas de louro</li>
                    <li>2 cebolas grandes picadas</li>
                    <li>4 dentes de alho amassados</li>
                    <li>1 pimenta dedo-de-moça (opcional)</li>
                    <li>Sal e pimenta-do-reino a gosto</li>
                    <li>Cheiro-verde (salsinha e cebolinha) a gosto</li>
                </ul>
                <p>Acompanhamentos:</p>
                <ul>
                    <li>Couve refogada</li>
                    <li>Farofa</li>
                    <li>Arroz branco</li>
                    <li>Laranja em rodelas</li>
                </ul>
                <p><strong>Modo de Preparo:</strong></p>
                <ol>
                    <li>
                        <strong>Dessalgar as carnes:</strong><br />
                        Orelha, pé e rabo de porco. Lave bem as carnes em água corrente, removendo impurezas.
                        Deixe de molho em água fria por 12 horas, trocando a água a cada 3-4 horas.<br />
                        Carne-seca:
                        Deixe de molho em água fria por 12 horas, trocando a água regularmente.
                        Ferva as carnes dessalgadas por 10 minutos em água limpa, descarte a água e reserve.<br /><br />
                    </li>
                    <li>
                        <strong>Preparar o feijão:</strong><br />
                        Lave o feijão preto e, se desejar, deixe de molho por 4 horas para acelerar o cozimento.
                        Cozinhe o feijão em uma panela de pressão com 1 folha de louro por 25 minutos após pegar pressão. Reserve.<br /><br />
                    </li>
                    <li>
                        <strong>Refogar as carnes:</strong><br />
                        Em uma panela grande, frite o bacon até dourar. Retire e reserve.
                        Na gordura do bacon, doure a costelinha de porco, as linguiças e o paio. Retire e reserve.
                        Acrescente o pé, a orelha e o rabo de porco, refogando bem para selar.<br /><br />
                    </li>
                    <li>
                        <strong>Misturar com o feijão:</strong><br />
                        Na mesma panela grande, adicione o feijão pré-cozido (com o caldo), todas as carnes refogadas e a carne-seca.
                        Coloque as folhas de louro restantes e cozinhe tudo junto em fogo baixo por 1 hora, mexendo ocasionalmente para misturar os sabores.<br /><br />
                    </li>
                    <li>
                        <strong>Finalizar a feijoada:</strong><br />
                        Em uma frigideira, refogue o alho e a cebola no azeite até dourar. Adicione à feijoada.
                        Ajuste o sal e a pimenta-do-reino (cuidado, as carnes já têm sal).
                        Cozinhe por mais 10 minutos, finalize com cheiro-verde picado e, se gostar, adicione a pimenta dedo-de-moça.
                    </li>
                </ol>
            </>}/>
            <Footer />
        </React.Fragment>
    );
}