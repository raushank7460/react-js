import React from 'react'
import { useState, useCallback, useEffect } from 'react'

const App = () => {
  const [len, setlen] = useState(8);
  const [numAllowed, setnumAllowed] = useState(false);
  const [charAllowed, setcharAllowrd] = useState(false);
  const [password, setPassword] = useState("abc@123");

  const passwordGenrator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "~!@#$%^&*+"

    for (let i = 0; i < len; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }

    setPassword(pass);

  }, [len, numAllowed, charAllowed, setPassword])


  useEffect(() => {
    passwordGenrator()

  }, [len, numAllowed, charAllowed, passwordGenrator])


  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-6 py-5 my-8 bg-gray-700 text-orange-500">

      <h1 className="text-2xl font-bold text-center mb-4">
        Password Generator
      </h1>

      <div className="flex shadow rounded-lg overflow-hidden mb-4">

        <input
          type="text"
          value={password}
          placeholder="Generated Password"
          className="outline-none w-full py-2 px-3 text-black"
          readOnly
        />

        <button
          onClick={() => navigator.clipboard.writeText(password)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4"
        >
          Copy
        </button>

      </div>


      <div className='flex text-sm gap-x-2'>

        <div className='flex items-center gap-x-1'>

          <input
            type="range"
            min={6}
            max={100}
            value={len}
            className='cursor-pointer'
            onChange={(e) => {
              setlen(Number(e.target.value))
            }}
          />

          <label>Len:{len}</label>

        </div>


        <div className='flex items-center gap-x-1'>

          <input
            type="checkbox"
            checked={numAllowed}
            id='numberInput'
            onChange={() => {
              setnumAllowed((prev) => !prev);
            }}
          />

          <label htmlFor="numberInput">
            Number
          </label>

        </div>


        <div className='flex items-center gap-x-1'>

          <input
            type="checkbox"
            checked={charAllowed}
            id='charInput'
            onChange={() => {
              setcharAllowrd((prev) => !prev);
            }}
          />

          <label htmlFor="charInput">
            Character
          </label>

        </div>


      </div>


    </div>
  )
}

export default App