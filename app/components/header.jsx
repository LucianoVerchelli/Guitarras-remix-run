import { Link } from "@remix-run/react"
import Logo from "../../public/img/logo.svg"
import Navegacion from "./navegacion"

function Header() {
  return (
    <div>
     <header className="header">
    <div className="contenedor barra">
      <Link to="/" >
        <img className="logo" src={Logo} alt="imagen logo"/>
      </Link>
      <Navegacion/>
    </div>
     </header>
    </div>
  )
}

export default Header
