
// DO WHILE con un IF
// Adivinanza de mi nombre

let nombre = "Jonathan";
let pregunta = (prompt("Adivina mi nombre! la primera letra es J"));
let intentos = 3;

while (pregunta != nombre) {
  if (intentos > 0) {
    alert(`Todavia no adivinaste, mi nombre termina con -n-, te quedan ${intentos} intentos`);
    pregunta = (prompt("Adivina mi nombre..."));
    intentos--;
    alert(`Todavia no adivinaste, la segunda letra es -o-, te quedan ${intentos} intentos`);
    pregunta = (prompt("Adivina mi nombre..."));
    intentos--;
    alert(`Todavia no adivinaste, lleva -h- intermedia, te quedan ${intentos} intentos.`);
    pregunta = (prompt("Adivina mi nombre..."));
    intentos--;
  }
  else {
    alert("se acabaron los intentos");
    break;
  }
}