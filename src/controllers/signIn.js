import * as services from "../services/signIn"

export default async function signIn (req, res){
    try {
      const { email, password } = req.body;
  
      if (!email || !password) {
        return res.sendStatus(400);
      }
  
      const token = await services.signIn(email, password)
      if(!token) return res.sendStatus(401);
  
      res.send({
        token
      });
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  };