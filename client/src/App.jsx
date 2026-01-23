import React, { useEffect } from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Layout from './pages/Layout'
import Preview from './pages/Preview'
import Dashboard from './pages/Dashboard'
import NotFound from './components/NotFound'
import ResumeBuilder from './pages/ResumeBuilder'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import api from './configs/api.js'
import { login, setLoading } from './app/features/authSlice.js'

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
