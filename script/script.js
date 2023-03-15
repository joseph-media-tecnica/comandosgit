let nonbre, correo, mensaje;

let formulario = document.getElementById(`form`);

formulario.addEventListener(`submit`, (e) => {
    console.log(`hola`);
    e.defaultPrevented();
    leerdatos()
});

function leerdatos() {
    nombre = document.getElementById(`nombre`),values;
    correo = document.getElementById(`correo`).values;
    mensaje = document.getElementById(`textarea`).values;
    alert(`error`);
    validardatos(nombre, correo, mensaje);
    guardarlocalstorage(nombre, correo, mensaje);

};



function validardatos(nombre, correo, mensaje) {
if (nombre.length == 0 || correo.length == 0 || mensaje.length == 0) {
        alert(`error`)
    
    }

};

function guardarlocalstorage(nombre, correo, mensaje) {
    localStorage.setItem(`nombre`, nombre);
    localStorage.setItem(`correo`, correo);
    localStorage.setItem(`mensaje`, mensaje);
    listardatos(nombre, correo, mensaje);
};
function listardatos(nombre, correo, mensaje) {
    let nombreus = localStorage.getItem(`nombre`,);
    let correous = localStorage.getItem(`correo`,);
    let mensajeus = localStorage.getItem(`mensaje`,);
};


