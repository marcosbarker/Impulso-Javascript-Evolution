var jogador1 = 1;
var jogador2 = 0;
var placar;

if(jogador1 !=  -1){
    if(jogador1 > 0 && jogador2 == 0){
        console.log('Jogador 1 marcou ponto');
        placar = jogador1 > jogador2;
    }else if(jogador2 > 0 && jogador1 == 0){
        console.log('Jogador 2 marcou ponto');
        placar = jogador2 > jogador2;
    }else{
        console.log('Ninguem marcou ponto');
    }
}

//condicional ternario
jogador1 != -1 && jogador2 != -1 ? console.log('Jogadores validos') : console.log('Jogadores invalidos');


//condicional switch/case
switch (placar){
    case placar = jogador1 > jogador2:
        console.log('Jogador 1 ganhou');
        break;
    case placar = jogador2 > jogador1:
         console.log('Jogador 2 ganhou');
         break;
    default:
        console.log('Ninguem ganhou')
}


//for
let array = ['valor1', 'valor2', 'valor3'];

let objeto = { propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3' };

for(let indice = 0; indice < array.length; indice++){
    console.log(indice);
}

//for in (indice como string)
for(let i in array){
    console.log(i);
}

//for in com obj - variavel de estado
for(y in objeto){
    console.log(y);
}

//for of - a partir de um valor do indice
for(x of array){
    console.log(x);
}

//for of com objeto
for(z of objeto.propriedade1) {
    console.log(z);
}

//while - enquanto for verdadeiro
var a = 0;

while(a < 10){
    a++;
    console.log(a);
}

//do while - ate que seja falso
var b = 0;

do {
    b++;
    console.log(b);
}while(b < 10);