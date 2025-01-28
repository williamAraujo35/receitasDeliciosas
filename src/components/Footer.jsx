import './Footer.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


export default function Footer(props) {
  return (
    <footer className="footer">
        <div className='titleFooter'>
          Receitas Deliciosas
        </div>
        <div className='navFooter'>
          <div>
            <Link className='linkFooter' to='/'>
              Blog
            </Link>
          </div>
          <div>
            <Link className='linkFooter' to='/about'>
              Sobre
            </Link>
          </div>
          <div>
            <Link className='linkFooter' to='/pictures'>
              Galeria
            </Link>
          </div>
        </div>
        <div className='navExternalFooter'>
          <span><Link  to='https://www.linkedin.com/in/william-henrique-de-ara%C3%BAjo-pmp-cbpp-081890136/' target='_blank'><FontAwesomeIcon icon={faLinkedin} className='IconsFooter'/></Link></span>
          <span><Link  to='https://github.com/williamAraujo35' target='_blank'><FontAwesomeIcon icon={faGithub} className='IconsFooter'/></Link></span>
          <span><Link  to='https://www.instagram.com/william_haraujo/' target='_blank'><FontAwesomeIcon icon={faInstagram} className='IconsFooter'/></Link></span>
        </div>
        <div className='mb-4'>
           ® Todos os direitos reservados a William Araujo.
        </div>
    </footer>
  );
}