class Libro {
    constructor(titulo, autor, genero, leido) {
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.leido = leido;
    }
    Marcarcomoleido () {
        this.leido = true
        console.log(`Este libro ha sido leido`)
    }
    Marcarcomonoleido () {
        this.leido = false
        console.log(`Este libro no ha sido leido`)
    }
    Informacion () {
        console.log(`titulo: ${this.titulo}, autor: ${this.autor}, genero: ${this.titulo} leido : ${this.leido}, leido ${this.leido ? "si" : "no"}`)
    }
}

const libro1 = new Libro("Rayuela","Julio","Novela")
const libro2 = new Libro("Sabores","Segnit","Enciclopedia")
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

class Carro extends Vehiculo{
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

class Perro extends Animal{
    sonido() {
        console.log("Guau")
    }
}
class Gato extends Animal{
    sonido() {
        console.log("Miau")
    }
}

const perro = new Perro("Zeus")
const gato = new Gato("Waffle")



perro.sonido()
gato.sonido()