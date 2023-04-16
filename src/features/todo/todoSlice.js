import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id:Math.random() * 100,
        value: 'Learn ReduxJs',
        isChecked: false,
    },
    {
        id:Math.random() * 100,
        value: 'Learn TypeScriptJs',
        isChecked: false,
    },
    {
        id:Math.random() * 100,
        value: 'Learn NextJs',
        isChecked: false,
    }
]

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo(state,action){
            state.push({
                id:Math.random() * 100,
                value: action.payload,
                isChecked: false,
            })
        },
        delTodo(state,action){
            return state.filter(item => !(item.id == action.payload.id))
        },
        checkTodo(state,action){
            return state.map((item) =>{
                if(item.id == action.payload.id){
                    return action.payload
                }else{
                    return item
                }
            })
        },
        clear(state){
           return  state.filter(item => !item.isChecked)
        }
    }
})

export const {addTodo,delTodo,checkTodo,clear} = todoSlice.actions;
export default todoSlice.reducer