const doc = document
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

//alert ("oprima aceptar para dirigirse a la compra")

//declaro variable para los productos

let precio= 0;
let produc = "mouse";
let productos = "algo";
let listaCompras = [];

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
    unidades = parseInt( prompt("Cuántas unidades del " + produc + " va a comprar?"))
}while(unidades < 1 || isNaN(unidades))

listaCompras.push({ producto: produc, cantidad: unidades });
let resultado = 0

function multiplicar ( precio, cantidad) {
    resultado = precio * cantidad
}

function mostrar (mensaje){
    alert ("Usted compro " + unidades + " " + produc + ". El total a pagar es de $" + mensaje + ".")
}

multiplicar(precio, unidades);
mostrar(resultado)

let filtro = "algo"

let resultadoFinal = "algo"

let final = "algo"

let unidadesAccesorios = 0

let acces;

//alert("su resultado con iva incluido hasta el momento es de $" + resultado * 1.21)

const extras = [
    {
        nombre: "cintas de goma",
        precio: 3450
    },

    {
        nombre: "cintas retornable para pulgar",
        precio: 2100
    },

    {
        nombre: "cintas de goma mano completa",
        precio: 3800
    },

    {
        nombre: "mousepad redragon 50x20",
        precio: 6600
    },

    {
        nombre: "mousepad hiperx 78x28",
        precio: 6900
    },

    {
        nombre: "mousepad nisuta 20x20",
        precio: 4800
    },

    {
        nombre: "gomitas blancas",
        precio: 2500
    },

    {
        nombre: "gomitas azules",
        precio: 2500
    },

    {
        nombre: "gomitas camufladas",
        precio: 2500
    },

    {
        nombre: "guantes gaming de neopreme",
        precio: 4600
    },

    {
        nombre: "guantes gaming de tela",
        precio: 4400
    },

    {
        nombre: "guantes gaming sin dedos",
        precio: 3600
    },

    {
        nombre: "estuches de cuero",
        precio: 3300
    },

    {
        nombre: "estuches de neopreme para dos unidades",
        precio: 5400
    },

    {
        nombre: "estuches básico de tela",
        precio: 2900
    }
]

let compras = prompt ("Le gustaría comprar algun accesorio? ponga *si* para proceder")

if (compras === "si") {

do{
    filtro = prompt ("Ingrese el nombre del accesorio a comprar:\n1) cintas\n2) mousepad\n3) gomitas\n4) guantes\n5)estuches")
}while (filtro != "cintas" && filtro != "mousepad" && filtro != "gomitas" && filtro != "guantes" && filtro != "estuches")


const resultadoFinal = extras.filter(
    (a) => a.nombre.includes(filtro)
)

//resultadoFinal.forEach((filtro=>{prompt(filtro.nombre)}))

do{
    final = prompt("Ingrese el nombre del producto a comprar:\n1)" + resultadoFinal[0].nombre + "\n2)" + resultadoFinal[1].nombre + "\n3)" + resultadoFinal[2].nombre )
}while (final != resultadoFinal[0].nombre && final != resultadoFinal[1].nombre && final != resultadoFinal[2].nombre)


do{
    unidadesAccesorios = parseInt( prompt("cuantas unidades del accesorio va a comprar?"))
}while(unidadesAccesorios < 1 || isNaN(unidadesAccesorios))


switch (final) {
    case "cintas de goma":
        precioAccesorio = 3450;
        break;
    case "cintas retornable para pulgar":
        precioAccesorio = 2100;
        break;
    case "cintas de goma mano completa":
        precioAccesorio = 3800;
        break;
    case "mousepad redragon 50x20":
        precioAccesorio = 6600;
        break;
    case "mousepad hiperx 78x28":
        precioAccesorio = 6900;
        break;
    case "mousepad nisuta 20x20":
        precioAccesorio = 4800;
        break;
    case "gomitas blancas":
        precioAccesorio = 2500;
        break;
    case "gomitas azules":
        precioAccesorio = 2500;
        break;
    case "gomitas camufladas":
        precioAccesorio = 2500;
        break;
    case "guantes gaming de neopreme":
        precioAccesorio = 4600;
        break;
    case "guantes gaming de tela":
        precioAccesorio = 4400;
        break;
    case "guantes gaming sin dedos":
        precioAccesorio = 3600;
        break;
    case "estuches de cuero":
        precioAccesorio = 3300;
        break;
    case "estuches de neopreme para dos unidades":
        precioAccesorio = 5400;
        break;
    case "estuches básico de tela":
        precioAccesorio = 2900;
        break;
}

acces = alert("Su precio en accesorios es de $" + precioAccesorio * unidadesAccesorios + ". Y su precio final de compra es de $" + (resultado + (precioAccesorio * unidadesAccesorios)))

listaCompras.push({ producto: final, cantidad: unidadesAccesorios });
//calcular iva

let iva = prompt ("Bien, ingrese 1 para calcular el iva de la compra")

const arrayuno= [resultado + (precioAccesorio * unidadesAccesorios)]

const arraydos= [0.21]

const arraytres= [1.21]


if (iva == 1){
    alert("Su iva es de $" + arrayuno * arraydos)
    alert("Y su precio final con el iva sumado es de $" + arrayuno * arraytres)
} else {
    alert("Vale...")
}



} else {
    alert("Gracias por su visita")
    alert("Su monto final con iva incluido es de $" + resultado * 1.21)
}

let mensajeCompras = "Su compra contiene:\n";
for (let i = 0; i < listaCompras.length; i++) {
    mensajeCompras += `${i + 1}) ${listaCompras[i].cantidad} unidades del ${listaCompras[i].producto}\n`;
}

lista.innerHTML = `<h3>${mensajeCompras}</h3>`;

//let mensajeDeCompras = "Su compra contiene:\n";
//for (let a = 0; a < listaDeCompras.length; a++) {
//    mensajeDeCompras += `${a + 1}) ${listaDeCompras[a].cantidades} unidades de:  ${listaDeCompras[a].productos}\n`;
//}

//listados.innerHTML = `<h4>${mensajeDeCompras}</h4>`;



//consologueamos todos los datos 

console.log("Su nombre es " + nombre)
console.log("Su mail es " + mail)
console.log("Su edad es de " + numero)
console.log("Usted a comprado " + unidades + " unidades del " + produc + " y " + unidadesAccesorios + " de " + final)
