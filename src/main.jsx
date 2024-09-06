import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/home/Home.jsx'
import Clientes from './pages/clientes/Clientes.jsx'
import AddClientes from './pages/clientes/AddClientes.jsx'
import Sales from './pages/sales/Sales.jsx'
import Warehouse from './pages/warehouse/Warehouse.jsx'
import {
  BrowserRouter as Router,
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";

const router = createBrowserRouter([
  { 
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "customers",
        element: <Clientes/>,
      },
      {
        path: "sales",
        element: <Sales/>
      },
      {
        path: "warehouse",
        element: <Warehouse/>
      }
    ]
  }
  

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
