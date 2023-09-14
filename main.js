const formulario = document.getElementById('formulario');

console.log('Este es el archivo main.js');

const datosUsuarios = [
    {user: 'fernando',password: '123', saldo: 500},
    {user: 'daniela',password: '456', saldo: 300},
    {user: 'rodrigo',password: '789', saldo: 400}
]

localStorage.setItem("usuarios",JSON.stringify(datosUsuarios));


function validarIngreso(paramUser, paramPass) {
    let usuarioEncontrado = false; // Inicializa una variable de bandera

    for (let index = 0; index < datosUsuarios.length; index++) {
        if (paramUser == datosUsuarios[index].user && paramPass == datosUsuarios[index].password) {
            usuarioEncontrado = true; // Establece la bandera en verdadero si se encuentra una coincidencia
            
            break; // Sal del bucle temprano si se encuentra una coincidencia
        }
    }

    if (usuarioEncontrado) {
        localStorage.setItem("currentUser", paramUser);
        mostrarPantalla();
    } else {
        alert("Datos incorrectos, intenta de nuevo");
    }
};

function mostrarPantalla(){
    window.location.href = "banco.html";
    
}

formulario.addEventListener('submit',(evento)=>{
    evento.preventDefault();
    let usuarioInput = document.getElementById('usuario').value;
    let contraseñaInput = document.getElementById('password').value;

    validarIngreso(usuarioInput,contraseñaInput);
});


