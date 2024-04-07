//FizzBuzz
//divisivel  por 3 => fizz
//divisivel por 5 => buzz
//divisivel por 3 e 5 => fizzbuzz
//divisivel por 3 ou 5 => entrada
// nao e um numero => retorna   'nao e um numero'
const resultado = fizzBuzz(8);
console.log(resultado);

function fizzBuzz(entrada) {
    if (typeof entrada !== 'number')
        return 'nao e um numero';

    if (entrada % 3 === 0 && entrada % 5 === 0)
        return 'fizzbuzz';

    if (entrada % 3 === 0)
        return 'fizz';

    if (entrada % 5 === 0)
        return 'buzz';

    return 'entrada';
}