
// DO WHILE con un IF
// Adivinanza de mi nombre

let pass = "Jonathan";
let dato = (prompt("Adivina mi nombre! la primera letra es J"));
let intentos = 4;

while (dato != pass) {
  if (intentos > 0) {
    intentos--;
    alert(`Todavia no adivinaste, mi nombre termina con n, te quedan ${intentos}`);
    dato = (prompt("Adivina mi nombre..."));
    intentos--;
    alert(`Todavia no adivinaste, la segunda letra es o, te quedan ${intentos}`);
    dato = (prompt("Adivina mi nombre..."));
    intentos--;
    alert(`Todavia no adivinaste, hay una h intermedia, te quedan ${intentos}`);
    dato = (prompt("Adivina mi nombre..."));
  }
  else {
    alert("se acabaron los intentos");
    break;
  }
}