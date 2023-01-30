import { Request, Response } from 'express';
import logger from '../../../infrastructure/logger/winston';
import { NewResponse } from '../utils/response';

export interface AuthHandler {
  login(req: Request, res: Response): void;
  register(req: Request, res: Response): void;
}

export function loginHandler(req: Request, res: Response): void {
	logger.info("login triggered")
	res.status(200).send(NewResponse("login endpoint"))
}

export function registerHandler(req: Request, res: Response): void {
	logger.info("login triggered")
	res.status(200).send(NewResponse("login endpoint"))
}