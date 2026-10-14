const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav-menu');

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('activo');
});


let num1 = prompt("Ingrese un numero:");
let num2 = prompt("ingrese otro numero:");
let suma = num1 + num2;
document.write("<p> El resultado es: <strong>" + suma + "</strong></p>");