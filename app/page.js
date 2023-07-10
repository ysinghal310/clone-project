import styles from "./page.module.css";
import GlobalBar from "./components/GlobalBar/GlobalBar";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import ProgramSection from "./components/ProgramSection/ProgramSection";
import StemProgram from "./components/StemProgram/StemProgram";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <GlobalBar />
      <Navbar />
      <HeroSection />
      <ProgramSection />
      <StemProgram />
      <Footer />
    </main>
  );
}
