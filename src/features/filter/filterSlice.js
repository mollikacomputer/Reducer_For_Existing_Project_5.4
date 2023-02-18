import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    stock:true,
    brands:[],
    keyword:"",
};

const filterSlice = createSlice({
    name:"filter",
    initialState,
    reducers:{},
});
export default filterSlice.reducer;