//declaro arrays

let nombre = prompt ("Ingrese su nombre de usuario")

if (nombre == "") {
    alert ("A usted no se le a asignado un nombre de usuario")
} else {
    alert ("Su nuevo nombre de usuario es: " + nombre)
}



let mail = prompt ("Hola " + nombre + ", ahora ingrese su email")

//declaro bucle para la edad

do{numero = parseInt(prompt("Muy bien, a continuación ingrese su edad"))}
while (numero < 18 || numero >100 || isNaN (numero))

alert ("oprima aceptar para dirigirse a la compra")

//declaro variable para los productos

let precio= 0;
let produc = "mouse";
let productos = "algo";
do{
    productos = parseInt(prompt ("Elige unos de los siguientes mouses colocando su número:\n1) logitech G305: $21500\n2) logitech G203: $17600\n3) razer Essential: $19000\n4) redragon Cobra M711: $14200\n5) redragon Griffin M607: $11900\n6) glorious Model D: $18000\n7) redragon Storm M988: $20700\n8) coolermaster Mm720: $27400"));
} while (productos < 1 || productos > 8 || isNaN(productos))

switch (productos) {
    case 1:
        precio = 21500;
        produc = "logitech G305";
        break;

    case 2:
        precio = 17600;
        produc = "logitech G203";
        break;

    case 3:
        precio = 19000;
        produc = "razer Essential";
        break;

    case 4:
        precio = 14200;
        produc = "redragon Cobra M711";
        break;

    case 5:
        precio = 11900;
        produc = "redragon Griffin M607";
        break;

    case 6:
        precio = 18000;
        produc = "glorious Model D";
        break;

    case 7:
        precio = 20700;
        produc = "redragon Storm M988";
        break;

    case 8:
        precio = 27400;
        produc = "coolermaster Mm720";
        break;
}

//declaro variable para la cantidad

let unidades;

do{
    unidades = parseInt( prompt("cuantas unidades del " + produc + " va a comprar?"))
}while(unidades < 1 || isNaN(unidades))

let resultado = 0

function multiplicar ( precio, cantidad) {
    resultado = precio * cantidad
}

function mostrar (mensaje){
    alert ("Usted compro " + unidades + " " + produc + ". El total a pagar es de $" + mensaje + ".")
}

multiplicar(precio, unidades);
mostrar(resultado)

//calculamos el iva

const arrayuno= [resultado]

const arraydos= [0.21]

const arraytres= [1.21]

let iva = prompt ("Bien, ingrese 1 para calcular el iva final")

if (iva == 1){
    alert("Su iva es de $" + arrayuno * arraydos)
    alert("Y su precio final con el iva sumado es de $" + arrayuno * arraytres)
} else {
    alert("Vale...")
}

let compras = prompt ("Le gustaría comprar algun accesorio? ponga *si* o *no*")

if (compras === "si") {

let filtro = algo

do{
    filtro = prompt ("Eliga el accesorio a comprar:\n1) cintas\n2) mousepad\n3) gomitas\n4) guantes\n5)estuches")
}while (filtro != "cintas" || filtro != "mousepad" || filtro != "gomitas" || filtro != "guantes" || filtro != "estuches" (filtro) )

    const extras = [
        {
            nombre: "Cinta de goma ",
            precio: 3450
        },

        {
            nombre: "Cinta retornable para pulgar ",
            precio: 2100
        },

        {
            nombre: "Cinta de goma mano completaa",
            precio: 3800
        },
        
        {
            nombre: "Pad gaming 80x30",
            precio: 7200
        },

        {
            nombre: "Pad redragon 50x20",
            precio: 6600
        },

        {
            nombre: "Pad Hiperx 78x28",
            precio: 6900
        },

        {
            nombre: "Pad Nisuta 20x20",
            precio: 4800
        },

        {
            nombre: "Gomitas de goma blancas",
            precio: 2500
        },

        {
            nombre: "Gomitas de goma azules",
            precio: 2500
        },

        {
            nombre: "Gomitas de goma verdes",
            precio: 2500
        },

        {
            nombre: "Gomitas de goma camufladas",
            precio: 2500
        },

        {
            nombre: "Guantes Gaming de neopreme",
            precio: 4600
        },

        {
            nombre: "Guantes Gaming de tela",
            precio: 4400
        },

        {
            nombre: "Estuche de cuero",
            precio: 3300
        },

        {
            nombre: "Estuche de neopreme paraa dos unidades",
            precio: 5400
        },

        {
            nombre: "Estuche básico de tela",
            precio: 2900
        }
    ]

const resultadoFinal = extras.filter(
    (a) => a.nombre.includes = filtro
)
} else {
    alert("Gracias por su visita")
}










//consologueamos todos los datos 

console.log("Su nombre es " + nombre)
console.log("Su mail es " + mail)
console.log("Su edad es de " + numero)
console.log("Usted a comprado " + unidades + " unidades del " + produc)
console.log("Su monto final a pagar con iva incluido es de $" + arrayuno * arraytres)
