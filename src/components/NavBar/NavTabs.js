import React from "react";
import "../../App.css";


function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className="mainHeader">
      <h1 className="headerName">Jackson Morris</h1>
      <ul className="nav">
        <li className="nav-item">
          <a
            href="#home"
            onClick={() => handlePageChange("Home")}
            className={
              currentPage === "Home" ? "nav-link active" : "nav-link"
            }
          >
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#projects"
            onClick={() => handlePageChange("Projects")}
            className={
              currentPage === "Projects" ? "nav-link active" : "nav-link"
            }
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#modelComments"
            onClick={() => handlePageChange("Model Comments")}
            className={
              currentPage === "Model Comments" ? "nav-link active" : "nav-link"
            }
          >
            Contact Me
          </a>
        </li>
        <li className="nav-item">
          <a href="contactJacksonAndModelingInfo"
            onClick={() => handlePageChange("Contact Jackson & Modeling Info")}
            className={
              currentPage === "Contact Jackson & Modeling Info" ? "nav-link active" : "nav-link"
            }
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavTabs;