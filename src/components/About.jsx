import React from 'react'
import pic1 from '../assets/pic1.png'
const About = () => {
  return (
    <div className='bg-black text-white py-20' id='about'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-centre mb-12'>About Me</h2>
            <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                <img src={pic1} alt=""
                className='w-72 h-80 rounded object-cover mb-8 md:mb-0'/>
                <div className="flex-1">
                <p className="text-lgmb-8">
                I am a computer science engineer passionate about developing innovative, user-friendly applications.
                 My solid foundation in data structure and algorithms, and keen eye for detail helps me deliver high-quality solutions.

                   </p>
                   <div className='space-y-4'>
                    <div className='flex items-centre'>
                        <label htmlFor='htmlandcss' className='w-2/12'>DSA</label>
                        <div className='grow bg-gray-800 rounded-full h-2.5'>
                            <div className='bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12'>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-centre'>
                        <label htmlFor='htmlandcss' className='w-2/12'>React JS</label>
                        <div className='grow bg-gray-800 rounded-full h-2.5'>
                            <div className='bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12'>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-centre'>
                        <label htmlFor='htmlandcss' className='w-2/12'>node js</label>
                        <div className='grow bg-gray-800 rounded-full h-2.5'>
                            <div className='bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12'>
                            </div>
                        </div>
                    </div>
                   </div>
                   <div className='mt-12 flex justify-between text-centre'>
                    <div>
                        <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'>
                            3+
                        </h3>
                        <p>Years of Learning</p>
                    </div> 
                    <div>
                        <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'>
                            5+
                        </h3>
                        <p>Projects Completed</p>
                    </div>
                    <div>
                        <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'>
                            1+
                        </h3>
                        <p>Internship</p>
                    </div>

                   </div>
                   </div>
            </div>
        </div>
    </div>
  )
}

export default About