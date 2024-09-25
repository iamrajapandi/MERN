import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'

function Weblayout() {
    const islogeda=true;
  return (
      <>
      <NavBar></NavBar>:
      <Outlet></Outlet>
      
   
    </>
    // <div>Weblayout</div>
  )
}

export default Weblayout