import React from 'react'
import Home from './Pages/Home.jsx'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
    <div>
      <h1 className='text-red-600 text-5xl '>this is main page</h1>
    </div>

    <Routes>
      <Route path= '/' element= { <Home/> } />
    </Routes>

    </>
  )
}

export default App
