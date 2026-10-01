const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

async function main() {
  // 1. Criar a interface da calculadora para leitura
  const rl = readline.createInterface({ input, output });

  console.log("=== CALCULADORA EXEMPLO ===");

  // 2. Entrada de dados
  const n1 = Number(await rl.question("Digite o primeiro numero: "));
  const operacao = await rl.question("Digite a operacao (+, -, *, /): ");
  const n2 = Number(await rl.question("Digite o segundo numero: "));

  let resultado;

  // 3. Calculos
  switch (operacao) {
    case '+': 
      resultado = n1 + n2;
      break;

    case '-':
      resultado = n1 - n2;
      break;

    case '/':
      resultado = n1 / n2;
      break;
    
    case '*':
      resultado = n1 * n2;
      break;

    default:
      resultado = "Operação inválida";
  }

  // 4. Exibir o resultado (usando crases para template literals)
  console.log(`\nResultado: ${n1} ${operacao} ${n2} = ${resultado}`);

  rl.close();
}

main();


