let numeroSecreto;
let intentos;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    }else{
            if (listaNumerosSorteados.includes(numeroGenerado)) {
                return generarNumeroSecreto();
            }else{
                listaNumerosSorteados.push(numeroGenerado);
                return numeroGenerado;
            }
        }
}


function asignarTextoElemento( elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}



function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', 'Acertaste el numero en ' + intentos+` ${(intentos===1)? "Vez" : "Veces"}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (numeroSecreto > numeroDeUsuario) {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }else{
            asignarTextoElemento('p', 'El numero secreto es menor');
        }
    }
    limpiarCaja();
    intentos++;
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto!!!!!');
    asignarTextoElemento('p', 'Indica un número del 1 al '+numeroMaximo);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de inicio intervalo numeros
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();


