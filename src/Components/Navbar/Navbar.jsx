import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const [openModal, setOpenModal] = useState(false)
  function toogleNav(){
    setOpenModal(!openModal)
  }
  return <>
  <nav className="bg-[#2c3e50]">
  <div className=" flex flex-wrap items-center justify-between mx-auto p-8 text-white">
    <li className="flex items-center space-x-3 rtl:space-x-reverse">
        <span  className="self-center text-3xl font-semibold whitespace-nowrap"> <Link to ="/">STAR FRAMEWORK</Link></span>
    </li>
    <button onClick={toogleNav} data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    {openModal ? <div className="visible w-full md:block md:w-auto" id="navbar-multi-level">
      <ul className="flex flex-col font-medium p-4 md:p-0 mt-4  md:space-x-8 rtl:space-x-reverse md:flex-row  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li          className="block py-2 px-3" aria-current="page"> <NavLink to="about">About</NavLink> </li>
        <li  className="block py-2 px-3  ">  <NavLink to='portfolio'>Portfolio</NavLink> </li>
        <li  className="block py-2 px-3  "> <NavLink to='contact'>Contact</NavLink></li>
      </ul>
    </div> :  <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
      <ul className="flex flex-col font-medium p-4 md:p-0 mt-4  md:space-x-8 rtl:space-x-reverse md:flex-row  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li          className="block py-2 px-3" aria-current="page"> <NavLink to="about">About</NavLink> </li>
        <li  className="block py-2 px-3  ">  <NavLink to='portfolio'>Portfolio</NavLink> </li>
        <li  className="block py-2 px-3  "> <NavLink to='contact'>Contact</NavLink></li>
      </ul>
    </div> }
   
  </div>
</nav>
  </>
}
