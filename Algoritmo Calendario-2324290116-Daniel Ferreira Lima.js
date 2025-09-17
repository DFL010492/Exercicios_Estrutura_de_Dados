// calendar2025.js
// Imprime no console o calendário completo do ano 2025

function padDay(n) {
  
  return String(n).padStart(2, ' ') + ' ';
}

function imprimirMes(year, monthIndex) {
  const meses = [
    "Janeiro", "Fevereiro", "Março", "Abril",
    "Maio", "Junho", "Julho", "Agosto",
    "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  console.log("=".repeat(28));
  console.log(`${meses[monthIndex]} ${year}`);
  console.log("Dom Seg Ter Qua Qui Sex Sáb");

  const primeiroDia = new Date(year, monthIndex, 1).getDay(); // 0 = Dom ... 6 = Sáb
  const diasNoMes = new Date(year, monthIndex + 1, 0).getDate();

  const semanas = [];
  let semana = Array(7).fill('   '); // 7 células de 3 espaços (vazias)
  let dow = primeiroDia; // índice do dia da semana onde começamos a preencher

  for (let dia = 1; dia <= diasNoMes; dia++) {
    semana[dow] = padDay(dia);
    dow++;
    if (dow === 7) {
      semanas.push(semana);
      semana = Array(7).fill('   ');
      dow = 0;
    }
  }

  // se houver sobra (última semana incompleta), adiciona também
  if (semana.some(cell => cell.trim() !== '')) {
    semanas.push(semana);
  }

  // imprime cada semana: join com um espaço (uma coluna = 3 chars + 1 espaço separador)
  for (const s of semanas) {
    console.log(s.join(' '));
  }

  console.log(""); // linha em branco entre meses
}

function imprimirCalendarioAno(year) {
  console.log(`Calendário — Ano ${year}\n`);
  for (let m = 0; m < 12; m++) {
    imprimirMes(year, m);
  }
}

// executa para 2025
imprimirCalendarioAno(2025);
