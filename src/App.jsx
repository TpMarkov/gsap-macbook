import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import ProductViewer from "./components/ProductViewer.jsx";
import gsap from "gsap"

import {ScrollTrigger, SplitText} from "gsap/all"

import ModelSwitcher from "./components/three/ModelSwitcher.jsx";
import ShowCase from "./components/ShowCase";

gsap.registerPlugin(ScrollTrigger)

const App = () => {


  return (
      <main>
        <Navbar/>
        <Hero/>
        <ProductViewer/>
        <ShowCase/>
      </main>
  )
}

export default App