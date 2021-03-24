import axios from 'axios'


export const getPosts = async (cursor = Number.MAX_SAFE_INTEGER) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API}/user/getSurvey/${cursor}`)
        return response.data
    } catch (e) {
        return {
            error: true,
            message: "Not able to connect server."
        }
    }
}

export  const addSurvey = async (data) => {
    
    // validation pending

    try {
        const response = await axios.post(`${process.env.REACT_APP_API}/user/addSurvey`,{
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

