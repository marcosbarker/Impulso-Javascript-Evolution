

let array = ['string', 1, true];
console.log(array);

let array2 = ['string', 1, true, ['array1'], ['array2']];
console.log(array2[1]);

//forEach() - itera um array;
//push() - add item no final do array;
//pop() - remove item no final do array;
//shift() - remove item no inicio do array;
//unshift() - add item no inicio do array;
//indexOf() - retorna o indice de um valor;
//splice() - remove ou substitui um item pelo indice;
//slice() - retorna uma parte de um array existente;

//forEach
array.forEach(function(item, ){console.log(item, index)});

//push
array.push('novo item');
console.log(array);

//pop
array.pop();
console.log(array);

//shift
array.shift();
console.log(array);

//unshift
array.unshift('novo item no inicio');
console.log(array);

//indesOf
console.log(array.indexOf(true));

//splice
array.splice(0,3);
console.log(array);

//slice
let novoArray = array.slice(0, 3);
console.log(array);