import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-transparent text-white px-8 md:px-16 lg:px-24'>
        <div className='container py-2 flex justify-centre md:justify-between items-centre'> 
            <div className='text-2xl font-bold hidden md:inline'>Anish Kumar</div>
            <div className='space-x-6'>
                <a href="#home" className='hover:text-gray-400'>Home</a>
                <a href="#about" className='hover:text-gray-400'>About Me</a>
                <a href="#service" className='hover:text-gray-400'>Services</a>
                <a href="#projects" className='hover:text-gray-400'>Projects</a>
                <a href="#contact" className='hover:text-gray-400'>Contact</a>
            </div>
            <button className='bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Connect Me</button>      
          </div>
    </nav>
  )
}

export default Navbar