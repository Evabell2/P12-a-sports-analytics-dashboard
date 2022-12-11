import '../style/style.css'
import NameUser from "../Composants/NameUser"
import BarChartActivity from "../Composants/BarChartAtivity"
import KeyInfo from "../Composants/KeyInfo"
import LineChartDurationSessions from "../Composants/LineChartSessions"
import RadarChartTypeActivity from "../Composants/RadarChartType"
import RadialBarChartScore from "../Composants/RadialBarChartScore"

function UserProfile() {
    return (
      <div id='user_profile'>
        <NameUser />

        <section id='graphics'>
          <BarChartActivity />
          <LineChartDurationSessions />
          <RadarChartTypeActivity />
          <RadialBarChartScore />
        </section>
        
        <section id='key_info'>
          <KeyInfo />
        </section>
      </div>
    )
}
    
export default UserProfile