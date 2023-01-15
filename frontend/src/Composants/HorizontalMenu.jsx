import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import '../style/style.css'
import ItemMenuHorizontal from './ItemMenuHorizontal'
import PropTypes from 'prop-types'

/**
 * @component 
 * @returns {JSX.Element} - Horizontal menu rendering.
 */
function HorizontalMenu() {
    return (
      <header id='horizontal_menu'>
        <Link to="">
            <img src={Logo} alt="logo" />
        </Link>
        <nav>
          <ItemMenuHorizontal nameItem={"Accueil"} linkItem={"/"} />
          <ItemMenuHorizontal nameItem={"Profil"} linkItem={""}/>
          <ItemMenuHorizontal nameItem={"Réglage"} linkItem={""}/>
          <ItemMenuHorizontal nameItem={"Communauté"} linkItem={""}/>
        </nav>
      </header>
    )
}
HorizontalMenu.propTypes = {
  nameItem: PropTypes.string,
  linkItem: PropTypes.string,
}
    
export default HorizontalMenu