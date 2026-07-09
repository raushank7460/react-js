import React, { useState } from 'react'

const App = () => {
  const [color,setColor]=useState("Black");
  return (
    <div className='w-full h-screen duration-200'
    style={{background:color}}
    >
      <div className='fixed bottom-2 inset-x-2 px-4 py-2 rounded-full flex justify-center'>
        <div className='flex flex-wrap justify-center px-4 py-2 rounded-full'
        >
          <button  className='bg-red-600 text-white px-4 py-2 shadow-2xl'
          onClick={()=>setColor("Red")}
          >Red</button>
        </div>
         <div className='flex flex-wrap justify-center px-4 py-2 rounded-full'
        >
          <button  className='bg-green-600 text-white px-4 py-2 shadow-2xl'
          onClick={()=>setColor("green")}
          >Green</button>
        </div>
         <div className='flex flex-wrap justify-center px-4 py-2 rounded-full'
        >
          <button  className='bg-yellow-600 text-white px-4 py-2 shadow-2xl'
          onClick={()=>setColor("Yellow")}
          >Yellow</button>
        </div>
         <div className='flex flex-wrap justify-center px-4 py-2 rounded-full'
        >
          <button  className='bg-purple-600 text-white px-4 py-2 shadow-2xl'
          onClick={()=>setColor("purple")}
          >purple</button>
        </div>
        <div className='flex flex-wrap justify-center px-4 py-2 rounded-full'
        >
          <button  className='bg-pink-600 text-white px-4 py-2 shadow-2xl'
          onClick={()=>setColor("pink")}
          >Pink</button>
        </div>
        <div className='flex flex-wrap justify-center px-4 py-2 rounded-full'
        >
          <button  className='bg-orange-600 text-white px-4 py-2 shadow-2xl'
          onClick={()=>setColor("orange")}
          >orange</button>
        </div>
        <div className='flex flex-wrap justify-center px-4 py-2 rounded-full'
        >
          <button  className='bg-gray-600 text-white px-4 py-2 shadow-2xl'
          onClick={()=>setColor("gray")}
          >Gray</button>
        </div>
 
      </div>


    </div>
  )
  
}

export default App
