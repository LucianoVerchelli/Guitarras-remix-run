import { Link } from "@remix-run/react"

function Navegacion() {

    
  return (
    <nav className="navegacion">
    <Link to="/">
    Inicio
    </Link>

    <Link to="/nosotros">
    Nosotros
    </Link>

    <Link to="/tienda">
    Tienda
    </Link>

    <Link to="/blog">
    Blog
    </Link>
  </nav>
  )
}

export default Navegacion
