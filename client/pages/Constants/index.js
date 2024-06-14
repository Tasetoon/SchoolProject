import React, {useEffect, useState} from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'

function index() {
  return (
  
  <div className='min-h-screen bg-slate-700'>
    <div>
      <Navbar/>
    </div>
    <div className='mt-16'>
      <h1 className="text-5xl text-center font-extrabold text-white">Посмотреть Константы</h1>
    </div>
    <div className='mt-4 justify-center flex'>
    <a href='Constants/Liquids_Density'  type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Плотность жидкостей</a>
    <a href='Constants/Bodies_Density'  type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Плотность твердых тел</a>
    <a href='Constants/Bodies_HeatCapasity' type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Удельная теплоемкость тел</a>
    
    </div>
    <div>
      <Footer/>
    </div>
  </div>
  )
}

export default index