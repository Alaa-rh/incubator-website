import { createContext, useState, useEffect} from "react";
export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (project) => {
    setFavorites((prev) => {
      const exists = prev.find((p) => p.id === project.id);
      return exists
        ? prev.filter((p) => p.id !== project.id)
        : [...prev, project];
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

