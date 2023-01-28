import dotenv from "dotenv";

type AppEnv = {
  name: string
  port: number
}

let env : AppEnv

export function loadEnv() : void{
  const envFile = dotenv.config().parsed;

  if(env !== undefined){
    return;
  }

  env = {
    name: String(process.env.EXPRESS_NAME || envFile?.name),
    port: Number(process.env.PORT || envFile?.port),
  }

  console.log("env loaded");
}

export const getEnv = () : AppEnv => {
  if (env === undefined){
    loadEnv()
  }

  return env
}
