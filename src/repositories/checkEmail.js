import connection from "../database.js";
export default async function checkEmail(email) {
  const existingUserWithGivenEmail = await connection.query(
    `SELECT * FROM "users" WHERE "email"=$1`,
    [email]
  );
  return existingUserWithGivenEmail;
}