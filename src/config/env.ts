import dotenv from "dotenv";

interface AppEnv {
  name: string
  port: number
  sqlite?: string
}

const envFile = dotenv.config().parsed;

const env : AppEnv = {
  name: String(process.env.NAME || envFile?.name),
  port: Number(process.env.PORT || envFile?.port),
  sqlite: String(process.env.SQLITE_PATH || envFile?.sqlite_path),
}

export default env;