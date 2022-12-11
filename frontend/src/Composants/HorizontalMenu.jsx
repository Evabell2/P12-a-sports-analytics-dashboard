import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import '../style/style.css'


function HorizontalMenu() {
    return (
      <header id='horizontal_menu'>
        <Link to="">
            <img src={Logo} alt="logo" />
        </Link>
        <nav>
          <Link to="">Accueil</Link>
          <Link to="">Profil</Link>
          <Link to="">Réglage</Link>
          <Link to="">Communauté</Link>
        </nav>
      </header>
    )
}
    
export default HorizontalMenu