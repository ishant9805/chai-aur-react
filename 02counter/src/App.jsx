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

  const checkNoErr = () => {
    setErr(null)
  }

  const addValue = () => {
    // counter += 1
    if (counter < 20) {
      setCounter(counter + 1)
      checkNoErr()
    } else {
      setErr("Value cannot be greater than 20")
    }
  }

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

      <button onClick={addValue}>Add +1</button>
      <br />
      <br />
      {/* samajh gye */}
      <button onClick={reduceValue}>Reduce +1</button>
      <h3>{err}</h3>
    </>
  )
}

export default App
