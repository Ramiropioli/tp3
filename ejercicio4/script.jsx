function BotonesAlternados() {
  const [botonActivo, setBotonActivo] = React.useState("izquierdo");

  const manejarClick = (lado) => {
    setBotonActivo(lado === "izquierdo" ? "derecho" : "izquierdo");
  };

  return (
    <div>
      <button 
        onClick={() => manejarClick("izquierdo")} 
        disabled={botonActivo !== "izquierdo"}>
        Izquierdo
      </button>

      <button 
        onClick={() => manejarClick("derecho")} 
        disabled={botonActivo !== "derecho"}>
        Derecho
      </button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BotonesAlternados />); 