import { Request, Response } from "express";
import { bodyValidator, controller, get, post } from "./decorators";

interface _Request extends Request {
  body: { [key: string]: string | undefined };
}

@controller("/auth")
class LoginController {
  @get("/login")
  getLogin(req: Request, res: Response): void {
    res.send(`
      <form method="POST">
          <div>
              <label>Email</label>
              <input name="email"/>
          </div>
          <div>
              <label>Password</label>
              <input type="password" name="password"/>
          </div>
          <button>Submit</button>
      </form>
      `);
  }
  @get("/user/:id")
  checkUser(req: Request, res: Response) {
    const { id } = req.params;
    res.status(200).send({ id });
  }

  @post("/login")
  @bodyValidator("email", "password")
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;
    console.log(email);
    if (email && password) {
      //   req.session = { loggedIn: true };
      //   res.redirect("/");
      res.status(200).json({ email });
    } else {
      console.log("You are not logged in");
    }
  }
}
