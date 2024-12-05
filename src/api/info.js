import axiosInstance from '@/api/axios.js'

const info = {
    // vpp 정보 받아오기
    getVpp: () => {
        return axiosInstance.get('/vpp')
    },

    // 자원 정보 받아오기
    getDetails: (houseId, category) => {
        return axiosInstance.get(`/home/${houseId}/${category}`)
    },

    // 소개 정보 받아오기
    getIntro: () => {
        return axiosInstance.get('/statics')
    },
}

export default info
