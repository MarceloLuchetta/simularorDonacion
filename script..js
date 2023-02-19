

alert ("Bienvenido al sistema de carga de donación de sangre.");

class Donante {
    constructor (nombre, edad, hospital){
        this.nombre = nombre;
        this.edad=edad;
        this.hospital=hospital;
    }
    get_datos (){
        console.log("lista de Donantes");
        console.log("<-------------------------->");
        console.log ("Nombre:" ,this.nombre);
        console.log ("Su edad:", this.edad);
        console.log ("El Hospital donde va a donar", this.hospital);
        console.log (" ");
    }
}


var lista_donantes =[];
function cargaPaciente (){
    let nombre=prompt ("ingrese su nombre:");
    let edad=prompt("ingrese su edad");
    let hospital=prompt("El Hospital a donar es");
    let donante= new Donante (nombre,edad,hospital);
    lista_donantes.push (donante);
   
    let nuevaOpcion= prompt ("desea cargar un nuevo paciente opcion 1) si no lo desea opcion 2)");
    if (nuevaOpcion==1){
        cargaPaciente();
    }
}
cargaPaciente();
for (let donante of lista_donantes){
    console.log(donante.get_datos());
}

let opcionModificar = prompt ("Desea modificar el hospital para donar?, opción 1) si desea modificar, opción 2) Si desea Salir")

function buscar_paciente(donante){
    return donante.nombre==nombreDonante;
}
if (opcionModificar ==1){
    var nombreDonante= prompt ("Ingrese su nombre para realizar la búsqueda");
    var resultado_busqueda = lista_donantes.find (buscar_paciente);
    var nombreHospital= prompt ("Ingrese nombre del Hospital a modificar");
    resultado_busqueda=[nombreDonante, ,nombreHospital];
    alert("El Donante es  "+ nombreDonante+", " + "el nuevo hospital para Donar es " +nombreHospital);
    alert ("gracias por usar el simulador.")
}

while (opcionModificar ==2) {
    alert ("gracias por usar el simulador");
    break;
}







