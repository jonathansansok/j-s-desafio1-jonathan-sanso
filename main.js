
// DO WHILE con un IF
// Adivinanza de mi nombre

let pass = "Jonathan";
let dato = (prompt("Adivina mi nombre! la primera letra es J"));
let intentos = 3;

while (dato != pass) {
  if (intentos > 0) {
    intentos--;
    alert(`Todavia no adivinaste, mi nombre termina con n, te quedan ${intentos} intentos`);
    dato = (prompt("Adivina mi nombre..."));
    intentos--;
    alert(`Todavia no adivinaste, la segunda letra es o, te quedan ${intentos} intentos`);
    dato = (prompt("Adivina mi nombre..."));
    intentos--;
    alert(`Todavia no adivinaste, te quedan ${intentos} intentos pero te regalo un intentos mas,  la segunda letra es o.`);
    dato = (prompt("Adivina mi nombre..."));
  }
  else {
    alert("se acabaron los intentos");
    break;
  }
}