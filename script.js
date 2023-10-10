class Libro {
    constructor(titulo, autor, genero, leido) {
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.leido = leido;
    }
    Marcarcomoleido() {
        this.leido = true
        console.log(`Este libro ha sido leido`)
    }
    Marcarcomonoleido() {
        this.leido = false
        console.log(`Este libro no ha sido leido`)
    }
    Informacion() {
        console.log(`titulo: ${this.titulo}, autor: ${this.autor}, genero: ${this.titulo} leido : ${this.leido}, leido ${this.leido ? "si" : "no"}`)
    }
}

const libro1 = new Libro("Rayuela", "Julio", "Novela")
const libro2 = new Libro("Sabores", "Segnit", "Enciclopedia")
libro1.Marcarcomoleido()
libro2.Marcarcomonoleido()
libro1.Informacion()
libro2.Informacion()

class Vehiculo {
    constructor(marca) {
        this.marca = marca;
    }
    conducir() {
        console.log("conduciendo un vehiculo de marca " + this.marca)
    }
}

class Carro extends Vehiculo {
    acelerar() {
        console.log("Acelerando un carro de la marca " + this.marca)
    }
}
const miCarro = new Carro("Ford")
miCarro.conducir()
miCarro.acelerar()

class Animal {
    constructor(name) {
        this.name = name;
    }
    sonido() {
        console.log("Este animal hace un sonido")
    }
}

class Perro extends Animal {
    sonido() {
        console.log("Guau")
    }
}
class Gato extends Animal {
    sonido() {
        console.log("Miau")
    }
}

const perro = new Perro("Zeus")
const gato = new Gato("Waffle")

perro.sonido()
gato.sonido()

class FiguraGeometrica {
    constructor(lenght) {
        this.lenght = lenght;
    }
    area() {
        return 0
    }
    perimeter() {
        return 0
    }
}

class Circulo extends FiguraGeometrica {
    constructor(lenght, radio) {
        super(lenght);
        this.radio = radio;
    }
    area() {
        return 3.1416 * this.radio * this.radio;
    }
}

class Cuadrado extends FiguraGeometrica {
    constructor(lenght) {
        super(lenght);
    }
    area() {
        return this.lenght * this.lenght
    }
}
class Rectangulo extends FiguraGeometrica {
}

const circulo = new Circulo("circulo", 6);
const cuadrado = new Cuadrado("cuadrado", 2);
console.log(circulo.area())
console.log(cuadrado.area())