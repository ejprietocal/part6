import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    content: '',
    border: 'none',
    borderWidth: 0
}


const notificationSlice = createSlice({
    name: 'notifications',
    initialState : [],
    initialState,
    reducers:{
        createNotication(state, action){
            state.content = action.payload;
            state.border = 'solid';
            state.borderWidth = 1;
        },
        clearNotification(state, action){
            state.content = '';
            state.border = 'none';
            state.borderWidth = 0;
        }
    }
}) 

export const notification = (message, timeout) => {
    return async dispatch => {
        dispatch(createNotication(message))
        setTimeout(()=>{
            dispatch(clearNotification())
        },timeout * 1000)
    }
}


export const {createNotication, clearNotification} = notificationSlice.actions
export default notificationSlice.reducer