import React, { useEffect } from 'react'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Layout from './Pages/Layout'
import Preview from './Pages/Preview'
import Dashboard from './Pages/Dashboard'
import NotFound from './components/NotFound'
import ResumeBuilder from './Pages/ResumeBuilder'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login, setLoading } from './app/features/authSlice.js'
import {Toaster} from 'react-hot-toast'
import api from './configs/api.js'

const App = () => {
 
  const dispatch = useDispatch()

  const getUserData = async () => {
    const token = localStorage.getItem('token')
    try {
      if (token) {
        const { data } = await api.get('/api/users/data', { headers: { Authorization: token } })
        if (data.user) {
          dispatch(login({ token, user: data.user }))
        }
        dispatch(setLoading(false))
      } else {
        dispatch(setLoading(false))
      }

    } catch (error) {
      dispatch(setLoading(false))
      console.log(error.message)
    }
  }

  useEffect(() => {
    getUserData()
  }, [])


  return (

    <>
    <Toaster />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='app' element={<Layout />} >
          <Route index element={<Dashboard />} />
          <Route path='builder/:resumeId' element={<ResumeBuilder />} />
        </Route>

        <Route path='view/:resumeId' element={<Preview />} />
        {/* <Route path='login' element={<Login />} /> */}


        {/* Catch all invalid routes */}
        <Route path="*" element={<NotFound />} />

      </Routes>

    </>

  )
}

export default App
