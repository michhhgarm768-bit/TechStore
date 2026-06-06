async function cargarReportes() {

    // ==========================
    // VENTAS POR FECHA
    // ==========================

    const respuestaVentas =
    fetch('https://techstore-1-l2zu.onrender.com/ventas');
        await respuestaVentas.json();

    let htmlVentas = '';

    ventas.forEach(venta => {

        const fecha = new Date(
            venta.createdAt
        ).toLocaleDateString();

        htmlVentas += `
        <tr>
            <td>${venta.cliente}</td>
            <td>${venta.producto}</td>
            <td>${fecha}</td>
            <td>$${venta.total}</td>
        </tr>
        `;
    });

    document.getElementById('ventasFecha').innerHTML =
        htmlVentas;

    // ==========================
    // PRODUCTOS MÁS VENDIDOS
    // ==========================

    const conteo = {};

    ventas.forEach(venta => {

        if (!conteo[venta.producto]) {

            conteo[venta.producto] = 0;
        }

        conteo[venta.producto]++;
    });

    let htmlMasVendidos = '';

    for (let producto in conteo) {

        htmlMasVendidos += `
        <tr>
            <td>${producto}</td>
            <td>${conteo[producto]}</td>
        </tr>
        `;
    }

    document.getElementById('productosVendidos').innerHTML =
        htmlMasVendidos;

    // ==========================
    // INVENTARIO DISPONIBLE
    // ==========================

    const respuestaProductos =
        await fetch('https://techstore-1-l2zu.onrender.com/productos');

    const productos =
        await respuestaProductos.json();

    let htmlInventario = '';

    productos.forEach(producto => {

        htmlInventario += `
        <tr>
            <td>${producto.nombre}</td>
            <td>${producto.stock}</td>
        </tr>
        `;
    });

    document.getElementById('inventario').innerHTML =
        htmlInventario;
}

cargarReportes();