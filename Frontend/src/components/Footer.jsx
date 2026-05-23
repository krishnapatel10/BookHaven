import React from 'react'
import { BookOpen } from "lucide-react"

export default function Footer() {
  return (

    <footer className='w-full bg-black text-white py-12 mt-16'>

      <div className='max-w-7xl mx-auto px-6'>

        <div className='grid grid-cols-4 gap-10'>

          {/* Logo Section */}
          <div>

            <div className='flex items-center gap-2'>

              <BookOpen size={30} />

              <h1 className='text-3xl font-bold'>
                MyBook
              </h1>

            </div>

            <p className='text-gray-400 mt-5 leading-7'>
              Discover and explore thousands of books
              from different categories and authors.
            </p>

          </div>



          {/* Quick Links */}
          <div>

            <h2 className='text-xl font-semibold mb-5'>
              Quick Links
            </h2>

            <ul className='space-y-3 text-gray-400'>

              <li className='hover:text-white duration-300 cursor-pointer'>
                Home
              </li>

              <li className='hover:text-white duration-300 cursor-pointer'>
                About
              </li>

              <li className='hover:text-white duration-300 cursor-pointer'>
                Categories
              </li>

              <li className='hover:text-white duration-300 cursor-pointer'>
                Contact
              </li>

            </ul>

          </div>



          {/* Categories */}
          <div>

            <h2 className='text-xl font-semibold mb-5'>
              Categories
            </h2>

            <ul className='space-y-3 text-gray-400'>

              <li className='hover:text-white duration-300 cursor-pointer'>
                Fiction
              </li>

              <li className='hover:text-white duration-300 cursor-pointer'>
                History
              </li>

              <li className='hover:text-white duration-300 cursor-pointer'>
                Coding
              </li>

              <li className='hover:text-white duration-300 cursor-pointer'>
                Science
              </li>

            </ul>

          </div>



          {/* Follow */}
          <div>

            <h2 className='text-xl font-semibold mb-5'>
              Follow Us
            </h2>

            <ul className='space-y-3 text-gray-400'>

              <li className='hover:text-white duration-300 cursor-pointer'>
                Facebook
              </li>

              <li className='hover:text-white duration-300 cursor-pointer'>
                Instagram
              </li>

              <li className='hover:text-white duration-300 cursor-pointer'>
                Twitter
              </li>

              <li className='hover:text-white duration-300 cursor-pointer'>
                Gmail
              </li>

            </ul>

          </div>

        </div>


        {/* Bottom */}
        <div className='border-t border-gray-800 mt-10 pt-6 text-center text-gray-500'>

          © 2026 MyBook. All Rights Reserved.

        </div>

      </div>

    </footer>
  )
}