import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import NotFount from './Components/NotFound/NotFount'
import Home from './Components/Home/Home'
import About from './Components/About/About'
let routers = createBrowserRouter([
  {path:'' , element: <Layout/> , children:[
    {index:true , element:<Home/>},
    {path:'about' , element:<About/>},
    {path:'portfolio' , element:<Portfolio/>},
    {path:'contact' , element:<Contact/>},
    {path:'*' , element:<NotFount/>}
  ]}
])
function App() {

  return  <RouterProvider router={routers}></RouterProvider>
  
  
}

export default App
