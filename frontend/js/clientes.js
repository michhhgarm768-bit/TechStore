const API = "https://techstore-1-l2zu.onrender.com/clientes";

let clienteEditar = null;

async function cargarClientes() {

    const respuesta = await fetch(API);

    const clientes = await respuesta.json();

    let html = "";

    clientes.forEach(cliente => {

        html += `
        <tr>
            <td>${cliente.nombre}</td>
            <td>${cliente.telefono}</td>
            <td>${cliente.correo}</td>

            <td>

                <button
                    class="btn btn-warning btn-sm me-2"
                    onclick="editarCliente(
                        '${cliente._id}',
                        '${cliente.nombre}',
                        '${cliente.telefono}',
                        '${cliente.correo}'
                    )">
                    Editar
                </button>

                <button
                    class="btn btn-danger btn-sm"
                    onclick="eliminarCliente('${cliente._id}')">
                    Eliminar
                </button>

            </td>

        </tr>
        `;
    });

    document.getElementById("tablaClientes").innerHTML = html;
}

function editarCliente(id, nombre, telefono, correo) {

    clienteEditar = id;

    document.getElementById("nombre").value = nombre;
    document.getElementById("telefono").value = telefono;
    document.getElementById("correo").value = correo;
}

async function guardarCliente() {

    const cliente = {

        nombre: document.getElementById("nombre").value,

        telefono: document.getElementById("telefono").value,

        correo: document.getElementById("correo").value

    };

    const url = clienteEditar
        ? `${API}/${clienteEditar}`
        : API;

    const metodo = clienteEditar
        ? "PUT"
        : "POST";

    await fetch(url, {

        method: metodo,

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(cliente)

    });

    clienteEditar = null;

    cargarClientes();

    document.getElementById("nombre").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("correo").value = "";
}

async function eliminarCliente(id) {

    if (!confirm("¿Deseas eliminar este cliente?")) {
        return;
    }

    await fetch(`${API}/${id}`, {
        method: "DELETE"
    });

    cargarClientes();
}

cargarClientes();