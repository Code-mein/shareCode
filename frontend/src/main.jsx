import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Page/App.jsx'
import './index.css'
import { createBrowserRouter , RouterProvider} from "react-router-dom"
import Home from './Page/Home.jsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import About from './Page/About.jsx'
import Root from './Page/Root.jsx'


// alert(import.meta.env.VITE_BASE_URL)
const queryClient = new QueryClient()
const router = createBrowserRouter([
  
  {
    path:"/code/:url",
    element:<App/>
  },
  {
    path:"/",
    element: <Root/>,
    children:[
      {
        path: "/",
        element:<Home/>
      },
      {
        path: "/about",
        element:<About/>
      }
    ]
  },
  // {
  //   path: "/",
  //   element:<Home/>
  // },
  // {
  //   path: "/about",
  //   element:<About/>
  // }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider  router={router} />
    </QueryClientProvider>
  </StrictMode>,
)
