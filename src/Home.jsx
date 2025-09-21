import React from 'react'

function Home() {
  return (
    <div className='mt-5'>
      <header className='text-2xl font-bold text-center'>Todo List</header>
      <div className='flex flex-row'> 
        <div className=' basic-1/3  mt-10 ml-10 '>
          <div className='font-bold'>Private</div>
        <div>Home</div>
        <div>Personal</div>
        <div>Work</div>
        <div>Diet</div>
        <div>List of Books</div>
        <div>Road trip list</div>
        </div>
         <div >
          <div className='basic-2/3'>Good Morning person</div>
        </div>
      </div>
    </div>
  )
}

export default Home
