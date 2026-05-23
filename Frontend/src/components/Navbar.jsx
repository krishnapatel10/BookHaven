import React, { useEffect } from 'react'
import book from "../assets/book.png"
import { Link } from 'react-router-dom'
import { Search, User } from "lucide-react"
import { useState } from 'react'

export default function Navbar() {

    let [search, setsearch] = useState("")
    let [show, setshow] = useState(false)

    let [user, setuser] = useState(null)

    useEffect(() => {
        let userdata = JSON.parse(localStorage.getItem("user"))
        setuser(userdata)
    }, [])

    //logout

    function logout() {
        localStorage.removeItem("user")
        setuser(null)
    }


    return (
        <div className='w-full border-b bg-[#fefefe] shadow-lg z-10 fixed '>

            <nav className='max-w-7xl mx-auto flex items-center justify-between px-6 py-4 '>

                {/* Left Side */}
                <div className='flex items-center gap-10'>

                    {/* Logo */}
                    <div className='flex items-center gap-2'>
                        <img
                            src={book}
                            alt="bookicon"
                            className='w-8 h-8'
                        />

                        <Link
                            to={"/"}
                            onClick={() => {

                                window.scrollTo({
                                    top: 0,
                                    behavior: "smooth"
                                })

                            }}
                        ><h1 className='text-2xl font-bold text-black'>
                                MyBook
                            </h1></Link>
                    </div>

                    {/* Nav Links */}
                    <ul className='flex items-center gap-8 text-gray-700 font-medium'>

                        <Link
                            to={"/"}
                            onClick={() => {

                                window.scrollTo({
                                    top: 0,
                                    behavior: "smooth"
                                })

                            }}
                        >
                            <li className='hover:text-black duration-300 cursor-pointer'>
                                Home
                            </li>
                        </Link>

                        <li>
                            <select
                                className='outline-none bg-transparent cursor-pointer'
                                defaultValue=""
                                onChange={(e) => {

                                    const category = e.target.value

                                    document
                                        .getElementById("booksection")
                                        .scrollIntoView({ behavior: "smooth" })

                                    window.dispatchEvent(
                                        new CustomEvent("categoryChange", {
                                            detail: category
                                        })
                                    )

                                }}
                            >
                                <option value="">Categories</option>

                                <option value="all">
                                    All Categories
                                </option>
                                <option value="English fiction">
                                    English fiction
                                </option>

                                <option value="Clergy">
                                    Clergy
                                </option>

                                <option value="Fantasy fiction">
                                    Fantasy fiction
                                </option>

                                <option value="Adventure stories">
                                    Adventure stories
                                </option>

                            </select>
                        </li>

                        <Link to={"/about"}>
                            <li className='hover:text-black duration-300 cursor-pointer'>
                                About
                            </li>
                        </Link>

                    </ul>
                </div>

                {/* Right Side */}
                <div className='flex items-center gap-4'>

                    {/* Search */}
                    <div className='flex items-center border rounded-sm px-3 py-2 w-[270px] bg-gray-50'>

                        <Search size={18} className='text-gray-500' />

                        <input
                            type="text"
                            placeholder='Search books...'
                            className='bg-transparent outline-none px-2 w-full text-sm'
                            value={search}
                            onChange={(e) => {

                                let value = e.target.value

                                setsearch(value)
                                document
                                    .getElementById("booksection")
                                    .scrollIntoView({ behavior: "smooth" })


                                window.dispatchEvent(
                                    new CustomEvent("searchBooks", {
                                        detail: value
                                    })
                                )

                            }}
                        />
                    </div>

                    {/* Button */}
                    <div>
                       {
   user ? (

      <div className='relative'>

         <div
            onClick={() => setshow(!show)}
            className='flex items-center gap-2 cursor-pointer'
         >

            <User />

            <h1 className='text-sm uppercase tracking-[2px] relative left-2 text-gray-500 '>{user.name}</h1>

         </div>

         {
            show && (

               <button
                  onClick={logout}
                  className='absolute top-8 right-0  shadow-lg bg-white px-4 py-2 rounded-lg'
               >

                  Logout

               </button>

            )
         }

      </div>

   ) : (

      <Link to={"/login"}>

         <button className='bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 duration-300'>

            Login

         </button>

      </Link>

   )
}
                    </div>

                </div>

            </nav>

        </div>
    )
}