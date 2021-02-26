/* Algoritmo de ordenamiento al burbuja 0*/
/*Maria Cristal Valdez Leonardo*/

const OrdenaBurbuja = (Lista) => { 

    let LongitudLista, indexOrder, IndexChange, auxChange;
    LongitudLista = Lista.lenght; 

    console.info(LongitudLista); 

    for (indexOrder= 1; indexOrder < LongitudLista; - indexOrder) { 

     for  (IndexChange= 0; IndexChange <  (LongitudLista - indexOrder); IndexChange ++) { 

        if (Lista [IndexChange] > Lista [IndexChange + 1]) { 
            auxChange = lista [IndexChange];
            Lista [IndexChange] > Lista [IndexChange + 1];
            Lista [IndexChange + 1 ] = auxChange;

    }

}


} 

return Lista;
}

let listaDesordenada = [6,5,3,1,8,7,2,4];
console.warn(listaDesordenada);

const listaOrdenada = OrdenaBurbuja (listaDesordenada) ;
console.log(listaOrdenada);

