class Nodo {
    constructor(valor, siguiente) {
        this.valor = valor;
        this.siguiente = siguiente;
    }
}

class ListaSimple {
    constructor() {
        this.inicio = null;
        this.final = null;
    }

    agregarInicio(valor) {
        const nodoNuevo = new Nodo(valor, this.inicio);

        if (this.inicio == null && this.final == null) {
            this.inicio = nodoNuevo;
            this.final = nodoNuevo;
        } else {
            this.inicio = nodoNuevo;
        }
    }


    eliminarFinal() {
        if (this.inicio == this.final) {
            this.inicio = null;
            this.final = null;
        } else {
            let temporal = this.inicio;

            while (temporal.siguiente != this.final) {
                temporal = temporal.siguiente;
            }
            temporal.siguiente = null;
            this.final = temporal;
            // temporal = null;
        }
    }


    contar() {
        let temporal = this.inicio;
        let contador = 0;

        if (this.inicio == null && this.final == null) {
            contador = 0;
        } else {
            while (temporal) {
                temporal = temporal.siguiente;
                contador++;
            }
        }

        return contador;
    }

}

const lista = new ListaSimple();


function agregar() {
    const dato = document.querySelector("#dato").value;
    lista.agregarInicio(dato);


    const contenedor = document.querySelector("#contenedor2");

    const nombre = document.createElement("p"); //<p> </p>
    

    nombre.className = "nombre";

    nombre.textContent = dato;

    contenedor.appendChild(nombre);
    

    document.querySelector("#dato").value = "";

}

// function saludar(dato) {
//     alert("Hola " + dato);
// }

function eliminar() {
    lista.eliminarFinal();
    const contenedor = document.querySelector("#contenedor2");
    const nombreBorrar = contenedor.lastChild;
    contenedor.removeChild(nombreBorrar);
}