import React from 'react'
import pic1 from '../assets/pic1.png'
const Home = () => {
  return (
    <div className='bg-black text-white text-centre py-16'>
        <img src={pic1} alt="" 
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105'/>
        <h1 className='text-4xl font-bold'>
            I'm{" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'>Anish Kumar</span>
            ,Computer Science Engineer 
        </h1>
        <p className='mt-4 text-lg text-gray-300 '>
            I speciallized in DSA and Development.
        </p>
        <div className='mt-8 space-x-4'>
        
            <button className='bg-gradient-to-r from-green-600 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Resume</button>
        </div>
    </div>
  )
}

export default Home