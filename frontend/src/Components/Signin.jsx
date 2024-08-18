import React from 'react'
import Signin_img from "../assets/image1.jpg"

const Signin = () => {
  return (
    <div className='flex items-center justify-center gap-10 bg-white p-12 rounded-lg'>
      <div className=' hidden md:contents'>
        <img src={Signin_img} alt="not" className='w-1/2'/>
      </div>

      <div className='flex flex-col bg-slate-100 p-10 gap-8 w-fit rounded-lg'>
        <div className='flex flex-col gap-2'>
            <p className='text-3xl font-bold'>SignIn Here</p>
            <p className='text-md font-semibold'>Your Go-To Payment Wallet is on way!</p>
        </div>

        <div className='flex flex-col gap-3'>
            <form action="" className='flex flex-col gap-4 text-left'>
          
                <div className='flex flex-col'>
                    <label htmlFor="Email" className='font-semibold'>Email</label>
                    <input type="email" id="Email" placeholder='parth@example.com' className='p-0.5 border rounded'/>
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="Password" className='font-semibold'>Password</label>
                    <input type="password" id="Password" placeholder='Enter Here' className='p-0.5 border rounded'/>
                </div>

                <button className='bg-black text-white rounded-md p-2 hover:bg-slate-900'>Submit</button>
            </form>
            <p className='font-semibold'>Don't have an account? <span className='font-semibold text-blue-600 cursor-pointer'>SignUp</span></p>
        </div>
      </div>
    </div>
  )
}

export default Signin