import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import checkEmail from "../repositories/checkEmail";

export default async function signIn(email, password) {
  const user = await checkEmail(email);

  if (!user.rows[0] || !bcrypt.compareSync(password, user.rows[0].password)) {
    return null;
  }

  const token = jwt.sign(
    {
      id: user.rows[0].id,
    },
    process.env.JWT_SECRET
  );

  return token;
}

export { signIn };
