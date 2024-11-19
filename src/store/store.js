import { configureStore } from '@reduxjs/toolkit'
import headerSlice from '@/store/header-slice.js'

export default configureStore({
    reducer: {
        headerSlice,
    },
})
