import React from 'react'
import notFound from '../../assets/404.avif'
export default function NotFount() {
  return<>
    <div className="container m-auto">
    <div className="flex items-center justify-center h-100 ">
      <img src={notFound} className='w-1/2' />
    </div>

    </div>
  
  </>
}
