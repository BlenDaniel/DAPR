import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./renderer/views/authorization/login/Login";
import Register from "./renderer/views/authorization/register/Register";
import { useEffect } from "react";
import Index from "./renderer/views/index/Index";
import About from "./renderer/views/aboutus/About";
import Contact from "./renderer/views/contactus/Contact";
import { useCoverStore } from "./State";
import AuthService from "./services/auth/AuthService";
import EventBus from "./utils/EventBus";
import CoverLetter from "./renderer/views/coverletter/CoverLetter";

function App() {
  const { setCurrentUser , onLogout } = useCoverStore();
  useEffect(() => {
    const user = AuthService.getCurrentUser();
    setCurrentUser(user);
    EventBus.on("logout", onLogout);
  }, []);



  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<Index />} />
          <Route path="/home/coverletter/*" element={<CoverLetter />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
