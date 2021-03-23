import axios from 'axios'


const getPosts = async (cursor = 1) => {
    try {
        const response = await axios.get(`${REACT_APP_API}/getSurvey/${cursor}`)
        return response
    } catch (e) {
        return {
            error: true,
            message: "Not able to connect server."
        }
    }
}

const addSurvey = async (data) => {
    
    // validation pending

    try {
        const response = await axios.post(`${REACT_APP_API}/addSurvey`,{
            ...data
        })
        return response
    } catch (e) {
        return {
            error: true,
            message: "Not able to connect server."
        }
    }
}

export default {
    getPosts,
    addSurvey
}