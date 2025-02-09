
let listaAmigos = [];
const limite = 5;
const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+$/;
const lista = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');
const nombreInput = document.getElementById('amigo');
function asignarTextoElemento(elemento, texto) {
const elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function mostrarAmigos() {
    lista.innerHTML = listaAmigos.map(amigo => `<li>${amigo}</li>`).join('');
}

function agregarAmigo() {
    const nombre = nombreInput.value.trim();
    if (listaAmigos.length == 0) {
        resultado.textContent = "";
    }
    if (!regex.test(nombre)) {
        asignarTextoElemento('h2', 'Debes ingresar un nombre válido');
        limpiarCaja();
        return;
    }
    if (listaAmigos.includes(nombre)) {
        asignarTextoElemento('h2', 'Ya has ingresado este nombre');
        limpiarCaja();
        return;
    }
    if (listaAmigos.length >= limite) {
        asignarTextoElemento('h2', 'Has superado el límite');
        limpiarCaja();
        return;
    }
    listaAmigos.push(nombre);
    mostrarAmigos();
    limpiarCaja();
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        asignarTextoElemento('h2', 'No has ingresado ningún nombre en la lista!');
        return;
    }
    const x = Math.floor(Math.random() * listaAmigos.length);
    resultado.innerHTML = `<li>Tu amigo secreto es: ${listaAmigos[x]}</li>`;
    lista.textContent = "";
    listaAmigos = [];
}