import { Router } from 'express';
import { ApiRouter } from '../../../domain/api';
import AuthHandler  from '../handler/auth_handler';

class AuthRouter implements ApiRouter{
	private router: Router;
	private handler: AuthHandler;

	constructor(authHandler: AuthHandler){
		this.router = Router();
		this.handler = authHandler;
	}
	
	register(e: Router): void {

		e.use('/auth', this.router);
		
		this.router.get('/login', this.handler.login.bind(this.handler));
		this.router.get('/register', this.handler.register);
	}
}

export default AuthRouter;