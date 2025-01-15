import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ToDo } from '../intefaces/interface';



const todoSlice = createSlice({

    name: 'todos',
    initialState: [
        {
            "id": "4d2c67a9-83c4-4b2a-b709-4a5a9d9e36d2",
            "title": "Task Alpha",
            "priority": "2",
            "status": "pending",
            "important": true
        },
        {
            "id": "7a3f89c7-45f7-4d93-83e3-c2c2f513281f",
            "title": "Complete report",
            "priority": "1",
            "status": "completed",
            "important": false
        },
        {
            "id": "f27839d2-8e5b-41e0-846d-7ab6b3e5bcd5",
            "title": "Meeting with team",
            "priority": "3",
            "status": "pending",
            "important": true
        },
        {
            "id": "3e9a0b3c-404b-4f37-b92d-09ecfb40739e",
            "title": "Email follow-up",
            "priority": "2",
            "status": "pending",
            "important": false
        },
        {
            "id": "8f2c1d6b-0ac7-467b-85b4-abb9f3e290c0",
            "title": "Submit proposal",
            "priority": "1",
            "status": "completed",
            "important": true
        }
    ] as ToDo[],
    reducers: {
        addTodo: (state, action:PayloadAction<ToDo>) => {
            state.push(action.payload);

            console.log(action.payload)
        },
        markTodo: (state, action:PayloadAction<{id:string,bool:boolean}>) => {

            const { id, bool } = action.payload

            return state.map(el => {

                if (el.id === id) return { ...el, important: bool }
                else return el
            })
        },
        completeTodo: (state, action) => {

            const { id, status } = action.payload

            return state.map(el => {

                if (el.id === id) return { ...el, status }
                else return el
            })
        },
    }

});

export const { addTodo, markTodo, completeTodo } = todoSlice.actions;

export default todoSlice.reducer