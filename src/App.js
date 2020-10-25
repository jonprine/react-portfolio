import React, { useState } from "react";
// import Header from './components/Header';
import About from "./components/About";
import Nav from "./components/Nav";
import Gallery from "./components/Gallery";
import ContactForm from "./components/Contact";
import Resume from "./components/Resume";
import Footer from './components/Footer';

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [categories] = useState([
    {
      name: "portfolio",
      description: "Applications completed during the Full Stack course",
    },
    { name: "resume", description: "Resume" },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <Resume></Resume>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
