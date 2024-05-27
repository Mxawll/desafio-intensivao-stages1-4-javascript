/* 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador. */
alert("Hello World!")


/* 
2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
*/
const numberOne = 9
const numberTwo = 5

let sum = numberOne + numberTwo
let sub = numberOne - numberTwo
let mult = numberOne * numberTwo
let div = numberOne / numberTwo

alert(`
A soma de ${numberOne} + ${numberTwo} é: ${sum}
A subtração de ${numberOne} - ${numberTwo} é: ${sub}
A multiplicação de ${numberOne} * ${numberTwo} é: ${mult}
A divisão de ${numberOne} / ${numberTwo} é: ${div}
`)

/*
3. Crie um script que declare uma variável e verifique se 
o seu valor é um número. Se for, exiba a mensagem "É um número", 
caso contrário, exiba a mensagem "Não é um número".    
*/
const numberOrNot = true

const isANumber = typeof(numberOrNot) == "number"

isANumber ? alert(`${numberOrNot} é um número`) : alert(`${numberOrNot} não é um número`)

/*
4. Crie um script que declare uma variável e verifique se 
o seu valor é uma string. Se for, exiba a mensagem "É uma string", 
caso contrário, exiba a mensagem "Não é uma string".
*/
const stringOrNot = "Maxwell"

const isAString = typeof(stringOrNot) == "string"

isAString ? alert(`${stringOrNot} é uma string`) : alert(`${stringOrNot} não é uma string`)

/*
5. Crie um script que declare uma variável e verifique se 
o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", 
caso contrário, exiba a mensagem "Não é um booleano".
*/
const booleanOrNot = undefined

const isABoolean = typeof(booleanOrNot) == "boolean"

isABoolean ? alert(`${booleanOrNot} é um booleano`) : alert(`${booleanOrNot} não é um booleano`)

/*
9. Crie um script que declare uma variável e verifique se 
o seu valor é um número par. Se for, exiba a mensagem "É um número par", 
caso contrário, exiba a mensagem "Não é um número par".

10. Crie um script que declare uma variável e verifique se 
o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", 
caso contrário, exiba a mensagem "Não é um número ímpar".
*/
const isEven = (numberOne / 2) % 2 == 0
const isOdd = (numberTwo / 2) % 2 > 0

isEven ? alert(`${numberOne} é par`) : alert(`${numberOne} não é par`)
isOdd ? alert(`${numberTwo} é impar`) : alert(`${numberTwo} não é impar`)