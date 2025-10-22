import React from 'react'
import {Outlet} from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <h3>Layout</h3>

      <div>
        <Outlet/>
      </div>

    </div>
  )
}

export default Layout
