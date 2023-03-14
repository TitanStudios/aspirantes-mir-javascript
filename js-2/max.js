// escribe la función max acá
function max (numeros){
    let max_number = numeros[0];
    for (i = 0; i < numeros.length; i++){
        if (max_number < numeros[i]){
            max_number = numeros[i];
        }
    }
    return max_number;
}

// Imprimir
console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined