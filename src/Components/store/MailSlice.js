import { createSlice } from "@reduxjs/toolkit"

const initialState = {mailData :[], firstTime:true, unReadMessage:0}
const mailSlice= createSlice({
    name:'mail',
    initialState,
    reducers :{
        firstTime(state,action)
        {
            state.firstTime=action.payload
        },
        replace(state , action){
            state.mailData = action.payload.mailData
            state.firstTime = false
            state.unReadMessage = action.payload.unReadMessage
        },
        add(state,action)
        {
            state.mailData=[action.payload,...state.mailData]

        }
       
    }
})
export const mailAction = mailSlice.actions
export default mailSlice.reducer