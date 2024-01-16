const icones = document.querySelectorAll(".icone");

const trocaTipoInput = (e) => {
  let elemento = e.target;
  while(!elemento.classList.contains("input_container")) {
    elemento = elemento.parentNode;
  }
  console.log(elemento);
  const input = elemento.querySelector("input");
  input.type = (input.type == "text") ? "password" : "text";
}

icones.forEach((icone) => icone.addEventListener("click", (e) => trocaTipoInput(e)))