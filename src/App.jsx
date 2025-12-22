import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import ProductViewer from "./components/ProductViewer.jsx";
import gsap from "gsap"

import {ScrollTrigger, SplitText} from "gsap/all"

import ModelSwitcher from "./components/three/ModelSwitcher.jsx";
import ShowCase from "./components/ShowCase";
import Performance from "./components/Performance.jsx";
import Features from "./components/Features.jsx";
import Highlights from "./components/Highlights.jsx"
import Footer from "./components/Footer.jsx";

gsap.registerPlugin(ScrollTrigger)

const App = () => {


  return (
      <main>
        <Navbar/>
        <Hero/>
        <ProductViewer/>
        <ShowCase/>
        <Performance/>
        <Features/>
        <Highlights/>
        <Footer/>
      </main>
  )
}

export default App