import { configureStore } from "@reduxjs/toolkit";
import mailReducer from "./MailSlice";
import authSlice from "./Auth"
const store = configureStore({
    reducer : {
        auth:authSlice,
        mail : mailReducer
      
    }
})
export default store;