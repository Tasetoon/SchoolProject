import React, {useEffect, useStatem, useRef} from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function index() {
  return (
  
  <div className='min-h-screen bg-slate-700 max-w-screen-xl'>
   
    <div>
      <Navbar/>
    </div>
    <div className='mt-16'>
      <h1 className="text-5xl text-center font-extrabold text-white">
        Выберите свой класс
      </h1>
    </div>
    <div className='mt-4 justify-center flex'>
    <a href='/7th_grade'  type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">7 класс</a>
    <a href='/8th_grade' type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">8 класс</a>
    
    </div>
    <div className='mt-10 justify-center flex'>
      <a href='/Constants/Liquids'  type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Посмотреть плотность жидкостей</a>
    
    </div>
    <div>
      <Footer/>
    </div>
  </div>
  )
}

export default index