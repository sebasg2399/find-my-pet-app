import { createContext } from "react";

export interface Pet {
  id: number;
  name: string;
  age: number;
  breed: string;
  color: string;
  address: string;
  sex: string;
  weight: number;
  photo_url: string;
}

type PetsContextProps = {
  isLoading: boolean;
  pets: Pet[];

  addPet: (body: Partial<Pet>) => void;
  findPet: (id: number) => Pet | undefined;
};

export const PetsContext = createContext<PetsContextProps>(
  {} as PetsContextProps
);
