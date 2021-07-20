import bcrypt from "bcrypt";
import signUpUser from "../repositories/signUpUser"
import checkEmail from "../repositories/checkEmail"

export default async function signUp(name, email, password) {
  const existingUserWithGivenEmail = await checkEmail(email);
  if (existingUserWithGivenEmail.rows[0]) {
    return null;
  }

  const hashedPassword = bcrypt.hashSync(password, 12);

  const userRegistred = await signUpUser(name, email, hashedPassword);
  return userRegistred;
}

export {signUp}
