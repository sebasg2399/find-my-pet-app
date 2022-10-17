import { createContext } from "react";

export interface User {
  id: number;
  email: string;
  phone: string;
  indentification: string;
  first_name: string;
  last_name: string;
}
export interface AuthContextProps {
  user?: User;
  isLoading: boolean;

  //methods

  AuthLogin: (body: any)=>void
  AuthRegister: (body: any)=>void

}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);
