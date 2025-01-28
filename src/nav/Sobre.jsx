import './Sobre.css';
import Footer from '../components/Footer';
import Pizza from '../imgs/pizzaAbout.jpeg';



export default function Sobre(props) {
  return (
    <main className="body">
            <div className='containe'>
              <div className='about'>
                <div className='titleAbout'>
                    <p>Comida boa </p>
                </div>
                <div className='textAbout'>
                    <p>O brasileiro tem uma relação única com a comida. Em cada região do país, 
                      é possível encontrar pratos que contam histórias e representam as 
                      tradições culturais de um povo. A diversidade de ingredientes e influências 
                      de diferentes partes do mundo resulta em uma culinária rica, criativa e cheia de sabores.
                    </p>
                    <p>
                    Do feijão com arroz, passando pelas deliciosas sobremesas como pudim e brigadeiro, 
                    até as receitas de pratos típicos como a feijoada e moqueca, a comida brasileira é sinônimo 
                    de aconchego, afeto e celebração.
                    </p>                      
                    <p>
                    Cada refeição é uma oportunidade de partilhar momentos especiais, sempre regados a um 
                    tempero único e inconfundível.
                    É por esse motivo que compartilho essas receitas e sabores. Espero que você 
                    possa saboreá-las com sua família e amigos e guardar belas recordações de momentos felizes.
                    </p>
                </div>
              </div>
              <div>
                <div className='alignImgPizza'><img className='imgAbout' src={Pizza} alt='pizza' /></div>
              </div>
            </div>
      <Footer />
    </main>
  );
}