import logger from "../../infrastructure/logger/winston";

export interface Credential {
  email: string;
  password: string;
}

export interface LoginResponse {
  id: string;
  name: string;
  email: string;
  token: string;
}

class LoginUsecase {

  authenticate(cred: Credential): LoginResponse{
    logger.info("credential data: ", {data: cred});
    
    return <LoginResponse>{
      id: "first id",
      email: cred.email,
      name: "achmad ali",
      token: "token"
    }
  }
}

export default LoginUsecase;
