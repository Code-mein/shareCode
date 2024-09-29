import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Page/App.jsx'
import './index.css'
import { createBrowserRouter , RouterProvider} from "react-router-dom"
import TestPath from './TestPath.jsx'
import Home from './Page/Home.jsx'

const router = createBrowserRouter([
  {
    path:"/code/:url",
    element:<App/>
  },
  {
    path: "/",
    element:<Home/>

  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={router} />
  </StrictMode>,
)
