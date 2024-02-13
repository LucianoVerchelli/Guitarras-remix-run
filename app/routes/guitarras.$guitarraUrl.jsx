import {useState} from "react"
import { useLoaderData, useOutletContext} from "@remix-run/react"
import { getGuitarra } from "../models/guitarras.server"
import styles from "../styles/guitarra.css"


export function meta({data}){
    return ([
      {title: `GuitarLA - ${data.data[0].attributes.nombre}`},
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
    const [cantidad, setCantidad] = useState(0)
    const guitarra = useLoaderData()
    const { nombre, descripcion, imagen, precio } = guitarra.data[0].attributes

    //llamando al context de root aca 
    const { agregarCarrito } = useOutletContext()
    
    const handleSubmit = e => {
      e.preventDefault()

      if(cantidad < 1){
        alert("debes seleccionar la cantidad que quieres comprar")
        return{}
      }

      const guitarraSeleccionada ={

        id: guitarra.data[0].id,
        imagen: imagen.data.attributes.url,
        nombre,
        precio,
        cantidad

      }
      //mando la guitarra al carrito 
      agregarCarrito(guitarraSeleccionada)
    }

  return (
<main className="contenedor guitarra">
<img className="imagen" src={imagen.data.attributes.url} alt={`Imagen de la guitarra ${nombre}`} />
<div className="contenido">
    <h3>{nombre}</h3>
    <p className="texto">{descripcion}</p>
    <p className="precio">${precio}</p>

    <form onSubmit={handleSubmit} className="formulario">
    <label htmlFor="cantidad">Cantidad</label>

    <select
    
    onChange={e => setCantidad(+e.target.value)}
     id="cantidad">
    <option value="0">--Seleccione--</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
   

    </select>
    <input type="submit" name="" id="" value="agregar al carrito" />
    </form>

</div>
</main>
  )
}

export default Guitarra
