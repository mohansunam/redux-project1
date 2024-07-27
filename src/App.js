import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import RootLayout from './ui/RootLayout'
import Home from './features/dashboard/Home'
import { blogSlice } from './blogs/blogSlice'


const App = () => {
  console.log(blogSlice);
  const router = createBrowserRouter([
    {
      path:'/',
      element: <RootLayout/>,
      children: [
        {
        index: true,
        element: <Home/> 

      }]


  }])
  return (
    <div>
   
    </div>
  )
}

export default App
