import React from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Layout from './pages/Layout'
import Preview from './pages/Preview'
import Dashboard from './pages/Dashboard'
import NotFound from './components/NotFound'
import ResumeBuilder from './pages/ResumeBuilder'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (

    <>

      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='app' element={<Layout />} >
          <Route index element={<Dashboard />} />
          <Route path='builder/:resumeId' element={<ResumeBuilder />} />
        </Route>

        <Route path='view/:resumeId' element={<Preview />} />
        <Route path='login' element={<Login />} />

        {/* Catch all invalid routes */}
        <Route path="*" element={<NotFound />} /> 

      </Routes>

    </>

  )
}

export default App
