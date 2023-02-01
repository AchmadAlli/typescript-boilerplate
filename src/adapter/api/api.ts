import bodyParser from "body-parser";
import express from "express";
import env from "../../config/env";
import { ApiAdapter } from "../../domain/api";
import logger from "../../infrastructure/logger/winston";
import { registerRouter } from "./routes";

class ExpressApiAdapter implements ApiAdapter{

  Listen() : void {
    const app = express();
  
    app.use(bodyParser.json());
  
    registerRouter(app)
    
    app.listen(env.port, () => {
      logger.info(`Server is running on port ${env.port}`)
    });
  }
}

export default ExpressApiAdapter;