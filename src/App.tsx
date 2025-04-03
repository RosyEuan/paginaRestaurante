import{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Restaurante from './Restaurante'

function App() {
  
  return (
    <>
 <form action="">
  <input type="text" placeholder='usuario' />
  <input type="text" placeholder='contraseña' />
 </form>
 </>
  )


}



export const Navbar = () => {
return (
    <div>
<Restaurante></Restaurante>
    </div>
)
}
export default Navbar
