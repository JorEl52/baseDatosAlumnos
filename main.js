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
    static guardarAlumno(alumno) {
        for(index=1;index<=localStorage.length;index++){
            if(!localStorage.getItem("alumno" + index)){
                break;
            }
        }
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
        return `${this.primerApellido} ${this.segundoApellido} ${this.nombre}`;
    }
}



const registro =  document.getElementById("registrar")
const listaAlumnos = document.getElementById("listaAlumnos");

// Agregar un event listener al formulario de registro
registro?.addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    var nombre = document.getElementById("name").value;
    var primerApellido = document.getElementById("apellidoPaterno").value;
    var segundoApellido = document.getElementById("apellidoMaterno").value;
    var edad = document.getElementById("edad").value;
    //Crear un objeto nuevo alumno
    const alumno = new Alumno(nombre,primerApellido,segundoApellido,edad);
    // Guardar el alumno en localStorage
    Alumno.guardarAlumno(alumno,index);

    
    // Actualizar la lista de alumnos
    const li = document.createElement("li");
    li.textContent = alumno.mostrarNombre();
    listaAlumnos.appendChild(li);
});


// Cargar los alumnos almacenados en el local storage al cargar la página
window.addEventListener("load", function() {
    const alumnos = Alumno.cargarAlumnos();
    for(let i=0; i<alumnos.length; i++) {
        const alumno = alumnos[i];
        const li = document.createElement("li");
        li.textContent = alumno.mostrarNombre();
        listaAlumnos.appendChild(li);
    }
}); 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//===============================Pestaña Alumnos======================///
const Alumnos = document.getElementById('pestanaAlumnos')

Alumnos?.addEventListener('click', function(event){
    event.preventDefault()

    // Al dar click en la pestaña Alumnos, obtener los alumnos almacenados en el local storage y enviarlos a la página de alumnos
    const alumnos = Alumno.cargarAlumnos();
    localStorage.setItem("alumnos", JSON.stringify(alumnos));
    window.location.href="alumnos.html"
})