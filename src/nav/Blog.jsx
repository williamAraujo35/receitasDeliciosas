import './Blog.css';
import Contacts from '../components/Contacts';
import Footer from '../components/Footer';
import Card from '../components/Card';
import mapeamentoProcessos from '../imgs/mapeamentoProcessos.png';
import Feijoada from '../imgs/picturesGaleira/feijoada.jpg';
import Arroz from '../imgs/picturesGaleira/arrozAgrega.jpg';
import Moqueca from '../imgs/picturesGaleira/moqueca.jpg';
import VacaAtolada from '../imgs/picturesGaleira/vacaAtolada.jpg';
import Panqueca from '../imgs/picturesGaleira/panquecaCarne.jpg';
import BoboCamarao from '../imgs/picturesGaleira/boboDeCamarao.jpg';


export default function Blog(props) {
  return (
    <main className="body">
        <div className='organizationBlog'>
            <Card imagem={Feijoada} data='04/08/2024' titulo='feijoada' descricao='Uma deliciosa feijoada feita com carne suína. Nesta feijoada foi utilizado pé, orelha, rabo e costelinha de porco. Também foi utilizado bancon. ' />
            <Card imagem={Arroz} data='21/09/2024' titulo='arroz agrega' descricao='Projeto para mapeamento de 4 processos administrativos e na sequência sua automação.' />
            <Card imagem={Moqueca} data='29/09/2024' titulo='moqueca Capixaba' descricao='Projeto para mapeamento de 4 processos administrativos e na sequência sua automação.' />
            <Card imagem={VacaAtolada} data='10/11/2024' titulo='vaca atolada' descricao='Projeto para mapeamento de 4 processos administrativos e na sequência sua automação.' />
            <Card imagem={Panqueca} data='30/11/2024' titulo='panqueca de carne' descricao='Projeto para mapeamento de 4 processos administrativos e na sequência sua automação.' />
            <Card imagem={BoboCamarao} data='05/01/2025' titulo='bobó de camarão' descricao='Projeto para mapeamento de 4 processos administrativos e na sequência sua automação.' />
        </div>
        <Contacts />
        <Footer />
    </main>
  );
}