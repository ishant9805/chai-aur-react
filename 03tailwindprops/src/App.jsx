import { useState } from 'react'
import './App.css'
import Card from './components/cards'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    name: "Ishant",
    age: 18
  }
  let arr = [1, 2, 3, 4, 5]

  return (
    <>
      <div className='m-auto'>
        <h1 className='bg-green-400 text-black text-center p-4 rounded mb-4'>Chai aur react with tailwind and vite</h1>
      </div>
      <div className='flex'>
        <Card username="Mac" imgSrc="https://images.pexels.com/photos/434346/pexels-photo-434346.jpeg?auto=compress&cs=tinysrgb&w=600"/>
        <Card username="HP Victus" btnText="Explore" imgSrc="https://wallpapercave.com/dwp1x/wp11068726.jpg"/>
        <Card username="Predator" btnText="Buy Now" imgSrc="https://images.pexels.com/photos/19012030/pexels-photo-19012030/free-photo-of-gaming-laptops-standing-on-a-desk-under-a-sign.jpeg?auto=compress&cs=tinysrgb&w=600"/>
        <Card username="ROG" btnText="Add to cart" imgSrc="https://wallpaperaccess.com/full/1670594.jpg"/>
      </div>
    </>
  )
}

export default App
