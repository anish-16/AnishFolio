import React from 'react'
const services = [
  {
    "id": 1,
    title: "web Design",
    description: "Creating visually appealing nd user-friendly web designs.",
  },
  {
    "id": 2,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
  },
  {
    "id": 3,
    title: "Backend Development",
    description: "Developing robust swrver-side logic and databases.",
  },
  {
    "id": 4,
    title: "Full-stack Development",
    description: "Combining both frontend and backend development.",
  },
  {
    "id": 5,
    title: "AWS",
    description: "Harness cloud technologies to create scalable, resilient, and highly available applications.",
  },
];
const Service = ()=> {
  return (
    <div className='bg-transparent text-white py-20' id='service'>
    <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-centre mb-12'>My Services</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service) => (
            <div key={service.id} className='bg-gray-900 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
              <div className='text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-500'>
                {service.id}
              </div>
              <h3 className='mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'>
                {service.title}
              </h3>
              <p className='mt-2 text-gray-300'>{service.description}</p>
            
            </div>
          ))}
        </div>
        </div>
        </div>
  )
}

export default Service