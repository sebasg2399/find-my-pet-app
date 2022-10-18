import { createContext } from "react";

export interface Photo {
  id: number,
  description: string,
  img_url: string
}

export interface Pet {
  id: number;
  name: string;
  age: number;
  breed: string;
  color: string;
  album: Photo[]
}

type PetsContextProps = {
  isLoading: boolean;
  pets: Pet[];
};

export const PetsContext = createContext<PetsContextProps>(
  {} as PetsContextProps
);
