const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav-menu');

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('activo');
});

function generarProductos() {
    return [
        { id: 1, name: "Remera AC Milan", description: "Camiseta hombre 26/27 del AC Milan.", precio: 150000, imagen: "img/acmilan.jpg" },
        { id: 2, name: "Remera Barcelona", description: "Camiseta hombre 26/27 del Barcelona.", precio: 150000, imagen: "img/barcelona.webp" },
        { id: 3, name: "Remera River", description: "Camiseta hombre 26/27 de River.", precio: 150000, imagen: "img/river.webp" },
        { id: 4, name: "Remera Boca", description: "Camiseta hombre 26/27 de Boca.", precio: 150000 },
        { id: 5, name: "Remera Real Madrid", description: "Camiseta hombre 26/27 del Real Madrid.", precio: 160000 }
    ];
}

const contenedor = document.getElementById("contenedor-productos");
const catalogo = generarProductos();

catalogo.forEach(({ id, name, descripcion, precio, imagen }) => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("card", "Remera");

    if (imagen) {
        const foto = document.createElement("img");
        foto.src = imagen;
        foto.alt = name;
        tarjeta.appendChild(foto);
    }

    const titulo = document.createElement("h3");
    titulo.textContent = name;

    const textoPrecio = document.createElement("p");
    textoPrecio.classList.add("precio");
    textoPrecio.textContent = "$" + precio.toLocaleString("es-AR");


    const boton = document.createElement("button");
    boton.type = "button";
    boton.tectContent = "Ver descripcion";

    boton.addEventListener("click", function () {
        const descripcionVisible = tarjeta.querySelector(".descripcion");
        if (descripcionVisible) {
            descripcionVisible.remove();
            boton.textContent = "Ver descripcion";
        } else {
            const parrafo = document.createElement("p");
            parrafo.classList.add("descripcion");
            parrafo.textContent = descripcion;
            tarjeta.appendChild(parrafo);
            boton.textContent = "Ocultar descripcion";
        }
    })

    tarjeta.appendChild(titulo);
    tarjeta.appendChild(textoPrecio);
    tarjeta.appendChild(boton);
    contenedor.appendChild(tarjeta);


}); 