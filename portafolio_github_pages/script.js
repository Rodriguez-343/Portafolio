function mostrarMensaje(proyecto) {
  alert("Estás viendo el proyecto: " + proyecto);
}

const form = document.getElementById("contactForm");
const respuesta = document.getElementById("respuestaForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (nombre === "" || correo === "" || mensaje === "") {
    respuesta.textContent = "Por favor completa todos los campos.";
    return;
  }

  respuesta.textContent = "Gracias, " + nombre + ". Tu mensaje fue registrado correctamente.";
  form.reset();
});

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
