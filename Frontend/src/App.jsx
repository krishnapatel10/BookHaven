import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'
import Bookdetails from './pages/BookDetails'
import About from './pages/About'


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path="/book/:id" element={<Bookdetails />} />
          <Route path='/about' element={<About/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  )
}
