class Fila {

    constructor() {
        this.fila = [];
    }

    enqueu(nombre, usuario) {
        this.fila.push([nombre, usuario]);
    }
    peek() {
        return this.fila[0];
    }



    deenqueu() {
        return this.fila.shift();
    }
    
    isEmpty() {
        return this.fila.length === 0;
    }

    
    size() {
        return this.fila.length;
    }

    print() {

        let datos = `
            <table class="table">
                <tr>
                    <th>#</th> 
                    <th>Pelicula</th>      
                    <th>usuario</th>      
                </tr>      
            <tr>`;
        for (let i = 0; i < this.fila.length; i++) {
            datos += `
                <td>${i+1}</td>  
                <td>${this.fila[i][0]}</td>  
                <td>${this.fila[i][1]}</td>
                </tr>`
        }
        `</table>`;

        return datos;
    }

    search(nombre) {
        for (let i = 0; i < this.fila.length; i++) {
            if (this.fila[i][0] == nombre) {
                return true;
            }
        }
    }
}


const fila = new Fila();


function agregar(nombre, usuario) {
    nombre = prompt('Nombre de la pelicula');
    usuario = prompt(`Nombre del usuario`)
    fila.enqueu(nombre, usuario);
    document.getElementById(`peli`).innerHTML = fila.print();
    res = (`Película añadida`);
    document.getElementById(`respuesta`).innerHTML = `<a class="alert alert-success">${res}</a>`;
}

function eliminar() {

    if (fila.isEmpty()) {
        res = 'No se puede eliminar si la fila esta vacía';
    } else {
        fila.deenqueu();
        res = 'Película eliminada';
    }

    if (fila.isEmpty()) {
        document.getElementById(`peli`).innerHTML = 'Agrega películas a la fila';
    } else {
        document.getElementById(`peli`).innerHTML = fila.print();
    }

    return alert(res);
}

function pelicula() {

    if (fila.isEmpty()) {
        document.getElementById(`peli`).innerHTML = 'No hay películas en fila para ver';
    } else {
        document.getElementById(`peli`).innerHTML = fila.print();
    }
}