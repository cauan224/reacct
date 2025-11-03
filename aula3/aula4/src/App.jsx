import { useState } from 'react'
import './App.css'
import Footer from './componetes/Footer'
import Header from './componetes/Header'
import { Route, Routes } from 'react-router-dom'
import HomerPage from './page/Homepage'
import SobreNosPage from './page/SobreNosPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element ={<HomerPage/>} />
          <Route path='/sobre-nos'element={< SobreNosPage />} />
        </Routes>
      </main>
     
      <Footer />

    </>
  )
}

export default App
