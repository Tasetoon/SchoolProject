import React, {useEffect, useState} from 'react'
import Navbar from '../components/Navbar';
import Form from '../components/Form';


function index() {
  return (
  
  <div className='min-h-screen bg-gray-200 dark:bg-slate-700'>
    <div>
      <Navbar/>
    </div>
    <div className='mt-4'>
        <Form
          props={{
            'p1': 'P',
            'p2': 'V'
          }}
        />
    </div>
  </div>
  )
}

export default index