import React, {useEffect, useState} from 'react'
import Navbar from './components/Navbar';


function index() {
  return (
  
  <div className='min-h-screen bg-gray-200 dark:bg-slate-700'>
    <div>
      <Navbar/>
    </div>
    <div className='mt-4'>
      <h1 class="text-5xl text-center font-extrabold dark:text-white">About page</h1>
    </div>
  </div>
  )
}

export default index