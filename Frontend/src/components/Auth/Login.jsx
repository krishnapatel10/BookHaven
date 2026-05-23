import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {

  let navigate = useNavigate()

  // Handle Submit
  async function handlesubmit(e) {

    let formdata = {
      email: e.target.email.value,
      password: e.target.password.value
    }
    e.preventDefault();

    try {
      let res = await axios.post("http://localhost:5500/api/user/login", formdata)

      console.log(res.data)
      localStorage.setItem("user", JSON.stringify(res.data.user))

      alert("Login Successfully")
      navigate("/")
    } catch (error) {
      console.log(error);
      alert(error.response.data.message)
    }

  }



  return (

    <div className='w-full min-h-screen flex items-center justify-center bg-[#faf9f6]'>

      <form
        onSubmit={handlesubmit}
        className='w-[420px] bg-white p-10 rounded-2xl shadow-xl'
      >

        <h1 className='text-4xl font-bold text-center mb-8'>
          Login
        </h1>



        {/* Email */}
        <div className='mb-5'>

          <label className='block mb-2 font-medium'>
            Email
          </label>

          <input
            type="email"
            name='email'
            placeholder='Enter your email'

            className='w-full border px-4 py-3 rounded-xl outline-none'
          />

        </div>



        {/* Password */}
        <div className='mb-6'>

          <label className='block mb-2 font-medium'>
            Password
          </label>

          <input
            type="password"
            name='password'
            placeholder='Enter your password'

            className='w-full border px-4 py-3 rounded-xl outline-none'
          />

        </div>



        {/* Button */}
        <button

          className='w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 duration-300'
        >

          Login

        </button>



        {/* Signup */}
        <p className='text-center mt-6 text-gray-600'>

          Don't have an account?{" "}

          <Link
            to={"/signup"}
            className='text-black font-semibold'
          >

            Signup

          </Link>

        </p>

      </form>

    </div>
  )
}