import { Response, Request } from "express";

export class AppService {
  constructor() {}

  public helloWorld(request: Request, response: Response) {
    return response.send("Hello from your express server");
  }
}
