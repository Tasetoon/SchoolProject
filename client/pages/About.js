import React, {useEffect, useState} from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import me from '../public/me.jpg'
import misha from '../public/miha.jpg'

function index() {
  return (
  
  <div className='min-h-screen bg-slate-700'>
    <div>
      <Navbar/>
    </div>
    <div className='mt-16'>
      <h1 className="text-5xl text-center font-extrabold text-white">О нас</h1>
    </div>
    <div className="grid grid-cols-3 gap-4">
      <div className="ml-5">
          <img src={me.src} className='h-40 p-1 rounded-full ring-2 ring-gray-500'/>
          <img src={misha.src} className='h-40 p-1 rounded-full ring-2 ring-gray-500 mt-3'/>
      </div>
      <div className="col-span-2 flex items-center justify-start">
        <p className="text-white">Мы юные энтузиасты, занимающиемся помощью в образовании. Наш проект помогает решать задачи по физике и легче понимать теорию, удачи в обучении! </p>
      </div>
    </div>
    <div>
      <Footer/>
    </div>
  </div>
  )
}

export default index