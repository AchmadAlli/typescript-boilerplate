import express, { Request, Response } from "express";
import env from "../../config/env";
import { ApiAdapter } from "../../domain/api";
import logger from "../../infrastructure/logger/winston";

function listen() : void {
  const app = express();

  app.get("/api/check-health", (req: Request, res: Response) => {
    res.send({
      message: "server is up",
      data: null,
    });
  });
  
  app.listen(env.port, () => {
    logger.info(`Server is running on port ${env.port}`)
  });
}


export function NewExpressAdapter() : ApiAdapter{
  return <ApiAdapter>{
    Listen: listen
  }
}