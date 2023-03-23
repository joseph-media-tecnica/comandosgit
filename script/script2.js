let propietario,modelo,placa,tvehiculo,fdentrega,hdinicio,cdhoras;

let form=document.querySelector(`#form`)

formulario.addEventListener(`submit`, (e)=> {
    e.preventDefault
    boton()
})

function leerdatos(){
propietario=document.querySelector(`#caja1`).value;
modelo=document.querySelector(`#caja2`).value;
placa=document.querySelector(`#caja3`).value;
tdevehiculo=document.querySelector(`#caja4`).value;
fdentrega=document.querySelector(`#caja5`).value;
hdinicio=document.querySelector(`#caja6`).value;
cdhoras=document.querySelector(`#caja7`).value;
validardatos(propietario,modelo,placa,tvehiculo,fdentrega,hdinicio,cdhoras);
guardarlocalstorage(propietario,modelo,placa,tvehiculo,fdentrega,hdinicio,cdhoras);
}

function validardatos( propietario,modelo,placa,tvehiculo,fdentrega,hdinicio,cdhoras){
    if ( propietario.length==0 || modelo.length==0 || placa.length==0 || tvehiculo.length==0 || fdentrega.length==0 || hdinicio.length==0 || cdhoras.length==0){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'falta informacion',
            footer: '<a href="">Why do I have this issue?</a>'
          })  
    }
}



function guardarlocalstorage(propietario,modelo,placa,tvehiculo,fdentrega,hdinicio,cdhoras){
localStorage.setItem()

}
