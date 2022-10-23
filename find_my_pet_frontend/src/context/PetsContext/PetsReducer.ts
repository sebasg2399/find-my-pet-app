import { Pet } from "./PetsContext";
import { PetsState } from "./PetsProvider";

type PetsAction =
  | {
      type: "setPets";
      payload: Pet[];
    }
  | {
      type: "addPet";
      payload: Pet;
    };

export const PetsReducer = (
  state: PetsState,
  action: PetsAction
): PetsState => {
  switch (action.type) {
    case "setPets":
      return { isLoading: false, pets: action.payload };
    case "addPet":
      return { ...state, pets: [...state.pets, action.payload] };
  }
};
