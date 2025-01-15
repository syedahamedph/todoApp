

import { ToDo } from "../intefaces/interface"
import { useSelector } from "react-redux"


export default function CompletedTodo() {

    const todos = useSelector((state: { todos: ToDo[] }) => state.todos)

    return (

        todos?.find((el: ToDo) => el.status === 'completed') &&
        <>
            <h2>Completed</h2>
            <ul className="completed-tasks">
                {
                    todos?.map(el => {

                        if (el.status === 'completed') return <li>{el.title} ✅</li>
                    })
                }


            </ul>
        </>

    )
}