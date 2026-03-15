import AppRoutes from "./components/AppRoutes";
import { FavoritesProvider } from "./Context/FavoritesContext";
import { RoleProvider } from "./Context/RoleContext";

function App() {
  return (
    <RoleProvider>
      <FavoritesProvider>
        <AppRoutes />
      </FavoritesProvider>
    </RoleProvider>
  );
}

export default App;
