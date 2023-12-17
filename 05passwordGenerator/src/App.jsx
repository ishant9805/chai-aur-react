import { useState, useCallback, useEffect, useRef } from 'react'

function App() {

  const [length, setLength] = useState(8)
  const [numeric, setNumeric] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [pass, setPass] = useState('')

  const passRef = useRef(null)
  const btnRef = useRef(null)

  const passGen = useCallback(() => {
    let password = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numeric) str += "0123456789"
    if (charAllowed) str += "~`!@#$%^&*()_-+={}[]:|<>,.?/"
    for (let index = 1; index <= length; index++) {
      password += str.charAt(Math.floor(Math.random() * str.length + 1))
    }
    setPass(password)
  }, [length, numeric, charAllowed, setPass])

  const copyToClip = useCallback(() => {
    passRef.current?.select()
    passRef.current?.setSelectionRange(0,32)
    btnRef.current.style.backgroundColor = "#000"
    btnRef.current.style.color = "rgb(96, 165, 250)"
    window.navigator.clipboard.writeText(pass)
  }, [pass, btnRef])
  
  useEffect(() => {
    passGen()
    btnRef.current.style.backgroundColor = "rgb(96, 165, 250)"
    btnRef.current.style.color = "#000"
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
            onClick={() => {copyToClip()}}
            ref={btnRef}
          >
            Copy
          </button>
        </div>
        <div className='flex overflow-auto text-lg gap-x-2'>
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
          <div className="custom-checks flex items-center gap-x-1">
            <label className='checkbox' htmlFor="numInput">
              <input 
                type="checkbox"
                defaultChecked={numeric}
                id="numInput"
                onChange={() => {
                  setNumeric((prev) => !prev);
                }}
                className='w-4 h-4 cursor-pointer checkbox__trigger visuallyhidden'
              />
              <span class="checkbox__symbol">
                <svg aria-hidden="true" class="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 14l8 7L24 7"></path>
                </svg>
              </span>
              <p className='checkbox__textwrapper'>Numbers</p>
            </label>
          </div>
          <div className="custom-checks flex items-center gap-x-1">
            <label className='checkbox' htmlFor="charInput">
              <input 
                type="checkbox"
                defaultChecked={charAllowed}
                id="charInput"
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}
                className='w-4 h-4 cursor-pointer checkbox__trigger visuallyhidden'
              />
              <span class="checkbox__symbol">
                <svg aria-hidden="true" class="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 14l8 7L24 7"></path>
                </svg>
              </span>
              <p className='checkbox__textwrapper'>Special Characters</p>
            </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
