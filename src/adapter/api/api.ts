import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { getEnv } from "../../config/env";

dotenv.config();

const app = express();

app.get("/api/check-health", (req: Request, res: Response) => {
  res.send({
    message: "server is up",
    data: null,
  });
});

export const listen_api =  () => {
  app.listen(getEnv().port, () => {
    console.log("server is running");
  });
};
