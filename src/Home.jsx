import React from 'react'
import Navbarleft from './Navbarleft'

function Home() {
  return (
    <div className='mt-5'>
      <header className='text-2xl font-bold text-center'>Todo List</header>
      <div className='flex flex-row'> 
       <Navbarleft/>
         <div>
          <div className='basic-2/3'>Good Morning person</div>
        </div>
      </div>
    </div>
  )
}

export default Home
