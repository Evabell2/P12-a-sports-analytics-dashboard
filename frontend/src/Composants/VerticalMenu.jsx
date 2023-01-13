import '../style/style.css'
import { Link } from 'react-router-dom'
import icon1 from '../assets/icon-menu-1.png'
import icon2 from '../assets/icon-menu-2.png'
import icon3 from '../assets/icon-menu-3.png'
import icon4 from '../assets/icon-menu-4.png'

function VerticalMenu() {
    return (
      <div id='vertical_menu'>
        <nav>
          <Link to=""><img src={icon1} alt={icon1} /></Link>
          <Link to=""><img src={icon2} alt={icon2} /></Link>
          <Link to=""><img src={icon3} alt={icon3} /></Link>
          <Link to=""><img src={icon4} alt={icon4} /></Link>
        </nav>
        <div>
          <p>Copiryght, SportSee 2020</p>
        </div>
      </div>
    )
}
    
export default VerticalMenu