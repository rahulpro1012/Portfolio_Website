import Page from './components/Page';
import Notfound from './components/Notfound';
import './index.css'
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
function App() {

  const router=createBrowserRouter([
    {
      path:'/',
      element:<Page />,
      children:[{
        path:'/',
        element:<Notfound />
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
