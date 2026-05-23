import React, { useEffect, useRef, useState } from 'react'
import axios from "axios"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useNavigate } from 'react-router-dom'

export default function Bookcard() {

  let navigate = useNavigate();

  let [books, setbooks] = useState([])
  let [currentPage, setCurrentPage] = useState(1)

  const pageContainerRef = useRef(null)

  const booksPerPage = 5

  useEffect(() => {

    async function getdata() {

      try {

        let res = await axios.get("http://localhost:5500/api/book")

        setbooks(res.data)

      } catch (error) {

        console.log(error)

      }

    }

    getdata()

  }, [])


  // Pagination Logic
  const lastBookIndex = currentPage * booksPerPage

  const firstBookIndex = lastBookIndex - booksPerPage

  const currentBooks = books.slice(firstBookIndex, lastBookIndex)

  const totalPages = Math.ceil(books.length / booksPerPage)


  // Auto Slide
  useEffect(() => {

    if (pageContainerRef.current) {

      pageContainerRef.current.scrollTo({
        left: (currentPage - 1) * 50,
        behavior: "smooth"
      })

    }

  }, [currentPage])


  useEffect(() => {

    async function handleCategory(event) {

      try {

        let category = event.detail

        // All Categories
        if (category === "all") {

          let res = await axios.get(
            "http://localhost:5500/api/book"
          )

          setbooks(res.data)

          setCurrentPage(1)

          return

        }

        // Category Wise Data
        let res = await axios.get(
          `http://localhost:5500/api/book/category/${category}`
        )

        setbooks(res.data)

        setCurrentPage(1)

      } catch (error) {

        console.log(error)

      }

    }

    window.addEventListener(
      "categoryChange",
      handleCategory
    )

    return () => {

      window.removeEventListener(
        "categoryChange",
        handleCategory
      )

    }

  }, [])
  
  useEffect(()=>{

  async function handlesearch(event) {

    try {

      let title = event.detail

      // Empty Search
      if(title.trim() === ""){

        let res = await axios.get(
          "http://localhost:5500/api/book"
        )

        setbooks(res.data)

        return

      }

      // Search API
      let res = await axios.get(
        `http://localhost:5500/api/book/search?title=${title}`
      )

      setbooks(res.data)

      setCurrentPage(1)

    } catch (error) {

      console.log(error)

    }

  }

  window.addEventListener(
    "searchBooks",
    handlesearch
  )

  return ()=>{

    window.removeEventListener(
      "searchBooks",
      handlesearch
    )

  }

},[])


  return (

    <section
      id='booksection'
      className='w-full py-10 bg-[#faf9f6]'
    >

      <div className='max-w-7xl mx-auto px-6'>

        <h1 className='text-3xl font-bold mb-8'>
          Recommended Books
        </h1>


        {/* Cards */}
        <div className='grid grid-cols-5 gap-6'>

          {
            currentBooks.map((book, index) => (

              <div
                onClick={() => {
                  navigate(`/book/${book._id}`)
                }}
                key={index}
                className='bg-white border cursor-pointer rounded-2xl p-5
                w-[300px]
              
                hover:-translate-y-3
                hover:scale-[1.03]
                hover:z-1
                hover:rotate-[1deg]
                hover:shadow-2xl
                transition-all duration-1000
                ease-in-out
                group
                relative overflow-hidden'
                >

                {/* Glow Effect */}
                <div className='absolute inset-0 bg-gradient-to-r from-transparent via-gray-100 to-transparent 
                -translate-x-full group-hover:translate-x-full duration-1000 opacity-30'>
                </div>

                {/* Image */}
                <img
                  src={book.thumbnail}
                  alt={book.title}
                  className='w-full h-[260px] object-fill rounded-lg'
                />



                {/* Content */}
                <div className='mt-4'>

                  {/* Title */}
                  <h2
                    className='text-lg truncate font-semibold leading-6'
                    title={book.title}
                  >
                    {book.title}
                  </h2>


                  {/* Author */}
                  <p className='text-gray-600 text-sm mt-2 truncate'>
                    Author : {book.authors}
                  </p>


                  {/* Category */}
                  <p className='text-gray-600 text-sm mt-1 truncate'>
                    Category : {book.categories}
                  </p>


                  {/* Rating + Pages */}
                  <div className='flex items-center justify-between mt-3'>

                    <p className='text-yellow-500 font-medium'>
                      ⭐ {book.average_rating}
                    </p>

                    <p className='text-gray-500 text-sm'>
                      {book.num_pages} Pages
                    </p>

                  </div>


                  {/* Published */}
                  <p className='text-gray-500 text-sm mt-2'>
                    Published : {book.published_year}
                  </p>


                  {/* Ratings Count */}
                  <p className='text-gray-500 text-sm mt-1'>
                    {book.ratings_count} Ratings
                  </p>


                  {/* Button */}
                  <button className='mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 duration-300'>
                    View Details
                  </button>

                </div>

              </div>

            ))
          }

        </div>

        {/* Pagination */}
        <div className='flex justify-center items-center gap-4 mt-12'>

          {/* Prev */}
          <button
            onClick={() => {
              if (currentPage > 1) {
                setCurrentPage(currentPage - 1)

                pageContainerRef.current.scrollBy({
                  left: -50,
                  behavior: "smooth"
                })
              }
            }}
            disabled={currentPage === 1}
            className='w-10 h-10 flex items-center justify-center border rounded-lg bg-white hover:bg-black hover:text-white duration-300 disabled:opacity-50'
          >
            <ChevronLeft size={18} />
          </button>


          {/* Page Number Slider */}
          <div
            ref={pageContainerRef}
            className='flex items-center gap-2 overflow-x-auto max-w-[320px] scroll-smooth scrollbar-hide '
          >

            {
              Array.from({ length: totalPages }, (_, index) => {

                const pageNumber = index + 1

                return (

                  <button
                    key={pageNumber}
                    onClick={() => setCurrentPage(pageNumber)}
                    className={`min-w-[42px] h-10 rounded-lg border duration-300 flex items-center justify-center

            ${currentPage === pageNumber
                        ? "bg-black text-white"
                        : "bg-white hover:bg-black hover:text-white"
                      }
            `}
                  >

                    {pageNumber}

                  </button>

                )

              })
            }

          </div>


          {/* Next */}
          <button
            onClick={() => {

              if (currentPage < totalPages) {

                setCurrentPage(currentPage + 1)

                pageContainerRef.current.scrollBy({
                  left: 50,
                  behavior: "smooth"
                })

              }

            }}
            disabled={currentPage === totalPages}
            className='w-10 h-10 flex items-center justify-center border rounded-lg bg-white hover:bg-black hover:text-white duration-300 disabled:opacity-50'
          >
            <ChevronRight size={18} />
          </button>

        </div>

      </div>

    </section>
  )
}