import {getGuitarras} from "../models/guitarras.server"
import {getPosts} from "../models/posts.server"
import {getCurso} from "../models/curso.server"

import { useLoaderData } from "@remix-run/react"

import ListadoGuitarras from "../components/listadoGuitarras"
import ListadoPosts from "../components/listadoPosts"
import Curso from "../components/curso"

import stylesGuitarras from "../styles/guitarras.css"
import stylesPosts from "../styles/posts.css"
import stylesCurso from "../styles/curso.css"

export function meta(){

}
// conecto las secciones con sus respectivas hojas de estilos 
export function links(){
return[
  {
    rel:"stylesheet",
    href: stylesGuitarras
  }, 
  {
    rel: "stylesheet",
    href: stylesPosts
  },
  {
    rel: "stylesheet",
    href: stylesCurso
  }
]
}

export async function loader(){

//traigo de la api guitarras posts y cursos con un promise al para que vaya cargando 1 x 1
const [guitarras, posts, curso] = await Promise.all([
  getGuitarras(),
  getPosts(),
  getCurso()
])



  return {
    guitarras: guitarras.data, 
    posts: posts.data,
    curso: curso.data
  }
}

function Index() {
  const {guitarras, posts, curso} = useLoaderData();

  return (
    <>
    <main className="contenedor">
               <ListadoGuitarras guitarras={guitarras}/>
               
    </main>
    <Curso curso={curso.attributes}/>
    <section className="contenedor">
    <ListadoPosts posts={posts}/>
    </section>
    </>
  )
}

export default Index
