import './App.css'
import { Footer } from './components/Footer'
import Home from './pages/Home'
import { Signin } from './pages/Signin'
import { Signup } from './pages/Signup'
import { NavBar } from './components/NavBar'
import TasksPage from './pages/TasksPage'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Page from './pages/Page'
import { isLogged } from './services'
import { useEffect, useState } from 'react'


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: isLogged()===true?<Page/>:<Navigate to={"signin"}/>,
      children:[{    
        index:true,    
        element: <Home/>,

      },
        {
          path: "tasks",
          element: <TasksPage/>,
        },

      ]
    },
    {
      path: "/signin",
      element: isLogged()===true?<Navigate to={"/"}/>:<Signin/>,
      index:true,
    },
    {
      path: "/signup",
      element: isLogged()===true?<Navigate to={"/"}/>:<Signup/>,
    },
  ])


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
