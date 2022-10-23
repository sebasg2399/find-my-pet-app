import { api, getUser, login, register } from "apifetch/auth_services";
import React, { useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
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
    console.log(rawToken);
    if (rawToken && !state.user) {
      api.defaults.headers.common["Authorization"] = `Bearer ${rawToken}`;
      getUser().then(({ data }) => {
        // console.log(data.message);
        setUser(data.user);
      });
    }
  }, [state.user]);

  useEffect(() => {}, [state.user]);

  const setUser = (user: User) => {
    dispatch({ type: "setUser", payload: user });
  };

  const AuthLogin = (body: any) => {
    login(body)
      .then(({ data }) => {
        console.log(data.message);
        console.log(data);
        api.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${data.user.token}`;
        sessionStorage.setItem("token", data.user.token);
        setUser(data.user);
      })
      .catch((e) => {
        console.log(e.response.data.message);
      });
  };
  const AuthRegister = (body: any) => {
    register(body)
      .then(({ data }) => {
        console.log(data.message);
        api.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${data.user.token}`;
        sessionStorage.setItem("token", data.user.token);
        setUser(data.user);
      })
      .catch((e) => {
        console.log(e.response.data.message);
      });
  };
  const AuthLogout = () => {
    sessionStorage.removeItem("token");
    dispatch({ type: "removeUser" });
  };
  return (
    <AuthContext.Provider
      value={{ ...state, AuthLogin, AuthRegister, AuthLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
