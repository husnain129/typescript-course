import bodyParser from "body-parser";
import cookieSession from "cookie-session";
import express from "express";
import { AppRouter } from "./AppRouter";
import "./controllers/LoginController";
import "./controllers/RootController";

const app = express();
app.use(express.json());
app.use(bodyParser.json());

app.use(
  cookieSession({
    keys: ["laskdjf"],
  })
);
app.use(AppRouter.getInstance());

app.listen(3000, () => {
  console.log("sever is running on port 3000");
});
