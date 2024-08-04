import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './ui/RootLayout';
import Blogs from './features/blog/Blogs';



const App = () => {

  const router = createBrowserRouter([
    {
      path:'/',
      element: <RootLayout/>,
      children: [
        {
        index: true,
        element: <Blogs/> 

      }]


  }])
  return (
    <div>
    <RouterProvider router={router}/>
     
  
        
   
    </div>
  )
}

export default App
