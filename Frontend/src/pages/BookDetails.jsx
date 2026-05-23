import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from "../components/Footer"
import Navbar from '../components/Navbar.jsx'


export default function Bookdetails() {

    let [data,setdata]=useState({})
    let {id} = useParams();

    useEffect(()=>{
        async function getdata() {
            let res = await axios.get(`http://localhost:5500/api/book/${id}`)
            console.log(res.data);
            setdata(res.data);

        }
        getdata()
    },[id])


  return (
  <>
  
  {/* Navbar */}
  <Navbar />

  <div className='flex justify-between items-start px-24 pt-36 pb-16 gap-24 bg-[#faf9f6]'>

    {/* Left Side Image */}
    <div className='sticky top-32'>

      <img
        src={data.thumbnail}
        alt={data.title}
        className='w-[400px] h-[520px] object-fill rounded-2xl shadow-2xl hover:scale-[1.02] duration-500'
      /> 

    </div>



    {/* Right Side Content */}
    <div className='flex-1 max-w-3xl'>

      <p className='uppercase tracking-[6px] text-gray-400 text-sm font-semibold'>
        Book Details
      </p>

      <h1 className='text-7xl font-black mt-6 leading-[85px] text-black'>
        {data.title}
      </h1>


      {/* Author */}
      <p className='text-3xl mt-6 text-gray-700 font-light italic'>
        by <span className='font-semibold text-black'>
          {data.authors}
        </span>
      </p>


      {/* Description */}
      <p className='mt-10 text-[20px] leading-[42px] text-gray-600 font-normal'>
        {data.description}
      </p>


      {/* Info */}
      <div className='mt-12 grid grid-cols-2 gap-y-6 text-lg'>

        <p>
          <span className='font-bold text-black'>
            Rating :
          </span> {" "}
          {data.average_rating}
        </p>

        <p>
          <span className='font-bold text-black'>
            Ratings Count :
          </span> {" "}
          {data.ratings_count}
        </p>

        <p>
          <span className='font-bold text-black'>
            Pages :
          </span> {" "}
          {data.num_pages}
        </p>

        <p>
          <span className='font-bold text-black'>
            Category :
          </span> {" "}
          {data.categories}
        </p>

        <p>
          <span className='font-bold text-black'>
            Published :
          </span> {" "}
          {data.published_year}
        </p>

      </div>


      {/* Buttons */}
      <div className='flex items-center gap-6 mt-14'>

        <button className='bg-black text-white px-10 py-4 rounded-xl text-lg hover:bg-gray-800 duration-300 shadow-lg'>
          Read Book
        </button>

       

      </div>

    </div>

  </div>

  
  {/* Footer */}
  <Footer />

</>
)}