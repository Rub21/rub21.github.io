import Navbar from "./components/Navbar";
import LeftSide from "./components/LeftSide";
import Image from "next/image";
import RightSide from "./components/RightSide";
import Banner from "./components/Banner";
import About from "./components/About";
import Experience from "./components/Experience";
import BigProjects from "./components/list-projects/ListProjects";
import SmallProjects from "./components/small-projects/SmallProjects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="h-[88vh] w-full mx-auto p-4">
      <Banner />
      <About />
      <Experience />
      <BigProjects />
      <SmallProjects />
      <Contact />
      <Footer />
    </div>
  );
}
