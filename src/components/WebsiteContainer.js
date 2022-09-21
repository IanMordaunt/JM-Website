import React, { useState } from "react";
import NavTabs from "./NavBar/NavTabs";
import Home from "../pages/Home";
import Projects from "../pages/Projects";

import Contact from "./pages/Contact";


import "../App.css";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About Me");

  const renderPage = () => {
    if (currentPage === "About Me") {
      return <Home />;
    }
    if (currentPage === "Portfolio") {
      return <Projects />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="mainPage">
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}