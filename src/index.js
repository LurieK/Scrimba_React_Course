import React from "react";
import ReactDOM from "react-dom/client";
import './styles.css';
import Header from "./Header"
import Footer from "./Footer"
import List from "./List"

function Page() {
  return (
    <div className="full-page">
      <Header/>
      <List/>
      <Footer/>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Page />);
