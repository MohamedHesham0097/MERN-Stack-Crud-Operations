import React, { useState } from 'react'
import axios from 'axios'

const CreateUser = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [age, setAge] = useState()
  const Submit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:3001/createUser", {name,email,age})
    .then(result => console.log(result))
    .catch(err => console.error(err))
  }

  return (
    <div className='d-felx vh-100 bg-primary justify-content-center align-items-center' >
      <div className='w-50 bg-white rounded p-3' >
          <form onSubmit={Submit}>
            <h2>Add User</h2>
            <div className='mb-2' >
                <label htmlFor='' >Name</label>
                <input type='text' placeholder='Enter Your Name' className='form-control' 
                onChange={(e) => setName(e.target.value)} />
            </div>
            <div className='mb-2' >
            <input type='email' placeholder='Enter Your E-Mail' className='form-control' 
            onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='mb-2' >
            <input type='Age' placeholder='Enter Your Age' className='form-control' 
            onChange={(e) => setAge(e.target.value)} />
            </div>
            <button className='btn btn-success' >Submit</button>
          </form>
      </div>
    </div>
  )
}

export default CreateUser