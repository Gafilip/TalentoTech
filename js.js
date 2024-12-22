var nombre = document.querySelector('#nombre');
var email = document.querySelector('#email');
var comentarios = document.querySelector('#comentarios');
var con_form_result = document.querySelector('#con_form_result');
var boton_enviar = document.querySelector('#bot_enviar');

/*1. Implementar una función que verifique si todos los 
campos del formulario de contacto están 
completos, mostrando un mensaje en la consola*/

if(boton_enviar)
    {
        boton_enviar.addEventListener('click',fun_bot_enviar)
    }


function fun_bot_enviar(){
    console.log("Implementar una función que verifique si todos los campos del formulario de contacto están completos, mostrando un mensaje en la consola:");

    if(nombre.value=="")
        {
            con_form_result.style.display="block";
            nombre.focus();
            con_form_result.innerHTML = "Completar el nombre.";
            console.log("falta completar nombre");
        }
      else if(email.value=="")
        {
            con_form_result.style.display="block";
            email.focus();
            con_form_result.innerHTML = "Completar el mail.";
            console.log("falta completar email");
        }
        else if(comentarios.value=="")
        {
            con_form_result.style.display="block";
            comentarios.focus();
            con_form_result.innerHTML = "Completar el comentario.";
            console.log("falta completar comentarios");
        }
      else
        {
            console.log("enviado ok")
        }    
}

/*Crear un ciclo que genere dinámicamente una 
lista de productos disponibles y los muestre en la 
consola*/
console.log("Crear un ciclo que genere dinámicamente una lista de productos disponibles y los muestre en la consola:");
for(var x = 0; x<5; x++){
    console.log("producto: " + x);
}


/*Crear un listado de productos incluidos en nuestro 
HTML generado por medio de una función en Js. */

var listado_productos = document.getElementsByClassName("card-title");
console.log("Crear un listado de productos incluidos en nuestro HTML generado por medio de una función en Js:");
function crea_listado() {
    for (var x = 0; x < listado_productos.length; x++) {
        console.log(listado_productos[x].innerHTML);
    }
}

crea_listado();


function zoom(button) {
    const card = button.closest('.card');
    const titulo = card.querySelector('.card-title');
    titulo.style.fontSize = '32px';
}




/*var cardContainer=document.getElementById('productos');

for(var i=1;i<=15;i++)
{
    var cardDiv=document.createElement('div');
   

    cardDiv.innerHTML=`                
                <div class="card mt-5";>
                <img src="https://picsum.photos/300/200?random=${i}" class="card-img-top" alt="Image">
                <div class="card-body">
                    <h5 class="card-title">Card title nro.: ${i}</h5>
                    <p class="card-text">Esta es la carta nro. ${i}</p>
                    <a href="#" class="boton_personalizado" >Comprar</a>
                    <button class="boton_zoom" onclick="zoom(this)">Hace zoom</button>
                </div>
                </div>
     `;

     cardContainer.appendChild(cardDiv);
}
*/



/*
// Inicialización del carrito
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Renderiza el carrito
function renderCart() {
    const cartContainer = document.getElementById("cart");
    cartContainer.innerHTML = `
        <ul>
            ${cart.map((item, index) => `
                <li>
                    ${item.name} - $${item.price} 
                    <button onclick="removeFromCart(${index})">Eliminar</button>
                </li>
            `).join('')}
        </ul>
        <p>Total: $${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}</p>
    `;
    saveCartToLocalStorage();
}

// Guardar el carrito en localStorage
function saveCartToLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Agregar un producto al carrito
function addToCart(product) {
    cart.push(product);
    renderCart();
}

// Eliminar un producto del carrito
function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
}

// Inicializar la página
document.addEventListener("DOMContentLoaded", () => {
    renderCart();

    // Productos disponibles
    const products = [
        { name: "Producto 1", price: 100 },
        { name: "Producto 2", price: 200 },
        { name: "Producto 3", price: 300 }
    ];

    // Renderizar productos
    const productsContainer = document.querySelector(".products");
    products.forEach((product, index) => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <h2>${product.name}</h2>
            <p>Precio: $${product.price}</p>
            <button onclick="addToCart(${JSON.stringify(product)})">Agregar al carrito</button>
        `;
        productsContainer.appendChild(productElement);
    });
});
*/

// Elementos principales
/*const cartItems = document.getElementById("cart-items");
const totalPriceElement = document.getElementById("total-price");

// Recuperar el carrito del localStorage o inicializar vacío
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Actualizar el carrito
function updateCart() {
  // Limpiar lista de items
  cartItems.innerHTML = "";

  // Renderizar items del carrito
  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - $${item.price} x 
      <input type="number" min="1" value="${item.quantity}" onchange="changeQuantity(${index}, this.value)">
      <button onclick="removeFromCart(${index})">Eliminar</button>
    `;
    cartItems.appendChild(li);
  });

  // Actualizar precio total
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  totalPriceElement.textContent = total.toFixed(2);

  // Guardar en localStorage
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Agregar al carrito
function addToCart(productName, productPrice) {
  const existingProduct = cart.find((item) => item.name === productName);

  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    cart.push({ name: productName, price: productPrice, quantity: 1 });
  }

  updateCart();
}

// Cambiar cantidad
function changeQuantity(index, quantity) {
  cart[index].quantity = parseInt(quantity, 10);
  updateCart();
}

// Eliminar del carrito
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

// Event listeners para los botones "Comprar"
document.querySelectorAll(".boton_personalizado").forEach((button, index) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const productCard = button.closest(".card");
    const productName = productCard.querySelector(".card-title").textContent;
    const productPrice = parseFloat(
      productCard.querySelector(".card-text, .card-text_espacio").textContent.replace("$", "")
    );

    addToCart(productName, productPrice);
  });
});

// Cargar carrito al inicio
updateCart();*/
// Elementos principales


