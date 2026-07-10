import React, { useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(8);

  const addBtn = () => {
    setCounter(counter=>counter+1);
  }

  const removeBtn = () => {
    setCounter(counter=>counter-1);
  }

  return (
    
    <div className='w-full h-screen flex flex-col justify-center items-center gap-4'>
      <h1 className='text-2xl font-bold'>Counter: {counter}</h1>
      <div className='flex gap-2'>
        <button onClick={addBtn} className='bg-purple-600 text-white px-4 py-2 rounded'>Add</button>
        <button onClick={removeBtn} className='bg-purple-600 text-white px-4 py-2 rounded'>Delete</button>
      </div>
    </div>
  )
}

export default App
