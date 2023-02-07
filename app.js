let numDispari = [];
let numInseriti = 0;

while (numDispari.length < 10) {
  let num = parseInt(prompt("Inserisci un numero:"));
  if (isNaN(num)) {
    continue;
  }

  if (num % 2 !== 0) {
    numDispari.push(num);
  }
  
}

