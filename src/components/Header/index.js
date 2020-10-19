import React, { useState }from "react";
import Nav from "../Nav";
import About from "../About";
import Projects from "../Projects";
import Contact from "../Contact";
// import Resume from "../Resume";

function Portfolio() {
  const [currentPage, handlePageChange] = useState("About");

  const renderPage = () => {
    switch (currentPage) {
      case "about":
        return <About></About>;
      case "contact":
        return <Contact></Contact>;
      case "portfolio":
        return <Projects></Projects>;
      default:
        return <About></About>;
    }
  };

  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>{renderPage()}</div>
    </div>
  );
}

export default Portfolio;
