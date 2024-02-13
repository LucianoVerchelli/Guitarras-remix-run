import { useState } from 'react';

import styles from './styles/index.css'
import Header from './components/header';
import Footer from './components/footer';
import {
    Meta,
    Links,
    Outlet,
    Scripts,
    LiveReload
} from '@remix-run/react'
import Guitarra from './routes/guitarras.$guitarraUrl';


export function meta() {
    return [
      { charset: "utf-8" },
      { title: "GuitarLA - Remix" },
      { name: "viewport", content: "width=device-width,initial-scale=1" },
    ];
  }



export function links(){
    return[
        {
            rel: 'stylesheet',
            href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
        },
        {
            rel:'stylesheet',
            href: styles
        },
        {
            rel:'preconnect',
            href:'https://fonts.googleapis.com'
        },
        {
            rel:'preconnect',
            href:'https://fonts.gstatic.com',
            crossOrigin: "true"
        },
        {
            rel:'stylesheet',
            href:'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap'
        }
    ]
}

export default function App() {

const [carrito, setCarrito] = useState([])

//agregando la guitarra que llega por la url de guitarra 
const agregarCarrito =  guitarra =>{
    //itero sobre las guitarras que llegan para ver si hay alguna duplicada 
   if(carrito.some(guitarraState=>guitarraState.id === guitarra.id)){
        // iterar sobre el array e identificar el elemento duplicado 
        const carritoActualizado = carrito.map( guitarraState =>{
            if(guitarraState.id === guitarra.id){
                //reescribir la cantidad 
                guitarraState.cantidad = guitarra.cantidad 
            }
            return guitarraState
        })

        //añadir al carrito 
        setCarrito(carritoActualizado)
   } else {
    //registros nuevo, agregar al carrito 
    setCarrito([...carrito, guitarra])
   }
}
            const actualizarCantidad = guitarra =>{
                const carritoActualizado = carrito.map(guitarraState =>{
                    if(guitarraState.id === guitarra.id){
                        guitarraState.cantidad = guitarra.cantidad
                    }
                    return guitarraState
                })
                setCarrito(carritoActualizado)
            }
    return(
        <Document>
           <Outlet 
            context={{
              agregarCarrito,
              carrito,
              actualizarCantidad,
            }}

           />
        </Document>
    )
}

function Document({children}) {
    return (
        <html lang="es">
            <head>
                <Meta />
                <Links/>
            </head>
            <body>
                <Header/>
                {children}
        <Footer/>
                <Scripts/>
                <LiveReload/>
            </body>
        </html>
    )
}
