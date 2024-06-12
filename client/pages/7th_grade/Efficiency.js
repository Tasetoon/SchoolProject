import React, {useEffect, useState} from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import Form from '../components/Form';
import mygif from '../../public/gifs/Law_of_moments.gif';

function index() {
  const [style, setStyle ] = useState("mt-4 hidden");
  const [pr1, setParam1 ] = useState('');
  const [pr2, setParam2 ] = useState('');
  const [answer, setAnswer ] = useState('');


  const handleClickEnergy = async (e) => {
    e.preventDefault()
    setParam1(['M', 'M(масса)кг'])
    setParam2(['H', 'H(высота)м'])
    setAnswer(['E(потенциальная энергия)', 'Дж'])
    setStyle("mt-4 flex")
  }
  const handleClickMass = async (e) => {
    e.preventDefault()
    setParam1(['E', 'E(потенциальная энергия)Дж'])
    setParam2(['H', 'H(высота)м'])
    setAnswer(['M(масса)', 'кг'])
    setStyle("mt-4 flex")
  }
  const handleClickHeight = async (e) => {
    e.preventDefault()
    setParam1(['E', 'E(потенциальная энергия)Дж'])
    setParam2(['M', 'M(масса)кг'])
    setAnswer(['H(высота)', 'м'])
    setStyle("mt-4 flex")
  }
  return (
  
  <div className='min-h-screen  bg-slate-700'>
    <div>
      <Navbar/>
    </div>
    <div className='mt-16'>
      <h1 className="text-5xl text-center font-extrabold text-white pt-8">Коэффициент полезного действия(КПД)</h1>
    </div>
    <div className='grid grid-cols-2 gap-4 h-1/3 bg-slate-700 m-16'>
      <div className='flex flex-col'>
        <p class="mb-5 text-lg text-white md:text-xl pr-3">КПД — физическая величина, равная отношению полезной работы ко всей совершённой работе.</p>
        <div className='mt-10'>
          <img src='https://api.products.aspose.app/tex/api/files?uri=b5880e53-144a-4df8-a31c-05db3cb5cd7d.png' alt='img' className='mypng2'/>
        </div>
      </div>
      <div className=' flex justify-center flex-col rounded-md ring-4 p-1 ring-gray-500'>
        <p class="mb-5 text-lg text-white md:text-xl pr-3">Полная (совершённая) работа — вся работа, которая была совершена над механизмом в процессе достижения результата.</p>
        <p class="text-lg text-white md:text-xl pr-3">Полезная работа — это работа, ради совершения которой был использован механизм.</p>
      </div>
    </div>
    <div className='mt-24'>
      <h1 className="text-5xl text-center font-extrabold text-white">В разработке...</h1>
    </div>
    {/*<div className="grid grid-cols-3 gap-4 mt-10 justify-center">
        <div className='flex justify-center'>
            <a href='#' onClick={handleClickEnergy}  type="button" className=" text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Потенциальную енергию</a>
        </div>
        <div className='flex justify-center'>
            <a href='#' onClick={handleClickMass} type="button" className=" text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Массу тела</a>
        </div>
        <div className='flex justify-center'>
            <a href='#' onClick={handleClickHeight} type="button" className=" text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Высоту</a>
        </div>
    </div>
    <div className={style}>
        <Form
          p1 = {pr1}
          p2 = {pr2}
          answer = {answer}
        />
    </div> */}
    <div>
      <Footer
        flag = {"+"}
      />
    </div>
  </div>
  )
}

export default index