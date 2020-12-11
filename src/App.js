import React, { useState } from "react";
import "./App.css";

import Header from "./components/header.js";
import Slides from "./components/slides.js";
import AboutUs from "./components/aboutUs.js";
import Gallery from "./components/gallery.js";
import Contact from "./components/contact.js";
import Modal from "./components/modal.js";
import MobileNav from "./components/mobileNav.js";

function App() {
  const [modal, setModal] = useState({ active: 0, src: null, type: "image" });
  const [burger, setBurger] = useState({ active: false });
  return (
    <div className="master-container">
      <Header burger={burger} setBurger={setBurger} active={burger.active} />
      <Slides />
      <AboutUs />
      <Gallery modal={modal} setModal={setModal} />
      <Contact />
      <Modal
        modal={modal}
        setModal={setModal}
        type={modal.type}
        active={modal.active}
        src={modal.src}
      />
      <MobileNav burger={burger} setBurger={setBurger} active={burger.active} />
    </div>
  );
}

export default App;
