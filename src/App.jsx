import Page from './components/Page';
import Notfound from './components/Notfound';
import './index.css'
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
function App() {

  const router=createBrowserRouter([
    {
      path:'/',
      element:<Page />,
      errorElement:<Notfound/>,
      children:[{
        path:'/',
        element:<Home />
      },
      {
        path:'/projects',
        element:<Projects/>
      },
      {
        path:'/skills',
        element:<Skills/>
      },
      {
        path:'/experience',
        element:<Experience/>
      }
      ]
    }
  
  ]);

  return (
    <>
      <RouterProvider router={router}>
        
      </RouterProvider>
    </>
  )
}

export default App
