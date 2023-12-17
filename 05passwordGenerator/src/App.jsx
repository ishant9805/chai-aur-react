import { useState, useCallback, useEffect, useRef } from 'react'

function App() {

  const [length, setLength] = useState(8)
  const [numeric, setNumeric] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [pass, setPass] = useState('')

  const passRef = useRef(null)

  const passGen = useCallback(() => {
    let password = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numeric) str += "0123456789"
    if (charAllowed) str += "~`!@#$%^&*()_-+={}[]:|<>,.?/"
    for (let index = 1; index <= length; index++) {
      password += str.charAt(Math.floor(Math.random() * str.length + 1))
    }
    console.log(password)
    setPass(password)
  }, [length, numeric, charAllowed, setPass])

  const copyToClip = useCallback(() => {
    passRef.current?.select()
    passRef.current?.setSelectionRange(0,32)
    window.navigator.clipboard.writeText(pass)
  }, [pass])

  useEffect(() => {
    passGen()
  }, [length, charAllowed, numeric, passGen])
  return (
    <>
      <div className='w-full max-w-2xl mx-auto shadow-md rounded-3xl p-4 my-8 text-orange-300 bg-gray-700'>
        <h1 className='text-5xl text-center my-6 text-slate-400'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text" 
            value={pass}
            className='outline-none rounded-md w-full py-2 px-4'
            placeholder='Password'
            readOnly
            ref={passRef}
          />
          <button 
            className='
              outline-none 
              bg-blue-400 
              px-4 py-1 shrink-0 
              text-gray-800'
            onClick={() => {copyToClip()}}>
            Copy
          </button>
        </div>
        <div className='flex text-lg gap-x-2'>
          <div className="flex items-center gap-x-1">
            <input 
              type="range"
              min={4}
              max={32}
              value={length}
              className='ml-2 cursor-e-resize w-36'
              id='passLength'
              onChange={(e) => {setLength(e.target.value)}}
            />
            <label htmlFor="passLength">Length({length})</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
              type="checkbox"
              defaultChecked={numeric}
              id="numInput"
              onChange={() => {
                setNumeric((prev) => !prev);
              }}
              className='w-4 h-4 cursor-pointer'
            />
            <label htmlFor="numInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
              className='w-4 h-4 cursor-pointer'
            />
            <label htmlFor="charInput">Special Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
