// Mostrar el spinner cuando se carga la página
window.addEventListener("load", function() {
    var spinner = document.getElementById("spinner");
    spinner.style.display = "none";  // Ocultamos el spinner después de que la página haya cargado
});

// Mostrar el spinner cuando se navega entre páginas
window.addEventListener("beforeunload", function() {
    var spinner = document.getElementById("spinner");
    spinner.style.display = "block";  // Mostramos el spinner antes de que la página cargue
});
