import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: 'config',
    initialState:{
        langName: "en"
    },
    reducers:{
        changeLanguage: (state,action)=>{
            state.langName = action.payload; 
        }
    }
});

export const {changeLanguage} = configSlice.actions;

export default configSlice.reducer;