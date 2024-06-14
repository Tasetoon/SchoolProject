import React, {useEffect, useState} from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import Form from '../components/Form';
import mygif from '../../public/gifs/EKinetic.gif';

function index() {
  const [style, setStyle ] = useState("hidden");
  const [pr1, setParam1 ] = useState('');
  const [pr2, setParam2 ] = useState('');
  const [answer, setAnswer ] = useState('');
  const [formule_url, setFormule_url ] = useState('');


  const handleClickEnergy = async (e) => {
    e.preventDefault()
    setParam1(['M', 'M(масса)кг'])
    setParam2(['V', 'V(скорость)м/c'])
    setAnswer(['E(кинетическая энергия)', 'Дж'])
    setStyle('margin-top1')
    setFormule_url('https://i.ibb.co/mvmz3SZ/EKinetic-Enegry.png')

  }
  const handleClickMass = async (e) => {
    e.preventDefault()
    setParam1(['E', 'E(кинетическая энергия)Дж'])
    setParam2(['V', 'V(скорость)м/c'])
    setAnswer(['M(масса)', 'кг'])
    setStyle('margin-top1')
    setFormule_url('https://i.ibb.co/80k1c21/EKinetic-Mass.png')
  }
  const handleClickVelocity = async (e) => {
    e.preventDefault()
    setParam1(['E', 'E(кинетическая энергия)Дж'])
    setParam2(['M', 'M(масса)кг'])
    setAnswer(['V(скорость)', 'м/с'])
    setStyle('margin-top1')
    setFormule_url('https://i.ibb.co/XyFTQ34/EKinetic-Velocity.png')
  }
  return (
  
  <div className='min-h-screen  bg-slate-700'>
    <div>
      <Navbar/>
    </div>
    <div className='margin-top'>
      <h1 className="text-center font-extrabold text-white padding-top label-font">Кинетическая энергия</h1>
    </div>
    <div className='grid grid-cols-2 gap-4 h-1/3 bg-slate-700 m-16'>
      <div className='flex flex-col justify-center'>
        <p class="margin-bottom text text-white">Способность находящегося в движении тела совершать работу называют кинетической энергией.</p>
        <p class="text-white text">Кинетическая энергия — скалярная физическая величина, являющаяся мерой движения материальных точек, образующих рассматриваемую механическую систему, и зависящая только от масс и модулей скоростей этих точек</p>
        <div className='flex justify-center mt-10'>
          <img src='https://i.ibb.co/mvmz3SZ/EKinetic-Enegry.png' alt='img' className='mypng2'/>
        </div>
      </div>
      <div className=' flex justify-end'>
        <img src={mygif.src} alt='GIF'/>
      </div>
    </div>
    <div className='mt-24'>
      <h1 className="logo-text text-center font-extrabold text-white">Что надо найти?</h1>
    </div>
    <div className="grid grid-cols-3 gap-4 mt-10 justify-center">
        <div className='flex justify-center'>
            <a href='#' onClick={handleClickEnergy}  type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium text-center mb-2 button">Кинетическую енергию</a>
        </div>
        <div className='flex justify-center'>
            <a href='#' onClick={handleClickMass} type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium text-center mb-2 button">Массу тела</a>
        </div>
        <div className='flex justify-center'>
            <a href='#' onClick={handleClickVelocity} type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium text-center mb-2 button">Скорость тела</a>
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
        flag = {'+'}
      />
    </div>
  </div>
  )
}

export default index