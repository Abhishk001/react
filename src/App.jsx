import { useCallback } from 'react'
import { useState } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setnumAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback( () => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllowed) str += "123456789"
    if (charAllowed) str += "`{}[]@#%()"
    for (let index = 0; index <= length; index++) {
      const char = Math.floor(Math.random() * str.length)
  
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numAllowed, charAllowed, setPassword])

 
  return (
    <>
      <div className=' bg-gray-400 w-full max-w-md mx-auto my-8 justify-center p-5 rounded'>
        <h1 className='text-3xl text-center my-4 font-bold text-blue-500'>Password Generator</h1>
        <div className='flex bg-white overflow-hidden mb-4 rounded-md shadow-lg'>
          <input type="text" value={password} placeholder='Password' readOnly className='outline-none py-2 px-4 w-full' />
          <button className=' bg-blue-400 py-2 px-5 cursor-pointer'>Copy</button>
        </div>
        <div className='flex justify-center gap-4'>
          <div className='flex items-center gap-x-1'>
            <input type="range" value={length} min={6} max={100} onChange={(e) => {setLength(e.target.value)}} className='cursor-pointer' />
            <label>Range: {length} </label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkBox" id='numberInput'/>
            <label htmlFor='numberInput'>Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkBox" id='charInput'/>
            <label htmlFor='charInput'>Character</label>
          </div>



        </div>
      </div>
    
    </>
  )
}

export default App
