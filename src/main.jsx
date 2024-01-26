import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Main from './Layout/Main.jsx'
import Route from './Route/Route.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Route}>
      <Main />
    </RouterProvider>
  </React.StrictMode>,
)
