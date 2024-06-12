
import { useRouter } from "next/router";
import logo from '../../public/Logo.png';
export default function Navbar(){
    return (



<nav className="bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-600">
  <div className="max-w-screen-xl flex justify-between flex-wrap items-center mx-auto">
    <a className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src={logo.src} className='h-16' alt="Logo"/>
        <span className=" text-2xl font-semibold whitespace-nowrap text-white">Force Matters</span>
    </a>
    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden focus:outline-none focus:ring-2  text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
      </button>
    </div>
    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700">
        <li className="flex">
          <a href="/7th_grade" className="block py-2  mr-2 px-5  rounded md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">7 класс</a>
          <a href="/8th_grade" className="block py-2 px-5  rounded md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">8 класс</a>
        </li>
        <li>
          <a href="/" className="block py-2 px-3  rounded md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">На главную</a>
        </li>
        <li>
          <a href="/About" className="block py-2 px-3  rounded md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">О нас</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>


    )
}
