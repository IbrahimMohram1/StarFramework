import React from 'react'
import img from '../../assets/avataaars.svg'
export default function Home() {
  return <>

    <section className='bg-[#1abc9c] p-10'>

      <div className="container flex items-center justify-center flex-wrap ">
        <div className="card w-1/3 sm::w-full text-center">
          <img src={img} className='w-1/2 mx-auto' />
          <h2 className='text-4xl text-white text-center my-5'>STAR FRAMEWORK</h2>

          <div className="flex items-center justify-center mb-3 mx-auto text-center">

            <div className='line h-1 w-1/5  bg-white me-4' ></div>
            <i className="fa-regular fa-star text-white"></i>
            <div className='line h-1 w-1/5  bg-white ms-4' ></div>

          </div>
          <h6 className='text-white'>
            Graphic Artist - Web Designer - Illustrator

          </h6>
        </div>



      </div>

    </section>


  </>
}
