import { Link, NavLink, Outlet } from "react-router-dom";
// import { Outlet } from "react-router-dom";
import myImage from "../assets/PhotoShot_1710670139026.jpeg";
import { RiGroupFill } from "react-icons/ri";
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
      {/* <div className="headerSection"> */}
      {/* <Link to={"/"}>
          <div className="logoContainerRoot">
            <RiGroupFill fill="var(--primary)" fontSize={"2rem"} />
            <div className="imgContainer">
              <img src={myImage} alt="Daraja Logo" height={200} width={200} />
            </div>
          </div>
        </Link> */}
      {/* <header>
          <label className="hamburger-menu">
            {" "}
            <input type="checkbox" id="checkbox" />{" "}
          </label>
          <nav className="nav-bar">
            <NavLink to={"/"} className={"links"}>
              <Link to={"/"}>
                <div className="logoContainerRoot">
                  <RiGroupFill fill="var(--primary)" fontSize={"2rem"} />
                  <div className="imgContainer">
                    <img
                      src={myImage}
                      alt="Daraja Logo"
                      height={200}
                      width={200}
                    />
                  </div>
                </div>
              </Link>
            </NavLink>
            <NavLink to={"/"} className={"links"}>
              Home
            </NavLink>
            <NavLink to={"about"} className={"links"}>
              About Us
            </NavLink>
            <NavLink to={"culture"} className={"links"}>
              Culture
            </NavLink>
            <NavLink to={"caseStudies"} className={"links"}>
              Case Studiess
            </NavLink>

            <NavLink to={"contacts"} className={"chatlink links"}>
              Chat
            </NavLink>
          </nav>
        </header> */}
      {/* </div> */}

      <main className="main">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default RootLayout;