document.addEventListener("DOMContentLoaded", function() {
    const indicadorDelCarrito = document.getElementById("cart");
    const botonesDeCompra = document.querySelectorAll(".boton_personalizado");
    let totalDeProductosEnElCarrito = localStorage.getItem("contadorCarrito") 
      ? parseInt(localStorage.getItem("contadorCarrito"))
      : 0;
  
    indicadorDelCarrito.textContent = totalDeProductosEnElCarrito;
    botonesDeCompra.forEach(function(boton) {
      boton.addEventListener("click", function(evento) {
        evento.preventDefault(); 
        totalDeProductosEnElCarrito++;
        indicadorDelCarrito.textContent = totalDeProductosEnElCarrito;
        localStorage.setItem("contadorCarrito", totalDeProductosEnElCarrito);
      });
    });
  });
  


/*fetch('https://dummyjson.com/products')
    .then(response =>response.json())
    .then(data =>console.log(data));*/


    document.addEventListener("DOMContentLoaded", () => {
        var ProductosContainer = document.querySelector('#productos-container');
        var CartItemsContainer = document.querySelector('#cart-items'); // Contenedor donde se mostrarán los productos del carrito
        var TotalPriceElement = document.querySelector('#total-price'); // Elemento donde se mostrará el precio total del carrito
    
        // Obtener productos desde la API
        fetch('https://dummyjson.com/products?limit=15')
            .then(response => response.json())
            .then((data) => {
                var productos = data.products;
                ProductosContainer.innerHTML = "";  // Limpiamos el contenedor
    
                productos.forEach((product) => {  // Aseguramos que la sintaxis sea correcta
                    const cardDiv = document.createElement("div");
                    cardDiv.className = "col-md-4";  // Clase para dar el estilo adecuado
                    cardDiv.innerHTML = `
                        <div class="card mt-3">
                            <img src="${product.thumbnail}" class="card-img-top" alt="${product.title}" style="height: 200px; object-fit: cover;">
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title">${product.title}</h5>
                                <p class="card-text">${product.description}</p>
                                <p class="card-text fw-bold">Precio: $${product.price}</p>
                                <button class="btn btn-success mt-auto add-to-cart">Agregar</button>
                            </div>
                        </div>
                    `;
                    ProductosContainer.appendChild(cardDiv);  // Aseguramos que cada card se agregue al contenedor
    
                    // Asociamos la acción de agregar al carrito a cada botón de la card
                    const addButton = cardDiv.querySelector('.add-to-cart');
                    addButton.addEventListener('click', () => agregarAlCarrito(product));
                });
            })
            .catch(error => console.log('Error al cargar los productos:', error)); // Manejo de errores
    
        // Función para agregar al carrito usando localStorage
        function agregarAlCarrito(product) {
            let cart = JSON.parse(localStorage.getItem("cart")) || [];  // Recuperamos el carrito desde localStorage
            cart.push(product);  // Añadimos el producto al carrito
            localStorage.setItem("cart", JSON.stringify(cart));  // Guardamos el carrito actualizado
            alert(`${product.title} ha sido agregado al carrito!`);
    
            actualizarCarrito();  // Actualizamos la vista del carrito
        }
    
        // Función para actualizar la vista del carrito
        function actualizarCarrito() {
            let cart = JSON.parse(localStorage.getItem("cart")) || [];  // Recuperamos el carrito desde localStorage
            CartItemsContainer.innerHTML = "";  // Limpiamos los productos previos del carrito
            let totalPrice = 0;
    
            cart.forEach((product) => {
                const itemDiv = document.createElement("div");
                itemDiv.className = "cart-item";
                itemDiv.innerHTML = `
                    <p>${product.title} - $${product.price}</p>
                `;
                CartItemsContainer.appendChild(itemDiv);  // Añadimos cada producto al carrito en el HTML
                totalPrice += product.price;  // Sumamos el precio al total
            });
    
            TotalPriceElement.textContent = totalPrice.toFixed(2);  // Actualizamos el total en el HTML
        }
    
        // Llamamos a actualizarCarrito para mostrar el carrito al cargar la página
        actualizarCarrito();
    });
    

// Función para limpiar el carrito
function limpiarCarrito() {
    // Eliminar el carrito del almacenamiento local
    localStorage.removeItem('carrito'); 

    // Actualizar el carrito en la interfaz de usuario (si es necesario)
    document.getElementById('cart').innerText = '0';  // Asumiendo que el número de productos en el carrito está en el span con id 'cart'
    alert('Tu carrito ha sido limpiado.');
}

// Llamar la función limpiarCarrito() cuando se haga clic en un botón
document.getElementById('limpiar-carrito-btn').addEventListener('click', limpiarCarrito);


