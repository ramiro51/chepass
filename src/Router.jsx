import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './Router.css'
import Inicio from './pages/Inicio'
import Nota from './pages/Nota'

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
    path: 'nota',
    element: <Nota/>
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
