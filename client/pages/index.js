import React, {useEffect, useStatem, useRef} from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function index() {
  return (
  
  <div className='min-h-screen bg-slate-700'>
   
    <div>
      <Navbar/>
    </div>
    <div className='margin-top'>
      <h1 className="text-center font-extrabold text-white padding-top label-font">
        Выберите свой класс
      </h1>
    </div>
    <div className='margin-top justify-center flex'>
    <a href='/7th_grade'  type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium text-center mb-2 button">7 класс</a>
    <a href='/8th_grade' type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium text-center mb-2 button">8 класс</a>
    
    </div>
    <div className='mt-10 justify-center flex'>
      <a href='/Constants'  type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-center mb-2 button">Посмотреть константые значения </a>
    
    </div>
    <div>
      <Footer/>
    </div>
  </div>
  )
}

export default index