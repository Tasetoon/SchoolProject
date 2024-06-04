import React, {useEffect, useState} from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import Form from '../components/Form';


function index() {
  const [pr1, setParam1 ] = useState('')
  const [pr2, setParam2 ] = useState('')
  const [answer, setAnswer ] = useState('')

  const handleClickForce = async (e) => {
    e.preventDefault()
    setParam1(['P', 'P(плотность)кг/м3'])
    setParam2(['V', 'V(объем)м3'])
    setAnswer('F(сила Архимеда)H')
  }
  const handleClickLiquid = async (e) => {
    e.preventDefault()
    setParam1(['F', 'F(сила Архимеда)H'])
    setParam2(['V', 'V(объем)м3'])
    setAnswer('P(плотность)кг/м3')
  }
  const handleClickVolume = async (e) => {
    e.preventDefault()
    setParam1(['P', 'P(плотность)кг/м3'])
    setParam2(['F', 'F(сила Архимеда)H'])
    setAnswer('V(объем)м3')
  }

  return (
  
  <div className='min-h-screen  bg-slate-700'>
    <div>
      <Navbar/>
    </div>
    <div className='mt-16'>
      <h1 className="text-5xl text-center font-extrabold text-white">Что надо найти?</h1>
    </div>
    <div className="grid grid-cols-3 gap-4 mt-10 justify-center">
        <div className='flex justify-center'>
            <a href='#' onClick={handleClickForce}  type="button" className=" text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Сила Архимеда</a>
        </div>
        <div className='flex justify-center'>
            <a href='#' onClick={handleClickLiquid} type="button" className=" text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Плотность</a>
        </div>
        <div className='flex justify-center'>
            <a href='#' onClick={handleClickVolume} type="button" className=" text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Объем</a>
        </div>
    </div>
    <div className='mt-4'>
        <Form
          p1 = {pr1}
          p2 = {pr2}
          answer = {answer}
        />
    </div>
    <div>
      <Footer/>
    </div>
  </div>
  )
}

export default index