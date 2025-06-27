
  const listaTareas = document.getElementById("listaTareas");
 const boton = document.getElementById("mostrar");
 const link = "https://jsonplaceholder.typicode.com/todos";

boton.addEventListener("click", async () => {
  const response= await fetch(link );
  const datos= await response.json()
  
      const tareasCompletadas = datos.filter(tarea => tarea.completed === true);

      listaTareas.innerHTML = "";
      tareasCompletadas.forEach(tarea => {
        const li = document.createElement("li");
        li.innerText = tarea.title;
        listaTareas.appendChild(li);
      });

      if (!response.ok) {
        console.error("Error al obtener tareas:", error);
      listaTareas.innerHTML = "<li>Error al cargar las tareas.</li>";
      }
});

    
    