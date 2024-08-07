
// Función para mostrar los alumnos inscritos en una tabla
/*function mostrarAlumnos() {
  // Quitar los valores null del arreglo alumnoInscrito
  const alumnosInscritosCopia = [...alumnoInscrito]
  const alumnosFiltrados = alumnosInscritosCopia.filter(alumno => alumno !== null);

  // Iterar sobre los alumnos filtrados y mostrar cada uno en la tabla
  for (let i = 0; i < alumnosFiltrados.length; i++) {
    const alumno = alumnosFiltrados[i];
    const fila = document.createElement('tr');
    const nombreCompleto = `${alumno.nombre} ${alumno.primerApellido} ${alumno.segundoApellido}`;
    fila.innerHTML = `
      
      <td>${nombreCompleto}</td>
      <td>${alumno.edad}</td>
    `;
    tablaAlumnos.appendChild(fila);
  }
}*/



//--------------------------función que muestra los alumnos en la página de alumnos----------------------------------------------
function mostrarAlumnos() {
    var tablaAlumnos = document.getElementById('tablaAlumnos')
    var cuerpoTabla = tablaAlumnos.getElementsByTagName('tbody')[0]
    var indice = 1//variable para poner el numero de lista
    //Crear las filas y celdas para cada alumno agregado
    for (var index = 1; index <= localStorage.length; index++) {
      var alumno = JSON.parse(localStorage.getItem(`alumno${index}`))
      if (alumno !== null){
        var fila = document.createElement('tr')
        var lista = document.createElement('td')//creación del elemento para la lista
        var nombreCompleto = document.createElement('td')
        var edad = document.createElement('td')
      
        lista.textContent = indice
        indice++//incrementa el numero de la lista

        nombreCompleto.textContent = ` ${alumno.nombre} ${alumno.primerApellido} ${alumno.segundoApellido}`;
        edad.textContent = alumno.edad

        fila.appendChild(lista)
        fila.appendChild(nombreCompleto)
        fila.appendChild(edad)
        cuerpoTabla.appendChild(fila) 
      }
    } 
}

document.addEventListener( 'DOMContentLoaded', () => { 
    mostrarAlumnos();
} );

//----------------------------------funcion que obtiene los alumnos del localStorage-------------------------------------
function obtenerAlumnos() {
    var alumnosInscritos = []
    for(var index=1;index <= localStorage.length;index++) {
        var alumno = JSON.parse(localStorage.getItem(`alumno${index}`))
        alumnosInscritos.push(alumno)
    }
    return alumnosInscritos
}

/*---------Función para ordenar el arreglo de alumnos inscritos en orden alfabético comenzando por nombre------------
----------------------------apellido paterno, apellido materno--------------------------------------------------------*/
function ordenarAlumnos(alumnoInscrito) {
    // Verificar que el arreglo alumnoInscrito esté definido y no esté vacío
    if (alumnoInscrito === undefined || alumnoInscrito.length === 0) {
      console.error('Error: El arreglo alumnoInscrito no está definido o está vacío');
      return null;
    }
    //Elimino los valores null del arreglo
    alumnoInscrito = alumnoInscrito.filter(alumno => alumno !== null)

    // Ordenar el arreglo alumnoInscrito en orden alfabético utilizando el método sort()
    alumnoInscrito.sort((a, b) => {
      // Comparar el nombre y apellidos de dos alumnos
      const nombreCompletoA = `${a.nombre} ${a.primerApellido} ${a.segundoApellido}`;
      const nombreCompletoB = `${b.nombre} ${b.primerApellido} ${b.segundoApellido}`;
  
      // Devolver -1 si el primer alumno debe ir antes del segundo, 0 si son iguales y 1 si el primer alumno debe ir después del segundo
      if (nombreCompletoA < nombreCompletoB) {
        return -1;
      } else if (nombreCompletoA > nombreCompletoB) {
        return 1;
      } else {
        return 0;
      }
    });
  
    // Devolver el arreglo ordenado
    return alumnoInscrito;
  }

//-----------------funcion que busca el alumnos por busqueda binaria--------------------------------
function buscarAlumnoBinario(alumnoOrdenado, nombre, apellidoPaterno, apellidoMaterno) {
    const alumnosCopia = [...alumnoOrdenado];
    let inicio = 0;
    let fin = alumnosCopia.length - 1;
  
     // Verificar que el arreglo alumnoInscrito esté definido y no esté vacío
    if (alumnoOrdenado === undefined || alumnoOrdenado.length === 0) {
        console.error('Error: El arreglo alumnoInscrito no está definido o está vacío');
        return null;
    }

    // Realizar búsqueda binaria
    while (inicio <= fin) {
      const medio = Math.floor((inicio + fin) / 2);
      const alumnoActual = alumnosCopia[medio];

      // Buscar el alumno por nombre, apellido paterno y apellido materno
      if (alumnoActual.nombre === nombre && alumnoActual.primerApellido === apellidoPaterno && alumnoActual.segundoApellido === apellidoMaterno){
        console.log("El nombre está en la posición "+medio);
        return medio;
      }

      if(alumnoActual.nombre === nombre){
        if(alumnoActual.primerApellido === apellidoPaterno){
            if(alumnoActual.segundoApellido === apellidoMaterno){
                console.log(`El alumno se encuentra en la posicion `+ medio);
                return medio;
            }else{
                fin = medio - 1;
            }   
        }else{
            fin = medio - 1;
        }
      }else {
        if(alumnoActual.nombre < nombre){
            inicio = medio + 1;
        }
        else{
            fin = medio - 1;
        } 
      } 
    }
    return -1;
}


