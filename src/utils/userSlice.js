import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user:null,
        isUserLoggedIn: false,
    },
    reducers:{
        addUser: (state, action)=>{
            state.user = action.payload;
            state.isUserLoggedIn = true; 
        },
        removeUser: (state, action)=>{
            state.user = null;
            state.isUserLoggedIn = false;
        },
        updateUserLoggedIn: (state, action)=>{
            state.isUserLoggedIn = action.payload;
        }
    }
});

export const{addUser, removeUser, updateUserLoggedIn} = userSlice.actions;
export default userSlice.reducer;