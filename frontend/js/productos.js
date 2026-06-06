const API = "https://techstore-1-12zu.onrender.com/productos";

let productoEditar = null;

async function cargarProductos() {

    const respuesta = await fetch(API);

    const productos = await respuesta.json();

    let html = "";

    productos.forEach(producto => {

        html += `
        <tr>
            <td>${producto.nombre}</td>
            <td>${producto.descripcion}</td>
            <td>$${producto.precio}</td>
            <td>${producto.stock}</td>

            <td>

                <button
                    class="btn btn-warning btn-sm me-2"
                    onclick="editarProducto(
                        '${producto._id}',
                        '${producto.nombre}',
                        '${producto.descripcion}',
                        ${producto.precio},
                        ${producto.stock}
                    )">
                    Editar
                </button>

                <button
                    class="btn btn-danger btn-sm"
                    onclick="eliminarProducto('${producto._id}')">
                    Eliminar
                </button>

            </td>

        </tr>
        `;
    });

    document.getElementById("tablaProductos").innerHTML = html;
}

function editarProducto(id, nombre, descripcion, precio, stock) {

    productoEditar = id;

    document.getElementById("nombre").value = nombre;
    document.getElementById("descripcion").value = descripcion;
    document.getElementById("precio").value = precio;
    document.getElementById("stock").value = stock;
}

async function guardarProducto() {

    const producto = {

        nombre: document.getElementById("nombre").value,

        descripcion: document.getElementById("descripcion").value,

        precio: Number(document.getElementById("precio").value),

        stock: Number(document.getElementById("stock").value)

    };

    const url = productoEditar
        ? `${API}/${productoEditar}`
        : API;

    const metodo = productoEditar
        ? "PUT"
        : "POST";

    await fetch(url, {

        method: metodo,

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(producto)

    });

    productoEditar = null;

    cargarProductos();

    document.getElementById("nombre").value = "";
    document.getElementById("descripcion").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("stock").value = "";
}

async function eliminarProducto(id) {

    if (!confirm("¿Deseas eliminar este producto?")) {
        return;
    }

    await fetch(`${API}/${id}`, {
        method: "DELETE"
    });

    cargarProductos();
}

cargarProductos();