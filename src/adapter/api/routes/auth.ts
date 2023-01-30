import {Router} from "express";
import { loginHandler, registerHandler } from "../handler/auth_handler";

const router = Router()

function registerUserRoute(e : Router) : void{
    e.use("/auth", router)
    router.get("/login", loginHandler)
    router.get("/register", registerHandler)
}


export default registerUserRoute;