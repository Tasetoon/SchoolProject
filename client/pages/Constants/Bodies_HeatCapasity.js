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
      <h1 className="text-center font-extrabold text-white padding-top label-font">Здесь вы можете посмотреть удельную теплоемкость разных тел</h1>
      <h1 className="text-center font-extrabold text-white padding-top label-font">В разработке...</h1>
    </div>
    <div>
      <Footer/>
    </div>
  </div>
  )
}

export default index