import React from 'react'

export default function Footer() {
  return <>
    <footer className='bg-[#2c3e50] p-8'>
        <div className="container text-white text-center flex items-center justify-center flex-wrap ">
            <div className="md:w-1/3 sm:w-full">
                <div className="card ">
                    <h3 className='text-3xl p-2'>LOCATION</h3>
                    <p className=' p-2'>2215 John Daniel Drive</p>
                    <p className=' p-2'>Clark, MO 65243</p>
                </div>
            </div>

       <div className="md:w-1/3 sm:w-full">
                <div className="card ">
                    <h3 className='text-3xl p-2'>AROUND THE WEB</h3>
                  <div className="icons">
                    <i className="fa-brands fa-linkedin-in p-2 border border-solid border-1 rounded-md m-3"></i>   
                    <i className="fa-brands fa-facebook-f p-2  border border-solid border-1 rounded-md m-3"></i>
                    <i className="fa-brands fa-twitter p-2  border border-solid border-1 rounded-md m-3"></i>
                    <i className="fa-brands fa-linkedin-in p-2  border border-solid border-1 rounded-md m-3"></i>   
                                       </div>
                </div>
            </div>
                   <div className="md:w-1/3 sm:w-full">
                <div className="card ">
                    <h3 className='text-3xl p-2'>ABOUT FREELANCER</h3>
                    <p className=' p-2'>Freelance is a free to use, licensed Bootstrap theme created by Route

</p>                </div>
            </div>


        </div>


    </footer>
    <div className='bg-[#2c3e44] p-5 text-white text-center w-full'>
  <p>Copyright © Your Website 2021</p>
    </div>
  
  
  </>
}
