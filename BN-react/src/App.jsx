import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import Inicio from './component/Inicio'
import Catalogo from './component/Catalogo'
import Nosotros from './component/Nosotros'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Header/>
      

      <Inicio/>


      <Catalogo/>


      <Nosotros/>
    </>
  )
}
export default App
