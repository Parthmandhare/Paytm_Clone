import React, { useState } from 'react';
import axios from "axios"

const Signup = () => {
  const[newUser, setNewUser] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Password: ""
  })

  const onSubmit = async(e) => {
    e.preventDefault();

    const res = await axios.post("http://localhost:5000/api/v1/Signup", {
        FirstName: newUser.FirstName,
        LastName: newUser.LastName,
        Email: newUser.Email,
        Password: newUser.Password,
    }
    )

    console.log(res.data);

    localStorage.setItem("token", res.data.token);
    
  }

  return (
    <div className='flex items-center justify-center'>
      <div className='flex flex-col bg-slate-100 p-10 gap-8 w-fit rounded-lg'>
        <div className='flex flex-col gap-2'>
            <p className='text-3xl font-bold'>SignUp Here</p>
            <p className='text-md font-semibold'>Your Go-To Payment Wallet is on way!</p>
        </div>

        <div className='flex flex-col gap-3'>
            <form action="" className='flex flex-col gap-4 text-left' onSubmit={onSubmit}>
              
                <div className='flex flex-col'>
                    <label htmlFor="FName" className='font-semibold'>First Name</label>

                    <input type="text" id="FName" placeholder='John' className='p-0.5 border rounded' value={newUser.FirstName} onChange={(e) => {setNewUser({...newUser, FirstName: e.target.value})}}/>
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="LName" className='font-semibold'>Last Name</label>
                    <input type="text" id="LName" placeholder='Snow' className='p-0.5 border rounded' value={newUser.LastName} onChange={(e) => {setNewUser({ ...newUser, LastName: e.target.value})}}/>
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="Email" className='font-semibold'>Email</label>
                    <input type="email" id="Email" placeholder='parth@example.com' className='p-0.5 border rounded' value={newUser.Email} onChange={(e) => {setNewUser({ ...newUser,Email: e.target.value})}}/>
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="Password" className='font-semibold'>Password</label>
                    <input type="text" id="Password" placeholder='Enter Here' className='p-0.5 border rounded' value={newUser.Password} onChange={(e) => {setNewUser({ ...newUser,Password: e.target.value})}}/>
                </div>

                <button className='bg-black text-white rounded-md p-2 hover:bg-slate-900' type='submit'>Submit</button>
            </form>
            <p className='font-semibold'>Already have an account? <span className='font-semibold text-blue-600 cursor-pointer'>SignIn</span></p>
        </div>
      </div>
    </div>
  )
}

export default Signup;
