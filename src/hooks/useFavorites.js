import { useContext } from "react";
import { FavoritesContext } from "../Context/FavoritesContext";

export const useFavorites = () => useContext(FavoritesContext);
