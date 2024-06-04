import React, {useEffect, useState} from 'react'
import Navbar from '../components/Navbar';


function index() {
  return (
  
  <div className='min-h-screen bg-slate-700'>
    <div>
      <Navbar/>
    </div>
    <div className='mt-16'>
      <h1 class="text-5xl text-center font-extrabold text-white">8th_grade</h1>
    </div>
    <div className='mt-4 justify-center flex'>
    <a href='/8th_grade/TestPage'  type="button" class=" text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">TestPage</a>
    
    </div>
  </div>
  )
}

export default index