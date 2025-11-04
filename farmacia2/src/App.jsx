import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './componentes/Footer'
import Funcionario from './componentes/Funcionario'
import Header from './componentes/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Funcionario/>
      <h1>Farmacia</h1>
      <Footer/>
      
    </>
  )
}

export default App
