// 01
let nomes = ["Ana", "Bruno", "Carlos", "Daniel", "Fernanda"];

console.log("Nome na posição 2:", nomes[2]);

// Alterando um nome existente
nomes[2] = "Caio";

console.log("Array atualizado:", nomes);

// 02
function ordenarDoisNumeros(arr) {
    if (arr[0] > arr[1]) {
        let temp = arr[0];
        arr[0] = arr[1];
        arr[1] = temp;
    }
    return arr;
}

console.log(ordenarDoisNumeros([20, 10])); 
// 03
function ordenarTresNumeros(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

console.log(ordenarTresNumeros([15, 3, 9]));

// 04
const readline = require('readline');

function pergunta(rl, texto) {
  return new Promise(resolve => rl.question(texto, resposta => resolve(resposta)));
}

async function main() {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  const numeros = [];

  for (let i = 0; i < 3; i++) {
    const resposta = await pergunta(rl, `Digite o ${i + 1}º número: `);
    const num = parseInt(resposta, 10);
    if (Number.isNaN(num)) {
      console.log('Valor inválido — por favor digite um número.');
      i--; // repete esta iteração
      continue;
    }
    numeros.push(num);
  }

  console.log('Array original:', numeros);
  console.log('Array invertido:', numeros.slice().reverse()); // .slice() para não alterar o original
  rl.close();
}

main();
