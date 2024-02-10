import { getPost } from "../models/posts.server"
import { useLoaderData } from "@remix-run/react"
import {formatearFecha } from "../utils/helpers"
import styles from "../styles/posts.css"

export function meta({data}){
    return ([
      {title: `GuitarLA - ${data.data[0].attributes.titulo}`},
      {description: 'Venta de guitarras, blog de musica, Venta de cursos, informacion'}
    ])
  }

export function links(){
    return[
        {
            rel: "stylesheet",
            href: styles
        }
    ]
}


export async function loader({params}){
    const { postUrl } = params 
    const post = await getPost(postUrl)

    return post
}

export default function Posts() {
    const post = useLoaderData()

    const {titulo, contenido, imagen, publishedAt } = post.data[0].attributes
  return (
    <article className="contenedor post">
<img className="imagen" src={imagen.data.attributes.url} alt="imagen del blog" />
        <div className="contenido">
            <h3>{titulo}</h3>
            <p className="fecha">{formatearFecha(publishedAt)}</p>
            <p className="texto">{contenido}</p>
        </div>
    </article>
  )
}


