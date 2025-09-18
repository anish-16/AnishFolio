import React from 'react'
const services = [
  {
    "id": 1,
    title: "Data Structures and Algorithm",
    description: "Mastering the art of efficiently organizing and manipulating data to solve complex problems.",
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
  "title": "Full-stack Development",
  "description": "Building and integrating both frontend and backend systems, ensuring seamless functionality, scalability, and user experience across the entire application stack."
},
  {
    "id": 5,
    title: "Machine Learning",
    description: "Possessing deep knowledge of ml algorithms and a thorough understanding of model evaluation and deployment.",
  },
  {
  "id": 6,
  "title": "Data Science",
  "description": "Expertise in extracting insights from complex datasets using statistical analysis, machine learning, and visualization, with strong skills in data cleaning, feature engineering, and storytelling through data."
}
];
const Service = ()=> {
  return (
    <div className='bg-transparent text-white py-20' id='service'>
    <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-5xl font-bold text-centre mb-12'> My Services</h2>
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