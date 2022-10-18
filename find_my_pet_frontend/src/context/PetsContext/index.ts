import { useContext } from "react";
import { PetsContext } from "./PetsContext";

export { PetsProvider } from "./PetsProvider";

export const usePets = () => useContext(PetsContext);
