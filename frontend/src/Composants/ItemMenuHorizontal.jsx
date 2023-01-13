import { Link } from 'react-router-dom'
import '../style/style.css'

function ItemMenuHorizontal({nameItem, linkItem}) {
    return (
        <Link to={linkItem}>{nameItem}</Link>
    )
}
export default ItemMenuHorizontal