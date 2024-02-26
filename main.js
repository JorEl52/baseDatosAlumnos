class Alumno {
    //Constructor
    constructor (nombre, primerApellido, segundoApellido, edad) {
        this.nombre = nombre;
        this.primerApellido = primerApellido;
        this.segundoApellido = segundoApellido;
        this.edad = edad;
        this.id = Alumno.contador++;
    }
 
    //Funcion para guardar alumno en el local storage
    static guardarAlumno(alumno,index) {
        for(index=1;index<=localStorage.length;index++){
            console.log(alumno);
            if(!localStorage.getItem("alumno" + index)){
                break;
            }
        }
        localStorage.setItem(`alumno${index}`, JSON.stringify(alumno));
    }


    //Mostrar el nombre
    mostrarNombre(){
        return  this.id + '.- ' + this.primerApellido + " " + this.segundoApellido + " " + this.nombre + "----------" + this.edad;
    }

    static contador = 1;

}

//Funciones del formulario de inscripción
document.addEventListener( 'DOMContentLoaded', function () {
    const registro =  document.getElementById("formularioRegistro")
    // Agregar un event listener al formulario de registro
    registro?.addEventListener("submit", function(event) {
        event.preventDefault();

        // Obtener los valores del formulario
        var nombre = document.getElementById("name").value;
        var primerApellido = document.getElementById("apellidoPaterno").value;
        var segundoApellido = document.getElementById("apellidoMaterno").value;
        var edad = document.getElementById("edad").value;

        // Crear un nuevo objeto Alumno
        const alumno = new Alumno(nombre, primerApellido, segundoApellido, edad);

        // Guardar el alumno en localStorage
        Alumno.guardarAlumno(alumno);
         

        // Agregar el nombre del alumno a la lista debajo del formulario de inscripión y mostrar
        var lista = document.getElementById("listaAlumnos");
        var nuevoAlumno = document.createElement("li");
        nuevoAlumno.textContent = alumno.mostrarNombre();
        lista.appendChild(nuevoAlumno);

        //Mensaje de confirmacion
        alert( `Se ha registrado correctamente como ${nombre}` );

        //Limpiar los campos del formulario
        document.getElementById("formularioRegistro").reset();
    });

    
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////Eventos del navbar, para redireccionar a otras paginas/////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//===============================Pestaña Alumnos======================///
const Alumnos = document.getElementById('pestanaAlumnos')

Alumnos?.addEventListener('click', function(event){
    event.preventDefault()

    //Al dar click en la pestaña Alumnos va a dirigir a a otra pagina
    window.location.href="alumnos.html";
})

//=============================Pestaña Grupos=======================/////
const Grupos = document.getElementById('pestanaGrupos')

Grupos?.addEventListener('click',function(event){
    event.preventDefault();
    //Al dar click en la pestaña grupos te dirige a otra página
    window.location.href = "grupos.html";
})

//==========================Volver a Inicio==============================///
const inicio = document.getElementById('pestanaInicio')

inicio?.addEventListener('click',function(event){
    event.preventDefault();

    //Al dar click en la pestaña inicio se recarga la pagina si esta en la pestaña principal
    //si no lo está, simplemente se hace una redirección a la misma página
    window.location.href = "index.html";
})