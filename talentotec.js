function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b != 0) {
        return a / b;
    }
    else {
        console.log("DENOMINADOR IGUAL A CERO");
    }
}

function cargarProductos() {
    let productos = [];
    productos.push({ nombre: "ades", descripcion: "jugo de fruta ", amount: 35 });
    productos.push({ nombre: "cepita", descripcion: "jugo de naranja", amount: 40 });
    productos.push({ nombre: "rasta", descripcion: "alfajor", amount: 20 });
    productos.push({ nombre: "oreo", descripcion: "galletitas", amount: 30 });
    productos.push({ nombre: "mana", descripcion: "galletitas", amount: 40 });

    return productos;
}

console.log(sumar(5, 3));
console.log(restar(8, 2));
console.log(multiplicar(9, 6));
console.log(dividir(10, 5));

let listaProductos = cargarProductos();
for (let i = 0; i < listaProductos.length; i++) {
    console.log(listaProductos[i].nombre + "-" + listaProductos[i].descripcion + "-" + listaProductos[i].amount);
}