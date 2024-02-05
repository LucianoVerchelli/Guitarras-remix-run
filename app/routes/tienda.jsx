import { useLoaderData } from "@remix-run/react"
import { getGuitarras } from "../models/guitarras.server"
import Guitarra from "../components/guitarras"
import styles from "../styles/guitarras.css"

//datos meta para cambiar 
export function meta(){
  return ([
    {title: 'GuitarLA - Tienda'},
    {description: 'Venta de guitarras, blog de musica, Venta de cursos, informacion'}
  ])
}

//links de las rutas 
export function links(){
  return [
    {
      rel: "stylesheet",
      href: styles
    }
  ]
}

//utilizo fetch con async await para taer todos los datos del backend de strapi. 
export async function loader(){

const guitarras = await getGuitarras()



  return guitarras.data
}



function Tienda() {

const guitarras = useLoaderData()

  return (
    <main className="contenedor">
      <h2 className="heading">Nuestras Guitarras</h2>

      {guitarras?.length && (
      <div className="guitarras-grid">
        {guitarras.map( guitarra => (
          <Guitarra
          key={guitarra.id}
          guitarra={guitarra.attributes}/>
        ))}

      </div>

    )}
    </main>
  )
}

export default Tienda
