import stylesCarrito from "../styles/carrito.css";
import { useOutletContext } from "@remix-run/react";
import { useEffect, useState } from "react";
export function links() {
  return [
    {
      rel: "stylesheet",
      href: stylesCarrito,
    },
  ];
}

export function meta() {
  return [
    { title: "GuitarLA - Carrito" },
    {
      description:
        "carrito de compras, pago de resumen, resumen, total a pagar",
    },
  ];
}

function Carrito() {


    const [total, setTotal] = useState(0)

   
  const { carrito, actualizarCantidad } = useOutletContext();
  useEffect(()=>{
    const calculoTotal = carrito.reduce((total, producto)=>total + (producto.cantidad * producto.precio), 0)
    setTotal(calculoTotal)
}, [carrito])
  return (
    <main className="contenedor">
      <h1 className="heading">Carrito de compras</h1>
      <div className="contenido">
        <div className="carrito">
          <h2>Articulos</h2>

          {carrito.length === 0
            ? "carrito vacio"
            : carrito.map((producto) => (
                <div key={producto.id} className="producto">

                  <div>
                    <img src={producto.imagen} alt={`imagen del producto ${producto.nombre}`} />
                  </div>

                  <div>
                    <p className="nombre">{producto.nombre}</p>

                        <p>cantidad:</p>
                            <select name="" id="" value={producto.cantidad} className="select" onChange={e=> actualizarCantidad({
                                cantidad: +e.target.value,
                                id: producto.id
                            })}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            </select>
                    <p className="precio">Precio: $<span>{producto.precio}</span></p>
                    <p className="subtotal">Subtotal: $<span>{producto.cantidad * producto.precio}</span></p>
                  </div>

                </div>
              ))}
        </div>

        <aside className="resumen">
          <h3>Resumen del Pedido</h3>
          <p>Total a pagar: ${total}</p>

          {/* hacer funcional los botones para comprar y limpiar el resumen */}
          <div className="container-btn">
          <button className="finalizar">comprar</button>
          <button className="borrar-resumen">borrar</button>
          </div>
        </aside>
      </div>
    </main>
  );
}

export default Carrito;
