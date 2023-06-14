import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Header/Navbar";
import Contact from "./component/Pages/Contact/Contact";
import Home from "./component/Pages/Home/Home";

import Footer from "./component/Footer/Footer";
import About from "./component/Pages/About/About";
import Service from "./component/Pages/Services/Service";
import Blog from "./component/Pages/Blogs/Blog";
import BlogData from "./component/Pages/Blogs/BlogData/BlogData";
import Carrier from "./component/Pages/carrier/Carrier";
import SidenavWidget from "../src/SideNavButton/Index";
import FormModal from "./component/UI/Modal/FormModal";
import Aboutdoctor from "./component/Pages/Aboutdoctor/Aboutdoctor";
import ServiceData from "./component/Pages/Services/Services/ServiceData/ServiceData";

function App() {
  const [navvisible, setnavVisible] = useState(window.innerWidth < 600 ? false : true );
  const closeNavBar = () => {
    if (window.innerWidth <= 600) {
      setnavVisible(false);
    } else {
      setnavVisible(true);
    }
  };
  const openNavBar = () => {
    setnavVisible(true);
  };

  // document.addEventListener("click", () => {
  //   window.scrollTo(0, 0);
  // });
  // document.addEventListener('click',()=>{
  //   http://localhost:3000/
  //   setnavVisible(false)
  // })


  // When the user scrolls down 20px from the top of the document, show the button
  // const [modal, setModal] = useState(false);

  // const contactButtonhandler = (event) => {
  //   event.preventDefault();
  //   setModal(true);
  // };
  return (
    <div>
      {/* {modal && (
        <FormModal
          onClick={() => {
            setModal(false);
          }}
        />
      )} */}
      <Navbar
        onClose={closeNavBar}
        onOpen={openNavBar}
        navvisible={navvisible}
      />
      {/* <SidenavWidget onClick={contactButtonhandler} /> */}


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/aboutdoctor" element={<Aboutdoctor />} />
        <Route path="/service" element={<Service />} />
        <Route path="/servicedata/:name/:id" element={<ServiceData />}/>
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blogdata/:blogname/:id" element={<BlogData />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/carrier" element={<Carrier />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
