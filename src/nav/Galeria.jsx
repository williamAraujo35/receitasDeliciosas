import './Galeria.css';
import Footer from '../components/Footer';
import Picture from '../components/Picture';
import VacaAtolada from '../imgs/picturesGaleira/vacaAtolada.jpg';
import BoboDeCamarao from '../imgs/picturesGaleira/boboDeCamarao.jpg';
import Camarao from '../imgs/picturesGaleira/camarao.jpg';
import Coxinha from '../imgs/picturesGaleira/coxinha.jpg';
import Feijoada from '../imgs/picturesGaleira/feijoada.jpg';
import Lazanha from '../imgs/picturesGaleira/lazanha.jpg';
import Panqueca from '../imgs/picturesGaleira/panquecaCarne.jpg';
import Pizza from '../imgs/picturesGaleira/pizzaCalabresa.jpg';
import Strogonoff from '../imgs/picturesGaleira/strogonoffFrango.jpg';
import TortaDeFrango from '../imgs/picturesGaleira/tortaDeFrango.jpg';
import Arroz from '../imgs/picturesGaleira/arrozAgrega.jpg';
import Moqueca from '../imgs/picturesGaleira/moqueca.jpg';



export default function Galeria(props) {
  return (
    <main className="body">
      <div className='galeria'>
          <Picture img={VacaAtolada} nomeImg='Vaca Atolada' />
          <Picture img={BoboDeCamarao} nomeImg='Bobó de Camarão' />
          <Picture img={Camarao} nomeImg='Camarão alho e óleo' />
          <Picture img={Coxinha} nomeImg='Coxinha de frango' />
          <Picture img={Feijoada} nomeImg='Feijoada' />
          <Picture img={Lazanha} nomeImg='Lazanha' />
          <Picture img={Panqueca} nomeImg='Panqueca' />
          <Picture img={Pizza} nomeImg='Pizza de calabresa' />
          <Picture img={Strogonoff} nomeImg='Strogonoff de Frango' />
          <Picture img={TortaDeFrango} nomeImg='Torta de Frango' />
          <Picture img={Arroz} nomeImg='Arroz a Grega' />
          <Picture img={Moqueca} nomeImg='Moqueca Capixaba' />
      </div>
        <Footer />
    </main>
  );
}