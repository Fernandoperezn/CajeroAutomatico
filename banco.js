
const usuariosString = localStorage.getItem("usuarios");
const usuarios = JSON.parse(usuariosString);

const currentUser = localStorage.getItem("currentUser");



if(currentUser){
    console.log("El usuario es ",currentUser);
    document.getElementById("bienvenida").innerText = "BIENVENIDO " + currentUser.toUpperCase();
    const userObject = usuarios.find((user) => user.user === currentUser );
    document.getElementById("psaldo").innerText = "Tu saldo es de: " + userObject.saldo; 
    
}else {
    window.location.href = "index.html";
}





// Obtén todos los enlaces con la clase "mostrar-enlace"
const mostrarEnlaces = document.querySelectorAll(".mostrar-enlace");

// Agrega un evento de clic a cada enlace
mostrarEnlaces.forEach(function (enlace) {
    enlace.addEventListener("click", function (event) {
        // Evita que el enlace realice la acción predeterminada (navegar)
        event.preventDefault();

        // Obtiene el valor del atributo "data-target" para determinar qué sección mostrar/ocultar
        const targetId = this.getAttribute("data-target");
        const targetSeccion = document.getElementById(targetId);

        // Verifica si la sección está oculta o visible
        if (targetSeccion.style.display === "none" || targetSeccion.style.display === "") {
            // Muestra la sección
            targetSeccion.style.display = "block";
        } else {
            // Oculta la sección si ya está visible
            targetSeccion.style.display = "none";
        }
    });
});


