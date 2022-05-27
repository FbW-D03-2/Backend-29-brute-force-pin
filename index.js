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

  //Lösung
  for(let i=0; i<=9999; i++) {
    let pin = i.toString();

    // entsprechend viele Nullen vor i setzen
    pin = "0".repeat(4 - pin.length) + i

    // logge alle 100 Durchgänge
    if (i % 100 == 0) {
      console.log(`Bank Pin bei Durchgang ${i}: ${pin}`);
    }
    
    const isRightPin = loginBank(pin);
    if(isRightPin){ 
      console.log('Bank PIN gefunden: ', pin);
      return pin;
    }

  }
  console.log("Pin not found")
  return false;
}

console.time("Dauer für Bank PIN"); // LÖSUNG
bruteForceBank(4);
console.timeEnd("Dauer für Bank PIN"); // LÖSUNG


// *** TEIL 2: Hack the Phone *** 
// Nun willst du dich in ein Phone hacken. Die 4-stellige Pin wurde mittels bcrypt gehashed und gesalzen
// Du konntest jedoch an das salt gelangen. Es lautet: $2b$04$kvohVFYRHyTXW6G92U85ruHQ

// Der Rest ist wie in Teil 1: Finde die PIN für die Funktion loginPhone heraus

// Die importierte loginPhone-Funktion erwartet also als Argument eine 4-stellige pin, 
// die mittels bcrypt gesalzen und gehashed wurde
// z.B. loginPhone('$2b$04$kvohVFYRHyTXW6G92U85ruHQ.eh9bOCZeuD/WWRjhZvlYjKUleWxb8Fa') 
// => Rückgabe von loginPhone: true oder false



async function bruteForcePhone() {
  //Lösung
  for(let i=0; i<=9999; i++) {
    let pin = i.toString();

    
    // entsprechend viele Nullen vor i setzen
    pin = "0".repeat(4 - pin.length) + i

    // logge alle 100 Durchgänge
    if (i % 100 == 0) {
      console.log(`Phone Pin bei Durchgang ${i}: ${pin}`);
    }


    //pin hashen
    const hashedPin = await bcrypt.hash(pin,"$2b$04$$2b$12$rCi9f6dslyssI0nYy1c3Pu")
    debugger;
    const isRightPin = loginPhone(hashedPin);
    if(isRightPin){ 
      console.log('Phone PIN gefunden: ', pin);
      return pin;
    }

  }
  console.log("Hashed Pin not found")
  return false;
}

console.time("Dauer für Phone PIN"); // LÖSUNG
await bruteForcePhone(4);
console.timeEnd("Dauer für Phone PIN"); // LÖSUNG

