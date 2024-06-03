import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SingIn from "./pages/SingIn";
import SingUp from "./pages/SingUp";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import UserProfile from "./pages/UserProfile";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sing-in" element={<SingIn />} />
        <Route path="/sing-up" element={<SingUp />} />
        <Route element={<PrivateRoute />}>
          <Route path="/user-profile" element={<UserProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
