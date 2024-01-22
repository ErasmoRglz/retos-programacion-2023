/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
*/

function fizzbuzz() {
  for (i = 0; i <= 100; i++) {  // Ciclo for para recorrer los números del 1 al 100
    if (i % 3 == 0 && i % 5 == 0) { // Si el número es múltiplo de 3 y de 5
      console.log("fizzbuzz"); //Imprime la palabra fizzbuzz
    } else if (i % 3 == 0) {  // Si el número es múltiplo de 3
      console.log("fizz"); // Imprime la palabra fizz
    } else if (i % 5 == 0) {  // Si el número es múltiplo de 5
      console.log("buzz"); // Imprime la palabra buzz
    } else {
      console.log(i); // Imprime el número
    }
  }
}

fizzbuzz(); // Llamada a la función