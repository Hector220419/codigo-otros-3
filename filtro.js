// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "../Assets/taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "../Assets/taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "../Assets/bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "../Assets/bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "../Assets/zapato-rojo.jpg"}
]

const li = document.getElementById("lista-de-productos"); // Se accede mediante el ID
const $i = document.querySelector(".input");

const botonDeFiltro = document.querySelector(".button");
const botonMostrar = document.querySelector(".buttonRemove");

botonDeFiltro.onclick = function() {
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }
  const texto = $i.value;
  const productosFiltrados = filtrado(productos, texto);

  for (let i = 0; i < productosFiltrados.length; i++) {
    var d = document.createElement("div"); // Crea elementos del tipo div
    d.classList.add("producto"); // Asigna la clase producto
  
    var ti = document.createElement("p"); // Crea elementos del tipo p
    ti.classList.add("titulo"); // Agrega la clase titulo
    ti.textContent = productosFiltrados[i].nombre; // Agrega el nombre 
    
    var imagen = document.createElement("img"); // Crea la imagen
    imagen.setAttribute('src', productosFiltrados[i].img); // Agrega la imagen
  
    d.appendChild(ti);
    d.appendChild(imagen);
    li.appendChild(d);
  }
}

botonMostrar.onclick = function(){
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }
  for (let i = 0; i < productos.length; i++) {
    var d = document.createElement("div"); // Crea elementos del tipo div
    d.classList.add("producto"); // Les agrega la clase de producto a los elementos tipo div
  
    var ti = document.createElement("p"); // Crea elementos del tipo parrafo
    ti.classList.add("titulo"); // Le agrega la clase titulo a los elementos tipo p
    ti.textContent = productos[i].nombre; // Le agrega el contenido del objeto.nombre
    
    var imagen = document.createElement("img"); // Crea el elemento de tipo img
    imagen.setAttribute('src', productos[i].img); // le agrega el atributo src con el objeto de img
  
    d.appendChild(ti); // Se agregan los parrafos al div
    d.appendChild(imagen); // Se agregan las imagenes al div
  
    li.appendChild(d); // Se agrega el producto al div lista de productos
  }
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  