// Archivo script.js

// 1. Declaración de variables, constantes y arrays
const nombreUsuario = prompt("¡Bienvenido! Ingresa tu nombre:");
let saldo = 1000; // Saldo inicial del usuario
const historial = [];

// 2. Función para mostrar saldo
function mostrarSaldo() {
    alert(`${nombreUsuario}, tu saldo actual es: $${saldo}`);
    console.log(`Saldo actual: $${saldo}`);
}

// 3. Función para realizar un depósito
function depositar() {
    let monto = parseFloat(prompt("Ingresa el monto a depositar:"));
    if (!isNaN(monto) && monto > 0) {
        saldo += monto;
        historial.push(`Depósito: +$${monto}`);
        alert(`Depósito exitoso. Nuevo saldo: $${saldo}`);
    } else {
        alert("Monto no válido.");
    }
    mostrarSaldo();
}

// 4. Función para realizar un retiro
function retirar() {
    let monto = parseFloat(prompt("Ingresa el monto a retirar:"));
    if (!isNaN(monto) && monto > 0 && monto <= saldo) {
        saldo -= monto;
        historial.push(`Retiro: -$${monto}`);
        alert(`Retiro exitoso. Nuevo saldo: $${saldo}`);
    } else {
        alert("Monto no válido o saldo insuficiente.");
    }
    mostrarSaldo();
}

// 5. Función para ver el historial de movimientos
function verHistorial() {
    if (historial.length > 0) {
        alert("Historial de movimientos:\n" + historial.join("\n"));
    } else {
        alert("No hay movimientos registrados.");
    }
}

// 6. Menú de opciones con bucle
function menu() {
    let opcion;
    do {
        opcion = prompt("Elige una opción:\n1. Ver saldo\n2. Depositar\n3. Retirar\n4. Ver historial\n5. Salir");
        switch (opcion) {
            case "1":
                mostrarSaldo();
                break;
            case "2":
                depositar();
                break;
            case "3":
                retirar();
                break;
            case "4":
                verHistorial();
                break;
            case "5":
                alert("Gracias por usar el simulador, ¡hasta pronto!");
                break;
            default:
                alert("Opción no válida, intenta de nuevo.");
        }
    } while (opcion !== "5");
}

// Ejecutar el simulador
menu();
