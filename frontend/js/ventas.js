const API = "http://127.0.0.1:8000/ventas";

async function cargarVentas() {

    const respuesta = await fetch(API);

    const ventas = await respuesta.json();

    let html = "";

    ventas.forEach(venta => {

        html += `
        <tr>
            <td>${venta.cliente}</td>
            <td>$${venta.total}</td>
        </tr>
        `;
    });

    document.getElementById("tablaVentas").innerHTML = html;
}

async function guardarVenta() {

    const cliente = document.getElementById("cliente").value;

    const total = Number(
        document.getElementById("total").value
    );

    const venta = {

        cliente: document.getElementById("cliente").value,
    
        producto: document.getElementById("producto").value,
    
        total: Number(document.getElementById("total").value)
    
    };

    await fetch(API, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(venta)

    });

    const fecha = new Date().toLocaleDateString();

    document.getElementById("ticket").innerHTML = `
        <h4>TECHSTORE</h4>

        <p><strong>Cliente:</strong> ${cliente}</p>

        <p><strong>Total:</strong> $${total}</p>

        <p><strong>Fecha:</strong> ${fecha}</p>

        <hr>

        <p>Gracias por su compra.</p>
    `;

    cargarVentas();

    document.getElementById("cliente").value = "";
    document.getElementById("total").value = "";
}

function imprimirTicket() {

    window.print();
}

cargarVentas();