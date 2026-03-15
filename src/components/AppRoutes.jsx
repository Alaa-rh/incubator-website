import { Routes, Route } from "react-router-dom";
import { useRole } from "../hooks/useRole";

import DashboardLayout from "./layout/DashboardLayout";

import LandingPage1 from "../pages/LandingPage1";
import LandingPage2 from "../pages/LandingPage2";
import SignupPage from "../pages/Auth/SignupPage";
import LoginPage from "../pages/Auth/LoginPage";
import ForgotPasswordPage from "../pages/Auth/ForgetPasswordPage";
import VerificationPage from "../pages/Auth/VerificationPage";
import NewPasswordPage from "../pages/Auth/NewPasswordPage";

import ProjectDetailsPage from "../pages/Shared/ProjectDetailsPage";
import WorkshopDetailsPage from "../pages/Shared/WorkshopDetailsPage";

import IdeaFormPage from "../pages/Shared/IdeaFormPage";
import VolunteerFormPage from "../pages/Shared/VolunteerFormPage";

import MainLayout from "./Layout/MainLayout";
import UserNavbar from "./UserNavbar";
import { navOptions } from "../config/NavOptions";

import VisitorMainPage from "../pages/Visitor/VisitorMainPage";
import ProjectsPage from "../pages/Shared/ProjectsPage";
import ActivitiesPage from "../pages/Shared/ActivitiesPage";
import FavoritesPage from "../pages/Visitor/FavoritesPage";
import NotificationsPage from "../pages/Shared/NotificationsPage";
import MessagesPage from "../pages/Shared/MessagesPage";

import ProfileInfoPage from "../pages/IdeaOwner/ProfileInfoPage";

import ProfilePage from "../pages/Shared/ProfilePage";
import ContactPage from "../pages/Shared/ContactPage";
import SettingsPage from "../pages/Shared/SettingsPage";
import ChangePasswordPage from "../pages/Shared/ChangePasswordPage";

