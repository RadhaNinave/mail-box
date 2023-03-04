import { createSlice } from "@reduxjs/toolkit";
const initialAuthState = {isAuthenticate : false,isLoggedIn : localStorage.getItem('idToken')?true : false}
const authSlice = createSlice({
    name:'authentication',
    initialState:initialAuthState,
    reducers :{
        login(state)
        {
            state.isLoggedIn = true;
            state.isAuthenticate=true;

        },
        logout(state)
        {
            localStorage.removeItem('idToken');
            localStorage.removeItem('email')
            state.isLoggedIn=false
            state.isAuthenticate=false;
        }
    }
})
 
export const authAction = authSlice.actions
export default authSlice.reducer;