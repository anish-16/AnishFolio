import React, { useState } from 'react';
import { Fade as Hamburger } from 'hamburger-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-transparent text-white px-8 md:px-16 lg:px-24">
      <div className="container py-2 flex justify-between items-center relative">
        <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-lg">
          Anish Kumar
        </div>
        <div className="fixed top-4 right-4">
          <Hamburger toggled={isOpen} toggle={toggleMenu} size={30} color="#ffffff" duration={0.4} />
        </div>
        {isOpen && (
          <div className="fixed top-16 right-4 bg-black text-white p-5 rounded">
            <ul className="space-y-4">
              <li><a href="#home" className="hover:text-gray-400" onClick={toggleMenu}>Home</a></li>
              <li><a href="#about" className="hover:text-gray-400" onClick={toggleMenu}>About Me</a></li>
              <li><a href="#services" className="hover:text-gray-400" onClick={toggleMenu}>Services</a></li>
              <li><a href="#projects" className="hover:text-gray-400" onClick={toggleMenu}>Projects</a></li>
              <li><a href="#contacts" className="hover:text-gray-400" onClick={toggleMenu}>Contact</a></li>
            </ul>
          </div>
        )}
        <div className="hidden md:flex flex-grow justify-center space-x-4 md:space-x-6 text-xl mr-20 md:text-2xl items-center mx-auto">
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#about" className="hover:text-gray-400">About Me</a>
          <a href="#services" className="hover:text-gray-400">Services</a>
          <a href="#projects" className="hover:text-gray-400">Projects</a>
          <a href="#contacts" className="hover:text-gray-400">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;