import ConsultantsPage from "../pages/IdeaOwner/ConsultantsPage";
import ConsultantsListPage from "../pages/IdeaOwner/ConsultantsListPage";
import TeamPage from "../pages/IdeaOwner/TeamPage";
import IdeaOwnerMainPage from "../pages/IdeaOwner/IdeaOwnerMainPage";
import TeamRequestPage from "../pages/IdeaOwner/TeamRequestPage";
import IncubationStagesPage from "../pages/IdeaOwner/IncubationStagesPage";
import VolunteerCenterPage from "../pages/Volunteer/VolunteerCenterPage";
import VolunteerMainPage from "../pages/Volunteer/VolunteerMainPage";
import VolunteerRequestsPage from "../pages/Volunteer/VolunteerRequestsPage";
import ScheduleManagementPage from "../pages/Volunteer/ScheduleManagementPage";
import AddWorkshopPage from "../pages/Volunteer/AddWorkshopPage";
import AssignedProjectsPage from "../pages/Volunteer/AssignedProjectsPage";
import WorkshopsPage from "../pages/Volunteer/WorkshopsPage";
import WorkshopInfoPage from "../pages/Volunteer/WorkshopInfoPage";
import VolunteerRequestDetailsPage from "../pages/Volunteer/VolunteerRequestDetailsPage";
import EditVolunteerProfilePage from "../pages/Volunteer/EditVolunteerProfilePage";
import ProjectInfoPage from "../pages/Volunteer/ProjectInfoPage";
import IncubationInfoPage from "../pages/Incubation/IncubationInfoPage";
const AppRoutes = () => {
  const { role } = useRole();

  return (
    <Routes>

      {/* Landing Routes */}
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

      {/* Visitor Main Layout */}
      {role === "visitor" &&
      <Route element={<MainLayout header={<UserNavbar navOptions={navOptions["visitor"]} />} footer={null} />}>
        <Route path="/visitor-mainpage" element={<VisitorMainPage />} />
        <Route path="/projectspage" element={<ProjectsPage />} />
        <Route path="/activitiespage" element={<ActivitiesPage />} />
        <Route path="/favoritespage" element={<FavoritesPage />} />
        <Route path="/notificationspage" element={<NotificationsPage />} />
        <Route path="/messagespage" element={<MessagesPage />} />
      </Route>
}
      {/* Profile Info */}
      <Route path="/profileinfo" element={<ProfileInfoPage />} />

      {/* Visitor Dashboard */}
      {role === "visitor" && (
        <Route element={<DashboardLayout role="visitor" userName="أسماء محمد" email="assmaa@example.com" />}>
          <Route path="/profile" element={<ProfilePage userName={"أسماء محمد"} email={"assmaa@example.com"}/>} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/change-password" element={<ChangePasswordPage />} />
        </Route>
      )}
      {/*ideaOwner Main Layout*/}
      {role === "ideaOwner" &&
      <Route element={<MainLayout header={<UserNavbar navOptions={navOptions["ideaOwner"]} footer={null}/>} />}>
        <Route path="/ideaowner-mainpage" element={<IdeaOwnerMainPage />} />
        <Route path="/projectspage" element={<ProjectsPage />} />
        <Route path="/activitiespage" element={<ActivitiesPage />} />
        <Route path="/notificationspage" element={<NotificationsPage />} />
        <Route path="/messagespage" element={<MessagesPage />} /> 
        <Route path="/incubation-stages" element={<IncubationStagesPage />} />
      </Route>
}
       <Route path="/TeamRequestPage" element={<TeamRequestPage />} />
       <Route path="/consultantslist/:categoryId" element={<ConsultantsListPage />} />
      {/* Idea Owner Dashboard */}
      {role === "ideaOwner" && (
        <Route element={<DashboardLayout role="ideaOwner" userName="مريم أحمد" email="maryam@example.com" />}>
          <Route path="/profile" element={<ProfilePage userName="مريم أحمد" email="maryam@example.com"/>} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/change-password" element={<ChangePasswordPage />} />
          <Route path="/consultants" element={<ConsultantsPage />} />
          <Route path="/team" element={<TeamPage />} />
        </Route>
      )}
      {/* Volunteer Dashboard */}
      {role === "volunteer" && (
        <Route element={<DashboardLayout role="volunteer" userName="مايا محمد" email="maya@example.com" />}>
          <Route path="/volunteer-profile" element={<EditVolunteerProfilePage/>} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/change-password" element={<ChangePasswordPage />} />
          <Route path="/volunteer-center" element={<VolunteerCenterPage />} />
        </Route>
      )}

      {/*Volunteer Main Layout*/}
      {role === "volunteer" &&
      <Route element={<MainLayout header={<UserNavbar navOptions={navOptions["volunteer"]} footer={null}/>} />}>
        <Route path="/volunteer-mainpage" element={<VolunteerMainPage />} />
        <Route path="/projectspage" element={<ProjectsPage />} />
        <Route path="/activitiespage" element={<ActivitiesPage />} />
        <Route path="/notificationspage" element={<NotificationsPage />} />
        <Route path="/messagespage" element={<MessagesPage />} />
        </Route>
        }
          <Route path="/volunteer-request/:id" element={<VolunteerRequestDetailsPage />} />
          <Route path="/requests-page" element={<VolunteerRequestsPage />} />
          <Route path="/schedule-page" element={<ScheduleManagementPage />} />
          <Route path="/workshop-page" element={<WorkshopsPage />} />
          <Route path="AddworkshopPage" element={<AddWorkshopPage />} />
          <Route path="/workshopinfo/:id" element={<WorkshopInfoPage />} />
          <Route path="/assigned-projects-page" element={<AssignedProjectsPage />} />
          <Route path="/projectinfo/:id" element={<ProjectInfoPage />} />
          <Route path="/incubationinfo" element={<IncubationInfoPage />} />
    </Routes>
  );
};

export default AppRoutes;
