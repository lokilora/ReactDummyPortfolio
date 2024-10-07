import React from 'react'

import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className="relative h-full w-full bg-slate-950">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]">
        </div>
        {/* <img src={logo} alt="logo" className='mx-0 w-16'/> */}
      </div>
           
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href='#'><FaLinkedinIn  className='text-white' /></a>
        
        <a href='#'><FaGithub className='text-white' /></a>
        <a href='#'><FaTwitter className='text-white'/></a>
        <a href='#'><FaInstagram className='text-white'/></a>
      </div>
    </nav>
  )
}

export default Navbar
