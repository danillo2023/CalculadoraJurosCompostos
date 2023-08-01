//Exercicio de fundamentos
//Exerciocio 1:Olá, mundo!
//Crie umm script que imprima "Olá, mundo!" o console

console.log("Olá, Mundo");

//Excício 2:Conversão de tipos
//Dado o valor de uma string "1234". converta-o em um numéro exiba o tipo da variável no console. 
const valorString= "1234"
const valorNumber = +(valorString)

console.log(typeof valorNumber);

//Exercicio 3:Manipulação de strings
//Dado uma string "JavaScript é invrivel",escreva um codigo de caracteres a string tem e quantas palavras existem na fase. 

const minhaString = "JavaScript é incrivel"
const numeroDeCaracteres = minhaString.length
const numeroDePalavras = minhaString.split(" ").length

console.log(`O numero de caracteres é:${numeroDeCaracteres}`);
console.log(`O numero de palavras é: ${numeroDePalavras}`);

//Exercício 4:Loops e Arrays
//Crie um Array com cinco nomes. Use um loop for para imprimir
const nomes = ["Ana", "João", "Will", "Maria", "Carla"];

for(let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

//Exercício 5:Funções, Strings e Math
// Crie uma função que aceita uma string representando um horário no formato de 24 horas (por exemplo, "14:30").
// A função deve retornar uma string que converta o horário para o formato de 12 horas (por exemplo, "2:30 PM"). 
//se o objeto Math para auxiliar nesta conversão. Certifique-se de que sua função lida corretamente com horários na meia-noite e no meio-dia

function converterHorario(horario24){
    //14:20 => hora = 14, minuto = 20 => split(":") => [0] = hora
    //const hora = horario24.split(":")[0];
    //const minuto = horario24.split(":")[1];

    const [hora,minuto] = horario24.split(":");

// 15 / 12 = 3, 23 % 12 = 11
// Falsy 12 % 12 = 0 = 12
  const hora12 = hora % 12 ||  12;

    let periodo= "AM";
    
    if(hora >  12){
       periodo = "PM";
    }

    console.log(`${hora12}:${minuto}${periodo}`); 
}
converterHorario("20:16");  

converterHorario("09:25"); 

converterHorario("05:16");  

converterHorario("13:25");  


