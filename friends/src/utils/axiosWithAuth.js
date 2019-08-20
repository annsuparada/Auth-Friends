import axios from 'axios'

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token')

    return axios.create( {
        header: {
            Authorezation: token
        }
    })

}