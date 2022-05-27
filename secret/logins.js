import plainTextPin from "./plainTextPin.js";
import bcryptPin from "./bcryptPin.js";

function Sleep(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

export function loginBank(pin) {
  if(pin === plainTextPin.toString('ascii')) {
    return true;
  } else {
    return false;
  }
}

export function loginPhone(hashedPin) {
  if(hashedPin === bcryptPin) {
    return true;
  } else {
    return false;
  }
}