import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import TrendyPlants from "./sections/TrendyPlants";
import TopSelling from "./sections/TopSelling";
import CustomerReview from "./sections/CustomerReview";
import BestO2 from "./sections/BestO2";
import Footer from "./sections/Footer";
import Plant2 from "./assets/plant2.png";

function App() {
  return (
    <div className="bg-[#071207] text-white font-sans">
    
      <div className="relative">
        {/* Big background plant — covers both hero and trendy sections */}
        <img
          src={plant2}
          alt="background plant"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-60 pointer-events-none"
        />

        {/* Dark overlay on top of background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#0d2b0d60_0%,_#071207f0_65%)] pointer-events-none" />

        {/* These two sections sit above the shared background */}
        <div className="relative z-10">
          <Navbar />
          <HeroSection />
          <TrendyPlants />
        </div>
      </div>

      
      <TopSelling />
      <CustomerReview />
      <BestO2 />
      <Footer />
    </div>
  );
}

export default App;
