import dotenv from "dotenv";

interface AppEnv {
  name: string
  port: number
}

const envFile = dotenv.config().parsed;

const env : AppEnv = {
  name: String(process.env.NAME || envFile?.name),
  port: Number(process.env.PORT || envFile?.port),
}

export default env;