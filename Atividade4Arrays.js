console.log("\n=== Exercícios com Arrays ===");
const readline = require("readline-sync"); 
// 01
console.log("\n=== Exercício 01 ===");
const nomes = ["Ana", "Bruno", "Carlos", "Daniel", "Fernanda"];
console.log("Array original:", nomes);

console.log("Nome na posição 2:", nomes[2]);

nomes[2] = "Caio";

console.log("Array atualizado:", nomes);

// 02
console.log("\n=== Exercício 02 ===");
function ordenarDoisNumeros(arr) {
    if (arr[0] > arr[1]) {
        const temp = arr[0];
        arr[0] = arr[1];
        arr[1] = temp;
    }
    return arr;
}

console.log(ordenarDoisNumeros([20, 10])); 

// 03
console.log("\n=== Exercício 03 ===");
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


/// 04
console.log("\n=== Exercício 04 ===");
let numeros04 = [];

for (let i = 0; i < 3; i++) {
    let valor = parseInt(readline.question(`Digite o ${i + 1}º número: `));
    numeros04.push(valor);
}

console.log("Array original:", numeros04);
console.log("Array invertido:", numeros04.slice().reverse());


// 05
console.log("\n=== Exercício 05 ===");
let qtd = parseInt(readline.question("Quantos números deseja inserir? "));
let numeros05 = [];

for (let i = 0; i < qtd; i++) {
    let valor = parseInt(readline.question(`Digite o número ${i + 1}: `));
    numeros05.push(valor);
}

console.log("Array original:", numeros05);
console.log("Array invertido:", numeros05.slice().reverse());


// 06
console.log("\n=== Exercício 06 ===");
function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([5, 3, 8, 4, 2]));

// 07
console.log("\n=== Exercício 07 ===");
function mostrarIndices(vetor, numero) {
  const indices = [];

  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] === numero) {
      indices.push(i);
    }
  }

  if (indices.length === 0) {
    console.log(`O número ${numero} não foi encontrado no vetor.`);
  } else {
    // Mostra todos os índices numa linha
    console.log(numeros)
    console.log(`O número ${numero} aparece nos índices: ${indices.join(', ')}`);
    // Se quiser, também podemos listar um por linha:
    // indices.forEach(idx => console.log(`Índice: ${idx}`));
  }

  // opcional: devolver o array de índices caso queira usar depois
  return indices;
}

// Exemplo de uso:
const numeros = [10, 20, 30, 20, 40, 20, 50];
mostrarIndices(numeros, 20); // -> O número 20 aparece nos índices: 1, 3, 5
mostrarIndices(numeros, 99); // -> O número 99 não foi encontrado no vetor.

// 08
console.log("\n=== Exercício 08 ===");

let n = parseInt(readline.question("Digite um número para Fibonacci: "));
let fibonacci = [0, 1];

for (let i = 2; i < n; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

console.log("Sequência de Fibonacci:", fibonacci);

// 09
console.log("\n=== Exercício 09 ===");
let num = parseInt(readline.question("Digite um número para Fatorial: "));
let fatorial = [1]; // 0! = 1

for (let i = 1; i <= num; i++) {
    fatorial[i] = i * fatorial[i - 1];
}

console.log("Sequência de Fatorial:");
for (let i = 0; i <= num; i++) {
    console.log(`${i}! = ${fatorial[i]}`);
}

// 10
console.log("\n=== Exercício 10 ===");

let tabuleiro = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

function mostrarTabuleiro() {
    console.log("\nTabuleiro:");
    for (let linha of tabuleiro) {
        console.log(linha.map(c => c === "" ? "-" : c).join(" | "));
    }
}

function jogar() {
    while (true) {
        mostrarTabuleiro();
        let jogador = readline.question("Digite o jogador (X ou O): ").toUpperCase();
        if (jogador !== "X" && jogador !== "O") {
            console.log("Jogador inválido. Digite X ou O.");
            continue;
        }

        let linha = parseInt(readline.question("Digite a linha (1, 2, 3): "));
        let coluna = parseInt(readline.question("Digite a coluna (1, 2, 3): "));

        if (linha < 1 || linha > 3 || coluna < 1 || coluna > 3) {
            console.log("Posição inválida!");
            continue;
        }

        if (tabuleiro[linha - 1][coluna - 1] !== "") {
            console.log("Posição já ocupada!");
            continue;
        }

        // Corrigido: usa índice ajustado
        tabuleiro[linha - 1][coluna - 1] = jogador;

        // Quer parar de jogar?
        let continuar = readline.question("Deseja continuar jogando? (s/n): ");
        if (continuar.toLowerCase() !== "s") {
            break;
        }
    }
    mostrarTabuleiro();
    console.log("Fim do jogo!");
}

jogar();
