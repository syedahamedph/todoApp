import { useState } from "react"
import { ToDo } from "../intefaces/interface"
import { useDispatch } from "react-redux"
import { addTodo } from "../redux/todoSlice";
import { v4 as uuidv4 } from 'uuid';

const AddTodo = ({ addTask }: { addTask: boolean }) => {

    const initialState: ToDo = { id: "", title: "", priority: "", status: "pending", important: false }

    const [toDo, setToDo] = useState<ToDo>(initialState);

    const dispatch = useDispatch();

    // const todos = useSelector((state: { todos: ToDo[] }) => state.todos)


    const handleOnchnage = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {

        const { name, value } = event.target;

        setToDo((prev) => ({ ...prev, [name]: value }))

    }

    const handleAddClick = () => {

        dispatch(addTodo({ ...toDo, id: uuidv4() }));

        setToDo(initialState);

    }

    return (

        <>
            {
                addTask && <section className="task-input">
                    <input name="title" value={toDo.title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        handleOnchnage(e)

                    }} type="text" placeholder="Add a Task" />
                    <select value={toDo.priority} name="priority" onChange={(e) => handleOnchnage(e)}>
                        <option value="">Select</option>
                        <option value="1">High</option>
                        <option value="2">Medium</option>
                        <option value="3">Low</option>
                    </select>
                    <button onClick={() => {

                        handleAddClick()

                    }} style={{ color: (toDo.priority && toDo.title) ? 'green' : 'black' }} disabled={(toDo.priority && toDo.title) ? false : true}>Add Task</button>
                </section>


            }
        </>

    )
}

export default AddTodo