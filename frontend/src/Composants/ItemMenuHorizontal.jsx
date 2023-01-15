import { Link } from 'react-router-dom'
import '../style/style.css'


/**
 * @component 
 * @param {string} nameItem - The name of the item to display in the menu.
 * @param {string} linkItem - The link to redirect to when the user clicks on the item.
 * @returns {JSX.Element} - Horizontal menu item rendering.
 */
function ItemMenuHorizontal({nameItem, linkItem}) {
    return (
        <Link to={linkItem}>{nameItem}</Link>
    )
}
export default ItemMenuHorizontal