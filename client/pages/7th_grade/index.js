import React, {useEffect, useState} from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'

function index() {
  return (
  
  <div className='min-h-screen bg-slate-700'>
    <div>
      <Navbar/>
    </div>
    <div className='margin-top'>
      <h1 className="text-center font-extrabold text-white padding-top label-font">7 класс</h1>
    </div>
    <div className="grid grid-cols-5 gap-4 mt-10 justify-center content-center">
        <div className='flex justify-center'>
            <a href='/7th_grade/Archimedes_Law'  type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium content-center text-center mb-2 button">Закон Архимеда</a>
        </div>
        <div className='flex justify-center'>
            <a href='/7th_grade/LawOfMoments'  type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium content-center text-center mb-2 button">Правило моментов</a>
        </div>
        <div className='flex justify-center'>
            <a href='/7th_grade/Efficiency'  type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium content-center text-center mb-2 button">КПД</a>
        </div>
        <div className='flex justify-center'>
            <a href='/7th_grade/KineticEnergy'  type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium content-center text-center mb-2 button">Кинетическая энергия</a>
        </div>
        <div className='flex justify-center'>
            <a href='/7th_grade/PotentialEnergy'  type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium content-center text-center mb-2 button">Потенциальная энергия</a>
        </div>
    </div>
    <div>
      <Footer/>
    </div>
  </div>
  )
}

export default index