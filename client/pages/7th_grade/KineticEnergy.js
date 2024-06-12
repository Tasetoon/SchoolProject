import React, {useEffect, useState} from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import Form from '../components/Form';
import mygif from '../../public/gifs/EKinetic.gif';

function index() {
  const [style, setStyle ] = useState("mt-4 hidden");
  const [pr1, setParam1 ] = useState('');
  const [pr2, setParam2 ] = useState('');
  const [answer, setAnswer ] = useState('');
  const [formule_url, setFormule_url ] = useState('');


  const handleClickEnergy = async (e) => {
    e.preventDefault()
    setParam1(['M', 'M(масса)кг'])
    setParam2(['V', 'V(скорость)м/c'])
    setAnswer(['E(кинетическая энергия)', 'Дж'])
    setStyle('')
    setFormule_url('https://api.products.aspose.app/tex/api/files?uri=caec7865-77f0-4087-8e4e-326dfed6d935.png')

  }
  const handleClickMass = async (e) => {
    e.preventDefault()
    setParam1(['E', 'E(кинетическая энергия)Дж'])
    setParam2(['V', 'V(скорость)м/c'])
    setAnswer(['M(масса)', 'кг'])
    setStyle('')
    setFormule_url('https://api.products.aspose.app/tex/api/files?uri=f8c22398-ff05-44ab-8599-071b5e7ca2f2.png')
  }
  const handleClickVelocity = async (e) => {
    e.preventDefault()
    setParam1(['E', 'E(кинетическая энергия)Дж'])
    setParam2(['M', 'M(масса)кг'])
    setAnswer(['V(скорость)', 'м/с'])
    setStyle('')
    setFormule_url('https://api.products.aspose.app/tex/api/files?uri=a0e1087e-180f-4a23-99a4-b822875fc6ab.png')
  }
  return (
  
  <div className='min-h-screen  bg-slate-700'>
    <div>
      <Navbar/>
    </div>
    <div className='mt-16'>
      <h1 className="text-5xl text-center font-extrabold text-white pt-8">Кинетическая энергия</h1>
    </div>
    <div className='grid grid-cols-2 gap-4 h-1/3 bg-slate-700 m-16'>
      <div className='flex flex-col justify-center'>
        <p class="mb-5 text-lg text-white md:text-xl">Способность находящегося в движении тела совершать работу называют кинетической энергией.</p>
        <p class="text-white">Кинетическая энергия — скалярная физическая величина, являющаяся мерой движения материальных точек, образующих рассматриваемую механическую систему, и зависящая только от масс и модулей скоростей этих точек</p>
        <div className='flex justify-center mt-10'>
          <img src='https://api.products.aspose.app/tex/api/files?uri=caec7865-77f0-4087-8e4e-326dfed6d935.png' alt='img' className='mypng2'/>
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
            <a href='#' onClick={handleClickEnergy}  type="button" className=" text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Кинетическую енергию</a>
        </div>
        <div className='flex justify-center'>
            <a href='#' onClick={handleClickMass} type="button" className=" text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Массу тела</a>
        </div>
        <div className='flex justify-center'>
            <a href='#' onClick={handleClickVelocity} type="button" className=" text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Скорость тела</a>
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