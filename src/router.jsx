import Home from "./Pages/Home/Home";
import InsurancesPage from "./Pages/InsurancesPage/InsurancesPage";
import ProductInsurances from "./Pages/ProductInsurances/ProductInsurances";
import DeyAtGlance from "./Pages/DeyAtGlance/DeyAtGlance";
import Customers from "./Pages/Customers/Customers";
import ContactUs from "./Pages/ContactUs/ContactUs";
const routes = [
  { path: "/", element: <Home /> },
  { path: "/home", element: <Home /> },
  { path: "/insurances/:idCategory", element: <InsurancesPage /> },
  { path: "/ProductInsurances/:idProductUrl", element: <ProductInsurances /> },
  { path: "/dey-at-glance", element: <DeyAtGlance /> },
  { path: "/Customers", element: <Customers /> },
  { path: "/ContactUs", element: <ContactUs /> },
  { path: "*", element: <Home /> },
];
export default routes;
