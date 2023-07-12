function guardarParteSuperior() {
    var expediente = document.getElementById("expediente").value;
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var fecha = document.getElementById("fecha").value;

    var datos = {
        expediente: expediente,
        nombre: nombre,
        apellido: apellido,
        fecha: fecha
    };

    fetch('/guardar_parte_superior', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("parte-superior-datos").textContent = data.message;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function guardarDatosGenerales() {
    var expediente = document.getElementById("expediente").value;
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var fecha = document.getElementById("fecha").value;

    var datos = {
        expediente: expediente,
        nombre: nombre,
        apellido: apellido,
        fecha: fecha
    };

    fetch('/guardar_datos_generales', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("datos-generales-datos").textContent = data.message;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function guardarCierre() {
    var expediente = document.getElementById("expediente").value;
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var fecha = document.getElementById("fecha").value;

    var datos = {
        expediente: expediente,
        nombre: nombre,
        apellido: apellido,
        fecha: fecha
    };

    fetch('/guardar_cierre', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("cierre-datos").textContent = data.message;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
