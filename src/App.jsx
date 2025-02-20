import { Route,Routes } from "react-router-dom";
import Login from "./pages/login/login";
import Signup from "./pages/signup/Signup";
import VerifyOtp from "./pages/signup/verify-otp";
import Manager from "./pages/manager/Manager";

export default function App() {
  return (
    <div className="p-0 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/manager" element={<Manager />} />
      </Routes>
    </div>
  )
}