const carrito = document.querySelector("#carrito");
const array = [];

class Producto {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}
const producto1 = new Producto("Naranja", 30);
const producto2 = new Producto("Banana", 50);
const producto3 = new Producto("Pera", 50);
const producto4 = new Producto("Tomate", 50);
const producto5 = new Producto("Uva", 50)

const naranja = document.querySelector("#naranja");
naranja.onclick = (e) =>{
    let total = 0;
    let item = document.createElement("li");
    item.innerText = `${producto1.nombre} $${producto1.precio}`
    carrito.appendChild(item);
    array.push(producto1);
    for (let i=0; i < array.length; i++){
        total += array[i].precio;
    }
    document.querySelector("#total").innerText = `Total $${total}`
}

const banana = document.querySelector("#banana");
banana.onclick = (e) =>{
    let total = 0;
    let item = document.createElement("li");
    item.innerText = `${producto2.nombre} $${producto2.precio}`
    carrito.appendChild(item);
    array.push(producto2);
    for (let i=0; i < array.length; i++){
        total += array[i].precio;
    }
    document.querySelector("#total").innerText = `Total $${total}`
}

const pera = document.querySelector("#pera");
pera.onclick = (e) =>{
    let total = 0;
    let item = document.createElement("li");
    item.innerText = `${producto3.nombre} $${producto3.precio}`
    carrito.appendChild(item);
    array.push(producto3);
    for (let i=0; i < array.length; i++){
        total += array[i].precio;
    }
    document.querySelector("#total").innerText = `Total $${total}`
}

const tomate = document.querySelector("#tomate");
tomate.onclick = (e) =>{
    let total = 0;
    let item = document.createElement("li");
    item.innerText = `${producto4.nombre} $${producto4.precio}`
    carrito.appendChild(item);
    array.push(producto4);
    for (let i=0; i < array.length; i++){
        total += array[i].precio;
    }
    document.querySelector("#total").innerText = `Total $${total}`
}

const uva = document.querySelector("#uva");
uva.onclick = (e) =>{
    let total = 0;
    let item = document.createElement("li");
    item.innerText = `${producto5.nombre} $${producto5.precio}`
    carrito.appendChild(item);
    array.push(producto5);
    for (let i=0; i < array.length; i++){
        total += array[i].precio;
    }
    document.querySelector("#total").innerText = `Total $${total}`
}



