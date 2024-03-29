 import Guitarra from "./guitarras";

export default function ListadoGuitarras({guitarras}) {
  return (
    <>
      <h2 className="heading">Nuestras Guitarras</h2>

      {guitarras?.length && (
        <div className="guitarras-grid">
          {guitarras.map((guitarra) => (
            <Guitarra key={guitarra.id} guitarra={guitarra.attributes} />
          ))}
        </div>
      )}
    </>
  );
}
