import { getUser, login, register } from "apifetch/auth_services";
import React, { useEffect, useReducer } from "react";
import { AuthContext, User } from "./AuthContext";
import { AuthReducer } from "./AuthReducer";

type Props = {
  children: JSX.Element | JSX.Element[];
};

export interface AuthState {
  isLoading: boolean;
  user?: User;
}
const INITIAL_STATE: AuthState = {
  isLoading: true,
  user: undefined,
};

export const AuthProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  useEffect(() => {
    const rawToken = sessionStorage.getItem("token");
    if (rawToken) {
      getUser().then((e) => {
        console.log(e);
      });
    }
  }, []);

  const AuthLogin = (body: any) => {
    login(body)
      .then(({ data }) => {
        console.log(data.message);
        dispatch({ type: "setUser", payload: data.user });
      })
      .catch((e) => {
        console.log(e.response.data.message);
      });
  };
  const AuthRegister = (body: any) => {
    register(body)
      .then(({ data }) => {
        console.log(data.message);
        dispatch({ type: "setUser", payload: data.user });
      })
      .catch((e) => {
        console.log(e.response.data.message);
      });
  };
  return (
    <AuthContext.Provider value={{ ...state, AuthLogin, AuthRegister }}>
      {children}
    </AuthContext.Provider>
  );
};
