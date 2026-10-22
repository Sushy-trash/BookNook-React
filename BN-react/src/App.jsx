import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import Inicio from './component/Inicio'
import Catalogo from './component/Catalogo'
import Nosotros from './component/Nosotros'
import Footer from './component/Footer'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Header/>
      
      <main>
        <Inicio/>


        <Catalogo/>


        <Nosotros/>

      </main>
      
      <Footer/>
    </>
  )
}
export default App
