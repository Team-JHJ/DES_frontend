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
        setTitle: (state, action) => {
            state.title = action.payload
        },
        setDescription: (state, action) => {
            state.description = action.payload
        },
    },
})

export const { setHeader, setTitle, setDescription } = headerSlice.actions
export default headerSlice.reducer
