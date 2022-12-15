const mockedData = false

const service = {
    getUser: async(id)  => {
        if (!mockedData) {
            const response = await fetch("http://localhost:3000/user/"+id)
            const data = await response.json()
            return data
        }
        else {
            return JSON.parse('{"data":{"id":18,"userInfos":{"firstName":"Eva","lastName":"Ratorez","age":34},"score":0.3,"keyData":{"calorieCount":2500,"proteinCount":90,"carbohydrateCount":150,"lipidCount":120}}}')
        }
    },
    getActivity: async(id) => {
        const response = await fetch("http://localhost:3000/user/"+id+"/activity")
        const data = await response.json()
        for (const session of data.data.sessions) {
            const date = new Date(session.day)
            session.day = date.getDate()
        }
        return data
    },
    getAverageSessions: async(id) => {
        const response = await fetch("http://localhost:3000/user/"+id+"/average-sessions")
        const data = await response.json()
        return data
    },
    getPerformance: async(id) => {
        const response = await fetch("http://localhost:3000/user/"+id+"/performance")
        const data = await response.json()
        return data
    }
}
export default service