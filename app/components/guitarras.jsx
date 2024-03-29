import { Link, Outlet, useOutletContext} from "@remix-run/react"

function Guitarra({guitarra}) {
const {descripcion, imagen, precio, url, nombre} = guitarra



  return (
    <div className="container">
   <div className="guitarra">
    <img src={imagen.data.attributes.formats.medium.url} alt={`imagen guitarra ${nombre}`} />
    <div className="contenido">
        <h3>{nombre}</h3>
        <p className="descripcion">{descripcion}</p>
        <p className="precio">${precio}</p>

        <Link className="enlace" to={`/guitarras/${url}`}>Ver producto</Link>
        
            <Outlet context={useOutletContext()}/>
    </div>
   </div>
   </div>
  )
}

export default Guitarra
