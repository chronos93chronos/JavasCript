// MANIPULACION DE ARRAYS EN JAVASCRIPT

//JOIN
//El método JavaScript join() combina todos los elementos del arreglo en una cadena.
var numeros = [1, 4, 7, 11, 15, 19];
console.log(numeros.join("-"));

//CONCAT
//Este método combina dos arreglos o agrega más elementos a un arreglo y luego devuelve uno nuevo.
var arreglo_1 = [1, 2, 3, 4];
var arreglo_2 = [10, 20, 30, 40];

var nuevo_arreglo = arreglo_1.concat(arreglo_2);
console.log(arreglo_1);
console.log(arreglo_2);
console.log(nuevo_arreglo);

//PUSH
//Este método agrega elementos al final de un arreglo y cambia el arreglo original
var buscadores=["chrome","zafari","edge","explorer"]
buscadores.push("NUEVO BUSCADOR", "NUEVO_X_2")
console.log(buscadores)

//POP()
//Este método elimina el último elemento de un arreglo y lo devuelve.
var frutas = ["naranja","frutilla","manzana","pera","uva"]
frutas.pop()//UVA

//SHIFT()
//Este método elimina el primer elemento de un arreglo y lo devuelve
var verduras = ["beterraga","cebolla","zanahoria","beterraga","lechuga"]
verduras.shift() //BETERRAGA

//UNSHIFT()
//Este método agrega un elemento(s) al comienzo de un arreglo y cambia el arreglo original
var autos = ["chevrolet","nissan","jaguar","bmv","toyota"]
autos.unshift("PEUGEUT")
console.log(autos)

//splice()
//Este método cambia un arreglo agregando, eliminando e insertando elementos.

//La sintaxis es:
//arreglo.splice(índice[, cantidadDeElementosPorRemover, elemento1, ..., elementoN])
/*
-índice aquí está el punto de partida para eliminar elementos en la matriz
-cantidadDeElementosPorRemover es el número de elementos que se eliminarán de ese índice
-elemento1, …, elementoN es el (los) elemento(s) a agregar
*/

//ELIMINAR
var trabajadores = ["alfred","jhon","akali","seraphine"]

trabajadores.splice(2, 1 )// elimina AKALI 
console.log(trabajadores) 

//AGREGAR

trabajadores.splice(2, 1, "CHILE") // agrega CHILE en la posicion 2 del indice
console.log(trabajadores)
//--------------------------------------------------------------------------------

//SLICE()
//Este método es similar a splice() pero muy diferente. Devuelve subarreglos en lugar de subcadenas
//Este método copia una parte dada de un arreglo, y devuelve esa parte copiada como un nuevo arreglo. No cambia el arreglo original.

//La sintaxis es:

//              arreglo.slice(inicio, fin)










