import React, {useEffect, useState} from 'react'
import Navbar from './components/Navbar';


function index() {
  return (
  
  <div className='min-h-screen bg-gray-200 dark:bg-slate-700'>
    <div>
      <Navbar/>
    </div>
    <div className='mt-4'>
      <h1 class="text-5xl text-center font-extrabold dark:text-white">Home page</h1>
      <h1 class="text-5xl text-center font-extrabold dark:text-white">Choose your grade</h1>
    </div>
    <div className='mt-4 justify-center flex'>
    <a href='/7th_grade'  type="button" class=" text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">7th_grade</a>
    <a href='/8th_grade' type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">8th_grade</a>
    
    </div>
  </div>
  )
}

export default index