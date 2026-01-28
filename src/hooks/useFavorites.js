import { useContext } from "react";
import { FavoritesContext } from "../components/FavoritesContext";

export const useFavorites = () => useContext(FavoritesContext);
