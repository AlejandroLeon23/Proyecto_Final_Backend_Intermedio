from flask import Flask, request, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

@app.route('/guardar_parte_superior', methods=['POST'])
def guardar_parte_superior():
    data = request.get_json()
    expediente = data['expediente']
    nombre = data['nombre']
    apellido = data['apellido']
    fecha = data['fecha']

    # Aquí puedes realizar las operaciones de guardado en la base de datos

    resultado = f'Número de Expediente: {expediente}\nNombre: {nombre}\nApellido: {apellido}\nFecha: {fecha}'
    return jsonify({'message': resultado})

@app.route('/guardar_datos_generales', methods=['POST'])
def guardar_datos_generales():
    data = request.get_json()
    expediente = data['expediente']
    nombre = data['nombre']
    apellido = data['apellido']
    fecha = data['fecha']

    # Aquí puedes realizar las operaciones de guardado en la base de datos

    resultado = f'Número de Expediente: {expediente}\nNombre: {nombre}\nApellido: {apellido}\nFecha: {fecha}'
    return jsonify({'message': resultado})

@app.route('/guardar_cierre', methods=['POST'])
def guardar_cierre():
    data = request.get_json()
    expediente = data['expediente']
    nombre = data['nombre']
    apellido = data['apellido']
    fecha = data['fecha']

    # Aquí puedes realizar las operaciones de guardado en la base de datos

    resultado = f'Número de Expediente: {expediente}\nNombre: {nombre}\nApellido: {apellido}\nFecha: {fecha}'
    return jsonify({'message': resultado})

if __name__ == '__main__':
    app.run()
