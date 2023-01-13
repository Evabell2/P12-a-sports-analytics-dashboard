import '../style/style.css'
import NameUser from "../Composants/NameUser"
import BarChartActivity from "../Composants/BarChartAtivity"
import KeyInfo from "../Composants/KeyInfo"
import LineChartDurationSessions from "../Composants/LineChartSessions"
import RadarChartTypeActivity from "../Composants/RadarChartType"
import RadialBarChartScore from "../Composants/RadialBarChartScore"
import { useParams } from 'react-router-dom'

function UserProfile() {
  const {userID} = useParams()
    return (
      <div id='user_profile'>
        <NameUser userID={userID}/>

        <section id='graphics'>
          <BarChartActivity userID={userID}/>
          <LineChartDurationSessions userID={userID}/>
          <RadarChartTypeActivity userID={userID}/>
          <RadialBarChartScore userID={userID}/>
        </section>
        
        <section id='key_info'>
          <KeyInfo userID={userID}/>
        </section>
      </div>
    )
}
    
export default UserProfile