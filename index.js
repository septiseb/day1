let mayorDeEdad = true
console.log(mayorDeEdad)

// OR - Ó
// Mientras exista un true en una expresión, va a ser true
true || true // true
true || false // true
false || false // false
false || true // true
false || 8 > 1 // true

// AND - Y...
true && true // true
true && false // false
false && false // false
true && 4 < 2 // false 

// NOT
!true // false
!false // true
!(4 > 2) // false

// undefined
let saludo; // undefined

// null
let name = null;


let city = "Mexico City"
console.log(city[0]) // M
city[0] = "m"
console.log(city)

city = "mexico city"
console.log(city)


console.log(1e9)

let randomNumber = Math.floor(6.9)
console.log(randomNumber)

let randomNumberTwo = Math.ceil(6.1)
console.log(randomNumberTwo)

let randomNumberThree = Math.round(6)
console.log(randomNumberThree)

let numero = 5.87541234567654323456765432
let numberFixed = numero.toFixed(2)
console.log(numberFixed)


console.log(1e400); 

let num = (0.1 + 0.2).toFixed(1)

console.log(num);

console.log(Number(num))

// CONDICIONALES

// if..else

// condición = expresión que va a denotar true o false

let calificacion = 1

if (calificacion > 8) {
    console.log("Pasaste. Ten una galleta 🍪")
} else if(calificacion > 5) {
    console.log("Bueno... ya, pasé")
} else {
    console.log("Hay que estudiar. :(")
}

// EJERCICIO CON HORAS DEL DÍA
// SI ES DE 0000 A LAS 1159 - BUENOS DÍAS
// 1200 A 1759 - BUENAS TARDES
// 1800 A 2359 - BUENAS NOCHES

let hora = 1850
if (hora >= 0060 && hora <=1159) {
    console.log("Buenos días!")
} else if (hora >=1200 && hora <=1759) {
    console.log("Buenas tardes!")
} else if (hora >= 1800 && hora <= 2359){
    console.log("Buenas noches") 
} else {console.log("Revisa la hora")}

// SWITCH

const pais = "Costa Rica"

switch (pais) {
    case "México":
        console.log("Vivan los tacos")
        break
    case "Colombia":
        console.log("Como así?")
        break
    default:
        console.log("Desconozco el país")
}


// Iteraciones y ciclos

// // while
// let i = 0;

// while(i<=100){
//     console.log(i)
//     i++ // Súmale 1 cada vez que se ejecute
// }

// console.log("Esto está fuera del While:", i)

// let x = 0;

// do {
//     console.log(`Estoy ejecutando el número ${x}`)
//     x++
// } while (x<=30)


let i=0
while (i <= 30) {
    if (i === 10) {
        console.log("ten")
        i++
    } else if (i=== 20) {
        console.log("twenty")
        i++
    }else {
        console.log(i)
        i++
    }
}

// for

    //1. Inicializador - Valor con el que inicias
    //2. Condición - Mientras se cumpla esto, yo seguiré ejecutando el bloque de código for
    // 3. Incrementable
for(let y = 0; y <= 10; y++){
    console.log(`Este es el número ${y}`)
}


