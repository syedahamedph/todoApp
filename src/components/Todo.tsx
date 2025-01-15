

import { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import CompletedTodo from "./CompletedTodo";
import ListTodo from "./ListTodo";
import { useSelector } from "react-redux";
import { LoginDetails, ToDo } from "../intefaces/interface";
import { useNavigate } from "react-router-dom";

const Todo = () => {

    const [addTask, setAddTask] = useState(true);
    const [activeTab, setActiveTab] = useState("Important");

    const todos = useSelector((state: { todos: ToDo[] }) => state.todos)
    const user = useSelector((state: { login: LoginDetails }) => state.login);

    const navigate = useNavigate()

    useEffect(() => {

        if (!user.userName) navigate('/')

    }, [])


    return (
        <>
            <div className="container">
                <aside className="sidebar">
                    <div className="profile">
                        <img src="https://icon-library.com/images/todo-icon/todo-icon-14.jpg" alt="Profile" className="profile-pic" />
                        <h3>Hey, {user.userName}</h3>
                    </div>
                    <nav className="nav">
                        <ul>
                            <li className={`${activeTab === 'All Task' ? 'active' : ''}`} onClick={() => { setAddTask(false); setActiveTab('All Task') }}>All Tasks</li>
                            <li className={`${activeTab === 'Important' ? 'active' : ''}`} onClick={() => { setAddTask(false); setActiveTab('Important') }} >Important</li>
                            <li>Today</li>
                            <li>Planned</li>
                            <li>Assigned to me</li>
                            <li className="add-list" onClick={() => setAddTask(true)}>+ Add Task</li>
                        </ul>
                    </nav>
                    <div className="stats">
                        <p>Today Tasks</p>
                        <div className="chart">
                            <p>Total: {todos?.length}</p>
                            <p>Completed: {todos?.filter(el => el.status === 'completed')?.length}</p>
                        </div>
                    </div>
                </aside>
                <main>
                    <header>
                        <h1>DoIt</h1>
                        <div className="icons">
                            <button>🔍</button>
                            <button>⚙️</button>
                        </div>
                    </header>
                    <AddTodo addTask={addTask} />
                    <section className="task-list">
                        <ListTodo activeTab={activeTab} />
                        <CompletedTodo />
                    </section>
                </main>
            </div>
        </>
    )
}

export default Todo