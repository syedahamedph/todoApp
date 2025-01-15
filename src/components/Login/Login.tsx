import { useState } from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../redux/loginSlice';
import { LoginDetails } from '../../intefaces/interface';



function Login() {

    const [details, setDetails] = useState<LoginDetails>({ userName: "", password: "" });

    const navigate = useNavigate();

    const dispatch = useDispatch()

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const { name, value } = e.target;

        setDetails({ ...details, [name]: value })
    }


    return (
        <>
            <div className="container">
                <div className="sidebar">
                    <div className="profile">
                        <img className="profile-pic" src="https://icon-library.com/images/todo-icon/todo-icon-14.jpg" alt="Profile Picture" />
                        <h3>Welcome Back!</h3>
                    </div>
                    <div className="nav">
                        <ul>
                            <li className="active">Login</li>
                        </ul>
                    </div>
                </div>
                <main>
                    <header>
                        <h1>Login</h1>
                    </header>
                    <section className="login-form">
                        <div>
                            <div className="input-group">
                                <label htmlFor="email">User Name</label>
                                <input type="text" name="userName" id="email" onChange={(e) => {
                                    handleOnChange(e)
                                }} />
                            </div>
                            <div className="input-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" onChange={(e) => {
                                    handleOnChange(e)
                                }} id="password" name="password" />
                            </div>
                            {/* Apply specific id and class to the login button */}
                            <button disabled={(details.userName && details.password) ? false : true} type="button" id="login-button" className="login-btn" onClick={() => {

                                dispatch(userLogin({ ...details }))

                                sessionStorage.setItem('login', JSON.stringify(details))

                                navigate('/todo')

                            }}>
                                Log In
                            </button>
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}

export default Login