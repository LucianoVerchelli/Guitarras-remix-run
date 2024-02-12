import {getPosts} from "../models/posts.server"
import { useLoaderData } from "@remix-run/react"
import ListadoPosts from "../components/listadoPosts"
import styles from "../styles/posts.css"



export function  links(){
  return [
    {
      rel:"stylesheet",
      href: styles
    }
  ]
}

export async function loader(){
const posts = await getPosts()
return posts.data
}

function Blog() {

  const posts = useLoaderData()

  return (
    <main className="contenedor">
<ListadoPosts posts={posts}/>
    </main>
  )
}

export default Blog
