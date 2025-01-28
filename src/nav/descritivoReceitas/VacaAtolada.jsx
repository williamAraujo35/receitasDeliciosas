import React from "react";
import Footer from "../../components/Footer";
import Receita from "../../components/Receita";
import vaca from "../../imgs/picturesGaleira/vacaAtolada.jpg";


export default function VacaAtolada(){
    return(
        <React.Fragment>
            <Receita 
                data='10 de novembro de 2024' 
                autor='William Araújo' 
                titulo='Vaca Atolada' 
                imagem={vaca}
                receita={
                    <>
                <strong>Ingredientes:</strong><br /><br />
                <p>Carne:</p>
                <ul>
                    <li>1,5 kg de costela bovina cortada em pedaços</li>
                    <li>Suco de 1 limão</li>
                    <li>Sal e pimenta-do-reino a gosto</li>
                </ul>
                <p>Vegetais e temperos:</p>
                <ul>
                    <li>1 kg de mandioca (aipim ou macaxeira) descascada e cortada em pedaços</li>
                    <li>3 colheres (sopa) de óleo ou azeite</li>
                    <li>2 cebolas grandes picadas</li>
                    <li>4 dentes de alho picados</li>
                    <li>2 tomates grandes picados (sem sementes)</li>
                    <li>1 pimentão verde picado (opcional)</li>
                    <li>1 maço de cheiro-verde (salsinha e cebolinha) picado</li>
                    <li>2 folhas de louro</li>
                    <li>1 colher (chá) de colorau ou páprica</li>
                    <li>Água quente (o suficiente para cozinhar)</li>
                    <li>Sal e pimenta-do-reino a gosto</li>
                </ul>
                <p><strong>Modo de Preparo:</strong></p>
                <ol>
                    <li>
                        <strong>Preparar a costela:</strong><br />
                        Tempere a costela com suco de limão, sal e pimenta-do-reino. Deixe marinar por 30 minutos.<br /><br />
                    </li>
                    <li>
                        <strong>Refogar a costela:</strong><br />
                        Em uma panela de pressão, aqueça o óleo e doure os pedaços de costela por todos os lados.<br />
                        Retire a costela e reserve.<br /><br />
                    </li>
                    <li>
                        <strong>Fazer o refogado:</strong><br />
                        Na mesma panela, refogue o alho e a cebola até ficarem dourados.
                        Acrescente o colorau ou páprica e mexa.
                        Adicione os tomates, o pimentão e as folhas de louro, deixando refogar até os legumes desmancharem.<br /><br />
                    </li>
                    <li>
                        <strong>Cozinhar a costela:</strong><br />
                        Volte a costela para a panela, cubra com água quente e tampe.
                        Cozinhe na pressão por 35 a 40 minutos, ou até que a carne esteja macia.<br /><br />
                    </li>
                    <li>
                        <strong>Adicionar a mandioca:</strong><br />
                        Retire a pressão, adicione a mandioca à panela e, se necessário, acrescente mais água quente para cobrir.
                        Cozinhe por mais 15 a 20 minutos na pressão, até a mandioca estar macia e começando a desmanchar.<br /><br />
                    </li>
                    <li>
                        <strong>Finalizar:</strong><br />
                        Ajuste o sal e a pimenta-do-reino.
                        Finalize com cheiro-verde picado.
                    </li>
                </ol>
            </>
                } />
            <Footer />
        </React.Fragment>
    );
}