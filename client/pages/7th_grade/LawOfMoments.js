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
    setStyle("margin-top1")
  }
  const handleClickMass = async (e) => {
    e.preventDefault()
    setParam1(['E', 'E(потенциальная энергия)Дж'])
    setParam2(['H', 'H(высота)м'])
    setAnswer(['M(масса)', 'кг'])
    setStyle("margin-top1")
  }
  const handleClickHeight = async (e) => {
    e.preventDefault()
    setParam1(['E', 'E(потенциальная энергия)Дж'])
    setParam2(['M', 'M(масса)кг'])
    setAnswer(['H(высота)', 'м'])
    setStyle("margin-top1")
  }
  return (
  
  <div className='min-h-screen  bg-slate-700'>
    <div>
      <Navbar/>
    </div>
    <div className='margin-top'>
      <h1 className="text-center font-extrabold text-white padding-top label-font">Правило моментов</h1>
    </div>
    <div className='grid grid-cols-2 gap-4 h-1/3 bg-slate-700 m-16'>
      <div className='flex flex-col justify-center'>
        <p class="margin-bottom text text-white">Правило моментов говорит о том, что если рычаг не вращается, то сумма моментов сил, поворачивающих рычаг против часовой стрелки, равна сумме моментов сил, поворачивающих рычаг по часовой стрелке. Это условие выполняется относительно любой точки.</p>
        <div className='flex justify-center mt-10'>
          <img src='https://i.ibb.co/9pQRWcY/Law-of-moments.png' alt='img' className='mypng2'/>
        </div>
      </div>
      <div className=' flex justify-end'>
        <img src={mygif.src} alt='GIF'/>
      </div>
    </div>
    <div className='mt-24'>
      <h1 className="text-center font-extrabold text-white padding-top label-font">В разработке...</h1>
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
      <Footer/>
    </div>
  </div>
  )
}

export default index