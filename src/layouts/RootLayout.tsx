import { Link, NavLink, Outlet } from "react-router-dom";
import myImage from "../assets/darajalogo.png";
import "../styling/rootlayout.css";
import "../styling/hamburger.css";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <div className="headerSection">
        <Link to={"/"}>
          <div className="imgContainer">
            <img src={myImage} alt="Daraja Logo" height={200} width={200} />
          </div>
        </Link>
        <header>
          <label className="hamburger-menu">
            {" "}
            <input type="checkbox" />{" "}
          </label>
          <nav className="nav-bar">
            <NavLink to={"about"}>About Us</NavLink>
            <NavLink to={"culture"}>Culture</NavLink>
            <NavLink to={"caseStudies"}>Case Studies</NavLink>
            <NavLink to={"blog"}>Blog</NavLink>
            <NavLink to={"contacts"} className={"chatlink"}>
              Chat
            </NavLink>
          </nav>
        </header>
      </div>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default RootLayout;
