import { Outlet } from "react-router-dom";
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
