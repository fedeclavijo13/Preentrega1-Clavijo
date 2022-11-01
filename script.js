let cantidadProductos = parseInt(prompt('Ingrese la cantidad de productos que desea vender'));

while(cantidadProductos <= 0 || isNaN(cantidadProductos)){
   let agregarNum = parseInt(prompt('El valor ingresado no es admitido. Debes ingresar un número distinto a 0 para continuar'));
   cantidadProductos = agregarNum;
}

let listadoProductos = "";
i = 1;

while (i <= cantidadProductos){
    if (i == 6){
        i++;
        alert('Se superó la cantidad máxima de productos a agregar en el ecommerce');
        break;
    }
    
    let nombreProducto = prompt('Ingrese el nombre del producto ' + i);
    listadoProductos += 'Producto ' + i + ': ' + nombreProducto + '\n';

    i++;
}

console.log(listadoProductos);