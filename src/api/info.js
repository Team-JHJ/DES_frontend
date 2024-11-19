import axiosInstance from '@/api/axios.js'

const info = {
    getVpp: () => {
        return axiosInstance.get('/vpp')
    },
    getDetails: (houseId, category) => {
        return axiosInstance.get(`/home/${houseId}/${category}`)
    },
}

export default info
