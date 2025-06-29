
  const operacionSelect = document.getElementById("operacion");
  const numero1Input = document.getElementById("numero1");
  const numero2Input = document.getElementById("numero2");
  const botonCalcular = document.getElementById("calcular");
  const resultadoDiv = document.getElementById("resultado");

  function validarDivisionPorCero() {
    const num2 = parseFloat(numero2Input.value);
    if (operacionSelect.value === "division" && num2 === 0) {
      botonCalcular.disabled = true;
      resultadoDiv.innerText = "Error: no se puede dividir por cero.";
    } else {
      botonCalcular.disabled = false;
      resultadoDiv.innerText = "";
    }
  }

  numero2Input.addEventListener("input", validarDivisionPorCero);
  operacionSelect.addEventListener("change", validarDivisionPorCero);

 formulario.addEventListener("submit",function (e) {

    e.preventDefault();
    if (botonCalcular.disabled) return; 

  botonCalcular.addEventListener("click", () => {
    const num1 = parseFloat(numero1Input.value);
    const num2 = parseFloat(numero2Input.value);
    const operacion = operacionSelect.value;
    let resultado;

    if (isNaN(num1) || isNaN(num2)) {
      resultadoDiv.innerText = "Por favor, ingresá números válidos.";
      return;
    }

    switch (operacion) {
      case "suma":
        resultado = num1 + num2;
        break;
      case "resta":
        resultado = num1 - num2;
        break;
      case "multiplicacion":
        resultado = num1 * num2;
        break;
      case "division":
        resultado = num1 / num2;
        break;
      default:
        resultado = "Operación no permitida.";
    }

    resultadoDiv.innerText = "Resultado: " + resultado;
  });
 });
