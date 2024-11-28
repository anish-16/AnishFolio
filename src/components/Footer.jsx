import React from 'react'
import { FaCode, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-transparent text-white py-8'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <div className='flex flex-col md:flex-row md:space-x-12 items-centre mb-4'>
                <div className='flex-1 mb-4 md:mb-0'>
                <h3 className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mt-4'>Anish Kumar</h3>
                <p className='text-gray-400'>computer Science Engineer based in INDIA, specializing in web and software development</p>
            </div>
            <div className='flex-1 w-full'>
            <h3 className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mt-4'>Social Links</h3>
            <div className='flex justify-center space-x-6   my-4 md:my-4'>
            <a href="https://www.linkedin.com/in/anish167/"  className="text-gray-400 hover:text-white">
                <FaLinkedin />
            </a>
            <a href="https://github.com/anish-16" className="text-gray-400 hover:text-white">
                <FaGithub />
            </a>
            <a href="https://codolio.com/profile/Anish.folio" className="text-gray-400 hover:text-white">
                <FaCode />
            </a>
            <a href="https://www.instagram.com/anish_heree?igsh=YjZydWZ3NmJlejR5" className="text-gray-400 hover:text-white">
                <FaInstagram />
            </a>
            </div>
            </div>
            </div>
            <div className='border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-centre'>
                <p className='text-gray-400'>
                    &copy; {new Date().getFullYear()} Anish.  All rights reserved.
                </p>

              
                <div className='flex space-x-4'>
                    <a href='#' className='text-gray-400 hover:text-white'>
                        Privacy 
                    </a>
                    <a href='#' className='text-gray-400 hover:text-white'>
                        Terms of Services
                    </a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer