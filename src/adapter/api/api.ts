import express, { Request, Response, Router } from "express";
import env from "../../config/env";
import { ApiAdapter } from "../../domain/api";
import logger from "../../infrastructure/logger/winston";
import registerUserRoute from "./routes/auth";

function listen() : void {
  const app = express();
  const router = Router();

  app.use("/api", router)
  
  router.get("/check-health", (req: Request, res: Response) => {
    res.send({
      message: "server is up",
      data: null,
    });
  });

  registerUserRoute(router)
  
  app.listen(env.port, () => {
    logger.info(`Server is running on port ${env.port}`)
  });
}


export function NewExpressAdapter() : ApiAdapter{
  return <ApiAdapter>{
    Listen: listen
  }
}