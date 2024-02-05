import { useLoaderData } from "@remix-run/react"
import { getGuitarra } from "../models/guitarras.server"
import styles from "../styles/guitarra.css"


export function meta(){
    return ([
      {title: 'GuitarLA - Guitarra'},
      {description: 'Venta de guitarras, blog de musica, Venta de cursos, informacion'}
    ])
  }

export function links(){
    return [
        {
            rel: "stylesheet",
            href: styles
        }
    ]
}


export async function loader({request, params}){
    const { guitarraUrl } = params 
const guitarra = await getGuitarra( guitarraUrl )

    return guitarra
}

function Guitarra() {
    const guitarra = useLoaderData()
    const { nombre, descripcion, imagen, precio } = guitarra.data[0].attributes
  return (
<main className="contenedor guitarra">
<img className="imagen" src={imagen.data.attributes.url} alt={`Imagen de la guitarra ${nombre}`} />
<div className="contenido">
    <h3>{nombre}</h3>
    <p className="texto">{descripcion}</p>
    <p className="precio">${precio}</p>
    <p className="btn">añadir al carrito</p>

</div>
</main>
  )
}

export default Guitarra