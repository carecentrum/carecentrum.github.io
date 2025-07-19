import { Outlet } from "@tanstack/react-router";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
