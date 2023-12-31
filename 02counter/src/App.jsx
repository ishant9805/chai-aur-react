import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(9)
  const [err, setErr] = useState(null)
  // Assignment
  // Dont add value after 20
  // and dont reduce value after 0
  // Assignment 1 Done

  // Sets the error msg null if there isn't any
  const checkNoErr = () => {
    setErr(null)
  }

  // For Adding value
  const addValue = () => {
    // counter += 1
    if (counter < 20) {
      setCounter(counter + 1)
      checkNoErr()
    } else {
      setErr("Value cannot be greater than 20")
    }
  }

  // For subtracting -1
  const reduceValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
      checkNoErr()
    } else {
      setErr("Value cannot be less than 0")
    }
  }


  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <div className='cont'>
        <button className='stylish-btn' role='button' onClick={addValue}>
          <span className='text'>Add +1</span>
        </button>
        <button className='stylish-btn' role='button' onClick={reduceValue}>
          <span className='text'>Reduce -1</span>
        </button>
      </div>
      <h3>{err}</h3>
    </>
  )
}

export default App
