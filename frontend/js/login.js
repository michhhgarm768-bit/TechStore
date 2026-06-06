const API = "https://techstore-1-12zu.onrender.com/usuarios/login";

async function login() {

    alert("Entró a la función login");

    const datos = {
        usuario: document.getElementById("usuario").value,
        password: document.getElementById("password").value
    };

    const respuesta = await fetch(API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(datos)
    });

    if (respuesta.ok) {

        alert("Bienvenido a TechStore");

        window.location.href = "index.html";

    } else {

        alert("Usuario o contraseña incorrectos");

    }
}