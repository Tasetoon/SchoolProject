import React, {useEffect, useState} from 'react'
import CreateForm from "./CreateForm"
import Navbar from './Navbar';


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