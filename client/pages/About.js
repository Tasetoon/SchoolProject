import React, {useEffect, useState} from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer'

function index() {
  return (
  
  <div className='min-h-screen bg-slate-700'>
    <div>
      <Navbar/>
    </div>
    <div className='mt-16'>
      <h1 class="text-5xl text-center font-extrabold text-white">About page</h1>
    </div>
    <div>
      <Footer/>
    </div>
  </div>
  )
}

export default index