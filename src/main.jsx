import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Signup from './Signup.jsx'
import Login from './Login.jsx'
import Forgetpassword from './Forgetpassword.jsx'
import Home from './Home.jsx'

const router = createBrowserRouter([
{
  path:'/',
  element:<App/>
},
{
  path:'/Signup',
  element:<Signup/>
},
{
  path:'/Login',
  element:<Login/>
},
{
  path:'/Forgetpassword',
  element:<Forgetpassword/>
},
{
  path:'/Home',
  element:<Home/>
}

])

createRoot(document.getElementById('root')).render(
 <RouterProvider router={router}/>
)
