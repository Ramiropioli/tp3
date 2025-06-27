
  const palabras = ["manzana", "banana", "pera", "durazno", "frutilla", "mango"];
  const listaElement = document.getElementById("listaPalabras");
  const mensajeError = document.getElementById("mensajeError");
  const inputTexto = document.getElementById("filtroTexto");
  const botonFiltrar = document.getElementById("botonFiltrar");
 


  mostrarPalabras(palabras);

  
  botonFiltrar.addEventListener("click", filtrarPalabras);
  

  function mostrarPalabras(lista) {
    listaElement.innerHTML = "";
    lista.forEach(palabra => {
      const li = document.createElement("li");
      li.innerText = palabra;
      listaElement.appendChild(li);
    });
  }

  function filtrarPalabras() {
    const texto = inputTexto.value.trim().toLowerCase();
    mensajeError.innerText = "";

    if (texto === "") {
      mensajeError.innerText = "Por favor, ingresá un texto para filtrar.";
      return;
    }

    const resultado = palabras.filter(palabra =>  palabra.toLowerCase().includes(texto)
    );

    mostrarPalabras(resultado);
  }

