//for- in
const pessoa ={
    nome: 'luis gustavo',
    idade: 40  
};
//key-value / chave - valor
for(let chave in pessoa){
    console.log(chave,pessoa['nome']);
}
//array cores
const cores = ['vermelho', 'azul','verde'];

for(let indice in cores){
console.log(indice,cores[indice]);
}