"use strict";

console.log("Eventos de mouse");
const button = document.querySelector('button');
button.style.width = "200px";
button.style.height = "100px";

button.onmouseout = () => {
    button.style.width = "0px";
    button.style.height = "0px";
    button.textContent = "";
}

button.onmousemove = () => {
    button.style.width = "200px";
    button.style.height = "100px";
    button.textContent = "¡Atrapame!";
}

console.log("Eventos de teclado");

const input = document.querySelector('input');
const body = document.querySelector('body');

body.onkeydown = (e) => {
    const keycode = e.keyCode;
    input.value = keyboardMap[keycode];
    console.log(keycode);

}

