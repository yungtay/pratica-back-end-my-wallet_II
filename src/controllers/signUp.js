import * as services from "../services/signUp"
export default async function signUp(req, res) {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.sendStatus(400);
    }

    const user = await services.signUp(name, email, password);
    if (!user) return res.sendStatus(409);

    res.sendStatus(201);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}
