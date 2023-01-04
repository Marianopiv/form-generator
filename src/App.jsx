import './App.css'
import React from 'react'
import Provider from './provider/Provider'
import Rutas from './routes/Rutas'

function App() {
  return (
    <>
    <Provider>
    <Rutas/>
    </Provider>
    </>
  )
}

export default App
