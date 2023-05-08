import axios from '../axios.js'

export const login = (params) => {
    return axios({
        url: '/login',
        method: 'post',
        params
    })
}
