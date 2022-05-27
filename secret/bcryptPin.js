import bcrypt from "bcrypt";
const bcryptPin = await bcrypt.hash(Buffer.from("MTEwNQ==", 'base64'),"$2b$04$$2b$12$rCi9f6dslyssI0nYy1c3Pu");

export default bcryptPin;
