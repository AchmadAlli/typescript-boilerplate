import express from "express";
import env from "../../config/env";
import { ApiAdapter } from "../../domain/api";
import logger from "../../infrastructure/logger/winston";
import { registerRouter } from "./routes";

function listen() : void {
  const app = express();

  registerRouter(app)
  
  app.listen(env.port, () => {
    logger.info(`Server is running on port ${env.port}`)
  });
}


export function NewExpressAdapter() : ApiAdapter{
  return <ApiAdapter>{
    Listen: listen
  }
}