const contenedorProductos = document.getElementById(`contenedor-productos`);

const contenedorCarrito = document.getElementById(`carrito-contenedor`);

const botonVaciar = document.getElementById("vaciar-carrito");

const contadorCarrito = document.getElementById("contadorCarrito");

const precioTotal = document.getElementById("precioTotal");

let carrito = [];

/*
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
    actualizarCarrito();
  }
});*/

botonVaciar.addEventListener("click", () => {
  carrito.length = 0;
  actualizarCarrito();
});

stockProductos.forEach((producto) => {
  const div = document.createElement("div");
  div.classList.add(`producto`);
  div.innerHTML = `
    <div class="col estilo box__productos">
    <section id="${producto.id}" class="card w-100 box">
     <img src="${producto.img}" class="card-img-top" alt="${producto.nombre}">
     <article class="card-body">
         <h5 class="card-title">${producto.nombre}</h5>
         <p class="card-text">${producto.desc}</p>
         <article class="card-footer fs-5">
         <button id="agregar${producto.id}" class="boton-agregar">Agregar<i class fas-fa-shopping-cart"></button>
         </article>
     </article>
 </section>
</div>
</div> `;

  /*`
    <img src = ${producto.img} alt = "">
    <h3>${producto.nombre}</h3>
    <p>${producto.desc}</p>
    <p class="precioProducto">Precio:$${producto.precio}</p>
    <button id="agregar${producto.id}" class="boton-agregar">Agregar<i class fas-fa-shopping-cart"></button>
    `*/
  contenedorProductos.appendChild(div);

  const boton = document.getElementById(`agregar${producto.id}`);
  boton.addEventListener("click", () => {
    agregarAlCarrito(producto.id);
  });
});

const agregarAlCarrito = (prodId) => {
  const existe = carrito.some(prod => prod.id === prodId);

  if (existe) {
    const prod = carrito.map((prod) => {
      if (prod.id === prodId) {
        prod.cantidad++;
      }
    });
  } else {
    const item = stockProductos.find((prod) => prod.id === prodId);
    carrito.push(item);
    console.log(carrito);
  }
  actualizarCarrito();
};
const eliminarDelCarrito = (prodId) => {
  const item = carrito.find((prod) => prod.id === prodId);
  const indice = carrito.indexOf(item);
  carrito.splice(indice, 1);
  actualizarCarrito();
};

const actualizarCarrito = () => {
  contenedorCarrito.innerHTML = "";

  carrito.forEach((prod) => {
    const div = document.createElement("div");
    div.className = "productoEnCarrito";
    div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio: ${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick = "eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"</button>
        `;

    contenedorCarrito.appendChild(div);
/*    localStorage.setItem("carrito", JSON.stringify(carrito));*/
  });
  contadorCarrito.innerText = carrito.length;
  
  precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.precio, 0);
};
