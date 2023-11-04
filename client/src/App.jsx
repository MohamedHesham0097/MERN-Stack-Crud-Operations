import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import  Users from './Users.jsx'
import  CreateUsers from './CreateUser.jsx'
import  UpdateUsers from './UpdateUser.jsx'

// var Users = require('Users')

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Users /> } ></Route>
          <Route path='/create' element={ <CreateUsers /> } ></Route>
          <Route path='/update' element={ <UpdateUsers /> } ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
