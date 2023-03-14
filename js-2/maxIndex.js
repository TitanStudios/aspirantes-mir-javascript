// escribe la función maxIndex acá
function maxIndex(numeros){
    // Si array numeros esta vacio retorna un -1
    if (numeros.length === 0){
        return -1;
    }
    // de lo contrario buscamos el indice del numero mayor
    let Index = 0;
    for (i = 0; i < numeros.length; i++){
        if (numeros[Index] < numeros[i]){
            Index = i;
        }
    }
    return Index;
}

// Imprimir
console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1