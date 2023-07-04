function salva() {
  let nome = document.getElementById("nome").value;
  let cognome = document.getElementById("cognome").value;
  let utenti = JSON.parse(localStorage.getItem("utenti")) || [];
  utenti.push({nome: nome, cognome: cognome});
  localStorage.setItem("utenti", JSON.stringify(utenti));
}


function rimuovi() {
  let utenti = JSON.parse(localStorage.getItem("utenti")) || [];
  utenti.pop();
  localStorage.setItem("utenti", JSON.stringify(utenti));
}

