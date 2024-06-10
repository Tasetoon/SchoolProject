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
    <div className='mt-16'>
      <h1 className="text-3xl text-center font-extrabold text-white">Здесь вы можете посмотреть удельную теплоемкость разных тел</h1>
      <h1 className="text-3xl text-center font-extrabold text-white mt-20">В разработке...</h1>
    </div>
    <div>
      <Footer/>
    </div>
  </div>
  )
}

export default index