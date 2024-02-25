class Alumno {
    //Constructor
    constructor (nombre, primerApellido, segundoApellido, edad) {
        this.nombre = nombre;
        this.primerApellido = primerApellido;
        this.segundoApellido = segundoApellido;
        this.edad = edad;
        this.id = Alumno.contador++;
    }

    ////------Métodos---------------///
    /*//Funcion para guardar alumno
    static guardarAlumno(alumno) {
        localStorage.setItem("alumno", JSON.stringify(alumno));
    }

    //Función para cargar el alumnos del localStorage
    static  cargarAlumno() {
        var alumno = localStorage.getItem("alumno");
        if(alumno) {
            return JSON.parse(alumno);
        }else{
            return null;
        }
    } */
 
    ///metodo test-borrar si es necesario
    //Funcion para guardar alumno
    static guardarAlumno(alumno,index) {
        localStorage.setItem(`alumno${index}`, JSON.stringify(alumno));
    }

    //Función para cargar el alumnos del localStorage
    static  cargarAlumnos() {
        let alumnos = [];
        for(var i=1;i<=localStorage.length;i++){
            var alumnoData = localStorage.getItem("alumno" + i)
            if(alumnoData){
                var alumnoObject = JSON.parse(alumnoData)
                var alumno = new Alumno(alumnoObject.nombre,alumnoObject.primerApellido,alumnoObject.segundoApellido,alumnoObject.edad)
                alumnos.push(alumno)
            }
        }
        return alumnos
    }//hasta aqui llega el test

    //Mostrar el nombre
    mostrarNombre(){
        return  this.id + '.- ' + this.primerApellido + " " + this.segundoApellido + " " + this.nombre;
    }

    static contador = 1;

}




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

        //test-guardar alumno en el localStorage, borrar si es necesario
        for(index=1;index<=localStorage.length;index++){
            if(!localStorage.getItem("alumno" + index)){
                break;
            }
        }//hasta aqui llega el test

        // Guardar el alumno en localStorage
        Alumno.guardarAlumno(alumno);


        // Agregar el nombre del alumno a la lista y mostrar
        var lista = document.getElementById("listaAlumnos");
        var nuevoAlumno = document.createElement("li");
        nuevoAlumno.textContent = alumno.mostrarNombre();
        lista.appendChild(nuevoAlumno);

        //Mensaje de confirmacion
        alert( `Se ha registrado correctamente como ${nombre}` );

        //Limpiar los campos del formulario
        document.getElementById("formularioRegistro").reset();
    });
    
})

//cargar alumnos test-borrar si es necesario
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

//funcion de prueba-borrar si es necesario
//funcion que cargara los alumnos del local storage y los mostrara en la tabla de la pestaña alumnos
function cargarAlumnosDesdeLocalStorage() {
    const alumnos = JSON.parse(localStorage.getItem('alumnos'));
    if(alumnos) {
        mostrarAlumnos(alumnos);
    }
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////Eventos del navbar, para rediccionar a otras paginas/////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//===============================Pestaña Alumnos======================///
const Alumnos = document.getElementById('pestanaAlumnos')

Alumnos?.addEventListener('click', function(event){
    event.preventDefault();
    
    //enviar datos test-borrar si es necesario
    // Al dar click en la pestaña Alumnos, obtener los alumnos almacenados en el local storage y enviarlos a la página de alumnos
    //const alumnos = Alumno.cargarAlumnos();
    //localStorage.setItem("alumnos", JSON.stringify(alumnos));
    cargarAlumnosDesdeLocalStorage();
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