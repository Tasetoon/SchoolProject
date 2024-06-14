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
    <div className='margin-top'>
      <h1 className="text-center font-extrabold text-white padding-top label-font">О нас</h1>
    </div>
    <div className="grid grid-cols-3 gap-4">
      <div className="margin-left">
          <img src={me.src} className='photo p-1 rounded-full ring-2 ring-gray-500'/>
          <img src={misha.src} className='photo p-1 rounded-full ring-2 ring-gray-500 mt-3'/>
      </div>
      <div className="col-span-2 flex items-center justify-start">
        <p className="text text-white">Мы юные энтузиасты, занимающиемся помощью в образовании. Наш проект помогает решать задачи по физике и легче понимать теорию, удачи в обучении! </p>
      </div>
    </div>
    <div>
      <Footer/>
    </div>
  </div>
  )
}

export default index