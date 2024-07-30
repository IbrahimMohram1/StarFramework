import React from 'react'

export default function Contact() {
  return <>
  <section className='p-3'>

      <h2 className='text-4xl text-dark text-center my-5'>CONATCT SECTION</h2>

  <div className="flex items-center justify-center mb-3 mx-auto text-center">

    <div className='line h-1 w-16  bg-black me-4' ></div>
      <i className="fa-regular fa-star text-dark"></i> 
   <div className='line h-1 w-16  bg-black ms-4' ></div>

  </div>

  <div className="container my-5">
    <div className="w-1/2 m-auto">
            <input type="text" className='w-full h-full border border-solid rounded-md p-2 my-3'  placeholder='Enter Your Name'/>
            <input type="number" className='w-full h-full border border-solid rounded-md p-2 my-3'  placeholder='Enter Your Age'/>
            <input type="email" className='w-full h-full border border-solid rounded-md p-2 my-3'  placeholder='Enter Your Email'/>
            <input type="password" className='w-full h-full border border-solid rounded-md p-2 my-3'  placeholder='Enter Your Password'/>
         
  <button className='bg-green-600 py-2 px-5 text-white rounded '>Submit</button>
</div>


  </div>
  </section>
  
  
  </>
}
