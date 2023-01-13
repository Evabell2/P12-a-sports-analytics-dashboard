import Formatage from './modelingClass'

const mockedData = false

/**
 * service
 * Objet appealing specialized methods to extract data for each service.
 * @returns {null|string|number|Object|array}
 */
const service = {

/**
 * get the data from user/id url
 * @param {(string|Object)} - id
 * @returns data for RadialBarChartScore and NameUser Component
 */
    getUser: async(id)  => {
        if (!mockedData) {
            const response = await fetch("http://localhost:3000/user/"+id)
            const data = await response.json()
            const scoreFormatage = new Formatage()
            return scoreFormatage.setScore(data)
        }
        else {
            const data = JSON.parse('{"data":{"id":15,"userInfos":{"firstName":"Kévin","lastName":"Celio","age":23},"theScore":0.7,"keyData":{"calorieCount":2100,"proteinCount":80,"carbohydrateCount":120,"lipidCount":140}}}')
            const scoreFormatage = new Formatage()
            return scoreFormatage.setScore(data)
        }
    },
    getActivity: async(id) => {
        if (!mockedData) {
            const response = await fetch("http://localhost:3000/user/"+id+"/activity")
            const data = await response.json()
            const dateFormatage = new Formatage()
            return dateFormatage.setDay(data)
        }
        else {
            const data = JSON.parse('{"data":{"userId":15,"sessions":[{"day":"2022-11-01","kilogram":30,"calories":180},{"day":"2022-11-02","kilogram":82,"calories":290},{"day":"2022-11-03","kilogram":60,"calories":290},{"day":"2022-11-04","kilogram":40,"calories":390},{"day":"2022-11-05","kilogram":79,"calories":182},{"day":"2022-11-06","kilogram":49,"calories":462},{"day":"2022-11-07","kilogram":79,"calories":300}]}}')
            const dateFormatage = new Formatage()
            return dateFormatage.setDay(data)
        }
    },
    getAverageSessions: async(id) => {
        if (!mockedData) {
            const response = await fetch("http://localhost:3000/user/"+id+"/average-sessions")
            const data = await response.json()
            const weekFormatage = new Formatage()
            return weekFormatage.setWeek(data)
        }
        else {
            const data = JSON.parse('{"data":{"userId":15,"sessions":[{"day":1,"sessionLength":20},{"day":2,"sessionLength":60},{"day":3,"sessionLength":80},{"day":4,"sessionLength":30},{"day":5,"sessionLength":30},{"day":6,"sessionLength":10},{"day":7,"sessionLength":75}]}}')
            const weekFormatage = new Formatage()
            return weekFormatage.setWeek(data)
        }
    },
    getPerformance: async(id) => {
        if (!mockedData) {
            const response = await fetch("http://localhost:3000/user/"+id+"/performance")
            const data = await response.json()
            const frenchFormatage = new Formatage()
            return frenchFormatage.setFrench(data)
        }
        else {
            const data = JSON.parse('{"data":{"userId":15,"kind":{"1":"cardio","2":"energy","3":"endurance","4":"strength","5":"speed","6":"intensity"},"data":[{"value":150,"kind":1},{"value":260,"kind":2},{"value":90,"kind":3},{"value":200,"kind":4},{"value":280,"kind":5},{"value":140,"kind":6}]}}')
            const frenchFormatage = new Formatage()
            return frenchFormatage.setFrench(data)
        }
    }
}
export default service