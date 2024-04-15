import {createSlice} from "@reduxjs/toolkit"
const fruitSlice = createSlice({
    name :'fruits',
    initialState:[],
    reducers:{
        addfruits:(state, action)=>{
            const fruits = action.payload
            return fruits

        }
    }

})
export const {addfruits} = fruitSlice.actions
export default fruitSlice