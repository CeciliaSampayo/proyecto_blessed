class Usuarios {
    constructor(id, NombreYApellido, documento, sexo, cantidadDeAños) {
      this.id = id,
        this.NombreYApellido = NombreYApellido,
        this.documento = documento,
        this.sexo = sexo,
        this.cantidadDeAños = cantidadDeAños
      this.bienvenido = function () {
        console.log(`${this.NombreYApellido} bienvenido a Blessed Joyas. Su usuario se ha creado exitosamente!`)
      }
    }
  }
  
  let datosUsuarios = []
  
  const usuarios1 = new Usuarios(1, "Rocio Carrizo", 41547874, "mujer", 23)
  datosUsuarios.push(usuarios1)
  
  const usuarios2 = new Usuarios(2, "Marcela Cattorini", 22000531, "mujer", 54)
  datosUsuarios.push(usuarios2)
  
  const usuarios3 = new Usuarios(3, "Norberto Angel", 51547874, "hombre", 73)
  datosUsuarios.push(usuarios3)
  
  
  function guardarDatos() {
    let nombreInput = document.getElementById("nombreInput")
    let documentoInput = document.getElementById("documentoInput")
    let sexoInput = document.getElementById("sexoInput")
    let aniosInput = document.getElementById("aniosInput")
    let nuevoUsuario = new Usuarios(datosUsuarios.length + 1, nombreInput.value, documentoInput.value, sexoInput.value, aniosInput.value)
    console.log(nuevoUsuario)
    datosUsuarios.push(nuevoUsuario)
  }
  
  const guardarDatosBtn = document.getElementById("guardarUsuarioBtn")
  guardarDatosBtn.addEventListener("click", guardarDatos)
  
  
  datosUsuarios.forEach((usuarios) => console.log(usuarios))
  
  
  //PLANTILLA, DOM
  
  let divUsuarios = document.getElementsByClassName("usuarioss")[0]
  
  function verUsuarios() {
    divUsuarios.innerHTML = "";
    datosUsuarios.forEach((usuario) => {
      let nuevo = document.createElement("div")
      nuevo.innerHTML = `<article id="${usuario.id}" class="card">
                                    <hr>
                                    <div class="contentCard">
                                        <p class="nombreApellido">
                                            Usuario: <br> ${usuario.NombreYApellido}
                                        </p>
                                        <p class="documento">
                                            Documento Identidad: <br> ${usuario.documento}
                                        </p>
                                        <p class="sexo">
                                            Sexo: <br> ${usuario.sexo}
                                        </p>
                                        <p class="añoDeNacimiento">
                                            Edad: <br> ${usuario.cantidadDeAños}
                                        </p>
                                       <button id="agregarBtn${usuario.id}">Ver mas informacion</button>
                                    </div>
                                    </article>`
  
      divUsuarios.appendChild(nuevo)
  
      //boton agregar 
  
      let btnAgregarUsuario = document.getElementById(`agregarBtn${usuario.id}`)
      console.log(btnAgregarUsuario);
  
     //invocar AgregarUsuarios
      btnAgregarUsuario.addEventListener("click", () =>{agregarUsuarios(usuario)})
  
    }) 
  
  }
  
   function agregarUsuarios(usuario) {
        console.log(`El usuario ${usuario.NombreYApellido} ha sido registrado con exito. Nº de indetificacion es ${usuario.id}`)
      }
  
  
  let mostrarUsuariosBtn = document.getElementById("verUsuarios")
  mostrarUsuariosBtn.addEventListener("click", verUsuarios)
  
  // STORAGE
  
  if (localStorage.getItem("datosUsuarios")) {
    datosUsuarios = JSON.parse(localStorage.getItem("datosUsuarios"))
    console.log(datosUsuarios)
  } else {
    console.log(`primera vez que carga DatosUsuarios`)
    datosUsuarios.push(usuarios1, usuarios2, usuarios3)
    localStorage.setItem("datosUsuarios", JSON.stringify(datosUsuarios))
  }
  
  
  
  
  