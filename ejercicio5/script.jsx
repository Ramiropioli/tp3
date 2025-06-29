function Calculadora() {
  const [num1, setNum1] = React.useState("");
  const [num2, setNum2] = React.useState("");
  const [operacion, setOperacion] = React.useState("suma");
  const [resultado, setResultado] = React.useState(null);
  const [error, setError] = React.useState("");

  const n1 = parseFloat(num1);
  const n2 = parseFloat(num2);
  const esDivisionPorCero = operacion === "division" && n2 === 0;

    
  const calcular = (e) => {
    e.preventDefault();
    if (isNaN(n1) || isNaN(n2)) {
      setResultado(null);
      setError("Por favor, ingresá números válidos.");
      return;
    }

    let res;
    switch (operacion) {
      case "suma":
        res = n1 + n2;
        break;
      case "resta":
        res = n1 - n2;
        break;
      case "multiplicacion":
        res = n1 * n2;
        break;
      case "division":
        res = n1 / n2;
        break;
      default:
        res = "Operación no permitida.";
    }

    setError("");
    setResultado(res);
  };
  if (
  operacion === "division" &&
  parseFloat(num2) === 0 &&
  error !== "Error: no se puede dividir por cero."
) {
  setError("Error: no se puede dividir por cero.");
  setResultado(null);
} else if (
  error === "Error: no se puede dividir por cero." &&
  (operacion !== "division" || parseFloat(num2) !== 0)
) {
  setError("");
}

  return (
    <form onSubmit={calcular}>
    <div>
      <input
        type="number"
        value={num1}
        placeholder="Número 1"
        onChange={(e) => setNum1(e.target.value)}
      />

      <input
        type="number"
        value={num2}
        placeholder="Número 2"
        onChange={(e) => setNum2(e.target.value)}
      />

      <select value={operacion} onChange={(e) => setOperacion(e.target.value)}>
        <option value="suma">Suma</option>
        <option value="resta">Resta</option>
        <option value="multiplicacion">Multiplicación</option>
        <option value="division">División</option>
      </select>

      <button type="submit" disabled={esDivisionPorCero}>
        Calcular
      </button>

      <div id="resultado" style={{ minHeight: "2em" }}>
        {error && <p>{error}</p>}
        {resultado !== null && !error && <p>Resultado: {resultado}</p>}
      </div>
    </div>
    </form>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Calculadora />);