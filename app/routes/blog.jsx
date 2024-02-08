import {getPosts} from "../models/posts.server"
import { useLoaderData } from "@remix-run/react"
import Post from "../components/post"
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
      <h2 className="heading">

      </h2>
      <div className="blog">
          {posts.map(post =>(
            <Post
              key={post.id}
              post={post.attributes}
            />
          ))}
      </div>
    </main>
  )
}

export default Blog
