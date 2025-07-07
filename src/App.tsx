import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import PriceSection from "./components/PriceSection";
import ServicesSection from "./components/ServicesSection";

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      <ServicesSection />
      <AboutSection />
      <PriceSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
