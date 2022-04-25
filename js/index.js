const carrito = document.querySelector("#carrito");
let lista = JSON.parse(localStorage.getItem("listaProducto")) || []
let total = 0;
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}
const producto1 = new Producto("Naranja", 150);
const producto2 = new Producto("Banana", 250);
const producto3 = new Producto("Pera", 300);
const producto4 = new Producto("Tomate", 120);
const producto5 = new Producto("Uva", 200);



for (let i = 0; i < lista.length; i++) {
    let item = document.createElement("li");
    item.innerText = `${lista[i].nombre} $${lista[i].precio}`
    carrito.appendChild(item);
    total += lista[i].precio;
}
document.querySelector("#total").innerText = `Total $${total}`

function prod (fruta, producto) {
    let click = document.querySelector(`#${fruta}`);
    click.onclick = () => {
        total = 0
        let item = document.createElement("li");
        item.innerText = `${producto.nombre} $${producto.precio}`
        lista.push(producto);
        localStorage.setItem("listaProducto", JSON.stringify(lista));
        carrito.appendChild(item);
        for (let i = 0; i < lista.length; i++) {
            total += lista[i].precio;
            document.querySelector("#total").innerText = `Total $${total}`
        }
    }
}

document.querySelector("#btn").onclick = () => {
    document.querySelector("#carrito").innerHTML = "";
    localStorage.setItem("listaProducto", "[]");
    document.querySelector("#total").innerText = "Total $0";
    lista = [];
}

prod("naranja", producto1);
prod("banana", producto2);
prod("pera", producto3);
prod("tomate", producto4);
prod("uva", producto5);