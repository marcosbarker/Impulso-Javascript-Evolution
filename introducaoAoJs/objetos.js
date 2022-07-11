

let objeto = {string: 'string', number: 1, Boolean: true, array: ['array'], objInterno: {objInt: 'objInt'}};

console.log(objeto);
console.log('\n' + objeto.number);

//desestruturacao de objeto
var string = objeto.string;
var arrayInterno = objeto.arrayInterno;

//desestruturacao de objeto no momento da declaracao
var {string, number, Boolean} = objeto;