import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import "../../src/styling/index.css";

// * Layouts
import RootLayout from "../layouts/RootLayout";

// * Pages
import About from "../pages/About";
import CaseStudies from "../pages/CaseStudies";
import Blog from "../pages/Blog";
import Contacts from "../pages/Contacts";
import Culture from "../pages/Culture";
import Home from "../pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />}></Route>
      <Route path="about" element={<About />}></Route>
      <Route path="culture" element={<Culture />}></Route>
      <Route path="caseStudies" element={<CaseStudies />}></Route>
      <Route path="blog" element={<Blog />}></Route>
      <Route path="contacts" element={<Contacts />}></Route>
    </Route>
  )
);
const RootComponent = () => {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default RootComponent;
