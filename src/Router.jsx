import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './Router.css'
import Inicio from './pages/Inicio'
import Contraseña from './pages/Cuenta'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Inicio/>
  },
  {
    path: 'perfil',
    element: <h1>Perfil</h1>
  },
  {
    path: 'configuracion',
    element: <h1>Configuracion</h1>
  },
  {
    path: 'cuenta',
    element: <Contraseña/>
  }
])

function App() {
  
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
