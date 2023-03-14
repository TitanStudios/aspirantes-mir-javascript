// Pasar un arreglo a un String
function Join(arreglo){
    let juntos = "";
    for (let i = 0; i < arreglo.length; i ++) {
        if(juntos ==""){ 
            juntos += arreglo[i];
        }
        else juntos = juntos + " "+ arreglo[i];
    }
    return juntos;
}
// Imprimir
console.log(Join(["Hola", 5,"Mundo", 24,"Son", 2500]));

