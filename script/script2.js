let propietario, modelo, placa, tipov, fecha, hora, cantidad;

let formulario2 = document.getElementById(`form`);

formulario2.addEventListener(`submit`, (e) => {
    e.preventDefault();
    leerdatos()
});

function leerdatos() {
    propietario = document.getElementById(`propietario`).value;
    modelo = document.getElementById(`modelo`).value;
    placa = document.getElementById(`placa`).value;
    tipov = document.getElementById(`tipov`).value;
    fecha = document.getElementById(`fecha`).value;
    hora = document.getElementById(`hora`).value;
    cantidad = document.getElementById(`cantidad`).value;
    validardatos(propietario, modelo, placa, tipov, fecha, hora, cantidad);
    guardarlocalstorage(propietario, modelo, placa, tipov, fecha, hora, cantidad);
}

function validardatos(propietario, modelo, placa, tipov, fecha, hora, cantidad) {
    if (propietario.length == 0 || modelo.length == 0 || tipov.length == 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
        })

    }

}




function guardarlocalstorage(propietario, modelo, placa, tipov, fecha, hora, cantidad) {
    localStorage.setItem(`propietario`, propietario);
    localStorage.setItem(`modelo`, modelo);
    localStorage.setItem(`placa`, placa);
    localStorage.setItem(`tipov`, tipov);
    localStorage.setItem(`fecha`, fecha);
    localStorage.setItem(`hora`, hora);
    localStorage.setItem(`cantidad`, cantidad);
    listardatos(propietario, modelo, placa, tipov, fecha, hora, cantidad);
}
function listardatos(propietario, modelo, placa, tipov, fecha, hora, cantidad) {
    let propietarioUsu = localStorage.getItem(`propietario`);
    let modeloUsu = localStorage.getItem(`modelo`);
    let placaUsu = localStorage.getItem(`placa`);
    let tvehiculoUsu = localStorage.getItem(`tipov`);
    let fdentregaUsu = localStorage.getItem(`fecha`);
    let hdinicioUsu = localStorage.getItem(`hora`);
    let cdhorasUsu = localStorage.getItem(`cantidad`);

}
