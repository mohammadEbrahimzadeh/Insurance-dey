import React, { useEffect } from "react";
import NavBar from "./golobalComponents/NavBar/NavBar";
import Footer from "./golobalComponents/Footer/Footer";
import { useLocation, useRoutes } from "react-router-dom";
import routes from "./router";
import ScrollToTop from "./golobalComponents/ScrollButton/ScrollButton";
function App() {
  // console.log(process.env.PUBLIC_URL);
  const router = useRoutes(routes);
  const location = useLocation();
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
    });
  }, [location]);
  return (
    <>
      <ScrollToTop />
      <NavBar></NavBar>
      {router}
      <Footer></Footer>
    </>
  );
}

export default App;
