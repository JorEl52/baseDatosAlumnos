class Alumno {
    //Constructor
    constructor (nombre, primerApellido, segundoApellido, edad) {
        this.nombre = nombre;
        this.primerApellido = primerApellido;
        this.segundoApellido = segundoApellido;
        this.edad = edad;
    }

    ////------Métodos---------------///
    //Funcion para guardar alumno
    static guardarAlumno(alumno, index) {
        localStorage.setItem("alumno" + index, JSON.stringify(alumno));
    }

    //Función para cargar el alumnos del localStorage
    static  cargarAlumnos() {
        var alumnos = [];
        for(var i=1;i<=localStorage.length;i++){
            var alumno = localStorage.getItem("alumno" + i);
            if(alumno) {
                alumnos.push(JSON.parse(alumno));
            }
        }
        return alumnos;
    }
 

    //Mostrar el nombre
    mostrarNombre(){
        return `${this.nombre} ${this.primerApellido} ${this.segundoApellido}`;
    }
}

function mostrarAlumnos() {
    var alumnos = Alumno.cargarAlumnos();
    var lista = document.getElementById("listaAlumnos");
    lista.innerHTML = ""; //limpiar lista por si tiene algun dato almacenado
    for (var i=0;i<alumnos.length;i++){
        var alumnoData = alumnos[i];
        var alumno = new Alumno(alumnoData.nombre, alumnoData.primerApellido, alumnoData.segundoApellido, alumnoData.edad);
        var nuevoAlumno = document.createElement ("li");
        nuevoAlumno.textContent = alumno.mostrarNombre();
        lista.appendChild(nuevoAlumno);
    }
}

const registro =  document.getElementById("formularioRegistro")
// Obtener los valores del formulario
var nombre = document.getElementById("name").value;
var primerApellido = document.getElementById("apellidoPaterno").value;
var segundoApellido = document.getElementById("apellidoMaterno").value;
var edad = document.getElementById("edad").value;
var lista = document.getElementById("listaAlumnos");


// Agregar un event listener al formulario de registro
registro?.addEventListener("submit", function(event) {
    event.preventDefault();

    // Crear un nuevo objeto Alumno
    const alumno = new Alumno(nombre, primerApellido, segundoApellido, edad);
    var index = localStorage.length + 1;
    // Guardar el alumno en localStorage
    Alumno.guardarAlumno(alumno,index);

    // Agregar el nombre del alumno a la lista y mostrar
    //var lista = document.getElementById("listaAlumnos");
    var nuevoAlumno = document.createElement("li");
    nuevoAlumno.textContent = alumno.mostrarNombre();
    lista.appendChild(nuevoAlumno);
    nombre.value = "";
    primerApellido.value = "";
    segundoApellido.value = "";
    edad.value = "";
});
    
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//===============================Pestaña Alumnos======================///
const Alumnos = document.getElementById('pestanaAlumnos')

Alumnos?.addEventListener('click', function(event){
    event.preventDefault()
    mostrarAlumnos();
    //Al dar click en la pestaña Alumnos va a dirigir a a otra pagina
    window.location.href="alumnos.html"
})

//=============================Pestaña Grupos=======================/////
const Grupos = document.getElementById('pestanaGrupos')

Grupos?.addEventListener('click',function(event){
    event.preventDefault()
    //Al dar click en la pestaña grupos te dirige a otra página
    window.location.href = "grupos.html"
})

//==========================Volver a Inicio==============================///
const inicio = document.getElementById('pestanaInicio')

inicio?.addEventListener('click',function(event){
    event.preventDefault()

    //Al dar click en la pestaña inicio se recarga la pagina si esta en la pestaña principal
    //si no lo está, simplemente se hace una redirección a la misma página
    window.location.href = "index.html";
})