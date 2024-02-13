import imagen from "../../public/img/nosotros.jpg"
import styles from "../styles/nosotros.css"


export function meta(){
  return ([
    {title: 'GuitarLA - Sobre Nosotros'},
    {description: 'Venta de guitarras, blog de musica, Venta de cursos, informacion'}
  ])
   
}

// traigo la hoja de estilos unica para nosotros, para no agrupar todo en una misma hoja de estilo 
export function links(){
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}

function Nosotros() {

  return (
    <main className="contenedor nosotros">
      <h2 className="heading">
        Nosotros
      </h2>
      <div className="contenido">
        <img src={imagen} alt="imagen nosotros" />

        <div>
        <p>Etiam lorem nulla, vestibulum sed enim at, sodales efficitur metus. In commodo sem vel dictum finibus. Cras a scelerisque est. Nunc nec pretium enim. Fusce ac sapien nulla. Duis vestibulum lorem finibus ipsum aliquam sodales. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent in auctor odio. Sed quis dictum sapien.</p>
         
        <p>Etiam lorem nulla, vestibulum sed enim at, sodales efficitur metus. In commodo sem vel dictum finibus. Cras a scelerisque est. Nunc nec pretium enim. Fusce ac sapien nulla. Duis vestibulum lorem finibus ipsum aliquam sodales. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent in auctor odio. Sed quis dictum sapien.</p>
        </div>

      </div>
    </main>
  )
}

export default Nosotros
