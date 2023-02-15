

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
        console.log ("Ingrese su edad:", this.edad);
        console.log ("ingrese Hospital donde va a donar", this.hospital);
        console.log (" ");
    }
}


let lista_donantes =[];
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
    let opcion= prompt("1) Registrarse, 2)Salir Simulación");
    while (opcion == 2) {
        alert ("gracias por usar el simulador");
        break;
    }
    if (opcion==1){
        cargaPaciente(); 
    }
for (let donante of lista_donantes){
    console.log(donante.get_datos());
}

let opcionModificar = prompt ("Desea modificar el hospital para donar, opción 1) si desea salir del simulador opción 2)")
while (opcionModificar ==2) {
    alert ("gracias por usar el simulador");
    break;
}
function buscar_paciente(donante){
    return donante.nombre==nombreDonante;
}
if (opcionModificar ==1){
    var nombreDonante= prompt ("Ingrese su nombre para realizar la búsqueda");
    let resultado_busqueda = lista_donantes.find (buscar_paciente);
    var nombreHospital= prompt ("Ingrese nombre del Hospital a modificar");
    resultado_busqueda=[nombreDonante, ,nombreHospital];
    console.log(resultado_busqueda);
    alert ("gracias por usar el simulador.")
}









