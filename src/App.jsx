import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Body from './components/body/Body'
import Footer from './components/footer/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Body />
      <Footer />
    </>
  )
}

export default App