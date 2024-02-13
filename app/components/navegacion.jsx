import { Link } from "@remix-run/react"
import image from "../../public/img/carrito.png"
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
    
    <Link to="/carrito">
      <img src={image} alt="Carrito de compras" />
    </Link>
  </nav>
  )
}

export default Navegacion
