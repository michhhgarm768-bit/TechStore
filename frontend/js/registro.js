const API = "http://127.0.0.1:8000/usuarios/registro";

async function registrar() {

    const usuario = {

        nombre: document.getElementById("nombre").value,

        usuario: document.getElementById("usuario").value,

        password: document.getElementById("password").value

    };

    await fetch(API, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(usuario)

    });

    alert("Usuario registrado correctamente");

    window.location.href = "login.html";
}