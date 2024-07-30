import React from 'react'

export default function About() {
  return <>
      <section className='bg-[#1abc9c] p-32'>

      <div className="container flex items-center justify-center flex-wrap ">
        <div className="card w-1/3 sm::w-full text-center">
          <h2 className='text-4xl text-white text-center my-5'>ABOUT COMPONENT</h2>

          <div className="flex items-center justify-center mb-3 mx-auto text-center">

            <div className='line h-1 w-1/5  bg-white me-4' ></div>
            <i className="fa-regular fa-star text-white"></i>
            <div className='line h-1 w-1/5  bg-white ms-4' ></div>

          </div>
    
        </div>
    <div className='flex flex-wrap'>
        <div className='md:w-1/2 sm:w-full text-xl text-white p-5'>
        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.

</p></div>
        <div className='md:w-1/2 sm:w-full text-xl  text-white p-5'>
        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.

</p></div>
    </div>


      </div>

    </section>
  </>
}
