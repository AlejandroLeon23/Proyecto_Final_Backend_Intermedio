const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'expedientes'
});

// Establecer la conexión a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión exitosa a la base de datos');
});

// Middleware para procesar datos JSON
app.use(express.json());

// //
// app.get("/", (req, res) =>{
//   const holaMundo = "hola mundo"
//   console.log(holaMundo)
// } )

// Ruta para guardar la información
app.post('/guardar_informacion', (req, res) => {
  const { expediente, nombre, apellido, fecha } = req.body;

  const sql = 'INSERT INTO expediente (expediente, nombre, apellido, fecha) VALUES (?, ?, ?, ?)';
  const values = [expediente, nombre, apellido, fecha];

  // Ejecutar la consulta SQL
  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error al guardar la información:', err);
      res.status(500).json({ message: 'Error al guardar la información' });
      return;
    }
    res.json({ message: 'Información guardada correctamente' });
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});

// Cerrar la conexión a la base de datos cuando se detenga el servidor
process.on('SIGINT', () => {
  connection.end((err) => {
    if (err) {
      console.error('Error al cerrar la conexión:', err);
      process.exit(1);
    }
    console.log('Conexión cerrada');
    process.exit(0);
  });
});

function guardarInformacion() {
  const expediente = document.getElementById('expediente').value;
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const fecha = document.getElementById('fecha').value;

  const data = { expediente, nombre, apellido, fecha };

  fetch('/guardar_informacion', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      const resultado = document.getElementById('resultado');
      resultado.textContent = data.message;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}
