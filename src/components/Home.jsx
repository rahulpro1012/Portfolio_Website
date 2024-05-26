import React from 'react'

function Home() {
  return (
    <div className='font-ubuntu font-bold text-gray-50 px-56 border border-red-500 font-poppins'>
      <div className='ml flex flex-col gap-6'>
        <h1 className='text-2xl'>Hi , my name is </h1>
        <h1 className='highlight-text text-6xl '>Rahul Mudaliar</h1>
        <p className='text-gray-300 text-lg  '>Full Stack Web Developer
          🚀 Transforming ideas into impactful digital experiences. With a blend of creativity and technical expertise, I specialize in crafting responsive, user-centric web applications that drive engagement and deliver results.</p>
        <h1>🌟 What I Do:</h1>
        <ul className='text-gray-400 list-disc pl-6'>
  <li className='mb-2 highlight-text'><span className='text-gray-400'>Innovative Solutions: From concept to deployment, I bring your vision to life with modern technologies and best practices.</span></li>  
  <li className='mb-2 highlight-text'><span className='text-gray-400'>Seamless Integration: Ensuring flawless interaction between front-end and back-end, providing a smooth user experience.</span></li>  
  <li className='mb-2 highlight-text'><span className='text-gray-400'>Scalable Architectures: Designing robust and scalable systems that grow with your business.</span></li>  
</ul>  
      </div>


    </div>
  )
}

export default Home