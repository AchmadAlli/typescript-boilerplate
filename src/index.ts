import { listen_api } from './adapter/api/api'
import { loadEnv } from './config/env'

loadEnv()
listen_api()