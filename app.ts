import express from "express";
import { AppService } from "./app.controller";
import * as dotenv from "dotenv";
import { Response, Request } from "express";

const app = express();
const appService = new AppService();
dotenv.config();

app.get("/", (req: Request, res: Response) => {
  return appService.helloWorld(req, res);
});

app.listen(process.env.PORT, () => {
  console.log("Listening on PORT ", process.env.PORT);
});
