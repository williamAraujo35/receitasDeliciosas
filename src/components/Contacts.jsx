import './Contacts.css';
import Whatsaap from '../imgs/whatsapp.png';


export default function Contacts(props){
  return (
    <aside className="contacts">
        <div className='call'>Qual a sua receita preferida?</div>
        <div className='wayContact'>Você pode entrar em contato conosco e solicitar a publicação de uma nova receita. Mande-nos uma mensagem no Whatsaap.</div>
        <div className='m-5'><a href='https://w.app/qnrefg' target='_blank'><img className='iconWhatsaap' src={Whatsaap} alt='Whatsaap'/></a></div>
    </aside>
  );
}