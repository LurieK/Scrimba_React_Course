import React from "react";
import ReactDOM from "react-dom/client";
import './styles.css';


function Header(){
  return (
    <nav className= "nav-bar">
      <img alt="logo img" src="React-icon.png" className="react-img" />
      <ul className="nav-list">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
      </ul>
    </nav>
  )

}

function List(){
  return (
    <div>
    <h1 className="list-header">Why I'm excited to learn React!</h1>
      <ol className="list">
        <li>It allows me to build cool things</li>
        <li>It is imperative</li>
      </ol>
    </div>
  )

}




function Footer (){
  return (
    <footer>
      <small>© 2023 Kimmerle development. All rights reserved.</small>
  </footer>

  )
}

function Page() {
  return (
    <div>
      <Header/>
      <List/>
      <Footer/>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Page />);
