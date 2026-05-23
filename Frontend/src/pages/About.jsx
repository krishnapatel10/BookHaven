import React from 'react'
import aboutimg from "../assets/bookpng.png"
import Navbar from '../components/Navbar'

export default function About() {
  return (
    <>
      <Navbar />

      <section className='w-full min-h-screenn  bg-[#f8f6f1] py-20'>

        <div className='max-w-7xl mx-auto px-6 mt-15'>

          {/* Heading */}
          <div className='text-center'>

            <p className='uppercase tracking-[5px] text-gray-500'>
              About Platform
            </p>

            <h1 className='text-6xl font-bold mt-4 leading-tight'>
              More Than Just
              <br />
              A Book Store
            </h1>

            <p className='text-gray-600 text-lg leading-8 mt-6 max-w-3xl mx-auto'>
              We created this platform for readers who love discovering
              new books, exploring ideas, and enjoying stories that leave
              a lasting impact.
            </p>

          </div>


          {/* Main Section */}
          <div className='grid grid-cols-2 gap-16 items-center mt-24'>

            {/* Content */}
            <div>

              <h2 className='text-4xl font-bold leading-tight'>
                Reading Opens
                <br />
                New Worlds
              </h2>

              <p className='text-gray-600 text-lg leading-8 mt-6'>
                Our platform helps readers easily browse books
                from different categories like fiction, coding,
                history, self-growth, and more.
              </p>

              <p className='text-gray-600 text-lg leading-8 mt-5'>
                Whether you are a student, developer, or casual
                reader, you will always find books that match
                your interests.
              </p>

              <button className='mt-8 bg-black text-white px-8 py-3 rounded-xl hover:bg-gray-800 duration-300'>
                Start Reading
              </button>

            </div>


            {/* Image */}
            <div className='flex justify-center'>

              <div className='bg-white p-10 rounded-[40px] shadow-lg'>

                <img
                  src={aboutimg}
                  alt="about"
                  className='w-[380px] object-contain'
                />

              </div>

            </div>

          </div>


          {/* Features */}
          <div className='grid grid-cols-3 gap-8 mt-24'>

            <div className='bg-white p-8 rounded-3xl border hover:-translate-y-2 duration-300'>

              <h2 className='text-5xl font-bold'>
                10K+
              </h2>

              <p className='text-gray-600 mt-4 leading-7'>
                Books from multiple genres and categories.
              </p>

            </div>


            <div className='bg-black text-white p-8 rounded-3xl hover:-translate-y-2 duration-300'>

              <h2 className='text-5xl font-bold'>
                5K+
              </h2>

              <p className='text-gray-300 mt-4 leading-7'>
                Readers exploring books every single day.
              </p>

            </div>


            <div className='bg-white p-8 rounded-3xl border hover:-translate-y-2 duration-300'>

              <h2 className='text-5xl font-bold'>
                100+
              </h2>

              <p className='text-gray-600 mt-4 leading-7'>
                Popular categories including coding & fiction.
              </p>

            </div>

          </div>

        </div>

      </section>
    </>
  )
}