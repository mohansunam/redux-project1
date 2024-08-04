import React from 'react'
import { Outlet } from 'react-router'
import AddForm from '../features/blog/AddForm'



const RootLayout = () => {
  return (
    <>
    <AddForm/>
    <Outlet/>
      
    </>
  )
}

export default RootLayout
 