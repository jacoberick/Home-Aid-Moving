import "./App.css";

import Header from "./components/header.js";
import Slides from "./components/slides.js";
import AboutUs from "./components/aboutUs.js";
import Gallery from "./components/gallery.js";
import Contact from "./components/contact.js";

function App() {
  return (
    <div className="master-container">
      <Header />
      <Slides />
      <AboutUs />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
