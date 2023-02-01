import LoginUsecase from "../../../usecase/auth/login_usecase";
import AuthHandler from "../handler/auth_handler";


export function provideAuthHandler(): AuthHandler{
  const loginUsecase  = new LoginUsecase();
  
  return new AuthHandler(loginUsecase);
}