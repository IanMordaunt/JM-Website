import React, { useState } from "react";
import NavTabs from "./NavBar/NavTabs";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import ModelComments from "../pages/ModelComments"
import ContactModelInfo from "../pages/Contact-ModelInfo";


import "../App.css";

export default function WebsiteContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "Projects") {
      return <Projects />;
    }
    if (currentPage === "Model Comments") {
      return <ModelComments />;
    }
    return <ContactModelInfo />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="mainPage">
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}