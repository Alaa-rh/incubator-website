import { Routes, Route } from "react-router-dom"
import LandingPage1 from "./pages/LandingPage1";
import LandingPage2 from "./pages/LandingPage2";
import MainPage from "./pages/MainPage";
import SignupPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import ForgotPasswordPage from "./pages/ForgetPasswordPage";
import VerificationPage from "./pages/VerificationPage";
import NewPasswordPage from "./pages/NewPasswordPage";
import VolunteerForm from "./components/Forms/VolunteerForm";
import IdeaForm from "./components/Forms/IdeaForm";
function App() {
  return (
    <>
    {/* <VolunteerForm /> */}
    {/* <IdeaForm /> */}
   <Routes>
      <Route path="/" element={<LandingPage1 />} />
      <Route path="/about" element={<LandingPage2 />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgetpassword" element={<ForgotPasswordPage />} />
      <Route path="/verification" element={<VerificationPage />} />
      <Route path="/newpassword" element={<NewPasswordPage />} />
   </Routes>
    </>
  )
}

export default App