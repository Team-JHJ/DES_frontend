import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    title: '타이틀',
    description: '설명',
}

const headerSlice = createSlice({
    name: 'headerSlice',
    initialState,
    reducers: {
        setHeader: (state, action) => {
            return { ...action.payload }
        },
    },
})

export const { setHeader } = headerSlice.actions
export default headerSlice.reducer
