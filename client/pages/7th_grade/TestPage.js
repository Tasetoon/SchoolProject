import React, {useEffect, useState} from 'react'
import Navbar from '../components/Navbar';
import CreateForm from '../components/Form';


function index() {
  return (
  
  <div className='min-h-screen bg-gray-200 dark:bg-slate-700'>
    <div>
      <Navbar/>
    </div>
    <div className='mt-4'>
        <CreateForm/>
    </div>
  </div>
  )
}

export default index