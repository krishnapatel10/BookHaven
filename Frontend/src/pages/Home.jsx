import React from 'react'
import Navbar from '../components/Navbar'
import Bookcard from '../components/Bookcard'
import Footer from "../components/Footer"
import bookpng from "../assets/bookpng.png"

export default function Home() {
  return (
    <div className='bg-[#f8f6f1]'>

      <Navbar />

      {/* Hero Section */}
      <section className='w-full py-20'>

        <div className='max-w-7xl mx-auto px-6'>

          <div className=' px-16 py-14 flex items-center justify-between '>

            {/* Left Content */}
            <div className='max-w-2xl'>

              <p className='text-sm uppercase tracking-[5px] relative left-2 text-gray-500 mb-5'>
                Read • Learn • Grow
              </p>

              <h1 className='text-7xl font-bold leading-[85px] text-black'>
                Discover Your
                <br />
                Next Favorite
                <br />
                Book
              </h1>

              <p className='text-gray-600 mt-7 text-xl leading-9'>
                Explore thousands of books and find stories,
                knowledge, and inspiration that stay with you forever.
              </p>
              <div className='flex items-center gap-5 mt-10'>

                <button
                  onClick={() => {
                    document.getElementById("booksection")
                      .scrollIntoView({ behavior: "smooth" })
                  }}
                  className='bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 duration-300 text-lg'
                >
                  Explore Now
                </button>

               

              </div>

            </div>

            {/* Right Image */}
            <div className='relative'>

              {/* Background Circle */}
              <div className='absolute top-10 left-10 w-[320px] h-[320px] bg-[#ece8df] rounded-full blur-3xl'>
              </div>

              <img
                src={bookpng}
                alt="books"
                className='relative  w-[430px] object-contain drop-shadow-2xl hover:scale-105 duration-500'
              />

            </div>

          </div>

        </div>

      </section>

      <div id="booksection">
        <Bookcard />
      </div>

      <Footer />

    </div>
  )
}