function mostrarFormularioAsignacionMateria(alumno){
    
    const formularioAsignacionMateria = document.createElement('form');
    //el formulario aparece en el id formularioAsignacionMateria
    formularioAsignacionMateria.id = 'formularioAsignacionMateria';
    
    formularioAsignacionMateria.innerHTML = `
    <label for="materiasName">Materia:</label>
    <div id="materias">
      <label><input type="checkbox" value="DI" name="materias[]">Dibujo de Ingeniería</label><br>
      <label><input type="checkbox" value="MS" name="materias[]">Modelación de Sistemas</label><br>
      <label><input type="checkbox" value="IE" name="materias[]">Ingeniería Económica</label><br>
      <label><input type="checkbox" value="MT" name="materias[]">Motores y Tractores</label><br>
      <label><input type="checkbox" value="SE" name="materias[]">Sistemas Embebidos</label><br>
      <label><input type="checkbox" value="VC" name="materias[]">Visión por Computadora</label><br>
      <label><input type="checkbox" value="PI" name="materias[]">Proyecto Integrador</label><br>
    </div>
    <button type="submit" value="enviar">Enviar</button>
    `
    
    
    /*formularioAsignacionMateria.innerHTML = `
      <label for="materiasName">Materia:</label>
      <select name="materias" id="materias" multiple size="4">
          <option value="selecionaUnaMateria">Selecciona  una opción...</option>
          <option value="programacion">Programación</option>
          <option value="biologiaAnimal">Biología Animal</option>
          <option value="agronomia">Agronomía</option>
          <option value="genetica">Genética</option>
          <option value="quimicaOrganica">Química Orgánica</option>
          <option value="robotica">Robótica</option>
          <option value="produccionAnimal">Producción Animal</option>
      </select>
      <button type="submit" value="enviar">Enviar</button>
    `;*/
    //Agrego el formulario al cuerpo de la pagina
    document.body.appendChild(formularioAsignacionMateria);
    //Agrego event listener al boton de enviar
    formularioAsignacionMateria?.addEventListener('submit', function(event){
      event.preventDefault();
      /*//Obtengo el valor de la materia seleccionada
      const materiaSeleccionada = document.getElementById('materias').value;
      //parseo los datos del alumno en una variable
      var alumnoMateria = JSON.parse(localStorage.getItem('alumno' + alumno.id));
      //agrego la materia seleccionada al array de materias del alumno
      alumnoMateria.materias.push(materiaSeleccionada);
      console.log("Alumno con materia");
      console.log(alumnoMateria);
      //guardo la materia en el local storage
      localStorage.setItem('alumno' + alumno.id, JSON.stringify(alumnoMateria));
      console.log(`El alumno ${alumno.nombre} ${alumno.primerApellido} ${alumno.segundoApellido} se inscribio a ${materiaSeleccionada}`);
      */

      //TEST PARA GUARDAR VARIAS MATERIAS
      const materiasSeleccionadas = Array.from(document.getElementsByName('materias[]')).filter(input => input.checked).map(input => input.value);
      //const materiasSeleccionadas = Array.from(document.getElementById('materias').selectedOptions, option => option.value)
      var alumnoMateria = JSON.parse(localStorage.getItem('alumno'+alumno.id))
      alumnoMateria.materias = materiasSeleccionadas
      localStorage.setItem('alumno' + alumno.id, JSON.stringify(alumnoMateria))
      console.log(`El alumno ${alumno.nombre} ${alumno.primerApellido} ${alumno.segundoApellido} se inscribio a ${materiasSeleccionadas.join(', ')}`);
      //AQUI TERMINA TESTE
      
    });

}

const alumnoInscrito = obtenerAlumnos();
const alumnoOrdenado = ordenarAlumnos(alumnoInscrito);
console.log(alumnoInscrito);
console.log("Array ordenado: ");
console.log(alumnoOrdenado);


//Llenado del formulario de busqueda del alumno para inscribirlo en la materia
const busqueda = document.getElementById("formularioBusqueda")
busqueda?.addEventListener("submit", function(event){
    event.preventDefault()
    const nombre = document.getElementById('nombreBusq').value
    const apellidoPaterno = document.getElementById('apellidoPaterno').value
    const apellidoMaterno = document.getElementById('apellidoMaterno').value
    
    const alumnoInscrito = obtenerAlumnos();
    const alumnoOrdenado = ordenarAlumnos(alumnoInscrito);
    //console.log(alumnoInscrito);
    //console.log(alumnoOrdenado);
    const alumnoEncontrado = buscarAlumnoBinario(alumnoOrdenado,nombre,apellidoPaterno,apellidoMaterno)
   
   if (alumnoEncontrado === -1) {
      console.log("No se encontró el nombre");
    } else {
      const alumno = alumnoOrdenado[alumnoEncontrado];
      console.log(`El nombre ${alumno.nombre} ${alumno.primerApellido} ${alumno.segundoApellido} fue encontrado.`);
      mostrarFormularioAsignacionMateria(alumno); 
      if(mostrarFormularioAsignacionMateria){

      } 
      //console.log(`El nombre está en la posición `+ alumnoEncontrado);
    }

    //Limpiar formulario de busqueda
    document.getElementById("formularioBusqueda").reset();
})
    

