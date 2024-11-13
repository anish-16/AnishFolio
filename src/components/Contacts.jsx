import React, { useRef } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkedAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ri70lww', 'template_ik9udds', form.current, 'EBxpMQhqkYXMELr22')
      .then(
        (result) => {
          console.log(result.text);
          console.log('message sent');
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="bg-transparent text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">Let's Talk</h3>
            <p>I'm open to discussing internships or partnership opportunities.</p>
            <div className="mb-4 mt-8">
              <FaEnvelope className="inline-block text-pink-400 mr-2" />
              <a href="mailto:akanish1607@gmail.com" className="hover:underline">
                akanish1607@gmail.com
              </a>
            </div>
            <div className="mb-4">
              <FaPhone className="inline-block text-pink-400 mr-2" />
              <span>+91 9717798218</span>
            </div>
            <div className="mb-4">
              <FaMapMarkedAlt className="inline-block text-pink-400 mr-2" />
              <span>Badarpur Border, New Delhi-110044, INDIA</span>
            </div>
          </div>
          <div className="flex-1 w-full">
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">Name</label>
                <input type="text" name="user_name" className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400" placeholder="Enter Your Name" />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <input type="email" name="user_email" className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400" placeholder="Enter Your Email" />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea name="message" className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400" rows="5" placeholder="Enter Your Message"></textarea>
              </div>
              <button type="submit" className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;  