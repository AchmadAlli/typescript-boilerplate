import { Request, Response, Router } from "express";
import { provideAuthHandler } from "../injector/auth_injector";
import AuthRouter from "./auth";

export function registerRouter(e: Router): void {

  const apiRouter = Router();

  e.use("/api", apiRouter)

  apiRouter.get("/check-health", (req: Request, res: Response) => {
    res.send({
      message: "server is up",
      data: null,
    });
  });

  const handler = provideAuthHandler()

  const t = new AuthRouter(handler);
  t.register(apiRouter)
}