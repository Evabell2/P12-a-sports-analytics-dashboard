
/**
 * A modeling class in order to correctly format the data
 * 
 * @param {Formatage.setDay} callback - The callback method
 * to return data in date format
 * 
 * @param {Formatage.setWeek} callback - The callback method
 * to return data in a specific array
 * 
 * @param {Formatage.setFrench} callback - The callback method
 * to change specific values of the array
 * 
 * @param {Formatage.setScore} callback - The callback method
 * so that the property concerning the score is the same for all users
 * 
 * @returns {Formatage} - The class returns different methods to
 * format the data
 */
class Formatage {
    setDay (data) {
        for (const session of data.data.sessions) {
            const date = new Date(session.day)
            session.day = date.getDate()
        }
        return data
    }
    setWeek (data) {
        for (const week of data.data.sessions) {
            const array = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
            week.day = array
        }
        return data
    }
    setFrench (data) {
        data.data.data[0].kind = "Cardio"
        data.data.data[1].kind = "Energie"
        data.data.data[2].kind = "Endurance"
        data.data.data[3].kind = "Force"
        data.data.data[4].kind = "Vitesse"
        data.data.data[5].kind = "Intensité"
        return data
    }
    setScore (data) {
        data.data.theScore = data.data.todayScore || data.data.score
        delete data.data.todayScore
        delete data.data.score
        return data
    }
}
export default Formatage