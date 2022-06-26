import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState{
    value:number;
}
const initialState: CounterState = {
    value:0
};

const counterSlice=createSlice({
    name:"counter",
    initialState,
    reducers:{
        INCREASE(state){
            state.value+=1;
        },
        AMOUNT_ADD(state, action: PayloadAction<number>){
            state.value+=action.payload;
        }
    }
})

export const { INCREASE, AMOUNT_ADD } = counterSlice.actions;
export default counterSlice.reducer;