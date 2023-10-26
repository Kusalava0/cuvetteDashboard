import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import Column from './components/columns/column'

function App() {

  return (
    <>
      <Navbar />
      <hr className='divide' />
      <div className='container'>
        <Sidebar />
        <div className='column-container'>
          <Column />
        </div>
      </div>
    </>
  )
}

export default App
