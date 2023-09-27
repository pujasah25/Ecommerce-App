import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Product from "./pages/product/Product";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./app.scss";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Success from "./pages/success/Success";
import { useSelector } from "react-redux";

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
let user=false;
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
    ],
  },
  { path: "/success", element: <Success /> },
  { path: "/login", element: user ? <Navigate to="/" /> : <Login /> },
  { path: "/register", element: user ? <Navigate to="/" /> : <Register /> },
]);

function App() {
 
  // const user = useSelector((state) => state.user.currentUser);
  // console.log("User in App", user);
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
