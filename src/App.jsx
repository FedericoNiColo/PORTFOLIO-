import './App.css'
import React from 'react'
import Header from './componentes/Header'
import SobreMi from './componentes/SobreMi'
import Trabajos from './componentes/Trabajos'
import Footer from './componentes/Footer'
import useProyectosProvider from './hooks/useProyectosProvider'
import Spinner from './componentes/Spinner'

function App() {

  const { cargando } = useProyectosProvider()

  return (
    <>

      {cargando ? <Spinner /> : (
        <>
          <Header />
          <main>
            <SobreMi />
            <Trabajos />
          </main>
          <Footer />
        </>
      )
      }
    </>

  )
}

export default App
