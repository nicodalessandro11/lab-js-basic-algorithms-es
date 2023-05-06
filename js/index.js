// Iteration 1: Names and Input
let hacker1 = "John Doe";
console.log(`El nombre del conductor es ${hacker1}`);

let hacker2 = "Jane Poe";
console.log(`El nombre del  navegante es ${hacker2}`);

// Iteration 2: Conditionals
let lenConductor = hacker1.length;
let lenNavegante = hacker2.length;

if (lenConductor > lenNavegante) {
  console.log(
    `El conductor tiene el nombre más largo, tiene ${lenConductor} caracteres.`
  );
} else if (lenConductor < lenNavegante) {
  console.log(
    `Parece que el navegante tiene el nombre más largo, tiene ${lenNavegante} caracteres.`
  );
} else {
  console.log(
    `¡Vaya, ambos tienen nombres igual de largos, ${lenConductor} caracteres!`
  );
}

// Iteration 3: Loops

let chars = [];

// 3.1
for (let i = 0; i < lenConductor; i++) {
  chars.push(hacker1.charAt(i).toUpperCase());
}

console.log(chars.join(" "));

// 3.2
chars = [];

for (let i = lenNavegante; i >= 0; i--) {
  chars.push(hacker2.charAt(i));
}

console.log(chars.join(""));

// 3.3

let string1 = "El nombre del conductor va primero.";
let string2 = "Yo, el navegador va primero definitivamente.";
let string3 = "¿Qué? ¿Los dos tienen el mismo nombre?";

if (string1 < string2 && string2 < string3) {
  console.log(string2);
} else if (string1 < string2 && string1 < string3) {
  console.log(string1);
} else {
  console.log(string3);
}
