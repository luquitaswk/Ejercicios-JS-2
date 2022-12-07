// Ejercicios: 

// - NOMBRE Y OPERACIONES:


//  1. Pedir nombre mediante prompt y disparar un alert con algún texto más
    let nombre = prompt("Ingrese su Nombre")
    alert("Hola! " + nombre + " Bienvenido")

//  2. Pedir un número y sumarlo a otro que esté en una variable
    let n1 = prompt("Ingrese un número que será sumado a 10")
    let n2 = 10
    let result0 = parseInt(n1) + parseInt(n2)

    console.log("El resultado es " + result0)

// 3. Pedir un número y restarlo a otro que esté en una variable
    let num1 = prompt("Ingrese un número que será restado por 2")
    let num2 = 2
    let result1 = parseInt(num1) - parseInt(num2)

    console.log("El resultado es " + result1)

// 4.  Pedir un numero, luego otro y ambos sumarlos
    let firstNumber = prompt("ingrese un número")
    let secondNumber = prompt("ingrese otro número")
    let result2 = parseInt(firstNumber) + parseInt(secondNumber)
    
    console.log("El resultado es " + result2)


// ---------------------------------------------------------------------------------


// -SINTAXIS Y VARIABLES:
// Realizar una calculadora que pueda sumar, restar, dividir y multiplicar.


//  1. Deberá ingresar un valor mediante un prompt
//  2. Deberá ingresar otro valor mediante otro prompt
//  3. Mostrar el resultado de cada operación mediante distintos alert

    let numero1 = prompt("ingrese un número")
    let numero2 = prompt("ingrese otro número")


    alert (parseInt(numero1) + parseInt(numero2)) //  Suma

    alert(numero1 - numero2)                      //  Resta

    alert(numero1 * numero2)                      //  Multiplicación

    alert(numero1 / numero2)                      //  División

// ---------------------------------------------------------------------------------

// - DÍAS DE LA SEMANA:

// 1. Crear un array con todos los días de la semana
const diasDeLaSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

// 2. Recorrerlos y mostrar cuando sea domingo o sábado un mensaje en consola.
const dias = () => {

  for(dia of diasDeLaSemana)
    if(dia === "Sabado") {
      console.log("Hoy es Sábado")
      continue
  }
  if(dia === "Domingo") {
    console.log("Hoy es Domingo")
  }
}
dias();
