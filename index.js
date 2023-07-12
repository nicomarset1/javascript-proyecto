//declaro arrays

let nombre = prompt ("Ingrese su nombre")

let mail = prompt ("Hola " + nombre + ", ahora ingrese su email")

//declaro bucle para la edad

do{numero = parseInt(prompt("Muy bien, a continuación ingrese su edad"))}
while (numero < 18 || numero >100 || isNaN (numero))

alert ("oprima aceptar para dirigirse a la compra")

//declaro variable para los productos

let productos = prompt ("Eliga unos de los siguientes mouses colocando su número: 1) logitech G305: $21500 - 2) logitech G203: $17600 - 3) razer Essential: $19000 - 4) redragon Cobra M711: $14200 - 5) redragon Griffin M607: $11900 - 6) glorious Model D: $18000 - 7) redragon Storm M988: $20700 - 8) coolermaster Mm720: $27400")


//declaro variable de precio

let precio= 0
let produc = "mouse"

if (productos == "1" || productos == "2" || productos == "3" || productos == "4" || productos == "5" || productos == "6" || productos == "7" || productos == "8") {

switch (productos) {
    case "1":
        precio = 21500;
        produc = "logitech G305"
        break;

    case "2":
        precio = 17600;
        produc = "logitech G203"
        break;

    case "3":
        precio = 19000;
        produc = "razer Essential"
        break;

    case "4":
        precio = 14200;
        produc = "redragon Cobra M711"
        break;

    case "5":
        precio = 11900;
        produc = "redragon Griffin M607"
        break;

    case "6":
        precio = 18000;
        produc = "glorious Model D"
        break;

    case "7":
        precio = 20700;
        produc = "redragon Storm M988"
        break;

    case "8":
        precio = 27400;
        produc = "coolermaster Mm720"
        break;
}

        }
//declaro variable para la cantidad

let unidades = parseInt( prompt("cuantas unidades del " + produc + " va a comprar?"))

let resultado = 0

function multiplicar ( precio, cantidad) {
    resultado = precio * cantidad
}

function mostrar (mensaje){
    alert ("Usted compro " + unidades + " " + produc + ". El total a pagar es de $" + mensaje + ".")
}

multiplicar(precio, unidades);
mostrar(resultado)




