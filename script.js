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

function mostraLista() {
  let utenti = JSON.parse(localStorage.getItem("utenti")) || [];
  let lista = document.getElementById("lista");
  lista.innerHTML = "";
  lista.style.display = "block"; 
  for (let i = 0; i < utenti.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = "Nome: " + utenti[i].nome + " - Cognome: " + utenti[i].cognome;
    lista.appendChild(li);
  }
}



function nascondiLista() {
  let lista = document.getElementById("lista");
  lista.style.display = "none";
}
