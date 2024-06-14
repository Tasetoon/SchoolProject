import React, {useEffect, useState} from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import Dropdown from '../components/ConstDropdown'

function index() {
  return (
  
  <div className='min-h-screen bg-slate-700'>
    <div>
      <Navbar/>
    </div>
    <div className='margin-top'>
      <h1 className="text-center font-extrabold text-white padding-top label-font">Здесь вы можете посмотреть плотность разных жидкостей</h1>
    </div>
    <div className='margin-top1 flex justify-center'>
        <Dropdown
          type = {'liquids_density'}
        />
    </div>
    <div>
      <Footer
      />
    </div>
  </div>
  )
}

export default index