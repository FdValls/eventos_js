"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* 1 - Enunciado

Transforme todos los eventos a continuación a eventos con on-event
Verifique que en la consola no figura ningún error en alguno de ellos
Verifique que en la consola sigan apereciendo los mensajes de log

*/

const boton = document.querySelector("button");

// boton.addEventListener("click", () => {
//     console.log("Respuesta evento click");
//     boton.className = "btnClick";
// })

boton.onclick = () => { console.log("Respuesta evento click") }

// boton.addEventListener("mouseover", () => {
//     console.log("Respuesta evento mouseover");
//     boton.className = "btnOver";
// })

boton.onmouseover = () => { console.log("Respuesta evento mouseover") }

// boton.addEventListener("mouseout", () => {
//     console.log("Respuesta evento mouseout");
//     boton.className = "btnOut";
// })

boton.onmouseout = () => { console.log("Respuesta evento mouseout"); }

/* 2 - Enunciado

Cree un evento que capture cuando cambia la caja de seleccion
Utilice el ejemplo de clase de modo "white y black" para guiarse
en como capturar este evento y además como capturar el valor
actual seleccionado en la caja de seleccion.

*/

const select = document.querySelector("select");
const body = document.querySelector('body');

function update(bgColor, textColor) {
    body.style.backgroundColor = bgColor;
    body.style.color = textColor;
}

if (select.value === 'efectivo') {
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
}


select.onchange = () => {
    let entrada = select.value
    switch (entrada) {
        case "efectivo":
            update('black', 'white');
            break;
        case "transferencia":
            update('orange', 'white');
            break;
        case "tarjeta":
            update('purple', 'white');
            break;
        default:
            break;
    }
}

/* 3 - Enunciado

Cree un evento que capture cuando haya finalizado de ingresas
su nombre en el elemento "input". Deberá con un alert informar
el nombre ingresado al finalizar su ingreso.
PISTA: Debe utilizar el mismo tipo de evento que en el ejercicio
anterior.

*/

const input = document.querySelector("input");

input.onchange = () => {
    input.value.length < 5 ? alert("Texto demasiado corto, eliga uno más largo, ingrese algo") : alert("Longitud correcta")
}