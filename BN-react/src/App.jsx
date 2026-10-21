import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import Inicio from './component/Inicio'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Header/>
      <Inicio/>
    </>
  )
}
export default App
