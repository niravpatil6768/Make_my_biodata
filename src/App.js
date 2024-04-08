import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Otppage from "./components/OTPpage";
import NewPassword from "./components/newPassword";
import ForgetPassword from "./components/forgetPassword";
import ChangedPassword from "./components/changedPassword.js";

function App() {
  return (
    // <div className="App">
    //   <Login/>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/otp" element={<Otppage />} />
        <Route path="/resetpassword" element={<NewPassword />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/changedpassword" element={<ChangedPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
