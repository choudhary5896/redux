import { createSlice} from '@reduxjs/toolkit'


export const userSlice=createSlice({
    name:"user",
    initialState:{
        userInfo:{
            name:"abhinay",
            email:"abhinay@gmail.com"
        },
        pending:false,
        error:false
    },
    reducers:{
        updateStart:(state)=>{
            console.log("updatestart runs")
            state.pending=true;
        },
        updateSuccess:(state,action)=>{
            console.log("updateSuccess runs")
            state.pending=false;
            state.userInfo=action.payload
        },
        updateError:(state)=>{
            console.log("updateError runs")
            state.error=false;
            state.pending=false;
        }
    }
})
export const {updateStart,updateSuccess,updateError}=userSlice.actions
export default userSlice.reducer