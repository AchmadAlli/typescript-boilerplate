import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/api/check-health", (req: Request, res: Response) => {
  res.send({
    message: "server is up",
    data: null,
  });
});

export const listen_api =  () => {
  app.listen(3000, () => {
    console.log("server is running");
  });
};
