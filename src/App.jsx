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
import ProjectsPage from "./pages/Shared/ProjectsPage";
import ActivitiesPage from "./pages/Shared/ActivitiesPage";
import MainLayout from "./components/Layout/MainLayout";
import WorkshopDetailsPage from "./pages/Shared/WorkshopDetailsPage";
import NotificationsPage from "./pages/Shared/NotificationsPage";
import MessagesPage from "./pages/Shared/MessagesPage";
import UserNavbar from "./components/UserNavbar";
import Sidebar from "./components/Sidebar";
import DashboardLayout from "./components/Layout/DashboardLayout";
import ProfilePage from "./pages/Shared/ProfilePage";
import ContactPage from "./pages/Shared/ContactPage";
import SettingsPage from "./pages/Shared/SettingsPage";
import ChangePasswordPage from "./pages/Shared/ChangePasswordPage";
import ProjectDetailsPage from "./pages/Shared/ProjectDetailsPage";
import IdeaFormPage from "./pages/Shared/IdeaFormPage";
import VolunteerFormPage from "./pages/Shared/VolunteerFormPage";

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
      <Route path="/ProjectDetails/:id" element={<ProjectDetailsPage />} />
      <Route path="/workshops/:id" element={<WorkshopDetailsPage />} />
      <Route path="/ideaform" element={<IdeaFormPage />} />
      <Route path="/volunteerform" element={<VolunteerFormPage />} />

       {/* visitor routes */}
      <Route element={<MainLayout header={<UserNavbar navOptions={VisitorNavOptions}/>} footer={null}/>}>
      <Route path="/mainpage" element={<MainPage />} />
      <Route path="/projectspage" element={<ProjectsPage />} />
      <Route path="/activitiespage" element={<ActivitiesPage />} />
      <Route path="/favoritespage" element={<FavoritesPage />} /> 
      <Route path="/notificationspage" element={<NotificationsPage />} />
      <Route path="/messagespage" element={<MessagesPage />} />
      </Route>

      {/*visitor settings routes */}
      <Route element={<DashboardLayout role="visitor" userName="أسماء محمد" email="assmaa@example.com"/>}>
      <Route path="/profile" element={<ProfilePage userName="أسماء محمد" email="assmaa@example.com"/>} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/change-password" element={<ChangePasswordPage />} /> 
  
    </Route>
    </Routes>
   </FavoritesProvider>
    
    </>
  )
}

export default App