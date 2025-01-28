import './Header.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


export default function Header() {
  return (
    <header className="header">
      <div className='nav'>
        <div>
          <Link className='link' to='/'>
           Blog
          </Link>
        </div>
        <div>
          <Link className='link' to='/about'>
            Sobre
          </Link>
        </div>
        <div>
          <Link className='link' to='/pictures'>
            Galeria
          </Link>
        </div>
      </div>
      <div className='title'>Receitas deliciosas</div>
      <div className='navExternal'>
        <span><Link  to='https://www.linkedin.com/in/william-henrique-de-ara%C3%BAjo-pmp-cbpp-081890136/' target='_blank'><FontAwesomeIcon icon={faLinkedin} className='Icons'/></Link></span>
        <span><Link  to='https://github.com/williamAraujo35' target='_blank'><FontAwesomeIcon icon={faGithub} className='Icons'/></Link></span>
        <span><Link  to='https://www.instagram.com/william_haraujo/' target='_blank'><FontAwesomeIcon icon={faInstagram} className='Icons'/></Link></span>
      </div>
    </header>
  );
}
