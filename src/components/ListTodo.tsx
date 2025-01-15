
import { ToDo } from "../intefaces/interface"
import { useDispatch, useSelector } from "react-redux"
import { completeTodo, markTodo } from "../redux/todoSlice";
export default function ListTodo({ activeTab }: { activeTab: string }) {

    const dispatch = useDispatch();

    const todos = useSelector((state: { todos: ToDo[] }) => state.todos)


    const handleMarkImportant = (id: string, bool: boolean) => {

        dispatch(markTodo({ id, bool }))
    }

    const handleMarkCompleted = (id: string, status: string) => {

        dispatch(completeTodo({ id, status }))

    }
    return (
        <>
            <h2>To-Do</h2>
            {
                todos?.length ? <ul>
                    {
                        todos?.map((el) => {
                            if (el.status !== 'completed' && (activeTab !== 'Important' || el.important)) {

                                return (<li>
                                    {el.title} {
                                        !el.important ?
                                            <button onClick={() => {

                                                handleMarkImportant(el.id, true)

                                            }}> Mark as Important</button>
                                            : <span style={{ cursor: "pointer" }} onClick={() => {

                                                handleMarkImportant(el.id, false)

                                            }}>⭐</span>
                                    }
                                    <button onClick={() => {
                                        handleMarkCompleted(el.id, 'completed')

                                    }}>Mark as Completed ✅</button>
                                </li>)
                            }


                        })
                    }

                </ul> : <p> No Task to display</p>
            }
        </>
    )
}