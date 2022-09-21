import React from "react";
import WebsiteContainer from "./components/WebsiteContainer";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <>
      <div className="page-container">
        <div className="inside">
          <WebsiteContainer />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
