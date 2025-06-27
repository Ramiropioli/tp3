function IMCForm() {
  const [peso, setPeso] = React.useState("");
  const [altura, setAltura] = React.useState("");
  const [resultado, setResultado] = React.useState(null);
  const [mensaje, setMensaje] = React.useState("");
  const [clase, setClase] = React.useState("");

  const calcularIMC = (e) => {
    e.preventDefault();

    const p = parseFloat(peso);
    const a = parseFloat(altura);

    if (isNaN(p) || isNaN(a) || p <= 0 || a <= 0) {
      setMensaje("Por favor, ingresá valores válidos.");
      setClase("rojo");
      setResultado(null);
      return;
    }

    const imc = p / (a * a);
    const imcRedondeado = imc.toFixed(2);
    setResultado(imcRedondeado);

    if (imc < 18.5) {
      setMensaje("Nivel bajo de IMC.");
      setClase("amarillo");
    } else if (imc >= 18.5 && imc <= 24.9) {
      setMensaje("Nivel normal de IMC.");
      setClase("verde");
    } else if (imc >= 25 && imc <= 29.9) {
      setMensaje("Nivel de sobrepeso.");
      setClase("naranja");
    } else {
      setMensaje("Nivel de obesidad.");
      setClase("rojo");
    }
  };

  return (
    <form onSubmit={calcularIMC}>
      <input
        type="number"
        placeholder="Peso en kilogramos"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
        step="any"
      />
      <input
        type="number"
        placeholder="Altura en metros"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
        step="any"
      />
      <button type="submit">Calcular IMC</button>

      {mensaje && (
        <div className={`mensaje ${clase}`}>
          Tu IMC es: {resultado} — {mensaje}
        </div>
      )}
    </form>
  );
}

ReactDOM.render(<IMCForm />, document.getElementById("root"));

