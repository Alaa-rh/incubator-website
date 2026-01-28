import { Routes, Route } from "react-router-dom"
import LandingPage1 from "./pages/LandingPage1";
import LandingPage2 from "./pages/LandingPage2";
import MainPage from "./pages/Visitor/MainPage";
import SignupPage from "./pages/Auth/SignupPage";
import LoginPage from "./pages/Auth/LoginPage";
import ForgotPasswordPage from "./pages/Auth/ForgetPasswordPage";
import VerificationPage from "./pages/Auth/VerificationPage";
import NewPasswordPage from "./pages/Auth/NewPasswordPage";
import VolunteerForm from "./components/Forms/VolunteerForm";
import IdeaForm from "./components/Forms/IdeaForm";
import FavoritesPage from "./pages/Visitor/FavoritesPage";
import { FavoritesProvider } from "./components/FavoritesContext";
import ProjectsPage from "./pages/Visitor/ProjectsPage";
import ActivitiesPage from "./pages/Visitor/ActivitiesPage";
import MainLayout from "./components/Layout/MainLayout";
import WorkshopDetailsPage from "./pages/Visitor/WorkshopDetailsPage";
import NotificationsPage from "./pages/Visitor/NotificationsPage";
import UserNavbar from "./components/UserNavbar";

const VisitorNavOptions = [
  { label: " الرئيسية", to: "/mainpage", scrollId: "" }, 
  { label: "المشاريع", to: "/projectspage", scrollId: "" },
  { label: "النشاطات", to: "/activitiespage", scrollId: "" },
  { label: "المفضلة", to: "/favoritespage", scrollId: "" },
]
function App() {
  return (
    <>
    {/* <VolunteerForm /> */}
    {/* <IdeaForm /> */}
   <FavoritesProvider>
   <Routes>
      <Route path="/" element={<LandingPage1 />} />
      <Route path="/about" element={<LandingPage2 />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgetpassword" element={<ForgotPasswordPage />} />
      <Route path="/verification" element={<VerificationPage />} />
      <Route path="/newpassword" element={<NewPasswordPage />} />

      <Route element={<MainLayout header={<UserNavbar navOptions={VisitorNavOptions}/>} footer={null}/>}>
      <Route path="/mainpage" element={<MainPage />} />
      <Route path="/projectspage" element={<ProjectsPage />} />
      <Route path="/activitiespage" element={<ActivitiesPage />} />
      <Route path="/favoritespage" element={<FavoritesPage />} />
      </Route>

      <Route path="/workshops/:id" element={<WorkshopDetailsPage />} />
      <Route path="/notificationspage" element={<NotificationsPage />} />
    </Routes>
   </FavoritesProvider>
    </>
  )
}

export default App