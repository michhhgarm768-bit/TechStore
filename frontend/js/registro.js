const API = "https://techstore-etr0.onrender.com/usuarios/registro";

async function registrar() {

    const usuario = {
        nombre: document.getElementById("nombre").value,
        usuario: document.getElementById("usuario").value,
        password: document.getElementById("password").value
    };

    try {

        const respuesta = await fetch(API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usuario)
        });

        const datos = await respuesta.json();

        if (respuesta.ok) {

            alert("Usuario registrado correctamente");
            window.location.href = "login.html";

        } else {

            alert("Error: " + JSON.stringify(datos));
        }

    } catch(error) {

        alert("Error de conexión: " + error.message);
    }
}