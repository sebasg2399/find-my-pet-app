import { getPets, registerPet } from "apifetch/pets_services";
import React, { useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  useEffect(() => {
    getPets().then(({ data }) => {
      console.log(data.message);
      dispatch({ type: "setPets", payload: data.pets });
    });
  }, []);
  const addPet = (body: Partial<Pet>) => {
    body.sex = body.sex === "Macho" ? "Male" : "Female";
    registerPet(body).then(({ data }) => {
      console.log(data);
      if (data.pet) {
        dispatch({ type: "addPet", payload: data.pet });
        navigate("/mypets");
      } else {
        navigate("/mypets");
      }
    });
  };
  const findPet = (id: number) => {
    return state.pets.find((pet) => pet.id === id);
  };
  return (
    <PetsContext.Provider value={{ ...state, addPet, findPet }}>
      {children}
    </PetsContext.Provider>
  );
};
