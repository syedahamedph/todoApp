import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login/Login'
import Todo from './components/Todo'

function App() {


  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/todo' element={<Todo />} />
        </Routes>

      </BrowserRouter>


    </>
  )
}

export default App
