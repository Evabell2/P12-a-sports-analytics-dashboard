import service from "../service"
import PropTypes from 'prop-types'
import { useState } from 'react'
import { useEffect } from 'react'
import ImgCalories from "../assets/calories-icon.png"
import ImgProteines from "../assets/protein-icon.png"
import ImgGlucides from "../assets/carbs-icon.png"
import ImgLipides from "../assets/fat-icon.png"


/**
 * @component 
 * @param {string} userID - The ID of the user for which we are displaying activity data.
 * @returns {JSX.Element} - Component rendering.
 */
function KeyInfo({userID}) {
    const [user, setUser] = useState({})
    useEffect(() => {
        service.getUser(userID)
        .then(data => {
        setUser(data)
        })
    })
    return(
        <ul>
            <li>
                <img src={ImgCalories} alt="Calories" />
                <div>
                    <p>{user.data && user.data.keyData.calorieCount}Kcal</p>
                    <span>Calories</span>
                </div>
            </li>
            <li>
                <img src={ImgProteines} alt="Proteines" />
                <div>
                    <p>{user.data && user.data.keyData.proteinCount}g</p>
                    <span>Proteines</span>
                </div>
            </li>
            <li>
                <img src={ImgGlucides} alt="Glucides" />
                <div>
                    <p>{user.data && user.data.keyData.carbohydrateCount}g</p>
                    <span>Glucides</span>
                </div>
            </li>
            <li>
                <img src={ImgLipides} alt="Lipides" />
                <div>
                    <p>{user.data && user.data.keyData.lipidCount}g</p>
                    <span>Lipides</span>
                </div>
            </li>
        </ul>
    )
}
KeyInfo.propTypes = {
    userID: PropTypes.string.isRequired,
}
export default KeyInfo
    