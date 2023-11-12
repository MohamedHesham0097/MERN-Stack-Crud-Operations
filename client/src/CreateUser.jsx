import React from 'react'

const CreateUser = () => {
  return (
    <div className='d-felx vh-100 bg-primary justify-content-center align-items-center' >
      <div className='w-50 bg-white rounded p-3' >
          <form>
            <h2>Add User</h2>
            <div className='mb-2' >
                <label htmlFor='' >Name</label>
                <input type='text' placeholder='Enter Your Name' className='form-control' ></input>
            </div>
            <div className='mb-2' >
            <input type='email' placeholder='Enter Your E-Mail' className='form-control' ></input>
            </div>
            <div className='mb-2' >
            <input type='Age' placeholder='Enter Your Age' className='form-control' ></input>
            </div>
            <button className='btn btn-success' >Submit</button>
          </form>
      </div>
    </div>
  )
}

export default CreateUser