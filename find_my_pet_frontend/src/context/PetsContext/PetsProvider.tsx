import { getPets } from "apifetch/pets_services";
import React, { useEffect, useReducer } from "react";
import { Pet, PetsContext } from "./PetsContext";
import { PetsReducer } from "./PetsReducer";

type Props = {
  children: JSX.Element | JSX.Element[];
};

export interface PetsState {
  isLoading: boolean;
  pets: Pet[];
}

const INITIAL_STATE: PetsState = {
  isLoading: true,
  pets: [],
};

export const PetsProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(PetsReducer, INITIAL_STATE);

  useEffect(() => {
    getPets().then(({ data }) => {
      console.log(data.message);
      dispatch({ type: "setPets", payload: data.pets });
    });
  }, []);

  return (
    <PetsContext.Provider value={{ ...state }}>{children}</PetsContext.Provider>
  );
};
