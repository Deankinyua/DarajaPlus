// import { Link, NavLink, Outlet } from "react-router-dom";
import { Outlet } from "react-router-dom";
// import myImage from "../assets/PhotoShot_1710670139026.jpeg";
// import { RiGroupFill } from "react-icons/ri";
import "../styling/rootlayout.css";
import "../styling/hamburger.css";
import { useEffect } from "react";

const RootLayout = () => {
  useEffect(() => {
    const myCheckBox = document.getElementById("checkbox") as HTMLInputElement;
    const navBarLinks = document.querySelectorAll(".links");

    navBarLinks.forEach((link) => {
      link.addEventListener("click", () => {
        myCheckBox.checked = false;
      });
    });
  }, []);
  return (
    <div className="root-layout">
      <main className="main">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default RootLayout;
