import { Request, Response } from 'express';
import logger from '../../../infrastructure/logger/winston';
import LoginUsecase, { Credential } from '../../../usecase/auth/login_usecase';
import { NewResponse } from '../utils/response';


class AuthHandler {
	private loginUsecase: LoginUsecase;

	constructor(loginUsecase: LoginUsecase) {
		this.loginUsecase = loginUsecase;
	}

	login(req: Request, res: Response) {
		logger.info("login endpoint triggered");

		const auth = this.loginUsecase.authenticate(<Credential>{
			email: req.body?.email || "test@gmail.com",
			password: req.body?.password || "password"
		});
	
		res.status(200).send(NewResponse("login endpoint", auth))
	}
	
	register(req: Request, res: Response): void {
		logger.info("login triggered")
		res.status(200).send(NewResponse("login endpoint"))
	}

}

export default AuthHandler;