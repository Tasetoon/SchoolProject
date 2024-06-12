import React, {useEffect, useState} from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import Form from '../components/Form';
import mygif from '../../public/gifs/Archimedes.gif';
import im from '../../public/equation.png';


function index() {
  const [style, setStyle ] = useState("hidden");
  const [pr1, setParam1 ] = useState('');
  const [pr2, setParam2 ] = useState('');
  const [answer, setAnswer ] = useState('');
  const [formule_url, setFormule_url ] = useState('');


  const handleClickForce = async (e) => {
    e.preventDefault()
    setParam1(['P', 'P(плотность)кг/м3'])
    setParam2(['V', 'V(объем)м3'])
    setAnswer(['F(сила Архимеда)', 'H'])
    setStyle('')
    setFormule_url('https://api.products.aspose.app/tex/api/files?uri=94535c4c-05a3-4f30-8ec3-edd92673216f.png')
  }
  const handleClickLiquid = async (e) => {
    e.preventDefault()
    setParam1(['F', 'F(сила Архимеда)H'])
    setParam2(['V', 'V(объем)м3'])
    setAnswer(['P(плотность)', 'кг/м3'])
    setStyle('')
    setFormule_url('https://api.products.aspose.app/tex/api/files?uri=262e3c2f-9b7f-46d4-8ffd-d2101c5c24fb.png')

  }
  const handleClickVolume = async (e) => {
    e.preventDefault()
    setParam1(['P', 'P(плотность)кг/м3'])
    setParam2(['F', 'F(сила Архимеда)H'])
    setAnswer(['V(объем)', 'м3'])
    setStyle('')
    setFormule_url('https://api.products.aspose.app/tex/api/files?uri=82bcb397-d2cd-4941-95e3-7d9fd8add1cf.png')
  }
  return (
  
  <div className='min-h-screen  bg-slate-700'>
    <div>
      <Navbar/>
    </div>
    <div className='mt-16'>
      <h1 className="text-5xl text-center font-extrabold text-white pt-8">Закон Архимеда</h1>
    </div>
    <div className='grid grid-cols-2 gap-4 h-1/3 bg-slate-700 m-16'>
      <div className='flex flex-col justify-center'>
        <p class="mb-5 text-lg text-white md:text-xl">Архимедова сила — выталкивающая сила, равная весу газа или жидкости в объёме погружённой части тела.</p>
        <p class="text-white">Закон Архимеда — закон гидростатики и аэростатики: на тело, погружённое в жидкость или газ, действует выталкивающая сила, численно равная весу объёма жидкости или газа, вытесненного телом.</p>
        <div className='flex justify-center mt-10'>
          <img src={im.src} alt='img' className='mypng'/>
        </div>
      </div>
      <div className=' flex justify-end'>
        <img src={mygif.src} alt='GIF'/>
      </div>
    </div>
    <div className='mt-24'>
      <h1 className="text-5xl text-center font-extrabold text-white">Что надо найти?</h1>
    </div>
    <div className="grid grid-cols-3 gap-4 mt-10 justify-center">
        <div className='flex justify-center'>
            <a href='#' onClick={handleClickForce}  type="button" className=" text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Сила Архимеда</a>
        </div>
        <div className='flex justify-center'>
            <a href='#' onClick={handleClickLiquid} type="button" className=" text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Плотность вещества</a>
        </div>
        <div className='flex justify-center'>
            <a href='#' onClick={handleClickVolume} type="button" className=" text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Объем погруженного тела</a>
        </div>
    </div>
    <div className={style}>
        <Form
          p1 = {pr1}
          p2 = {pr2}
          answer = {answer}
          formule = {formule_url}
        />
    </div>
    <div>
      <Footer
        flag = {"+"}
      />
    </div>
  </div>
  )
}

export default index