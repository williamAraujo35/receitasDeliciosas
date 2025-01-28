import React from "react";
import Footer from "../../components/Footer";
import Receita from "../../components/Receita";
import Bobo from "../../imgs/picturesGaleira/boboDeCamarao.jpg";

export default function BoboCamarao(){
    return(
        <React.Fragment>
            <Receita 
                data='05 de janeiro de 2025' 
                autor='William Araújo' 
                titulo='Bobó de Camarão' 
                imagem={Bobo} 
                receita={
                    <>
                <strong>Ingredientes:</strong><br /><br />
                <p>Para o camarão:</p>
                <ul>
                    <li>1 kg de camarão limpo (sem casca e sem cabeça)</li>
                    <li>Suco de 1 limão</li>
                    <li>Sal e pimenta-do-reino a gosto</li>
                </ul>
                <p>Para o purê de mandioca:</p>
                <ul>
                    <li>1 kg de mandioca (aipim ou macaxeira) descascada e cortada em pedaços</li>
                    <li>400 ml de leite de coco</li>
                    <li>Água (para cozinhar a mandioca)</li>
                </ul>
                <p>Para o refogado:</p>
                <ul>
                    <li>2 colheres (sopa) de azeite de dendê</li>
                    <li>2 colheres (sopa) de azeite de oliva</li>
                    <li>1 cebola grande picada</li>
                    <li>3 dentes de alho picados</li>
                    <li>2 tomates grandes sem pele e sem sementes, picados</li>
                    <li>1 pimentão vermelho pequeno picado</li>
                    <li>1 pimentão verde pequeno picado (opcional)</li>
                    <li>1 colher (chá) de páprica doce ou colorau</li>
                    <li>1 maço de cheiro-verde (salsinha e cebolinha) picado</li>
                    <li>1/2 maço de coentro fresco picado (opcional)</li>
                    <li>Pimenta dedo-de-moça picada a gosto (opcional)</li>
                </ul>
                <p><strong>Modo de Preparo:</strong></p>
                <ol>
                    <li>
                        <strong>Preparar o camarão:</strong><br />
                        Tempere os camarões com suco de limão, sal e pimenta-do-reino. Deixe marinar por 15 minutos.<br /><br />
                    </li>
                    <li>
                    <strong>Cozinhar a mandioca:</strong><br />
                        Em uma panela grande, cozinhe a mandioca em água até ficar bem macia.<br />
                        Escorra e bata no liquidificador ou processador com o leite de coco até obter um purê liso e homogêneo. Reserve.<br /><br />
                    </li>
                    <li>
                    <strong>Fazer o refogado:</strong><br />
                        Em uma panela grande, aqueça o azeite de dendê e o azeite de oliva.<br />
                        Refogue a cebola e o alho até ficarem levemente dourados.<br />                        
                        Acrescente os tomates, os pimentões e a páprica, mexendo bem até formar um molho espesso e bem incorporado.<br /><br />
                    </li>
                    <li>
                        <strong>Cozinhar o camarão:</strong><br />
                        Adicione os camarões temperados ao refogado e cozinhe por 5 minutos, ou até mudarem de cor. Cuidado para não cozinhar demais e deixá-los borrachudos.<br />
                        Retire os camarões e reserve, deixando o molho na panela.<br /><br />
                    </li>
                    <li>
                    <strong>Incorporar o purê:</strong><br />
                        Misture o purê de mandioca ao refogado na panela, mexendo bem para incorporar os sabores.<br />
                        Se necessário, adicione um pouco de água para ajustar a consistência.<br />
                        Volte os camarões para a panela e cozinhe por mais 5 minutos.<br /><br />
                    </li>
                    <li>
                    <strong>Finalizar:</strong><br />
                        Ajuste o sal e adicione o cheiro-verde, o coentro e a pimenta dedo-de-moça, se desejar.<br />
                        Sirva quente.<br />
                    </li>
                </ol>
            </>
                } />
            <Footer />
        </React.Fragment>
    );
}