console.log("ola JavaScript! Vamos que vamos .")

const idade =16;

if(idade < 13){
    console.log("Criança");
}else if(idade < 20) {
    console.log("Adolescente")
} else {
    console.log("Adulto")
}
if(false){
    console.log("Isso executa");
}else {
    console.log("Isso agora é executado!");
}

//Switc
const fruta = "Mamão"

switch(fruta){
    case "Banana":
        console.log("Banana é a fruta!");
        break;
    case "Maçã":
        console.log("Maçã é a fruta!");
        break;
    case "Mamão":
        console.log(" Mamão é a fruta!");
        break;
        default:
            console.log("Fruta não encontrada!");
}

// Estruturas de repetição
//1,2,3,4,5,6... => dependendo de uma condição

//contador, condição de limite, incremento
for (let i = 0; i < 6; i++) {
    //concatenação
    console.log("O valor de i é:" + i);
}
//while
let k = 0;

while(k <5){
    console.log("O valor de k: " +k);
    k++;

}
//do while
let j =0;

do{
    console.log("O valor de j é:" +j);

    j++;
}while (j < 5);

//funçoes
//function nome(arg1, arg2) {corpo}
function cumprimentar(nome){
    console.log("Olá!" +nome);
}
//invocacao = nome()
cumprimentar("Danillo");

//escopo de variáveis

let cor = "azul";

function mostrarCor(){
    let cor = "verde";

    console.log(cor)
}
console.log(cor)

mostrarCor();

//hoisting = içamento
testeHoisting();

function testeHoisting() {
    console.log("Deu certo !");
}
//arrow function
const testeArrow = () =>  console.log("Isso tambem é uma função.");

testeArrow();
//truthy e falsy
const minhaVariavel1 ="";//falsy         
const minhaVariavel2 ="Algum text"//falsy         

if(minhaVariavel1){
    console.log("É verdadeiro!");
}else{
    console.log("É falso!");
}
if(minhaVariavel2){
    console.log("É verdadeiro! 2");
}else{
    console.log("É falso! 2");
}
//array, listas
const numeros = [1, 2, 3, 5, 6];  

console.log(numeros[0]);

console.log(numeros[3]);

numeros.push(5);

console.log(numeros);

numeros.pop();

console.log(numeros); 

//prototype => OBJETO -> objeto2
//Array => nossos arrays
numeros.pop();

console.log(numeros);

//strings
const minhaStringNova ="Olá, Mundo!";

//concatenação = +
const minhaString3 = minhaStringNova + "Como você está";

console.log(minhaString3);

//interpolação
const minhaString4 = `${minhaStringNova} Como você esta?`
console.log(minhaString4)

console.log(minhaString4.length); //qtd de caracteres
console.log(minhaString4[5]);
console.log(minhaString4.toUpperCase());

//Data e hora
const agora = Date ();
console.log(agora);

const natal = new Date(2023, 11, 25);
console.log(natal);

//Math
console.log(Math.PI);

console.log(Math.round(3.6));

console.log(Math.sqrt(100));

console.log(Math.pow(2,3));