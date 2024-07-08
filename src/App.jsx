import React from "react";
import "./App.scss";

import Header from "./components/Header";
import WelcomeSection from "./components/WelcomeSection";
import Menu from "./components/Menu";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonials";

const App = () => {
  return (
    <div id="App">
      <Header />

      <WelcomeSection />
      <Menu />
      <AboutUs />
      <Testimonial />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
