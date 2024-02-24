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
    static mostrarNombre(){
        return `${this.nombre} ${this.primerApellido} ${this.segundoApellido}`;
    }
}



const registro =  document.getElementById("registrar")
// Agregar un event listener al formulario de registro
registro?.addEventListener("submit", function(event) {
    event.preventDefault();

    // Crear un nuevo objeto Alumno
    const alumno = new Alumno(nombre, primerApellido, segundoApellido, edad);
    // Obtener los valores del formulario
    var nombre = document.getElementById("name").value;
    var primerApellido = document.getElementById("apellidoPaterno").value;
    var segundoApellido = document.getElementById("apellidoMaterno").value;
    var edad = document.getElementById("edad").value;
    var index = localStorage.length + 1;
    // Guardar el alumno en localStorage
    Alumno.guardarAlumno(alumno,index);
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//===============================Pestaña Alumnos======================///
const Alumnos = document.getElementById('pestanaAlumnos')

Alumnos?.addEventListener('click', function(event){
    event.preventDefault()
    
    //Al dar click en la pestaña Alumnos va a dirigir a a otra pagina
    window.location.href="alumnos.html"
})
