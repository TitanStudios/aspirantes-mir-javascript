/* Escribe una función llamada suma que reciba un número positivo y 
retorne la suma de todos los números desde 1 hasta ese número */
function sum(num){
    if (num > 0){
  return num * (num + 1)/2;
    }
}
// código de prueba
console.log(sum(4)) // 1 + 2 + 3 + 4 = 10
console.log(sum(10)) // 55
console.log(sum(15)) // 120