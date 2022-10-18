import { User } from "./AuthContext";
import { AuthState } from "./AuthProvider";

type AuthAction =
  | {
      type: "setUser";
      payload: User;
    }
  | {
      type: "removeUser";
    };

export const AuthReducer = (
  state: AuthState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case "setUser":
      return { isLoading: false, user: action.payload };
    case "removeUser":
      return { isLoading: true, user: undefined };
  }
};
