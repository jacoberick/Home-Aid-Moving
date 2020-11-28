import "./App.css";

import Header from "./components/header.js";
import Slides from "./components/slides.js";
import AboutUs from "./components/aboutUs.js";
import Gallery from "./components/gallery.js";

function App() {
  return (
    <div className="master-container">
      <Header />
      <Slides />
      <AboutUs />
      <Gallery />
    </div>
  );
}

export default App;
