import axios from 'axios'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Signup() {

    const api = import.meta.env.VITE_API_URL;

   let navigate = useNavigate()

   // Handle Submit
   async function handlesubmit(e) {

      e.preventDefault()

      let formdata = {

         name: e.target.name.value,

         email: e.target.email.value,

         password: e.target.password.value

      }

      try {

        
         let res = await axios.post(
            `${api}/api/user/signup`,
            formdata
         )

         console.log(res.data)

         alert("Signup Successfully")

         navigate("/login")

      } catch (error) {

         console.log(error)

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
               Signup
            </h1>

            {/* Name */}
            <div className='mb-5'>

               <label className='block mb-2 font-medium'>
                  Name
               </label>

               <input
                  type="text"
                  name='name'
                  placeholder='Enter your name'
                  className='w-full border px-4 py-3 rounded-xl outline-none'
               />

            </div>

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

               Signup

            </button>

            {/* Login */}
            <p className='text-center mt-6 text-gray-600'>

               Already have an account?{" "}

               <Link
                  to={"/login"}
                  className='text-black font-semibold'
               >

                  Login

               </Link>

            </p>

         </form>

      </div>
   )
}