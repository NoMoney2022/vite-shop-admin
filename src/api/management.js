import axios from '../axios.js'

export const getManagementList = (params) => {
    return axios({
        url: '/management/list',
        method: 'get',
        params
    })
}
