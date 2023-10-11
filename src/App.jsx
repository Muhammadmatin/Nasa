import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Third from './pages/Third/Third';
import Forth from './pages/Forth/Forth';
import Fifth from './pages/Fifth/Fifth';
import Six from './pages/Six/Six';
import Seven from './pages/Seven/Seven';

const App = () => {

  
  useEffect(() => {
    AOS.init();
  }, [])

  const router = createBrowserRouter([
    {
      path : "/",
      element : <Layout/>,
      children : [
        {
          index : true , 
          element : <Home/>
        },
        {
          path : "About",
          element: <About/>
        },
        {
          path : "Third",
          element: <Third/>
        },
        {
          path : "Forth",
          element: <Forth/>
        },
        {
          path : "Fifth",
          element: <Fifth/>
        },
        // {
        //   path : "Six",
        //   element: <Six/>

        // }

        // },

      ]
    }
  ]) 


  return ( <RouterProvider router={router}/>)
}

export default App