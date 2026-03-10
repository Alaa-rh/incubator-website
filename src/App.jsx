// import { Routes, Route } from "react-router-dom"
// import LandingPage1 from "./pages/LandingPage1";
// import LandingPage2 from "./pages/LandingPage2";
// import VisitorMainPage from "./pages/Visitor/VisitorMainPage";
// import SignupPage from "./pages/Auth/SignupPage";
// import LoginPage from "./pages/Auth/LoginPage";
// import ForgotPasswordPage from "./pages/Auth/ForgetPasswordPage";
// import VerificationPage from "./pages/Auth/VerificationPage";
// import NewPasswordPage from "./pages/Auth/NewPasswordPage";
// import FavoritesPage from "./pages/Visitor/FavoritesPage";
// import { FavoritesProvider } from "./Context/FavoritesContext";
// import ProjectsPage from "./pages/Shared/ProjectsPage";
// import ActivitiesPage from "./pages/Shared/ActivitiesPage";
// import MainLayout from "./components/Layout/MainLayout";
// import WorkshopDetailsPage from "./pages/Shared/WorkshopDetailsPage";
// import NotificationsPage from "./pages/Shared/NotificationsPage";
// import MessagesPage from "./pages/Shared/MessagesPage";
// import UserNavbar from "./components/UserNavbar";
// import ProjectDetailsPage from "./pages/Shared/ProjectDetailsPage";
// import IdeaFormPage from "./pages/Shared/IdeaFormPage";
// import VolunteerFormPage from "./pages/Shared/VolunteerFormPage";
// import ProfileInfoPage from "./pages/IdeaOwner/ProfileInfoPage";
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
