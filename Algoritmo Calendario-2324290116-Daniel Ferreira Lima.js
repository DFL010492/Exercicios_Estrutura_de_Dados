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

  const primeiroDia = new Date(year, monthIndex, 1).getDay(); 
  const diasNoMes = new Date(year, monthIndex + 1, 0).getDate();

  const semanas = [];
  let semana = Array(7).fill('   '); 
  let dow = primeiroDia; 

  for (let dia = 1; dia <= diasNoMes; dia++) {
    semana[dow] = padDay(dia);
    dow++;
    if (dow === 7) {
      semanas.push(semana);
      semana = Array(7).fill('   ');
      dow = 0;
    }
  }

  
  if (semana.some(cell => cell.trim() !== '')) {
    semanas.push(semana);
  }

  // imprime cada semana
  for (const s of semanas) {
    console.log(s.join(' '));
  }

  console.log("");

}

function imprimirCalendarioAno(year) {
  console.log(`Calendário — Ano ${year}\n`);
  for (let m = 0; m < 12; m++) {
    imprimirMes(year, m);
  }
}

// executa para 2025
imprimirCalendarioAno(2025);
