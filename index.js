import bcrypt from "bcrypt"; 
import {loginBank, loginPhone} from "./secret/logins.js"

// *** TEIL 1: Hack the Bank *** 

// Die importierte loginBank-Funktion erwartet als Argument eine 4-stellige Pin als Klartext-String
// z.B. loginBank('5375')
// Wenn die Pin richtig ist, gibt die Funktion ein true, andernfalls ein false zurück



// Deine nachfolgende bruteForceBank-Funktion soll die loginBank-Funktion mit allen erdenklichen 4-stelligen 
// Zahlenkombinationen aufrufen, bis die loginBank-Funktion true zurückgibt

// Am Ende soll bruteForceBank das gefundene Passwort in der console ausgeben

// Tipp: Du brauchst sicherlich eine Schleife ;)
// Verlasse die Schleife mittels return oder break, wenn du das PAsswort gefunden hast
function bruteForceBank(){

  //hier deine Lösung

}

bruteForceBank();


// *** TEIL 2: Hack the Phone *** 
// Nun willst du dich in ein Phone hacken. Die 4-stellige Pin wurde mittels bcrypt gehashed und gesalzen
// Du konntest jedoch an das salt gelangen. Es lautet: $2b$04$kvohVFYRHyTXW6G92U85ruHQ

// Der Rest ist wie in Teil 1: Finde die PIN für die Funktion loginPhone heraus

// Die importierte loginPhone-Funktion erwartet also als Argument eine 4-stellige pin, 
// die mittels bcrypt gesalzen und gehashed wurde
// z.B. loginPhone('$2b$04$kvohVFYRHyTXW6G92U85ruHQ.eh9bOCZeuD/WWRjhZvlYjKUleWxb8Fa') 
// => Rückgabe von loginPhone: true oder false


async function bruteForcePhone() {
  // hier deine Lösung

}

await bruteForcePhone(); // Warum await? Damit du die Dauer richtig messen kannst
